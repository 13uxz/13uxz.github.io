"use client";

import { siteData } from "@/data/siteData";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    );

    window.location.href = `mailto:${siteData.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="bookings" className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-14 text-center text-3xl font-light tracking-wide sm:text-4xl">
          Bookings
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <input
            name="name"
            type="text"
            required
            placeholder="Name"
            className="border-b border-border bg-transparent py-4 text-[14px] text-foreground placeholder:text-accent/60 focus:border-white focus:outline-none"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="border-b border-border bg-transparent py-4 text-[14px] text-foreground placeholder:text-accent/60 focus:border-white focus:outline-none"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Message"
            className="resize-none border-b border-border bg-transparent py-4 text-[14px] text-foreground placeholder:text-accent/60 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="mt-2 self-center bg-white px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-80"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
