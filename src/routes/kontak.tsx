import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock, Plus, Minus, Instagram, Music2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/products";
import { PageHero } from "@/components/SectionHero";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — Fauzi Design" },
      { name: "description", content: "Hubungi Fauzi Design untuk konsultasi gratis dan permintaan penawaran custom apparel. Respons cepat via WhatsApp." },
      { property: "og:title", content: "Kontak — Fauzi Design" },
      { property: "og:description", content: "Konsultasi gratis & minta penawaran custom apparel via WhatsApp." },
    ],
  }),
  component: Kontak,
});

const FAQ = [
  { q: "Berapa minimal order?", a: "Minimal order (MOQ) kami adalah 12 pcs untuk sebagian besar produk. Beberapa item souvenir bisa mulai dari 24 pcs. Hubungi kami untuk detail spesifik." },
  { q: "Apakah bisa custom desain?", a: "Tentu. Anda bisa bawa desain sendiri, atau tim kami akan bantu mendesain dari nol — gratis untuk klien." },
  { q: "Berapa lama proses produksi?", a: "Estimasi 7–21 hari kerja tergantung jenis produk, jumlah, dan tingkat kompleksitas custom. Estimasi pasti diberikan saat quotation." },
  { q: "Apakah bisa kirim luar kota?", a: "Bisa. Kami melayani pengiriman ke seluruh Indonesia melalui ekspedisi terpercaya." },
  { q: "Apakah bisa order untuk komunitas / perusahaan?", a: "Ya, justru itu spesialisasi kami. Kami berpengalaman menangani order komunitas, korporat, sekolah, hingga event nasional." },
  { q: "Bagaimana cara meminta penawaran?", a: "Cukup hubungi kami via WhatsApp atau isi form di halaman ini. Sertakan jenis produk, jumlah, dan detail kustomisasi yang diinginkan." },
  { q: "Apa saja jenis produk yang tersedia?", a: "Kaos, kemeja PDH/PDL, jersey, seragam kerja, jaket, hoodie, polo shirt, dan souvenir seperti tote bag. Semua bisa dikustomisasi." },
  { q: "Apakah bisa konsultasi terlebih dahulu?", a: "Sangat bisa, dan gratis. Tim kami siap membantu Anda menentukan bahan, teknik, dan estimasi yang paling cocok." },
];

