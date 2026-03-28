import Image from "next/image";
import { siteData } from "@/data/siteData";

function logoFilter(src: string) {
  if (src.endsWith(".png") || src.endsWith(".jpg") || src.endsWith(".jpeg")) return "";
  return "brightness-0 invert";
}

export default function Brands() {
  const residencies = siteData.brands.filter((g) => !("label" in g));
  const bookings = siteData.brands.find((g) => "label" in g);

  return (
    <section id="brands" className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-3xl font-light tracking-wide sm:text-4xl">
          Brands
        </h2>

        {/* Residencies — shown first */}
        <div className="grid gap-24 md:grid-cols-2">
          {residencies.map((group) => {
            const LogoImg = (
              <Image
                src={group.logo}
                alt={group.management}
                width={240}
                height={80}
                className={`h-16 w-auto ${logoFilter(group.logo)}`}
              />
            );
            return (
              <div key={group.management} className="text-center">
                {group.url ? (
                  <a
                    href={group.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-12 flex h-20 items-center justify-center transition-opacity hover:opacity-70"
                  >
                    {LogoImg}
                  </a>
                ) : (
                  <div className="mb-12 flex h-20 items-center justify-center">
                    {LogoImg}
                  </div>
                )}

                <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-accent">
                  Residencies
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {group.venues.map((venue) => {
                    const venueUrl = "url" in venue ? (venue.url as string) : "";
                    const Tag = venueUrl ? "a" : "div";
                    const linkProps = venueUrl ? { href: venueUrl, target: "_blank", rel: "noopener noreferrer" } : {};
                    return (
                      <Tag
                        key={venue.name}
                        {...linkProps}
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
                      </Tag>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bookings — Sole Agency DJ Bookings */}
        {bookings && (
          <div className="mt-24 text-center">
            <h3 className="mb-12 text-lg font-light uppercase tracking-[0.3em] text-white/80">
              Sole Agency DJ Bookings
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {bookings.venues.map((venue) => {
                const venueUrl = "url" in venue ? (venue.url as string) : "";
                const Tag = venueUrl ? "a" : "div";
                const linkProps = venueUrl ? { href: venueUrl, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Tag
                    key={venue.name}
                    {...linkProps}
                    className="group flex h-40 items-center justify-center border border-border px-6 transition-colors duration-300 hover:border-white/30"
                  >
                    <Image
                      src={venue.logo}
                      alt={venue.name}
                      width={300}
                      height={120}
                      className="h-24 max-w-[80%] object-contain mix-blend-screen opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </Tag>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
