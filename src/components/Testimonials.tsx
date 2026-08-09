import Image from "next/image";
import { siteData } from "@/data/siteData";

function logoFilter(src: string) {
  if (src.endsWith(".png") || src.endsWith(".jpg") || src.endsWith(".jpeg") || src.endsWith(".avif"))
    return "grayscale brightness-[2] mix-blend-screen";
  return "brightness-0 invert";
}

// Some venues have no working site of their own, so the logo shows unlinked
// rather than as an anchor with no destination.
function LogoLink({ href, children }: { href?: string; children: React.ReactNode }) {
  if (!href) return <span className="inline-block">{children}</span>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-70"
    >
      {children}
    </a>
  );
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
  {"nameUrl" in t ? (
                    <a href={t.nameUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.2em] text-white/75 underline decoration-white/30 underline-offset-2 transition-opacity hover:opacity-70">
                      {t.name}
                    </a>
                  ) : "url" in t && !("logo" in t) ? (
                    <a href={t.url} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.2em] text-white/75 underline decoration-white/30 underline-offset-2 transition-opacity hover:opacity-70">
                      {t.name}
                    </a>
                  ) : (
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/75">
                      {t.name}
                    </span>
                  )}
                  <br />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                    {t.title}
                  </span>
                </div>
                {"logos" in t ? (
                  <div className="flex items-center gap-6">
                    {t.logos.map((l: { src: string; url?: string }) => (
                      <LogoLink key={l.src} href={l.url}>
                        <Image
                          src={l.src}
                          alt={t.title}
                          width={240}
                          height={80}
                          className={`w-auto opacity-60 ${l.src.includes("masti") ? "h-4" : l.src.includes("mais-musica") ? "h-8" : "h-16"} ${logoFilter(l.src)}`}
                        />
                      </LogoLink>
                    ))}
                  </div>
                ) : "logo" in t && (
                  <LogoLink href={"url" in t ? t.url : undefined}>
                    <Image
                      src={t.logo}
                      alt={t.title}
                      width={240}
                      height={80}
                      className={`w-auto opacity-60 ${t.logo.includes("masti") ? "h-4" : t.logo.includes("mais-musica") ? "h-8" : "h-16"} ${logoFilter(t.logo)}`}
                    />
                  </LogoLink>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