function Kontak() {
  const [form, setForm] = useState({
    nama: "", email: "", wa: "", produk: "Kaos", jumlah: "", detail: "", deadline: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const buildMsg = () => `Halo Fauzi Design, saya ingin meminta penawaran:

• Nama: ${form.nama}
• Email: ${form.email}
• WhatsApp: ${form.wa}
• Jenis Produk: ${form.produk}
• Jumlah Kebutuhan: ${form.jumlah}
• Detail Kustomisasi: ${form.detail}
• Deadline: ${form.deadline}

Mohon kirimkan quotation lengkap. Terima kasih.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppUrl(buildMsg()), "_blank");
  };

  return (
    <>
      <PageHero
        tag="Kontak"
        title="Mari"
        accent="berdiskusi."
        subtitle="Punya proyek custom apparel? Mulai dengan konsultasi gratis. Tim kami akan merespons cepat dan membantu Anda dari brief hingga pengiriman."
      />

      {/* CONTACT CARDS */}
      <section className="container-edge pb-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {[
          { I: WhatsAppIcon, t: "WhatsApp", v: "+62 889-9112-5343", href: buildWhatsAppUrl("Halo Fauzi Design"), tag: "Chat sekarang" },
          { I: Mail, t: "Email", v: "fauzidesignindonesia@gmail.com", href: "mailto:fauzidesignindonesia@gmail.com", tag: "Kirim email" },
          { I: MapPin, t: "Alamat", v: "Workshop Produksi · Indonesia", href: "#", tag: "Lihat lokasi" },
          { I: Clock, t: "Jam Operasional", v: "Sen–Sab · 09.00–18.00 WIB", href: "#", tag: "Buka hari ini" },
        ].map((c) => (
          <a key={c.t} href={c.href} target="_blank" rel="noopener noreferrer" className="border border-border bg-surface p-6 hover:border-neon transition group">
            {c.t === "WhatsApp" ? <WhatsAppIcon className="text-[#25D366]" size={22} /> : <c.I className="text-neon" size={22} />}
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-4">[{c.t}]</p>
            <p className="font-display text-xs sm:text-sm md:text-base uppercase mt-1 leading-tight break-all">{c.v}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-neon transition mt-3">{c.tag} →</p>
          </a>
        ))}
      </section>

      {/* FORM + INFO */}
      <section className="container-edge py-12 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <p className="label-tag mb-3">[Form Penawaran]</p>
          <h2 className="font-display text-3xl md:text-5xl uppercase leading-[0.95]">
            Kirim brief Anda — <span className="text-stroke">kami balas cepat.</span>
          </h2>
          <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { k: "nama", l: "Nama", t: "text", req: true },
              { k: "email", l: "Email", t: "email", req: true },
              { k: "wa", l: "Nomor WhatsApp", t: "tel", req: true },
              { k: "jumlah", l: "Jumlah Kebutuhan (pcs)", t: "number", req: true },
            ].map((f) => (
              <div key={f.k}>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">[{f.l}]</label>
                <input
                  type={f.t} required={f.req}
                  value={form[f.k as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  className="w-full mt-2 bg-background border border-border p-3 text-sm focus:border-neon outline-none transition"
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">[Jenis Produk]</label>
              <select
                value={form.produk}
                onChange={(e) => setForm({ ...form, produk: e.target.value })}
                className="w-full mt-2 bg-background border border-border p-3 text-sm focus:border-neon outline-none"
              >
                {["Kaos","Kemeja","Jersey","Seragam","Jaket","Hoodie","Polo Shirt","Souvenir","Lainnya"].map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">[Detail Kustomisasi]</label>
              <textarea
                rows={4}
                value={form.detail}
                onChange={(e) => setForm({ ...form, detail: e.target.value })}
                placeholder="Bahan, warna, ukuran, jenis sablon, posisi logo, dll."
                className="w-full mt-2 bg-background border border-border p-3 text-sm focus:border-neon outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">[Deadline / Target Waktu]</label>
              <input
                type="text"
                placeholder="Contoh: 14 hari, atau tanggal target"
                value={form.deadline}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                className="w-full mt-2 bg-background border border-border p-3 text-sm focus:border-neon outline-none"
              />
            </div>
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
              <button type="submit" className="btn-tag btn-tag-whatsapp justify-center flex-1">
                <WhatsAppIcon size={14} /> Kirim via WhatsApp
              </button>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground self-center">
                Quotation gratis · Tanpa biaya konsultasi
              </p>
            </div>
          </form>
        </div>

        <aside className="lg:col-span-2 space-y-4">
          <div className="border border-border bg-surface p-6">
            <p className="label-tag mb-3">[Respons Cepat]</p>
            <h3 className="font-display text-2xl uppercase leading-tight">Lebih suka chat langsung?</h3>
            <p className="text-sm text-muted-foreground mt-3">Kirim pesan WhatsApp dan dapatkan respons dalam hitungan menit di jam operasional.</p>
            <a href={buildWhatsAppUrl("Halo Fauzi Design, saya ingin konsultasi gratis.")} target="_blank" rel="noopener noreferrer" className="btn-tag btn-tag-whatsapp mt-5 w-full justify-center">
              <WhatsAppIcon size={14} /> Konsultasi Gratis
            </a>
          </div>
          <div className="border border-border bg-surface p-6 space-y-3">
            <p className="label-tag mb-3">[Sosial Media]</p>
            <a href="https://instagram.com/fauzidesign.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-neon transition">
              <Instagram size={20} /> <span className="font-mono text-sm">@fauzidesign.id</span>
            </a>
            <a href="https://tiktok.com/@fauzidesi.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-neon transition">
              <Music2 size={20} /> <span className="font-mono text-sm">@fauzidesi.id</span>
            </a>
          </div>
          <div className="border border-border bg-surface p-6 font-mono text-[11px] text-muted-foreground leading-relaxed">
            <p className="text-neon">[Catatan]</p>
            <p className="mt-2">Semua harga ditentukan setelah quotation berdasarkan spesifikasi akhir. Tidak ada biaya konsultasi atau revisi desain awal.</p>
          </div>
        </aside>
      </section>

      {/* FAQ */}
      <section className="container-edge py-20 md:py-28 border-t border-border">
        <p className="label-tag mb-3">[FAQ]</p>
        <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] max-w-3xl mb-12">
          Pertanyaan yang sering <span className="text-stroke">ditanyakan.</span>
        </h2>
        <div className="max-w-3xl divide-y divide-border border-y border-border">
          {FAQ.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={i}>
                <button onClick={() => setOpenFaq(open ? null : i)} className="w-full flex items-center justify-between py-5 text-left gap-4">
                  <span className="font-display text-base md:text-xl uppercase">{f.q}</span>
                  {open ? <Minus className="text-neon shrink-0" size={18} /> : <Plus className="text-muted-foreground shrink-0" size={18} />}
                </button>
                {open && <p className="pb-5 text-muted-foreground text-sm leading-relaxed max-w-2xl">{f.a}</p>}
              </div>
            );
          })}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-8">
          Hubungi kami di +{WHATSAPP_NUMBER.slice(0, 2)} {WHATSAPP_NUMBER.slice(2)} untuk pertanyaan lainnya.
        </p>
      </section>
    </>
  );
}
