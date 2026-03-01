import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Photos() {
  return (
    <section id="photos" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center font-mono text-sm tracking-[0.2em] text-accent">
          PHOTOS
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {siteData.photos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
