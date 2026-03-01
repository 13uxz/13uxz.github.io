import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Bio() {
  return (
    <section id="about" className="px-6 py-32 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.2fr] md:items-center">
        {/* Portrait */}
        <div className="relative w-full overflow-hidden">
          <Image
            src="/photos/press-hoodie.webp"
            alt="13uxz"
            width={800}
            height={1067}
            className="h-auto w-full"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="mb-10 text-3xl font-light tracking-wide sm:text-4xl">
            Biography
          </h2>
          {siteData.bio.map((paragraph, i) => (
            <p
              key={i}
              className="mb-5 text-[15px] leading-[1.8] text-accent last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
