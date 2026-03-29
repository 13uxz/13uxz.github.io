import Image from "next/image";
import { siteData } from "@/data/siteData";

function logoFilter(src: string) {
  if (src.endsWith(".png") || src.endsWith(".jpg") || src.endsWith(".jpeg")) return "";
  return "brightness-0 invert";
}

export default function Brands() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allBrands = [...siteData.brands] as any[];
  const residencies = allBrands.filter((g: any) => !g.label);
  const agencies = allBrands.filter((g: any) => g.label);

  return (
    <section id="brands" className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-3xl font-light tracking-wide sm:text-4xl">
          Brands
        </h2>

        {/* Residencies */}
        <div className="mb-24 grid gap-24 md:grid-cols-2">
          {residencies.map((group: any) => {
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
                  {group.venues.map((venue: any) => {
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

        {/* Events — Sounds by AKS */}
        {siteData.events.map((event) => (
          <div key={event.name} className="mb-24 text-center">
            <div className="mb-12 flex h-32 items-center justify-center">
              {event.url ? (
                <a href={event.url} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
                  <Image
                    src={event.logo}
                    alt={event.name}
                    width={300}
                    height={120}
                    className="h-28 w-auto grayscale brightness-[2] mix-blend-screen"
                  />
                </a>
              ) : (
                <Image
                  src={event.logo}
                  alt={event.name}
                  width={300}
                  height={120}
                  className="h-28 w-auto grayscale brightness-[2] mix-blend-screen"
                />
              )}
            </div>

            <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-accent">
              {event.label}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {event.venues.map((venue) => {
                const venueUrl = "url" in venue ? (venue.url as string) : "";
                const isLarge = "size" in venue && venue.size === "large";
                const Tag = venueUrl ? "a" : "div";
                const linkProps = venueUrl ? { href: venueUrl, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Tag
                    key={venue.name}
                    {...linkProps}
                    className="group flex h-44 w-[calc(50%-8px)] items-center justify-center border border-border px-6 transition-colors duration-300 hover:border-white/30 sm:w-[calc(25%-12px)]"
                  >
                    <Image
                      src={venue.logo}
                      alt={venue.name}
                      width={300}
                      height={120}
                      className={`max-w-[90%] object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 brightness-0 invert ${isLarge ? "h-40" : "h-28"}`}
                    />
                  </Tag>
                );
              })}
            </div>
          </div>
        ))}

        {/* Agencies — Sole Agency + Mais Musica */}
        {agencies.map((agency: any) => (
          <div key={agency.management} className="mt-24 text-center">
            {agency.url ? (
              <a
                href={agency.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-12 flex h-20 items-center justify-center transition-opacity hover:opacity-70"
              >
                <Image
                  src={agency.logo}
                  alt={agency.management}
                  width={240}
                  height={80}
                  className={`h-16 w-auto ${agency.logo.endsWith(".jpg") ? "mix-blend-screen" : "brightness-0 invert"}`}
                />
              </a>
            ) : (
              <div className="mb-12 flex h-20 items-center justify-center">
                <Image
                  src={agency.logo}
                  alt={agency.management}
                  width={240}
                  height={80}
                  className={`h-16 w-auto ${agency.logo.endsWith(".jpg") ? "mix-blend-screen" : "brightness-0 invert"}`}
                />
              </div>
            )}

            <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-accent">
              {"label" in agency ? (agency.label as string) : "Bookings"}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {agency.venues.map((venue: any) => {
                const venueUrl = "url" in venue ? (venue.url as string) : "";
                const Tag = venueUrl ? "a" : "div";
                const linkProps = venueUrl ? { href: venueUrl, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Tag
                    key={venue.name}
                    {...linkProps}
                    className="group flex h-48 w-[calc(50%-8px)] items-center justify-center border border-border px-6 transition-colors duration-300 hover:border-white/30 sm:w-[calc(33.333%-11px)]"
                  >
                    <Image
                      src={venue.logo}
                      alt={venue.name}
                      width={400}
                      height={200}
                      className={`h-36 max-w-[90%] object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${
                        venue.logo.includes("jebel-ali-rec") || venue.logo.includes("helipad") ? "grayscale invert brightness-[2]" : "brightness-0 invert"
                      }`}
                    />
                  </Tag>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
