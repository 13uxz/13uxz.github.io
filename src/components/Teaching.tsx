import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Teaching() {
  return (
    <section id="teaching" className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-16 text-3xl font-light tracking-wide sm:text-4xl">
          Teaching
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {siteData.teaching.map((school) => {
            const Tag = school.url ? "a" : "div";
            const linkProps = school.url
              ? { href: school.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Tag
                key={school.name}
                {...linkProps}
                className="group flex h-48 w-[calc(50%-8px)] items-center justify-center border border-border px-6 transition-colors duration-300 hover:border-white/30 sm:w-[calc(33.333%-11px)]"
              >
                <Image
                  src={school.logo}
                  alt={school.name}
                  width={300}
                  height={120}
                  className="h-28 max-w-[90%] object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen"
                />
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
