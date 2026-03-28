"use client";

import Image from "next/image";
import { siteData } from "@/data/siteData";

const allTracks = siteData.releasesByGenre.flatMap((g) =>
  g.tracks.map((t) => ({ ...t, genre: g.genre }))
);

const highlights = [
  "25,000-person crowd at Dubai Shopping Festival NYE",
  "2-year residency at Masti, Dubai",
  "Residencies at Jamavar & Mimi Mayfair",
  "COP28 staff closing party",
  "Modulate @ KYO on the Palm",
  "Featured on BeatFM weekly show",
  "Trained at Point Blank, Toolroom & Granular DXB",
];

const labels = [...new Set(allTracks.map((t) => t.label))];

export default function EPK() {
  return (
    <>
      {/* Print button — hidden in PDF */}
      <div className="fixed right-6 top-6 z-50 flex gap-3 print:hidden">
        <a
          href="/"
          className="bg-white/10 px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] text-white backdrop-blur transition-colors hover:bg-white/20"
        >
          Back to site
        </a>
        <button
          onClick={() => window.print()}
          className="bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-80"
        >
          Download PDF
        </button>
      </div>

      <div className="epk-page mx-auto max-w-[800px] bg-background px-10 py-16 text-foreground print:max-w-none print:px-0 print:py-0">
        {/* Header */}
        <header className="mb-12 flex items-center justify-between border-b border-border pb-10">
          <div>
            <h1 className="font-mono text-5xl font-bold tracking-[0.2em]">
              13UXZ
            </h1>
            <p className="mt-2 text-[13px] uppercase tracking-[0.3em] text-accent">
              {siteData.tagline}
            </p>
          </div>
          <div className="text-right text-[12px] leading-relaxed text-accent">
            <p>{siteData.email}</p>
            <p className="flex items-center justify-end gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              +971 50 301 9926
            </p>
            <p>13uxz.com</p>
            <p>@13uxz</p>
          </div>
        </header>

        {/* Photo + Bio */}
        <section className="mb-12 grid grid-cols-[240px_1fr] gap-10">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/photos/press-hoodie.webp"
              alt="13uxz press photo"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <h2 className="mb-4 text-lg font-medium tracking-wide">Biography</h2>
            <p className="mb-3 text-[13px] leading-[1.75] text-accent">
              {siteData.bio[0]}
            </p>
            <p className="text-[13px] leading-[1.75] text-accent">
              {siteData.bio[1]}
            </p>
          </div>
        </section>

        {/* Highlights + Labels — side by side */}
        <section className="mb-12 grid grid-cols-2 gap-10 border-t border-border pt-10">
          <div>
            <h2 className="mb-4 text-lg font-medium tracking-wide">
              Key Highlights
            </h2>
            <ul className="space-y-2">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="text-[13px] leading-relaxed text-accent before:mr-2 before:text-white/30 before:content-['—']"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-medium tracking-wide">
              Labels
            </h2>
            <ul className="space-y-2">
              {labels.map((l) => (
                <li
                  key={l}
                  className="text-[13px] leading-relaxed text-accent before:mr-2 before:text-white/30 before:content-['—']"
                >
                  {l}
                </li>
              ))}
            </ul>

            <h2 className="mb-4 mt-8 text-lg font-medium tracking-wide">
              Genres
            </h2>
            <p className="text-[13px] leading-relaxed text-accent">
              Afrohouse, Melodic House & Techno, Organic House, Progressive, Techno
            </p>
          </div>
        </section>

        {/* Discography */}
        <section className="mb-12 border-t border-border pt-10">
          <h2 className="mb-6 text-lg font-medium tracking-wide">
            Discography
          </h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            {allTracks.map((t) => (
              <div key={t.title} className="flex items-baseline justify-between gap-4">
                <span className="text-[13px]">{t.title}</span>
                <span className="shrink-0 text-[11px] text-accent">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="border-t border-border pt-10">
          <h2 className="mb-6 text-lg font-medium tracking-wide">Links</h2>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(siteData.socials).map(([key, url]) => (
              <div key={key} className="flex items-baseline justify-between gap-4">
                <span className="text-[13px] capitalize">{key}</span>
                <span className="truncate text-[11px] text-accent">{url}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12 border-t border-border pt-10">
          <h2 className="mb-6 text-lg font-medium tracking-wide">Contact</h2>
          <div className="space-y-2 text-[13px]">
            <p>
              <span className="text-accent">Email:</span>{" "}
              {siteData.email}
            </p>
            <p className="flex items-center gap-2">
              <span className="text-accent">WhatsApp:</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-accent"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              +971 50 301 9926
            </p>
            <p>
              <span className="text-accent">Web:</span>{" "}
              13uxz.com
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 text-center">
          <p className="font-mono text-sm font-bold tracking-[0.2em]">13UXZ</p>
          <p className="mt-1 text-[11px] text-accent">
            {siteData.email} &middot; 13uxz.com
          </p>
        </footer>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .epk-page {
            background: white !important;
            color: #111 !important;
            padding: 40px !important;
          }
          .epk-page h1,
          .epk-page h2,
          .epk-page span,
          .epk-page p,
          .epk-page li,
          .epk-page footer {
            color: #111 !important;
          }
          .epk-page .text-accent {
            color: #444 !important;
          }
          .epk-page [class*="border-border"] {
            border-color: #ddd !important;
          }
          .epk-page li::before {
            color: #999 !important;
          }
          @page {
            margin: 0.5in;
            size: A4;
          }
        }
      `}</style>
    </>
  );
}
