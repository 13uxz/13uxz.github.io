# 13uxz.com — Product Requirements Document

## Overview

A premium single-page landing site for **13uxz**, a DJ & producer. The site serves as a professional online presence — a clean, minimal hub where promoters, fans, and industry contacts can learn about the artist, listen to music, view photos, and get in touch.

## Goals

- Establish a polished, credible online brand presence
- Make it dead simple for visitors to find and play music (Beatport, SoundCloud)
- Provide a frictionless way for promoters/venues to reach out via contact form
- Look great on mobile and desktop

## Non-Goals

- E-commerce / merch store
- Blog or news feed
- User accounts or authentication
- CMS or admin panel (content is hardcoded, updated via code)

## Target Audience

1. **Promoters & venue bookers** — looking for a professional artist to book
2. **Fans** — want to find music links and follow the artist
3. **Industry contacts** — labels, collaborators, press

## Site Structure (Single Page)

### 1. Hero Section
- Large, impactful header with artist name "13uxz"
- Short tagline or one-liner
- Subtle background (gradient or dark texture)
- CTA button scrolling to music or contact

### 2. Bio Section
- Artist photo (placeholder until real assets provided)
- 2-3 paragraph biography
- Clean typography, generous whitespace

### 3. Music Section
- List of Beatport track links — each clickable, opening in new tab
- Embedded SoundCloud player or link to SoundCloud profile
- Clean card or list layout for tracks

### 4. Photos Section
- Grid of DJ/performance photos (placeholders initially)
- Responsive grid: 2 cols on mobile, 3 on desktop
- Lightbox optional (future enhancement)

### 5. Contact Section
- Simple form: Name, Email, Message
- Submits to artist's email address
- Success/error feedback after submission
- Alternative: mailto link as fallback

### 6. Footer
- Social media links (SoundCloud, Beatport, Instagram, etc.)
- Copyright notice
- Minimal design

## Design Direction

- **Aesthetic**: Clean, professional, minimal
- **Color palette**: Dark background (#0a0a0a / near-black), white text, one subtle accent color
- **Typography**: Modern sans-serif (Geist Sans already configured)
- **Spacing**: Generous padding and whitespace between sections
- **Responsiveness**: Mobile-first, fully responsive
- **Animations**: Subtle — fade-ins on scroll, smooth scrolling between sections

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Geist Sans + Geist Mono (via next/font)
- **Deployment**: Vercel
- **Contact form**: Next.js API route (sends email) or client-side mailto fallback

## Content (Placeholder)

All text content, track links, and images use placeholder values. The site is designed so the artist can easily swap in real content by editing a single data file or component.

## Success Criteria

- Site loads in under 2 seconds on mobile
- All Beatport links open correctly in new tabs
- Contact form successfully sends messages
- Fully responsive across phone, tablet, desktop
- Looks professional enough to share with promoters and labels
