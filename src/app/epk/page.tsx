"use client";

import { useRef, useState } from "react";
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
  const epkRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);

  async function handleDownload() {
    if (!epkRef.current || generating) return;
    setGenerating(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const html2pdf = (await import("html2pdf.js")).default as any;
      await html2pdf()
        .set({
          margin: 0,
          filename: "13uxz-press-kit.pdf",
          image: { type: "jpeg", quality: 0.95 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#050505",
            logging: false,
          },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        })
        .from(epkRef.current)
        .save();
    } finally {
      setGenerating(false);
    }
  }

  return (
    <>
      {/* Floating controls */}
      <div className="fixed right-6 top-6 z-50 flex gap-3 print:hidden">
        <a
          href="/"
          className="border border-white/20 bg-black/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] text-white backdrop-blur-xl transition-all hover:border-white/40 hover:bg-black/80"
        >
          Back to site
        </a>
        <button
          onClick={handleDownload}
          disabled={generating}
          className="bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-80 disabled:opacity-50"
        >
          {generating ? "Generating..." : "Download PDF"}
        </button>
      </div>

      <div ref={epkRef} className="epk-page min-h-screen bg-[#050505] text-[#f0f0f0]">
        {/* ── Hero header ── */}
        <header className="relative flex min-h-[420px] items-end overflow-hidden">
          <Image
            src="/photos/hero.jpg"
            alt="13uxz"
            fill
            className="object-cover object-top brightness-[0.2]"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="relative z-10 w-full px-10 pb-12 sm:px-16">
            <div className="mx-auto flex max-w-[900px] items-end justify-between">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-white/50">
                  Electronic Press Kit
                </p>
                <h1 className="-mr-[0.3em] font-mono text-6xl font-bold tracking-[0.3em] sm:text-7xl">
                  13UXZ
                </h1>
                <p className="-mr-[0.3em] mt-3 text-[13px] uppercase tracking-[0.3em] text-white/60">
                  {siteData.tagline}
                </p>
              </div>
              <div className="hidden text-right text-[12px] leading-loose text-white/50 sm:block">
                <p className="text-white/80">{siteData.email}</p>
                <p>+44 7345 847418</p>
                <p>+971 50 301 9926</p>
                <p>13uxz.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Content ── */}
        <div className="mx-auto max-w-[900px] px-10 py-16 sm:px-16">
          {/* Photo + Bio */}
          <section className="mb-16 grid gap-10 sm:grid-cols-[260px_1fr]">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/photos/press-hoodie.webp"
                alt="13uxz press photo"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <SectionLabel>Biography</SectionLabel>
              {siteData.bio.map((paragraph, i) => (
                <p key={i} className="mb-4 text-[13px] leading-[1.85] text-white/70 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <Divider />

          {/* Highlights + Labels */}
          <section className="mb-16 grid gap-10 sm:grid-cols-2">
            <div>
              <SectionLabel>Key Highlights</SectionLabel>
              <ul className="space-y-2.5">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-baseline gap-3 text-[13px] leading-relaxed text-white/70"
                  >
                    <span className="mt-0.5 h-px w-3 shrink-0 bg-white/20" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel>Labels</SectionLabel>
              <ul className="space-y-2.5">
                {labels.map((l) => (
                  <li
                    key={l}
                    className="flex items-baseline gap-3 text-[13px] leading-relaxed text-white/70"
                  >
                    <span className="mt-0.5 h-px w-3 shrink-0 bg-white/20" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Divider />

          {/* Genres */}
          <section className="mb-16">
            <SectionLabel>Genres</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {["Afrohouse", "Funky House", "Latin House", "Melodic House & Techno", "Nu Disco", "Organic House", "Progressive", "Techno"].map((g) => (
                <span
                  key={g}
                  className="border border-white/10 bg-white/[0.03] px-4 py-2 text-[12px] tracking-wide text-white/60"
                >
                  {g}
                </span>
              ))}
            </div>
          </section>

          <Divider />

          {/* Brands & Residencies */}
          <section className="mb-16">
            <SectionLabel>Brands & Residencies</SectionLabel>
            <div className="grid gap-8 sm:grid-cols-2">
              {siteData.brands.map((brand) => (
                <div key={brand.management} className="border-l border-white/10 pl-5">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {brand.management}
                  </p>
                  <div className="space-y-1.5">
                    {brand.venues.map((venue) => (
                      <p key={venue.name} className="text-[13px] text-white/80">
                        {venue.name}
                        {"role" in venue && (
                          <span className="ml-2 text-[11px] text-white/40">
                            {venue.role}
                          </span>
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              {siteData.events.map((event) => (
                <div key={event.name} className="border-l border-white/10 pl-5">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {event.name}
                  </p>
                  <div className="space-y-1.5">
                    {event.venues.map((venue) => (
                      <p key={venue.name} className="text-[13px] text-white/80">
                        {venue.name}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* Gallery */}
          <section className="mb-16">
            <SectionLabel>Gallery</SectionLabel>
            <div className="grid grid-cols-3 gap-2">
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

          <Divider />

          {/* Testimonials */}
          <section className="mb-16">
            <SectionLabel>Testimonials</SectionLabel>
            <div className="space-y-8">
              {siteData.testimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="border-l border-white/10 pl-6"
                >
                  <p className="text-[13px] leading-[1.85] text-white/60 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-3 flex items-center gap-3">
                    <div>
                      <span className="text-[13px] font-medium text-white/90">
                        {t.name}
                      </span>
                      <span className="ml-2 text-[11px] text-white/40">
                        {t.title}
                      </span>
                    </div>
                    {"logo" in t && t.logo && (
                      <div className="relative h-5 w-16 shrink-0">
                        <Image
                          src={t.logo}
                          alt={t.title}
                          fill
                          className="object-contain brightness-0 invert opacity-40"
                        />
                      </div>
                    )}
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          <Divider />

          {/* Discography */}
          <section className="mb-16">
            <SectionLabel>Discography</SectionLabel>
            <div className="space-y-8">
              {siteData.releasesByGenre.map((group) => (
                <div key={group.genre}>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {group.genre}
                  </p>
                  <div className="space-y-2">
                    {group.tracks.map((t) => (
                      <div
                        key={t.title}
                        className="flex items-baseline justify-between gap-4 border-b border-white/[0.06] pb-2"
                      >
                        <span className="text-[13px] text-white/80">
                          {t.title}
                        </span>
                        <span className="shrink-0 text-[11px] text-white/40">
                          {t.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* Links + Contact */}
          <section className="mb-16 grid gap-10 sm:grid-cols-2">
            <div>
              <SectionLabel>Links</SectionLabel>
              <div className="flex flex-wrap gap-4">
                {Object.entries(siteData.socials).map(([key, url]) => {
                  const Icon = socialIcons[key];
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[12px] capitalize tracking-wide text-white/70 transition-all hover:border-white/30 hover:text-white"
                    >
                      {Icon && <Icon />}
                      {key}
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <SectionLabel>Contact</SectionLabel>
              <div className="space-y-3 text-[13px]">
                <ContactLine label="Email" href={`mailto:${siteData.email}`}>
                  {siteData.email}
                </ContactLine>
                <ContactLine label="UK" href="tel:+447345847418">
                  +44 7345 847418
                </ContactLine>
                <ContactLine label="UAE" href="tel:+971503019926">
                  +971 50 301 9926
                </ContactLine>
                <ContactLine
                  label="Web"
                  href="https://13uxz.com"
                  external
                >
                  13uxz.com
                </ContactLine>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/10 pt-10 text-center">
            <p className="-mr-[0.25em] font-mono text-lg font-bold tracking-[0.25em]">
              13UXZ
            </p>
            <p className="mt-2 text-[11px] tracking-wide text-white/40">
              {siteData.email} &middot; 13uxz.com
            </p>
            <p className="mt-1 text-[10px] text-white/20">
              &copy; {new Date().getFullYear()} 13uxz. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

/* ── Shared sub-components ── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-[11px] uppercase tracking-[0.25em] text-white/50">
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="mb-16 h-px bg-white/[0.06]" />;
}

function ContactLine({
  label,
  href,
  external,
  children,
}: {
  label: string;
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-baseline gap-3">
      <span className="w-10 text-[10px] uppercase tracking-[0.15em] text-white/40">
        {label}
      </span>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-white/70 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white"
      >
        {children}
      </a>
    </p>
  );
}
