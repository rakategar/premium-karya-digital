import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import heroImg from "@/assets/hero-main.jpg";
import workshop from "@/assets/upload-workshop-jahit.jpg";
import p1 from "@/assets/upload-kaos-neglasari.jpg";
import p2 from "@/assets/upload-polo-navy.jpg";
import p3 from "@/assets/upload-sablon-emas.jpg";
import p5 from "@/assets/upload-rompi-hijau.jpg";
import p6 from "@/assets/upload-packing-bunga.jpg";
import p10 from "@/assets/upload-batik-pack.jpg";
import { categories, buildWhatsAppUrl } from "@/lib/products";
import { ClientMarquee } from "@/components/ClientMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fauzi Design — Custom Apparel Premium untuk Brand & Komunitas" },
      { name: "description", content: "Produksi custom kaos, kemeja PDH, jersey, seragam, jaket, hoodie, polo, dan souvenir. Kualitas premium, konsultasi gratis, respons cepat via WhatsApp." },
      { property: "og:title", content: "Fauzi Design — Custom Apparel Premium" },
      { property: "og:description", content: "Konveksi custom premium untuk komunitas, perusahaan, sekolah, dan event." },
    ],
  }),
  component: Index,
});

const TRUST = ["Free Konsultasi", "Free Desain", "MOQ 12 PCS", "Respons Cepat", "Produksi Profesional"];

const FEATURES = [
  { t: "Kualitas Produksi Terjaga", d: "Quality control ketat di setiap tahap, dari kain hingga finishing." },
  { t: "Konsultasi Ramah & Cepat", d: "Tim kami siap merespon kebutuhan Anda dengan cepat dan jelas." },
  { t: "Cocok untuk Komunitas & Korporat", d: "Berpengalaman menangani order komunitas, perusahaan, dan event besar." },
  { t: "Custom Sesuai Kebutuhan", d: "Bahan, warna, desain, dan finishing dapat disesuaikan secara fleksibel." },
  { t: "Proses Jelas & Profesional", d: "Brief, mockup, konfirmasi, produksi, hingga pengiriman dilakukan terstruktur." },
  { t: "Minim Revisi, Maksimal Hasil", d: "Detail teknis dipastikan di awal agar hasil akhir sesuai ekspektasi." },
];

const PORTFOLIO = [
  { img: p1, label: "Kaos Hitam Komunitas Neglasari", cat: "Kaos" },
  { img: p2, label: "Polo Lengan Panjang Navy Sekretariat", cat: "Polo" },
  { img: p3, label: "Sablon Manual Logo Emas Massal", cat: "Sablon" },
  { img: p6, label: "Packing Tas Souvenir Bunga Tosca", cat: "Souvenir" },
  { img: p5, label: "Rompi Tactical Hijau Bordir Arab", cat: "Rompi" },
  { img: p10, label: "Produksi Massal Seragam Batik", cat: "Seragam" },
];

