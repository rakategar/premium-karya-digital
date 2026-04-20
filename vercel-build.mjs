/**
 * Vercel Build Output API adapter for TanStack Start
 * Restructures dist/ → .vercel/output/ format
 */
import { execSync } from "child_process";
import { cpSync, mkdirSync, writeFileSync, existsSync, rmSync } from "fs";
import { resolve } from "path";

const root = process.cwd();
const distDir = resolve(root, "dist");
const vercelOut = resolve(root, ".vercel/output");

// 1. Run the actual build
console.log("🔨 Building TanStack Start app...");
execSync("npm run build", { stdio: "inherit" });

// 2. Clean and create .vercel/output structure
if (existsSync(vercelOut)) rmSync(vercelOut, { recursive: true });
mkdirSync(`${vercelOut}/functions/index.func`, { recursive: true });
mkdirSync(`${vercelOut}/static`, { recursive: true });

// 3. Copy static client assets
const clientDir = resolve(distDir, "client");
if (existsSync(clientDir)) {
  cpSync(clientDir, `${vercelOut}/static`, { recursive: true });
  console.log("✅ Copied client assets to .vercel/output/static");
} else {
  console.warn("⚠️  No dist/client found, skipping static copy");
}

// 4. Copy server entry to function
const serverDir = resolve(distDir, "server");
if (existsSync(serverDir)) {
  cpSync(serverDir, `${vercelOut}/functions/index.func`, { recursive: true });
  console.log("✅ Copied server to .vercel/output/functions/index.func");
} else {
  throw new Error("❌ No dist/server found! Build may have failed.");
}

// 5. Write function config (.vc-config.json)
writeFileSync(
  `${vercelOut}/functions/index.func/.vc-config.json`,
  JSON.stringify({
    runtime: "nodejs20.x",
    handler: "index.js",
    launcherType: "Nodejs",
    shouldAddHelpers: true,
  }, null, 2)
);

// 6. Write top-level Vercel output config
writeFileSync(
  `${vercelOut}/config.json`,
  JSON.stringify({
    version: 3,
    routes: [
      // Static assets pass-through
      {
        src: "^/assets/(.*)$",
        dest: "/assets/$1",
      },
      // All other routes → SSR function
      {
        src: "^/(.*)$",
        dest: "/index",
      },
    ],
  }, null, 2)
);

console.log("✅ .vercel/output structure created successfully!");
console.log("📁 Structure:");
console.log("   .vercel/output/config.json");
console.log("   .vercel/output/static/       ← client assets");
console.log("   .vercel/output/functions/    ← SSR handler");
