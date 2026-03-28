import Image from "next/image";
import { siteData } from "@/data/siteData";

function TrackCard({ track }: { track: { title: string; label: string; artwork: string; url: string } }) {
  return (
    <a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/track"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={track.artwork}
          alt={track.title}
          fill
          className="object-cover transition-transform duration-700 group-hover/track:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover/track:bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover/track:opacity-100">
          <span className="text-[10px] uppercase tracking-[0.2em] sm:text-[11px]">
            Beatport &rarr;
          </span>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-sm font-medium">{track.title}</p>
        <p className="text-[11px] text-accent">{track.label}</p>
      </div>
    </a>
  );
}

export default function Music() {
  return (
    <section id="music" className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-3xl font-light tracking-wide sm:text-4xl">
          Music
        </h2>

        {/* Featured track */}
        <a
          href={siteData.featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mb-16 block overflow-hidden"
        >
          <div className="relative aspect-[2.2/1] w-full sm:aspect-[2.8/1]">
            <Image
              src={siteData.featured.artwork}
              alt={siteData.featured.title}
              fill
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-10">
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-accent">
                Featured
              </p>
              <p className="text-xl font-medium sm:text-3xl">
                {siteData.featured.title}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-accent transition-colors duration-300 group-hover:text-white">
                Play on SoundCloud &rarr;
              </p>
            </div>
          </div>
        </a>

        {/* SoundCloud embed */}
        <div className="mb-20">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?visual=false&url=https%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F1972095844&show_artwork=false&color=%23888888&show_user=true&show_reposts=false&show_teaser=false"
            title="13uxz on SoundCloud"
          />
        </div>

        {/* Releases by genre */}
        <h3 className="mb-14 text-center text-xl font-light tracking-wide">
          Releases
        </h3>

        {/* Multi-track genres */}
        {siteData.releasesByGenre
          .filter((g) => g.tracks.length > 1)
          .map((group) => (
            <div key={group.genre} className="mb-16 last:mb-0">
              <p className="mb-6 text-center text-[11px] uppercase tracking-[0.25em] text-accent">
                {group.genre}
              </p>

              {/* Collection banner if present */}
              {"banner" in group && group.banner && (
                <a
                  href={group.banner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto mb-6 flex w-fit items-center gap-4 transition-opacity hover:opacity-80"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden">
                    <Image
                      src={group.banner.src}
                      alt={group.banner.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-accent">
                      Featured on
                    </p>
                    <p className="text-sm font-medium">
                      {group.banner.title} &rarr;
                    </p>
                  </div>
                </a>
              )}

              {/* Track grid — centered */}
              <div
                className={`mx-auto grid gap-5 sm:gap-7 ${
                  group.tracks.length === 3
                    ? "max-w-5xl grid-cols-3"
                    : "max-w-lg grid-cols-2"
                }`}
              >
                {group.tracks.map((track, i) => (
                  <TrackCard key={i} track={track} />
                ))}
              </div>
            </div>
          ))}

        {/* Single-track genres — side by side */}
        {(() => {
          const singles = siteData.releasesByGenre.filter(
            (g) => g.tracks.length === 1
          );
          if (singles.length === 0) return null;
          return (
            <div className="mt-16">
              <div className="mx-auto grid max-w-lg grid-cols-2 gap-5 sm:gap-7">
                {singles.map((group) => (
                  <div key={group.genre}>
                    <p className="mb-6 text-center text-[11px] uppercase tracking-[0.25em] text-accent">
                      {group.genre}
                    </p>
                    <TrackCard track={group.tracks[0]} />
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
