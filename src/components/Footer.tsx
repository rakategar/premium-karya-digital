import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Instagram, Mail, MapPin, Music2 } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsAppUrl } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 mt-24">
      <div className="container-edge py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <Logo />
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Produksi custom apparel premium untuk komunitas, perusahaan, sekolah, event, dan organisasi.
              Konsultasi gratis, hasil profesional.
            </p>
            <a
              href={buildWhatsAppUrl("Halo Fauzi Design, saya ingin memulai proyek custom.")}
              target="_blank" rel="noopener noreferrer"
              className="btn-tag btn-tag-whatsapp mt-6"
            >
              <WhatsAppIcon size={14} /> Mulai Proyek
            </a>
          </div>

          <div>
            <p className="label-tag mb-4">[Navigasi]</p>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", l: "Beranda" },
                { to: "/katalog", l: "Katalog" },
                { to: "/tentang-kami", l: "Tentang Kami" },
                { to: "/galeri", l: "Galeri" },
                { to: "/kontak", l: "Kontak" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-muted-foreground hover:text-neon transition-colors">
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-tag mb-4">[Kontak]</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1" style={{ color: "#25D366" }}><WhatsAppIcon size={14} /></span> +62 889-9112-5343</li>
              <li className="flex items-start gap-2"><Mail size={14} className="mt-1 text-neon shrink-0" /><span className="break-all">fauzidesignindonesia@gmail.com</span></li>
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-neon" /> Workshop Produksi · Indonesia</li>
              <li className="flex items-start gap-2"><Instagram size={14} className="mt-1 text-neon" /> @fauzidesign.id</li>
              <li className="flex items-start gap-2"><Music2 size={14} className="mt-1 text-neon" /> TikTok: @fauzidesign.id</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Fauzi Design. All rights reserved.</p>
          <p>Custom Apparel · Workshop Produksi · Konsultasi Gratis</p>
        </div>
      </div>
    </footer>
  );
}
