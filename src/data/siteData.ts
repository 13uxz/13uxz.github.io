// ============================================================
// 13uxz.com — All site content lives here.
// Edit this file to update your bio, tracks, photos, and links.
// ============================================================

export const siteData = {
  name: "13uxz",
  tagline: "DJ · Producer · London · Dubai",
  email: "13uxz.official@gmail.com",

  bio: [
    "Originally from London, Dave Buckley \"Bucks\" crafts unique and dynamic sets that captivate audiences. With a library of over 13,000 tracks spanning multiple genres, he delivers seamless mixes with a keen ear for thoughtful track selection. His passion for music is backed by professional training, including courses at Granular DXB, Toolroom and Point Blank Music School, as well as private tuition with internationally recognized artists.",
    "During his time in Dubai, 13uxz held a successful two-year residency at Masti, followed by residencies at Jamavar and Mimi Meifair. He regularly performed at corporate events, including a COP28 staff closing party and the Tilal Al Ghaf Real Estate Awards. His preferred genres, Afrohouse and Melodic Techno/House, shine through not only in his DJ sets but also in his personal remixes, edits and productions released on various record labels.",
    "Now back in London, 13uxz brings extensive experience collaborating with live percussionists and saxophonists, seamlessly integrating live elements into his sets. Career highlights include entertaining 25,000 people during the Dubai Shopping Festival on New Year's Eve, performing at the techno event Modulate at KYO on the Palm, and appearing at Sounds by Laya / Sounds by AKS events. His mixes have been featured on BeatFM as part of a weekly show.",
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
    { src: "/photos/rooftop-set.webp", alt: "13uxz rooftop DJ set" },
    { src: "/photos/blue-light-set.png", alt: "13uxz performing under blue lights", position: "object-[center_15%]" },
    { src: "/photos/record-store.png", alt: "13uxz browsing vinyl at a record store" },
    { src: "/photos/venue-set.png", alt: "13uxz DJ set at venue" },
    { src: "/photos/backstage-crew.png", alt: "13uxz backstage with fellow DJs" },
    { src: "/photos/studio-producing.png", alt: "13uxz producing in the studio on Ableton" },
  ],

  socials: {
    spotify: "https://open.spotify.com/artist/2Es179UXrz8RKShF3HrEXl",
    beatport: "https://www.beatport.com/artist/13uxz/1166973",
    soundcloud: "https://soundcloud.com/13uxz",
    instagram: "https://www.instagram.com/13uxz/",
    linktree: "https://linktr.ee/13uxz",
  },

  events: [
    {
      name: "Sounds by AKS",
      logo: "/logos/sounds-by-aks.jpg",
      label: "Private Events",
      venues: [
        { name: "Helipad by Frozen Cherry", logo: "/logos/helipad.png" },
        { name: "Atelier M at Pier 7", logo: "/logos/atelier-m.svg", url: "https://atelierm.ae/" },
        { name: "Zero Gravity", logo: "/logos/zero-gravity.svg", url: "https://www.0-gravity.ae/" },
        { name: "Dubai Marina Yacht Club", logo: "/logos/dubai-marina-yacht-club.svg", url: "https://www.dubaimarinayachtclub.com/" },
      ],
    },
  ],

  brands: [
    {
      management: "Blackspoon Management",
      logo: "/logos/blackspoon.png",
      url: "https://www.blackspoon.me/",
      venues: [
        { name: "Blue Seafood Asia", role: "Resident DJ", logo: "/logos/blue-seafood-asia.png" },
        { name: "Masti", role: "Resident DJ", logo: "/logos/masti.avif", url: "https://www.mastidubai.com/" },
      ],
    },
    {
      management: "LSL Capital",
      logo: "/logos/lsl-capital.svg",
      url: "https://lslcapital.com/",
      venues: [
        { name: "Jamavar Dubai", role: "Resident DJ", logo: "/logos/jamavar.svg", url: "https://jamavarrestaurants.com/indian-restaurant-dubai/" },
        { name: "Mimi Mei Fair Dubai", role: "Resident DJ", logo: "/logos/mimi-mei-fair.svg", url: "https://mimimeifair.com/asian-chinese-restaurant-dubai/" },
      ],
    },
    {
      management: "Sole Agency",
      logo: "/logos/sole-agency.png",
      url: "https://sole-agency.com/",
      label: "Agency Bookings",
      venues: [
        { name: "UAE Consensus", role: "DJ", logo: "/logos/cop28.svg", url: "https://www.cop28.com/" },
        { name: "Tilal Al Ghaf", role: "DJ", logo: "/logos/tilal-al-ghaf.png", url: "https://www.tilalalghaf.com/" },
        { name: "Destination Insights", role: "DJ", logo: "/logos/destination-insights.png", url: "https://www.destinationinsight.com/" },
        { name: "Inspiratus Brand Experience", role: "DJ", logo: "/logos/inspiratus.png", url: "https://www.inspiratus.com/" },
        { name: "Dubai Shopping Festival", role: "DJ", logo: "/logos/dubai-shopping-festival.png", url: "https://www.mydsf.ae/" },
        { name: "Offside Sports Bar", role: "DJ", logo: "/logos/offside.png", url: "https://www.jaresortshotels.com/restaurant-detail/dubai/ja-ocean-view-hotel/offside" },
      ],
    },
    {
      management: "Mais Musica",
      logo: "/logos/mais-musica.jpg",
      url: "https://www.maismusica.ae/",
      label: "Agency Bookings",
      venues: [
        { name: "JA Resorts & Hotels", role: "DJ", logo: "/logos/ja-resorts.svg", url: "https://www.jaresortshotels.com/" },
        { name: "Jebel Ali Clubhouse", role: "DJ", logo: "/logos/ja-resorts.svg", url: "https://www.jaresortshotels.com/" },
      ],
    },
  ],

  labels: [
    { name: "Cafe De Anatolia", logo: "/logos/cafe-de-anatolia.jpg", url: "https://www.beatport.com/label/cafe-de-anatolia/86029", invert: true },
    { name: "Soviett Records", logo: "/logos/soviett.jpg", url: "https://www.beatport.com/label/soviett/87498", invert: false },
    { name: "Dyno Records", logo: "/logos/dyno-records.jpg", url: "https://www.beatport.com/label/dyno-records/148595", invert: false },
    { name: "Nova Mova Records", logo: "/logos/nova-mova.jpg", url: "https://www.beatport.com/label/nova-mova/105198", invert: true },
    { name: "Erase Records", logo: "/logos/erase-records.jpg", url: "https://www.beatport.com/label/erase-records/16498", invert: false },
    { name: "Browing", logo: "/logos/browing.png", url: "https://browingrecords.com/", invert: true },
    { name: "Mystic Carousel", logo: "/logos/mystic-carousel.jpg", url: "https://www.beatport.com/label/mystic-carousel-records/32044", invert: false },
  ],

  soundcloudUrl: "https://soundcloud.com/13uxz",
} as const;
