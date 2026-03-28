import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function PhotoBreak() {
  return (
    <div className="px-6 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {siteData.photos.map((photo, i) => (
          <div key={i} className="group relative aspect-square overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
