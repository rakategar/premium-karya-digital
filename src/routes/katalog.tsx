import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { products, categories, buildWhatsAppUrl, productInquiryMessage, type Product } from "@/lib/products";
import { ProductModal } from "@/components/ProductModal";

type CatFilter = "Semua" | (typeof categories)[number]["name"];
type Sort = "Populer" | "Terbaru" | "Paling Dicari";

export const Route = createFileRoute("/katalog")({
  validateSearch: (s: Record<string, unknown>) => ({
    cat: typeof s.cat === "string" ? s.cat : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Katalog Produk — Fauzi Design" },
      { name: "description", content: "Jelajahi katalog custom apparel: kaos, kemeja PDH, jersey, seragam, jaket, hoodie, polo, dan souvenir. Setiap produk dapat dikustomisasi sesuai kebutuhan." },
      { property: "og:title", content: "Katalog Produk — Fauzi Design" },
      { property: "og:description", content: "Katalog custom apparel premium dengan opsi kustomisasi penuh." },
    ],
  }),
  component: Katalog,
});

function Katalog() {
  const search = Route.useSearch();
  const [filter, setFilter] = useState<CatFilter>((search.cat as CatFilter) ?? "Semua");
  const [sort, setSort] = useState<Sort>("Populer");
  const [active, setActive] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let r = filter === "Semua" ? products : products.filter((p) => p.category === filter);
    if (sort === "Terbaru") r = [...r].reverse();
    return r;
  }, [filter, sort]);

  const filters: CatFilter[] = ["Semua", ...categories.map((c) => c.name)];

  return (
    <>
      <section className="pt-32 md:pt-40 pb-10 container-edge">
        <nav className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-6">
          <Link to="/" className="hover:text-neon">Beranda</Link> / <span className="text-foreground">Katalog</span>
        </nav>
        <p className="label-tag mb-3">[Katalog Produk]</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] uppercase">
          Pilih, custom, <br /><span className="text-stroke">eksekusi.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Setiap produk dapat dikustomisasi sesuai kebutuhan Anda — bahan, warna, ukuran, hingga desain.
          Harga menyesuaikan spesifikasi.
        </p>
      </section>

      {/* Filter bar sticky */}
      <div className="sticky top-[64px] z-30 bg-background/85 backdrop-blur-md border-y border-border">
        <div className="container-edge py-4 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-1 px-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`whitespace-nowrap font-mono text-[11px] uppercase tracking-widest px-4 py-2 border transition ${
                  filter === f ? "bg-neon text-background border-neon" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:inline">Urutkan:</span>
            <div className="flex gap-1">
              {(["Populer", "Terbaru", "Paling Dicari"] as Sort[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setSort(s)}
                  className={`font-mono text-[11px] uppercase tracking-widest px-3 py-1.5 transition ${
                    sort === s ? "text-neon" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="container-edge py-12">
        {filtered.length === 0 ? (
          <div className="border border-dashed border-border py-20 text-center">
            <Search className="mx-auto text-muted-foreground" size={32} />
            <p className="font-display text-2xl mt-4 uppercase">Belum ada produk pada kategori ini</p>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">Hubungi kami untuk request custom — apa pun kebutuhan Anda, kami bantu produksi.</p>
            <a href={buildWhatsAppUrl("Halo Fauzi Design, saya butuh produk custom yang belum ada di katalog.")} target="_blank" rel="noopener noreferrer" className="btn-tag btn-tag-whatsapp mt-6">
              <WhatsAppIcon size={14} /> Request Custom
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
            {filtered.map((p) => (
              <article key={p.id} className="group bg-surface border border-border hover:border-neon transition flex flex-col">
                <button onClick={() => setActive(p)} className="block aspect-[4/5] relative overflow-hidden bg-background">
                  <img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-neon bg-background/70 px-2 py-1 uppercase">[{p.category}]</span>
                </button>
                <div className="p-4 md:p-5 flex flex-col flex-1 gap-3">
                  <div>
                    <h3 className="font-display text-base md:text-lg uppercase leading-tight line-clamp-2">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{p.spec}</p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest mt-auto pt-2 border-t border-border">
                    <span className="text-neon">MOQ {p.moq} pcs</span>
                    <span className="text-muted-foreground">Quotation</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={buildWhatsAppUrl(productInquiryMessage(p))}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-tag btn-tag-whatsapp w-full justify-center"
                    >
                      <WhatsAppIcon size={12} /> Minta Penawaran
                    </a>
                    <button onClick={() => setActive(p)} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-neon flex items-center gap-1 self-center">
                      Lihat Detail <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
