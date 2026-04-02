import Image from "next/image";
import { siteData } from "@/data/siteData";

function logoFilter(src: string) {
  if (src.endsWith(".png") || src.endsWith(".jpg") || src.endsWith(".jpeg") || src.endsWith(".avif"))
    return "grayscale brightness-[2] mix-blend-screen";
  return "brightness-0 invert";
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-3xl font-light tracking-wide sm:text-4xl">
          Testimonials
        </h2>

        <div className="flex flex-col gap-16">
          {siteData.testimonials.map((t) => (
            <blockquote key={t.name} className="text-center">
              <p className="text-[15px] leading-[1.8] text-foreground italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-8 flex flex-col items-center gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/75">
                    {t.name}
                  </span>
                  <br />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                    {t.title}
                  </span>
                </div>
                {"logo" in t && (
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-70"
                  >
                    <Image
                      src={t.logo}
                      alt={t.title}
                      width={240}
                      height={80}
                      className={`h-16 w-auto opacity-60 ${logoFilter(t.logo)}`}
                    />
                  </a>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
