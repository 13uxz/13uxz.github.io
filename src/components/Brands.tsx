import Image from "next/image";
import { siteData } from "@/data/siteData";

function logoFilter(src: string) {
  if (src.endsWith(".png")) return "";
  if (src.endsWith(".jpg") || src.endsWith(".jpeg")) return "invert";
  return "brightness-0 invert";
}

export default function Brands() {
  return (
    <section id="brands" className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-3xl font-light tracking-wide sm:text-4xl">
          Brands
        </h2>

        <div className="grid gap-24 md:grid-cols-2">
          {siteData.brands.map((group) => (
            <div key={group.management} className="text-center">
              {/* Management company */}
              <a
                href={group.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-12 flex h-20 items-center justify-center transition-opacity hover:opacity-70"
              >
                <Image
                  src={group.logo}
                  alt={group.management}
                  width={240}
                  height={80}
                  className={`h-16 w-auto ${logoFilter(group.logo)}`}
                />
              </a>

              <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-accent">
                Residencies
              </p>

              {/* Venue cards */}
              <div className="grid grid-cols-2 gap-4">
                {group.venues.map((venue) => (
                  <a
                    key={venue.name}
                    href={"url" in venue ? (venue.url as string) : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-40 flex-col items-center justify-center border border-border px-6 transition-colors duration-300 hover:border-white/30"
                  >
                    <Image
                      src={venue.logo}
                      alt={venue.name}
                      width={180}
                      height={80}
                      className={`mb-3 h-20 w-auto object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${logoFilter(venue.logo)}`}
                    />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                      {venue.role}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
