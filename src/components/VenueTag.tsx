import { venues } from "@/data/siteData";

function PinIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 translate-y-[0.5px]"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/**
 * Venue credit for a video or mix, shown as a location pin plus the venue name.
 * Links to the venue's site when one is listed in siteData `venues`.
 * Inherits size and colour from the parent so it drops into any tag line.
 */
export default function VenueTag({ name }: { name: string }) {
  const url = venues[name];

  if (!url) {
    return (
      <span className="inline-flex items-center gap-1">
        <PinIcon />
        {name}
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${name} website`}
      className="inline-flex items-center gap-1 transition-colors duration-300 hover:text-white"
    >
      <PinIcon />
      {name}
    </a>
  );
}
