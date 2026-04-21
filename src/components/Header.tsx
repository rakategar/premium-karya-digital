import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsAppUrl } from "@/lib/products";

const NAV = [
  { to: "/", label: "Beranda" },
  { to: "/katalog", label: "Katalog" },
  { to: "/tentang-kami", label: "Tentang Kami" },
  { to: "/galeri", label: "Galeri" },
  { to: "/kontak", label: "Kontak" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = buildWhatsAppUrl("Halo Fauzi Design, saya ingin konsultasi produksi custom apparel.");

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-edge flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors relative group"
              activeProps={{ className: "!text-foreground" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tag btn-tag-whatsapp"
            >
              <WhatsAppIcon size={14} />
              Konsultasi WhatsApp
            </a>
          </div>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container-edge py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-foreground hover:text-neon transition-colors"
                activeProps={{ className: "!text-neon" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tag btn-tag-whatsapp mt-2 self-start"
            >
              <WhatsAppIcon size={14} />
              Konsultasi WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
