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
  { label: "Brands", href: "#brands" },
  { label: "Teaching", href: "#teaching" },
  { label: "Gallery", href: "#gallery" },
  { label: "Music", href: "#music" },
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
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
              className="text-[13px] uppercase tracking-[0.15em] text-accent transition-colors duration-300 hover:text-white"
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
                  className="text-accent transition-colors duration-300 hover:text-white"
                  aria-label={config.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-6 bg-black/95 px-8 pb-8 pt-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[13px] uppercase tracking-[0.15em] text-accent transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 pt-2">
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
                  className="text-accent transition-colors duration-300 hover:text-white"
                  aria-label={config.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
