"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xwpkgpjr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="bookings" className="px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-14 text-center text-3xl font-light tracking-wide sm:text-4xl">
          Bookings
        </h2>

        {status === "sent" ? (
          <div className="text-center">
            <p className="text-lg font-light">Message sent!</p>
            <p className="mt-2 text-[13px] text-accent">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 border border-white/30 px-7 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-white hover:bg-white/5"
            >
              Send another
            </button>
          </div>
        ) : (
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
              disabled={status === "sending"}
              className="mt-2 self-center bg-white px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-80 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-center text-[13px] text-red-400">
                Something went wrong. Please try again or email directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
