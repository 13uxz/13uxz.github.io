import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function PhotoBreak() {
  return (
    <div className="px-6 py-16 sm:px-8">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6">
        {siteData.photos.map((photo, i) => (
          <div key={i} className="relative aspect-square overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
