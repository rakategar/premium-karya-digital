import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsAppUrl } from "@/lib/products";

export function FloatingWA() {
  return (
    <a
      href={buildWhatsAppUrl("Halo Fauzi Design, saya ingin konsultasi produksi custom apparel.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-40 group"
    >
      <span className="absolute inset-0 rounded-full blur-xl transition" style={{ background: "rgba(37,211,102,0.3)" }} />
      <span className="relative flex items-center gap-2 pl-4 pr-5 py-3 rounded-full font-mono text-xs uppercase tracking-widest font-bold shadow-2xl hover:scale-105 transition" style={{ background: "#25D366", color: "#fff" }}>
        <WhatsAppIcon size={18} />
        <span className="hidden sm:inline">Chat WhatsApp</span>
      </span>
    </a>
  );
}
