import { siteData } from "@/data/siteData";
import {
  SpotifyIcon,
  BeatportIcon,
  SoundCloudIcon,
  InstagramIcon,
  LinktreeIcon,
} from "@/components/SocialIcons";

const socialConfig: Record<string, { label: string; icon: React.FC }> = {
  spotify: { label: "Spotify", icon: SpotifyIcon },
  beatport: { label: "Beatport", icon: BeatportIcon },
  soundcloud: { label: "SoundCloud", icon: SoundCloudIcon },
  instagram: { label: "Instagram", icon: InstagramIcon },
  linktree: { label: "Linktree", icon: LinktreeIcon },
};

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <span className="font-mono text-sm font-bold tracking-[0.25em]">
          13UXZ
        </span>

        <div className="flex flex-wrap justify-center gap-6">
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
                className="flex items-center gap-2 text-accent transition-colors duration-300 hover:text-white"
                aria-label={config.label}
              >
                <Icon />
                <span className="text-[11px] uppercase tracking-[0.15em]">
                  {config.label}
                </span>
              </a>
            );
          })}
        </div>

        <p className="text-[11px] text-accent/50">
          &copy; {new Date().getFullYear()} 13uxz
        </p>
      </div>
    </footer>
  );
}
