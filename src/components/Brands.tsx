import Image from "next/image";
import { siteData } from "@/data/siteData";

function logoFilter(src: string) {
  if (src.endsWith(".png") || src.endsWith(".jpg") || src.endsWith(".jpeg")) return "";
  return "brightness-0 invert";
}

/* eslint-disable @typescript-eslint/no-explicit-any */
type Venue = {
  name: string;
  role?: string;
  logo: string;
  url?: string;
  size?: string;
};

type BrandGroup = {
  region: string;
  management?: string;
  logo?: string;
  url?: string;
  label?: string;
  venues: readonly Venue[];
};

function CityHeader({ city }: { city: string }) {
  return (
    <div className="mb-16 flex items-center justify-center gap-6">
      <div className="h-px w-16 bg-border" />
      <h3 className="text-[11px] uppercase tracking-[0.4em] text-white/75">
        {city}
      </h3>
      <div className="h-px w-16 bg-border" />
    </div>
  );
}

function ResidencyGroup({ group }: { group: BrandGroup }) {
  if (!group.logo || !group.management) return null;
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
    <div className="text-center">
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

      <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-white/75">
        Residencies
      </p>

      <div className="grid grid-cols-2 gap-4">
        {group.venues.map((venue) => {
          const venueUrl = venue.url ?? "";
          const Tag = venueUrl ? "a" : "div";
          const linkProps = venueUrl
            ? { href: venueUrl, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Tag
              key={venue.name}
              {...(linkProps as any)}
              className="group flex h-40 flex-col items-center justify-center border border-border px-6 transition-colors duration-300 hover:border-white/30"
            >
              <Image
                src={venue.logo}
                alt={venue.name}
                width={180}
                height={80}
                className={`mb-3 h-20 w-auto object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${logoFilter(venue.logo)}`}
              />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/75">
                {venue.role}
              </span>
            </Tag>
          );
        })}
      </div>
    </div>
  );
}

function AgencyGroup({ group }: { group: BrandGroup }) {
  return (
    <div className="mt-24 text-center">
      {group.logo && group.management && (
        group.url ? (
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
              className={`w-auto ${group.logo.includes("sole") ? "h-32" : "h-16"} ${
                group.logo.includes("cool-daddy") ? "mix-blend-screen" :
                group.logo.endsWith(".jpg") ? "mix-blend-screen" :
                "[filter:invert(1)_grayscale(1)_brightness(2)] mix-blend-screen"
              }`}
            />
          </a>
        ) : (
          <div className="mb-12 flex h-20 items-center justify-center">
            <Image
              src={group.logo}
              alt={group.management}
              width={240}
              height={80}
              className={`w-auto ${group.logo.includes("sole") ? "h-32" : "h-16"} ${
                group.logo.includes("cool-daddy") ? "mix-blend-screen" :
                group.logo.endsWith(".jpg") ? "mix-blend-screen" :
                "[filter:invert(1)_grayscale(1)_brightness(2)] mix-blend-screen"
              }`}
            />
          </div>
        )
      )}

      <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-white/75">
        {group.label ?? "Bookings"}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {group.venues.map((venue) => {
          const venueUrl = venue.url ?? "";
          const isDouble = venue.size === "double";
          const Tag = venueUrl ? "a" : "div";
          const linkProps = venueUrl
            ? { href: venueUrl, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Tag
              key={venue.name}
              {...(linkProps as any)}
              className="group flex h-48 w-[calc(50%-8px)] flex-col items-center justify-center border border-border px-6 transition-colors duration-300 hover:border-white/30 sm:w-[calc(33.333%-11px)]"
            >
              <Image
                src={venue.logo}
                alt={venue.name}
                width={400}
                height={200}
                className={`max-w-[90%] object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${
                  isDouble ? "h-44" : "h-36"
                } ${
                  venue.logo.includes("notting-hill") ? "mix-blend-screen" :
                  venue.logo.includes("jebel-ali-rec") || venue.logo.includes("helipad") ? "grayscale invert brightness-[2]" :
                  "brightness-0 invert"
                }`}
              />
              {venue.role && venue.role !== "DJ" && (
                <span className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/75">
                  {venue.role}
                </span>
              )}
            </Tag>
          );
        })}
      </div>
    </div>
  );
}

export default function Brands() {
  const allBrands = siteData.brands as readonly BrandGroup[];
  const events = siteData.events as readonly (BrandGroup & { name: string })[];

  const londonBrands = allBrands.filter((g) => g.region === "London");
  const dubaiBrands = allBrands.filter((g) => g.region === "Dubai");
  const dubaiResidencies = dubaiBrands.filter((g) => !g.label);
  const dubaiAgencies = dubaiBrands.filter((g) => g.label);
  const dubaiEvents = events.filter((e) => e.region === "Dubai");

  return (
    <section id="brands" className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-20 text-center text-3xl font-light tracking-wide sm:text-4xl">
          Brands
        </h2>

        {londonBrands.length > 0 && (
          <div className="mb-32">
            <CityHeader city="London" />
            {londonBrands.map((group) => (
              <AgencyGroup key={`london-${group.management ?? group.label}`} group={group} />
            ))}
          </div>
        )}

        <CityHeader city="Dubai" />

        {dubaiResidencies.length > 0 && (
          <div className="mb-24 grid gap-24 md:grid-cols-2">
            {dubaiResidencies.map((group) => (
              <ResidencyGroup key={group.management} group={group} />
            ))}
          </div>
        )}

        {dubaiEvents.map((event) => (
          <div key={event.name} className="mb-24 text-center">
            <div className="mb-12 flex h-32 items-center justify-center">
              {event.url ? (
                <a href={event.url} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
                  <Image
                    src={event.logo!}
                    alt={event.name}
                    width={300}
                    height={120}
                    className="h-28 w-auto grayscale brightness-[2] mix-blend-screen"
                  />
                </a>
              ) : (
                <Image
                  src={event.logo!}
                  alt={event.name}
                  width={300}
                  height={120}
                  className="h-28 w-auto grayscale brightness-[2] mix-blend-screen"
                />
              )}
            </div>

            <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-white/75">
              {event.label}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {event.venues.map((venue) => {
                const venueUrl = venue.url ?? "";
                const Tag = venueUrl ? "a" : "div";
                const linkProps = venueUrl ? { href: venueUrl, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Tag
                    key={venue.name}
                    {...(linkProps as any)}
                    className="group flex h-44 w-[calc(50%-8px)] items-center justify-center border border-border px-6 transition-colors duration-300 hover:border-white/30 sm:w-[calc(25%-12px)]"
                  >
                    <Image
                      src={venue.logo}
                      alt={venue.name}
                      width={300}
                      height={120}
                      className={`max-w-[90%] object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 h-28 ${
                        venue.logo.includes("helipad")
                          ? "[filter:invert(1)_grayscale(1)_brightness(2)] mix-blend-screen"
                          : "brightness-0 invert"
                      }`}
                    />
                  </Tag>
                );
              })}
            </div>
          </div>
        ))}

        {dubaiAgencies.map((agency) => (
          <AgencyGroup key={agency.management} group={agency} />
        ))}
      </div>
    </section>
  );
}
