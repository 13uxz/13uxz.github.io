"use client";

import Image from "next/image";
import { siteData } from "@/data/siteData";
import {
  SpotifyIcon,
  BeatportIcon,
  SoundCloudIcon,
  InstagramIcon,
  LinktreeIcon,
} from "@/components/SocialIcons";

const socialIcons: Record<string, React.FC> = {
  spotify: SpotifyIcon,
  beatport: BeatportIcon,
  soundcloud: SoundCloudIcon,
  instagram: InstagramIcon,
  linktree: LinktreeIcon,
};

const allTracks = siteData.releasesByGenre.flatMap((g) =>
  g.tracks.map((t) => ({ ...t, genre: g.genre }))
);

const highlights = [
  "25,000-person crowd at Dubai Shopping Festival NYE",
  "Residencies at Masti, Blue Seafood Asia, Jamavar & Mimi Mei Fair",
  "COP28 staff closing party",
  "Modulate @ KYO on the Palm",
  "Featured on BeatFM weekly show",
  "Courses with Point Blank, Toolroom & Granular DXB",
];

const labels = siteData.labels.map((l) => l.name);

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
            <p>+971 50 301 9926</p>
            <p>+44 7345 847418</p>
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
          </div>
        </section>

        {/* Genres */}
        <section className="mb-12 border-t border-border pt-10">
          <h2 className="mb-4 text-lg font-medium tracking-wide">Genres</h2>
          <p className="text-[13px] leading-relaxed text-accent">
            Afrohouse, Latin House, Melodic House & Techno, Organic House, Progressive, Techno
          </p>
        </section>

        {/* Brands & Residencies */}
        <section className="mb-12 border-t border-border pt-10">
          <h2 className="mb-6 text-lg font-medium tracking-wide">Brands & Residencies</h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-4">
            {siteData.brands.map((brand) => (
              <div key={brand.management}>
                <p className="mb-1.5 text-[11px] uppercase tracking-[0.15em] text-accent/70">{brand.management}</p>
                <div className="space-y-1">
                  {brand.venues.map((venue) => (
                    <p key={venue.name} className="text-[13px]">
                      {venue.name}
                      {"role" in venue && <span className="ml-2 text-[11px] text-accent">— {venue.role}</span>}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            {siteData.events.map((event) => (
              <div key={event.name}>
                <p className="mb-1.5 text-[11px] uppercase tracking-[0.15em] text-accent/70">{event.name}</p>
                <div className="space-y-1">
                  {event.venues.map((venue) => (
                    <p key={venue.name} className="text-[13px]">{venue.name}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-12 border-t border-border pt-10">
          <h2 className="mb-6 text-lg font-medium tracking-wide">Gallery</h2>
          <div className="grid grid-cols-3 gap-3">
            {siteData.photos.slice(0, 6).map((photo, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`object-cover ${"position" in photo ? photo.position : "object-center"}`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-12 border-t border-border pt-10">
          <h2 className="mb-6 text-lg font-medium tracking-wide">Testimonials</h2>
          {siteData.testimonials.map((t) => (
            <blockquote key={t.name} className="mb-8 last:mb-0">
              <p className="text-[13px] leading-[1.75] text-accent italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div>
                  <span className="text-[13px] font-medium">{t.name}</span>
                  <span className="ml-2 text-[11px] text-accent">{t.title}</span>
                </div>
                {"logo" in t && (
                  <a href={t.url} target="_blank" rel="noopener noreferrer" className="relative h-5 w-16 shrink-0">
                    <Image src={t.logo} alt={t.title} fill className="object-contain" />
                  </a>
                )}
              </footer>
            </blockquote>
          ))}
        </section>

        {/* Discography */}
        <section className="mb-12 border-t border-border pt-10">
          <h2 className="mb-6 text-lg font-medium tracking-wide">
            Discography
          </h2>
          <div className="space-y-6">
            {siteData.releasesByGenre.map((group) => (
              <div key={group.genre}>
                <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-accent/70">{group.genre}</p>
                <div className="space-y-1.5">
                  {group.tracks.map((t) => (
                    <div key={t.title} className="flex items-baseline justify-between gap-4">
                      <span className="text-[13px]">{t.title}</span>
                      <span className="shrink-0 text-[11px] text-accent">{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="border-t border-border pt-10">
          <h2 className="mb-6 text-lg font-medium tracking-wide">Links</h2>
          <div className="flex gap-6">
            {Object.entries(siteData.socials).map(([key, url]) => {
              const Icon = socialIcons[key];
              return (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13px] capitalize transition-opacity hover:opacity-70">
                  {Icon && <Icon />}
                  {key}
                </a>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12 border-t border-border pt-10">
          <h2 className="mb-6 text-lg font-medium tracking-wide">Contact</h2>
          <div className="space-y-2 text-[13px]">
            <p>
              <span className="text-accent">Email:</span>{" "}
              <a href={`mailto:${siteData.email}`} className="underline">{siteData.email}</a>
            </p>
            <p>
              <span className="text-accent">UAE:</span>{" "}
              <a href="tel:+971503019926" className="underline">+971 50 301 9926</a>
            </p>
            <p>
              <span className="text-accent">UK:</span>{" "}
              <a href="tel:+447345847418" className="underline">+44 7345 847418</a>
            </p>
            <p>
              <span className="text-accent">Web:</span>{" "}
              <a href="https://13uxz.com" target="_blank" rel="noopener noreferrer" className="underline">13uxz.com</a>
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
