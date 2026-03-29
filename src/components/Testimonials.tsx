import { siteData } from "@/data/siteData";

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
              <footer className="mt-8">
                <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
                  {t.name}
                </span>
                <br />
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent/60">
                  {t.title}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
