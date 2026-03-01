// ============================================================
// 13uxz.com — All site content lives here.
// Edit this file to update your bio, tracks, photos, and links.
// ============================================================

export const siteData = {
  name: "13uxz",
  tagline: "DJ · Producer · Dubai",
  email: "13uxz.official@gmail.com",

  bio: [
    "13uxz crafts unique and dynamic sets that captivate audiences. With a library of over 13,000 tracks spanning multiple genres, he delivers seamless mixes with a keen ear for thoughtful track selection. His passion for music is backed by professional training, including courses at Granular DXB, Toolroom and Point Blank Music School, as well as private tuition with internationally recognized artists.",
    "Following a successful two-year residency at Masti, 13uxz now holds residencies at Jamavar and Mimi Meifair. He regularly performs at corporate events, including a COP28 staff closing party and the Tilal Al Ghaf Real Estate Awards. His preferred genres, Afrohouse and Melodic Techno/House, shine through not only in his DJ sets but also in his personal remixes, edits and productions released on various record labels.",
    "13uxz brings extensive experience collaborating with live percussionists and saxophonists, seamlessly integrating live elements into his sets. Career highlights include entertaining 25,000 people during the Dubai Shopping Festival on New Year's Eve, performing at the techno event Modulate at KYO on the Palm, and appearing at Sounds by Laya / Sounds by AKS events. His mixes have been featured on BeatFM as part of a weekly show.",
  ],

  featured: {
    title: "Dua Lipa - Love Again (13uxz & Rico Mannion Edit)",
    artwork: "/photos/art-love-again.jpg",
    url: "https://soundcloud.com/13uxz/dua-lipa-love-again-13uxz-rico-mannion-edit",
  },

  // Releases grouped by genre
  releasesByGenre: [
    {
      genre: "Afrohouse",
      tracks: [
        { title: "Paradise", label: "Cafe De Anatolia", artwork: "/photos/art-paradise.webp", url: "https://www.beatport.com/track/paradise/22334794" },
        { title: "Tulia", label: "Cafe De Anatolia", artwork: "/photos/art-tulia.webp", url: "https://www.beatport.com/track/tulia/22334795" },
        { title: "Qwenda", label: "Erase Records", artwork: "/photos/art-qwenda.webp", url: "https://www.beatport.com/release/qwenda/5002153" },
      ],
    },
    {
      genre: "Melodic House / Techno",
      tracks: [
        { title: "Nightcrawling", label: "Cafe De Anatolia", artwork: "/photos/art-nightcrawling.webp", url: "https://www.beatport.com/track/nightcrawling/22334796" },
        { title: "Lost", label: "Cafe De Anatolia", artwork: "/photos/art-lost.webp", url: "https://www.beatport.com/track/lost/22334793" },
      ],
    },
    {
      genre: "Organic House",
      banner: { src: "/photos/art-best-of-novamova.webp", title: "Best of Nova Mova 2025", url: "https://www.beatport.com/release/nova-mova-the-best-of-2025/5629824" },
      tracks: [
        { title: "Connection", label: "Nova Mova", artwork: "/photos/art-connection.webp", url: "https://www.beatport.com/track/connection/21279547" },
        { title: "Breath", label: "Nova Mova", artwork: "/photos/art-connection.webp", url: "https://www.beatport.com/track/breath/21279548" },
      ],
    },
    {
      genre: "Progressive",
      tracks: [
        { title: "Incognito", label: "Dyno Records", artwork: "/photos/art-incognito.webp", url: "https://www.beatport.com/release/incognito/5534266" },
      ],
    },
    {
      genre: "Techno",
      tracks: [
        { title: "Zenith", label: "SOVIETT", artwork: "/photos/art-zenith.webp", url: "https://www.beatport.com/track/zenith/18353682" },
      ],
    },
  ],

  photos: [
    { src: "/photos/rooftop-set.webp", alt: "13uxz rooftop DJ set in Dubai" },
    { src: "/photos/bio.jpg", alt: "13uxz portrait" },
  ],

  socials: {
    spotify: "https://open.spotify.com/artist/2Es179UXrz8RKShF3HrEXl",
    beatport: "https://www.beatport.com/artist/13uxz/1166973",
    soundcloud: "https://soundcloud.com/13uxz",
    instagram: "https://www.instagram.com/13uxz/",
    linktree: "https://linktr.ee/13uxz",
  },

  soundcloudUrl: "https://soundcloud.com/13uxz",
} as const;
