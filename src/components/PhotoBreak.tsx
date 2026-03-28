import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function PhotoBreak() {
  return (
    <section id="gallery" className="px-6 py-32 sm:px-8">
      <h2 className="mb-16 text-center text-3xl font-light tracking-wide sm:text-4xl">
        Gallery
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {siteData.photos.map((photo, i) => (
          <div
            key={i}
            className="group relative aspect-square overflow-hidden"
            style={"bg" in photo ? { backgroundColor: photo.bg as string } : undefined}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={`transition-transform duration-700 group-hover:scale-105 ${"fit" in photo ? "object-contain" : "object-cover"} ${"position" in photo ? photo.position : "object-center"}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
