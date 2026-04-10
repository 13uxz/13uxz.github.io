// ============================================================
// 13uxz.com — All site content lives here.
// Edit this file to update your bio, tracks, photos, and links.
// ============================================================

export const siteData = {
  name: "13uxz",
  tagline: "DJ · Producer · London · Dubai",
  email: "13uxz.official@gmail.com",

  bio: [
    "Originally from London, Dave Buckley \"Bucks\" crafts unique and dynamic sets that captivate audiences. Specialising in upscale restaurants and bars, he delivers seamless sets with a keen ear for thoughtful track selection. His passion for music is backed by professional training, including courses with Toolroom and Point Blank Music School, training at Granular DXB, and private tuition with internationally recognized artists.",
    "During his time in Dubai, 13uxz held residencies at Masti, Blue Seafood Asia, Jamavar and Mimi Mei Fair. He regularly performed at corporate events, including a COP28 staff closing party and the Tilal Al Ghaf Real Estate Awards. His preferred genres, Latin, Organic, Afro and Melodic House, shine through not only in his DJ sets but also in his personal remixes, edits and productions released on various record labels.",
    "Now back in London, 13uxz is a versatile DJ that brings extensive experience collaborating with live percussionists and saxophonists, seamlessly integrating live elements into his sets. Career highlights include entertaining 25,000 people during the Dubai Shopping Festival on New Year's Eve, performing at the techno event Modulate at KYO on the Palm, and appearing at Sounds by Laya / Sounds by AKS events. His mixes have been featured on BeatFM as part of a weekly show.",
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
        { title: "Qwenda", label: "Erase Records", artwork: "/photos/art-qwenda.webp", url: "https://www.beatport.com/release/qwenda/5002153", featuredOn: "Desert Voices" },
      ],
      comingSoon: {
        title: "Late Night Text",
        label: "Dyno Records",
        video: "/videos/late-night-coming-soon.mp4",
        labelLogo: "/logos/dyno-records.jpg",
        labelUrl: "https://www.officialdynorecords.com/",
      },
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
    mixcloud: "https://www.mixcloud.com/13uxz/",
    instagram: "https://www.instagram.com/13uxz/",
    linktree: "https://linktr.ee/13uxz",
  },

  teaching: [
    {
      name: "Dubai Sound Academy",
      logo: "/logos/dubai-sound-academy.png",
      url: "https://www.dubaisoundacademy.com/",
      description: "The Middle East's first official Pioneer DJ school, offering private and group lessons in DJing and music production.",
    },
    {
      name: "Original Mix DJs",
      logo: "/logos/original-mix-djs.png",
      url: "https://www.originalmixdjs.com/",
      description: "DJ training and music production courses for kids and teens, including school programmes across Dubai.",
    },
  ],

  events: [
    {
      name: "Sounds by AKS",
      logo: "/logos/sounds-by-aks.jpg",
      url: "https://www.instagram.com/soundsbyaks/",
      label: "Private Event Venues",
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
        { name: "COP28 Closing Party", role: "DJ", logo: "/logos/cop28.svg", url: "https://www.cop28.com/" },
        { name: "Tilal Al Ghaf", role: "DJ", logo: "/logos/tilal-al-ghaf.png", url: "https://www.tilalalghaf.com/" },
        { name: "Destination Insights", role: "DJ", logo: "/logos/destination-insights.png", url: "https://www.destinationinsight.com/" },
        { name: "Inspiratus Brand Experience", role: "DJ", logo: "/logos/inspiratus.png", url: "https://www.inspiratus.com/", size: "double" },
        { name: "Dubai Shopping Festival", role: "DJ", logo: "/logos/dubai-shopping-festival.png", url: "https://www.mydsf.ae/" },
        { name: "Offside Sports Bar", role: "DJ", logo: "/logos/offside.png", url: "https://www.jaresortshotels.com/restaurant-detail/dubai/ja-ocean-view-hotel/offside", size: "double" },
      ],
    },
    {
      management: "Mais Musica",
      logo: "/logos/mais-musica.jpg",
      url: "https://www.maismusica.ae/",
      label: "Agency Bookings",
      venues: [
        { name: "JA Resorts & Hotels", role: "DJ", logo: "/logos/ja-resorts.svg", url: "https://travmedia.com/showPRPreview/100104029" },
        { name: "Jebel Ali Recreation Club", role: "DJ", logo: "/logos/jebel-ali-rec-club.png", url: "https://www.instagram.com/jebelaliclub/" },
      ],
    },
  ],

  testimonials: [
    {
      quote: "I worked with David for over five years, from Masti to bringing him to both our LSL Capital restaurants, Mimi Mei Fair and Jamavar. I never saw David as an external contractor. He was a partner and a core part of the team, always there, always involved, genuinely invested in the music management and audio across all our venues and always putting in extra effort to help grow the business. I trusted him completely to take care of everything music related and never had to worry when he was there.",
      name: "Daniel Miranda",
      title: "Group General Manager, LSL Capital (Mimi Mei Fair & Jamavar) / Masti",
      nameUrl: "https://ae.linkedin.com/in/daniel-miranda-a5a16732/en",
      logos: [
        { src: "/logos/lsl-capital.svg", url: "https://lslcapital.com/" },
        { src: "/logos/masti.avif", url: "https://www.mastidubai.com/" },
      ],
    },
    {
      quote: "David worked with us for several years across multiple venues covering private events, brunches and dinner services, and was one of the best DJs we've had. Great music, smooth flow, and he always knew how to read the room and keep the energy suitable for our guests. Reliable, always available, and happy to help with anything sound related our venues required.",
      name: "Charbel Mhanna",
      title: "CEO, Blackspoon Management",
      logo: "/logos/blackspoon.png",
      url: "https://www.blackspoon.me/",
    },
    {
      quote: "Dave '13uxz' Buckley is an exceptionally talented DJ and producer I've had the pleasure of collaborating with. He's one of the most driven and hardworking artists I've come across, with a constant hunger to learn, connect, and create. He's already delivered one of our standout releases of 2025 on my label, with more strong material on the way. Beyond music, Dave is a person of great character, thoughtful, insightful, and deeply dedicated to his craft. He has all the makings of an artist with limitless potential and a wonderful future ahead.",
      name: "Aritra 'ARIII' Dasgupta",
      title: "Label Founder, Dyno Music Records",
      nameUrl: "https://www.instagram.com/ariii_music_official/",
      logo: "/logos/dyno-records.jpg",
      url: "https://www.officialdynorecords.com/",
    },
    {
      quote: "13UXZ has been a huge part of the journey at Sounds by AKS. From early on, he played a big role in shaping the energy and identity of the brand. His creative style, fresh selection of music, and especially his own productions really stood out and connected strongly with our audience. He brought a unique sound to the floor and consistently delivered sets that people remembered. Artists like him are a big reason Sounds by AKS has grown into what it is today.",
      name: "Karanveer Singh",
      title: "DJ KV5 - AKS and Laya Events",
      nameUrl: "https://www.instagram.com/kvsdxb/",
      logo: "/logos/sounds-by-aks.jpg",
      url: "https://www.instagram.com/soundsbyaks/",
    },
    {
      quote: "I've worked with many artists and DJs over the years, but DJ David stands out. He has a deep understanding of atmosphere and knows exactly what vibe to create, backed by an immense knowledge of music. He reads the motion and flow of any event or restaurant setting and plays accordingly, consistently earning appreciation from guests and colleagues alike.",
      name: "Bhim Gaur",
      title: "Restaurant Manager, Jamavar Dubai",
      logo: "/logos/jamavar.svg",
      url: "https://jamavarrestaurants.com/indian-restaurant-dubai/",
    },
    {
      quote: "DJ David brings the perfect combination of professional communication, an ability to read the room, and was always comfortable with different audiences. Respected by everyone at Masti, guests always commented on his performances and we were sad to see him leave.",
      name: "Joseph Adegoke",
      title: "Manager, Masti Dubai",
      logo: "/logos/masti.avif",
      url: "https://www.mastidubai.com/",
    },
    {
      quote: "DJ David is one of the most refined and sophisticated DJs I've worked with. His music selection, timing, and ability to read the room were perfectly aligned with our restaurant's mood, delivering both elegance and energy at the highest level.",
      name: "Jeet Verma",
      title: "Bar Manager, LSL Capital",
      nameUrl: "https://www.instagram.com/flavour_designer/",
      logo: "/logos/lsl-capital.svg",
      url: "https://lslcapital.com/",
    },
    {
      quote: "Dave attended my music production course, where he showed strong technical ability and a clear focus on sound design. He has a great ear for detail and a solid creative instinct. He's also played at my techno events, delivering well structured sets that connect with the crowd and build energy properly. Reliable, easy to work with, and committed to his craft. I'd happily recommend him for bookings.",
      name: "Kevisen",
      title: "DJ, Cattaree",
      url: "https://www.instagram.com/cattareemusic/",
    },
    {
      quote: "An incredibly versatile DJ with the ability to deliver open format, house classics, and upfront sets.",
      name: "Jon Besant",
      title: "Partner, Mais Musica",
      nameUrl: "https://www.instagram.com/jonbesant/",
      logo: "/logos/mais-musica.jpg",
      url: "https://www.maismusica.ae/",
    },
    {
      quote: "Sharing the stage with 13uxz was a great experience. As a percussionist, I really value his musical sensitivity and his ability to connect with the audience in real time. The dynamic between DJ and percussionist is really important and flowed naturally, making every performance feel authentic and full of energy.",
      name: "Osmany Ramirez Varona",
      title: "Percussionist, Miti Percussion",
      url: "https://www.instagram.com/miti_percussion/",
    },
    {
      quote: "I've had the chance to share the same space at Mimi Mei Fair with David, and even without fully overlapping, his presence and musical awareness were always noticeable. He really knows how to read a room and create the right energy. Definitely someone who adds value wherever he plays.",
      name: "DJ Miss Rich",
      title: "DJ",
      nameUrl: "https://www.instagram.com/djmissnaiararich/",
    },
  ],

  labels: [
    { name: "Cafe De Anatolia", logo: "/logos/cafe-de-anatolia.jpg", url: "https://cafe-de-anatolia.com/", invert: true },
    { name: "Soviett Records", logo: "/logos/soviett.jpg", url: "https://www.beatport.com/label/soviett/61640", invert: false },
    { name: "Dyno Records", logo: "/logos/dyno-records.jpg", url: "https://www.officialdynorecords.com/", invert: false },
    { name: "Nova Mova Records", logo: "/logos/nova-mova.jpg", url: "https://www.beatport.com/label/nova-mova/105198", invert: true },
    { name: "Erase Records", logo: "/logos/erase-records.jpg", url: "https://www.beatport.com/label/erase-records/1065", invert: false },
    { name: "Browing", logo: "/logos/browing.png", url: "https://browingrecords.com/", invert: true },
    { name: "Mystic Carousel", logo: "/logos/mystic-carousel.jpg", url: "https://www.beatport.com/label/mystic-carousel-records/32044", invert: false },
  ],

  soundcloudUrl: "https://soundcloud.com/13uxz",
} as const;
