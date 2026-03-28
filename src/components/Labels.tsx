import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Labels() {
  return (
    <section className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-3xl font-light tracking-wide sm:text-4xl">
          Labels
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {siteData.labels.map((label) => {
            const filter = label.invert
              ? "invert mix-blend-screen"
              : "mix-blend-screen";
            return (
              <a
                key={label.name}
                href={label.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-36 w-[calc(50%-12px)] items-center justify-center border border-border px-6 transition-colors duration-300 hover:border-white/30 sm:w-[calc(33.333%-16px)] md:w-[calc(25%-18px)]"
              >
                <Image
                  src={label.logo}
                  alt={label.name}
                  width={200}
                  height={100}
                  className={`h-20 w-auto max-w-[85%] object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${filter}`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
