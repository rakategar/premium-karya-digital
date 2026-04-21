

## Plan: Ganti Ikon WhatsApp dengan Logo Asli dan Aksen Hijau

### Apa yang Berubah

Semua tombol dan ikon WhatsApp di seluruh situs akan menggunakan **logo resmi WhatsApp (SVG)** menggantikan ikon `MessageCircle` dari Lucide, dan warnanya diganti ke **hijau khas WhatsApp (#25D366)**.

### Langkah

1. **Buat komponen `WhatsAppIcon`** (`src/components/WhatsAppIcon.tsx`)
   - SVG path logo resmi WhatsApp (speech bubble + telepon)
   - Menerima prop `size` dan `className` agar fleksibel seperti ikon Lucide

2. **Ganti semua `MessageCircle` untuk konteks WhatsApp** di file berikut:
   - `src/components/FloatingWA.tsx` — ikon + warna background tombol floating → hijau WhatsApp
   - `src/components/Header.tsx` — tombol "Konsultasi WhatsApp" di navbar & mobile menu
   - `src/routes/index.tsx` — tombol "Konsultasi Gratis" di hero
   - `src/routes/tentang-kami.tsx` — tombol "Mulai Proyek" dan "Chat WhatsApp"
   - `src/routes/kontak.tsx` — kartu kontak WhatsApp, tombol form, dan sidebar
   - `src/routes/katalog.tsx` — tombol "Request Custom" dan "Minta Penawaran"
   - `src/components/Footer.tsx` (jika ada ikon WA)

3. **Tambahkan kelas CSS aksen hijau WhatsApp** di `src/styles.css`:
   - Varian baru `.btn-tag-whatsapp` dengan `background: #25D366` dan teks putih
   - Tombol WhatsApp menggunakan kelas ini, bukan `.btn-tag-primary` (hijau neon saat ini)

4. **Floating WA button** — glow dan background diganti ke hijau WhatsApp (#25D366) agar langsung dikenali sebagai tombol WhatsApp

### Hasil
- Semua tombol WhatsApp tampil dengan logo resmi dan warna hijau khas WhatsApp
- Tombol non-WhatsApp tetap menggunakan warna neon seperti sekarang
- Tidak ada perubahan layout atau konten

