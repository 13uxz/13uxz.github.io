import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/photos/hero.jpg"
        alt="13uxz"
        fill
        className="object-cover object-top brightness-[0.35] md:hidden"
        priority
      />

      {/* Gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-4 text-[13px] uppercase tracking-[0.4em] text-accent">
          DJ &middot; Producer &middot; London
        </p>
        <h1 className="font-mono text-7xl font-bold tracking-[0.35em] sm:text-[120px] sm:leading-none">
          13UXZ
        </h1>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="#about"
            className="bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-80"
          >
            Biography
          </a>
          <a
            href="#gallery"
            className="border border-white/30 px-7 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-white hover:bg-white/5"
          >
            Gallery
          </a>
          <a
            href="#music"
            className="border border-white/30 px-7 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-white hover:bg-white/5"
          >
            Music
          </a>
          <a
            href="#bookings"
            className="border border-white/30 px-7 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-white hover:bg-white/5"
          >
            Bookings
          </a>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