function Index() {
  const wa = buildWhatsAppUrl("Halo Fauzi Design, saya tertarik konsultasi gratis untuk proyek custom apparel.");

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden grain">
        <img src={heroImg} alt="Fauzi Design custom apparel" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

        <div className="container-edge relative pb-16 pt-32 md:pb-24 w-full">
          <p className="label-tag mb-4">[Custom Apparel · Indonesia]</p>
          <h1 className="font-display text-[14vw] md:text-[7.5vw] xl:text-[110px] leading-[0.88] uppercase max-w-5xl">
            Bukan sekadar <br />
            <span className="text-stroke">seragam</span> —<br />
            ini identitas.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Fauzi Design memproduksi custom apparel premium untuk komunitas, perusahaan, sekolah, dan event.
            Konsultasi gratis, hasil profesional, respons cepat via WhatsApp.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/katalog" search={{ cat: undefined }} className="btn-tag btn-tag-primary">
              Lihat Katalog <ArrowUpRight size={14} />
            </Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-tag btn-tag-whatsapp">
              <WhatsAppIcon size={14} /> Konsultasi Gratis
            </a>
          </div>

        </div>
      </section>

      {/* CLIENT LOGOS */}
      <ClientMarquee />

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-surface/50">
        <div className="container-edge py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {TRUST.map((t) => (
            <div key={t} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <Check size={14} className="text-neon" />
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-edge py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="label-tag mb-3">[Kategori Produk]</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] uppercase max-w-2xl">
              Apa pun produk Anda, <span className="text-stroke">kami buat.</span>
            </h2>
          </div>
          <Link to="/katalog" search={{ cat: undefined }} className="btn-tag btn-tag-ghost self-start">
            Lihat Semua <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {categories.map((c, i) => (
            <Link
              to="/katalog"
              search={{ cat: c.name }}
              key={c.name}
              className="group relative aspect-[3/4] overflow-hidden bg-surface hover-lift"
            >
              <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">[{String(i+1).padStart(2,"0")}]</span>
                <div>
                  <p className="font-mono text-[10px] text-neon tracking-widest uppercase">[{c.count} Produk]</p>
                  <h3 className="font-display text-xl md:text-2xl uppercase mt-1">{c.name}</h3>
                  <span className="block h-px bg-foreground/30 mt-2 w-8 group-hover:w-full group-hover:bg-neon transition-all duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-surface/30 border-y border-border">
        <div className="container-edge py-20 md:py-32 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="label-tag mb-3">[Mengapa Fauzi Design]</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] uppercase">
              Dipercaya brand, komunitas, & korporat di seluruh <span className="text-stroke">Indonesia.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Kami bukan vendor biasa. Kami partner produksi yang memahami detail, deadline, dan reputasi brand Anda.
            </p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-tag btn-tag-whatsapp mt-8">
              <WhatsAppIcon size={14} /> Mulai Proyek
            </a>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {FEATURES.map((f, i) => (
              <div key={f.t} className="border border-border bg-background p-6 hover:border-neon transition-colors">
                <p className="font-mono text-[10px] text-neon">[0{i+1}]</p>
                <h3 className="font-display text-lg uppercase mt-2 leading-tight">{f.t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="container-edge py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="label-tag mb-3">[Portfolio]</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] max-w-2xl">
              Hasil nyata, <br /><span className="text-stroke">brand sungguhan.</span>
            </h2>
          </div>
          <Link to="/galeri" className="btn-tag btn-tag-ghost self-start">
            Lihat Galeri Lengkap <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {PORTFOLIO.map((p, i) => (
            <div key={i} className={`relative overflow-hidden group ${i === 0 || i === 4 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"}`}>
              <img src={p.img} alt={p.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition">
                <p className="font-mono text-[10px] text-neon">[{p.cat}]</p>
                <p className="font-display text-base md:text-lg uppercase">{p.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSHOP */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <img src={workshop} alt="Workshop produksi" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="container-edge relative">
          <p className="label-tag mb-3">​</p>
          <p className="max-w-md text-lg md:text-xl text-muted-foreground leading-relaxed">
            Di Kerjakan Oleh Tenaga Profesional Yang Sudah Berpengalaman di Bidangnya.
          </p>
          <Link to="/tentang-kami" className="btn-tag btn-tag-outline mt-8">
            Pelajari Proses Produksi <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container-edge py-20 md:py-32">
        <div className="relative bg-neon text-background overflow-hidden">
          <div className="grain absolute inset-0" />
          <div className="relative p-10 md:p-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest mb-3 opacity-70">[Mulai Proyek Anda]</p>
              <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95]">
                Punya ide?<br />Kami siap eksekusi.
              </h2>
            </div>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-5 font-mono text-xs uppercase tracking-widest hover:bg-background/80 transition" style={{ clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)" }}>
                <WhatsAppIcon size={16} /> Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
