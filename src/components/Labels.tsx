import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Labels() {
  return (
    <section className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-3xl font-light tracking-wide sm:text-4xl">
          Labels
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {siteData.labels.map((label) => (
            <div
              key={label.name}
              className="group flex h-36 items-center justify-center border border-border px-6 transition-colors duration-300 hover:border-white/30"
            >
              <Image
                src={label.logo}
                alt={label.name}
                width={200}
                height={100}
                className="h-20 w-auto max-w-[85%] object-contain mix-blend-screen opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
