"use client";

import { useState } from "react";
import { siteData } from "@/data/siteData";
import {
  SpotifyIcon,
  BeatportIcon,
  SoundCloudIcon,
  InstagramIcon,
  LinktreeIcon,
} from "@/components/SocialIcons";

const links = [
  { label: "Biography", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Music", href: "#music" },
  { label: "Brands", href: "#brands" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Bookings", href: "#bookings" },
];

const socialConfig: Record<string, { label: string; icon: React.FC }> = {
  spotify: { label: "Spotify", icon: SpotifyIcon },
  beatport: { label: "Beatport", icon: BeatportIcon },
  soundcloud: { label: "SoundCloud", icon: SoundCloudIcon },
  instagram: { label: "Instagram", icon: InstagramIcon },
  linktree: { label: "Linktree", icon: LinktreeIcon },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 sm:py-5">
        <a
          href="#"
          className="font-mono text-base font-bold tracking-[0.25em]"
        >
          13UXZ
        </a>

        {/* Desktop nav links + social icons — right */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
          <span className="h-4 w-px bg-border" />
          <div className="flex items-center gap-3">
            {Object.entries(siteData.socials).map(([key, url]) => {
              const config = socialConfig[key];
              if (!config) return null;
              const Icon = config.icon;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-opacity duration-300 hover:opacity-70"
                  aria-label={config.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile: social icons + hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="flex items-center gap-2.5">
            {Object.entries(siteData.socials).map(([key, url]) => {
              const config = socialConfig[key];
              if (!config) return null;
              const Icon = config.icon;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-opacity duration-300 hover:opacity-70 [&_svg]:h-3.5 [&_svg]:w-3.5"
                  aria-label={config.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-5 bg-white transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-5 bg-white transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-5 bg-black/95 px-6 pb-6 pt-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[13px] uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
