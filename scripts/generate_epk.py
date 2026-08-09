"""Generate the 13uxz Electronic Press Kit PDF.

    pip install reportlab pillow
    python scripts/generate_epk.py

Writes public/13uxz-press-kit.pdf, the file the Download PDF button on /epk
serves. Bookers read this PDF, so a stale one is worse than a stale page.

The content here is hand-mirrored from the site and nothing enforces that:

    src/data/siteData.ts      bio, releases, brands, testimonials, labels
    src/app/epk/page.tsx      section order, highlights, mixes and videos
    src/components/Music.tsx  video and Mixcloud embeds

So after changing any of those, re-run this and commit the regenerated PDF.
It has drifted before: in August 2026 the PDF was missing both Buddha Bar
videos and all three Buddha Bar Mixcloud sets that the page already had.

Keep this script in the repo. An earlier generator lived outside version
control and was lost, leaving a committed PDF nothing on disk could rebuild.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image as RLImage, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from PIL import Image as PILImage
import os, tempfile

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT = os.path.join(SITE, "public", "13uxz-press-kit.pdf")
PHOTOS = os.path.join(SITE, "public", "photos")

BG = HexColor('#050505')
TEXT = HexColor('#f0f0f0')
TEXT_DIM = HexColor('#999999')
TEXT_FAINT = HexColor('#666666')
LINK = '#6699cc'
DIVIDER = HexColor('#1a1a1a')
W, H = A4

def to_jpg(path, max_w=None, max_h=None):
    img = PILImage.open(path)
    if img.mode in ('RGBA', 'P', 'LA'):
        bg = PILImage.new('RGB', img.size, (5, 5, 5))
        if img.mode == 'P':
            img = img.convert('RGBA')
        bg.paste(img, mask=img.split()[-1] if 'A' in img.mode else None)
        img = bg
    elif img.mode != 'RGB':
        img = img.convert('RGB')
    if max_w or max_h:
        img.thumbnail((max_w or 9999, max_h or 9999), PILImage.LANCZOS)
    tmp = tempfile.NamedTemporaryFile(suffix='.jpg', delete=False)
    img.save(tmp.name, 'JPEG', quality=90)
    return tmp.name

def bg_canvas(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(BG)
    canvas.rect(0, 0, W, H, fill=1, stroke=0)
    canvas.restoreState()

# Styles
s_epk_label = ParagraphStyle('EPKLabel', fontName='Helvetica', fontSize=7, textColor=TEXT_FAINT, leading=10)
s_title = ParagraphStyle('Title', fontName='Courier-Bold', fontSize=36, textColor=TEXT, leading=42, spaceAfter=4)
s_tagline = ParagraphStyle('Tagline', fontName='Helvetica', fontSize=10, textColor=TEXT_DIM, spaceAfter=2, leading=14)
s_section = ParagraphStyle('Section', fontName='Helvetica', fontSize=9, textColor=TEXT_DIM, spaceAfter=8, leading=12, spaceBefore=4)
s_body = ParagraphStyle('Body', fontName='Helvetica', fontSize=9, textColor=HexColor('#b0b0b0'), leading=16, spaceAfter=8)
s_item = ParagraphStyle('Item', fontName='Helvetica', fontSize=9, textColor=HexColor('#cccccc'), leading=14, spaceAfter=2)
s_sub = ParagraphStyle('Sub', fontName='Helvetica', fontSize=8, textColor=TEXT_FAINT, leading=11, spaceAfter=3, spaceBefore=6)
s_quote = ParagraphStyle('Quote', fontName='Helvetica-Oblique', fontSize=8.5, textColor=HexColor('#909090'), leading=14, spaceAfter=2, leftIndent=12)
s_quote_attr = ParagraphStyle('QuoteAttr', fontName='Helvetica-Bold', fontSize=8, textColor=HexColor('#cccccc'), leading=11, leftIndent=12, spaceAfter=10)
s_footer = ParagraphStyle('Footer', fontName='Courier-Bold', fontSize=10, textColor=TEXT_DIM, alignment=TA_CENTER, leading=14)
s_footer_sm = ParagraphStyle('FooterSm', fontName='Helvetica', fontSize=7, textColor=TEXT_FAINT, alignment=TA_CENTER, leading=10)
s_link = ParagraphStyle('Link', fontName='Helvetica', fontSize=9, textColor=HexColor('#cccccc'), leading=14, spaceAfter=2)

story = []

def add_divider():
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=0.5, color=DIVIDER, spaceAfter=8))

def section_label(text):
    story.append(Paragraph(text.upper(), s_section))

def linked_row(title, href, action, note=None):
    """A media row: bold title, faint note, then a clickable action word."""
    extra = '  <font color="#666666" size="7.5">%s</font>' % note if note else ''
    story.append(Paragraph(
        '<b>%s</b>%s  <a href="%s" color="%s">%s</a>' % (title, extra, href, LINK, action),
        s_item))

# ── Header + Bio + Gallery ──
story.append(Paragraph("ELECTRONIC PRESS KIT", s_epk_label))
story.append(Spacer(1, 4))
story.append(Paragraph("13UXZ", s_title))
story.append(Paragraph("DJ  \xb7  Producer  \xb7  London  \xb7  Dubai", s_tagline))
story.append(Spacer(1, 2))
story.append(Paragraph("13uxz.official@gmail.com  |  +44 7345 847418  |  +971 50 301 9926  |  13uxz.com",
                       ParagraphStyle('ci', fontName='Helvetica', fontSize=8, textColor=TEXT_FAINT, leading=12)))
story.append(Spacer(1, 12))
add_divider()

section_label("Biography")

press_jpg = to_jpg(os.path.join(PHOTOS, 'press-hoodie.webp'), max_w=1400, max_h=1400)
story.append(RLImage(press_jpg, width=70*mm, height=50*mm, kind='proportional'))
story.append(Spacer(1, 8))

# Matches siteData.bio
bio = [
    'Originally from London, Dave Buckley "Bucks" seamlessly programmes sets for upscale restaurants, bars and lounges, carrying a room from early evening through dinner to late night service. He has extensive experience integrating live percussionists and saxophonists into his sets. His background includes courses with Toolroom and Point Blank Music School, training at Granular DXB, and private tuition with internationally recognised artists.',
    'In Dubai, 13uxz held residencies at Masti, Blue Seafood Asia, Jamavar and Mimi Mei Fair, and performed regularly at corporate events including a COP28 staff closing party and the Tilal Al Ghaf Real Estate Awards. Latin, Organic, Afro and Melodic House are his preferred genres, running through his DJ sets as well as the remixes, edits and productions released on labels such as Cafe De Anatolia, Nova Mova and Dyno Records.',
    'Having recently returned to London, 13uxz\u2019s first performances included Notting Hill Arts Club, followed by residencies at Aki London and Kiyori. Career highlights include playing to 25,000 people at the Dubai Shopping Festival on New Year\u2019s Eve, the techno event Modulate at KYO on the Palm, and Sounds by Laya and Sounds by AKS events. His mixes have been featured on BeatFM as part of a weekly show.',
]
for p_text in bio:
    story.append(Paragraph(p_text, s_body))

add_divider()

section_label("Gallery")
# Matches siteData.photos
gallery_files = ['rooftop-set.webp', 'blue-light-set.png', 'record-store.png', 'venue-set.png', 'backstage-crew.png', 'studio-producing.png']
gallery_imgs = []
for fname in gallery_files:
    path = os.path.join(PHOTOS, fname)
    if os.path.exists(path):
        jpg = to_jpg(path, max_w=1000, max_h=1000)
        gallery_imgs.append(RLImage(jpg, width=52*mm, height=35*mm, kind='proportional'))

for i in range(0, len(gallery_imgs), 3):
    row = gallery_imgs[i:i+3]
    t = Table([row], colWidths=[55*mm]*len(row))
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), BG),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 1),
        ('RIGHTPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t)

# ── Discography ──
add_divider()
section_label("Discography")

# Matches siteData.releasesByGenre
releases = [
    ("Afrohouse", None, [
        ("Late Night Text", "Dyno Records", "https://www.beatport.com/track/late-night-text/28421161", "Latest Release"),
        ("Paradise", "Cafe De Anatolia", "https://www.beatport.com/track/paradise/22334794", None),
        ("Tulia", "Cafe De Anatolia", "https://www.beatport.com/track/tulia/22334795", None),
        ("Qwenda", "Erase Records", "https://www.beatport.com/release/qwenda/5002153", "Featured on Desert Voices"),
    ]),
    ("Melodic House / Techno", None, [
        ("Nightcrawling", "Cafe De Anatolia", "https://www.beatport.com/track/nightcrawling/22334796", None),
        ("Lost", "Cafe De Anatolia", "https://www.beatport.com/track/lost/22334793", None),
    ]),
    ("Organic House", ("Best of Nova Mova 2025", "https://www.beatport.com/release/nova-mova-the-best-of-2025/5629824"), [
        ("Connection", "Nova Mova", "https://www.beatport.com/track/connection/21279547", None),
        ("Breath", "Nova Mova", "https://www.beatport.com/track/breath/21279548", None),
    ]),
    ("Progressive", None, [
        ("Incognito", "Dyno Records", "https://www.beatport.com/release/incognito/5534266", None),
    ]),
    ("Techno", None, [
        ("Zenith", "SOVIETT", "https://www.beatport.com/track/zenith/18353682", None),
    ]),
]

for genre, banner, tracks in releases:
    story.append(Paragraph(genre, s_sub))
    if banner:
        story.append(Paragraph('<i>Featured on <a href="%s" color="%s">%s</a></i>' % (banner[1], LINK, banner[0]),
                               ParagraphStyle('bn', fontName='Helvetica', fontSize=7.5, textColor=TEXT_FAINT, leading=11, spaceAfter=3)))
    for title, label, url, note in tracks:
        tag = '  <font color="#666666" size="7.5">%s</font>' % note if note else ''
        story.append(Paragraph(
            '<b><a href="%s" color="#cccccc">%s</a></b>%s  <font color="#666666">%s</font>' % (url, title, tag, label),
            ParagraphStyle('tr', fontName='Helvetica', fontSize=9, textColor=HexColor('#cccccc'), leading=14, spaceAfter=1)))

# ── Mixes & Videos ──
add_divider()
section_label("Mixes & Videos")

# Aki set leads: it is a full run through of a night, so it stands as the flagship.
# The warm up and dining sets follow it in running order as the detailed components.
story.append(Paragraph("Video Sets", s_sub))
for title, href, note in [
    ("Aki Live, Buddha Bar Inspired Mix", "https://drive.google.com/file/d/1gxE_42TpyFseYg0IXc4Ql5g0FJJ0-NYH/view", "Full evening, downtempo to peak"),
    ("Buddha Bar Inspired Dining", "https://drive.google.com/file/d/1hlpsIkM21NxFDlxBdmJdTB1lJkAPbo60/view", "Dinner service"),
    ("Afro Latin Rooftop Sessions", "https://drive.google.com/file/d/1B0_o5_ANJrTH2P5P87v0TIDiPUsGcnSN/view", None),
    ("Afro Organic Lounge", "https://drive.google.com/file/d/1wfH6cjxNBdfSuqcUz2ekZI4Oehp9FdDD/view", None),
]:
    linked_row(title, href, "Watch", note)

story.append(Paragraph("Mixcloud Sets", s_sub))
for title, slug, note in [
    ("Aki Live, Buddha Bar Inspired Mix", "aki-live-buddha-bar-inspired-mix", "Full evening, downtempo to peak"),
    ("Buddha Bar Inspired Downtempo Warm Up", "buddha-bar-warm-up", "Early evening"),
    ("Buddha Bar Inspired Dining", "buddha-bar", "Dinner service"),
    ("Afro Latin Rooftop Sessions", "afro-latin-rooftop-sessions", None),
    ("Funky Disco Lounge Set", "funky-disco-lounge-set", None),
    ("Afro Organic Lounge", "afro-organic-lounge", None),
]:
    linked_row(title, "https://www.mixcloud.com/13uxz/%s/" % slug, "Listen", note)

story.append(Paragraph("Featured Edit", s_sub))
linked_row("Dua Lipa - Love Again (13uxz & Rico Mannion Edit)",
           "https://soundcloud.com/13uxz/dua-lipa-love-again-13uxz-rico-mannion-edit", "Listen")

story.append(Paragraph("Interview", s_sub))
linked_row("Dyno Records Podcast", "https://www.youtube.com/watch?v=32yGbfEoPQ0", "Watch")

story.append(Spacer(1, 2))
story.append(Paragraph('All mixes at <a href="https://www.mixcloud.com/13uxz/" color="%s">mixcloud.com/13uxz</a>' % LINK,
                       ParagraphStyle('mn', fontName='Helvetica', fontSize=7.5, textColor=TEXT_FAINT, leading=10)))

# ── Highlights ──
add_divider()
section_label("Key Highlights")
highlights = [
    ("London", [
        "Notting Hill Arts Club",
        "Resident at Aki London & Kiyori via Cool Daddy Gigs",
    ]),
    ("Dubai", [
        "25,000-person crowd at Dubai Shopping Festival NYE",
        "Residencies at Masti, Blue Seafood Asia, Jamavar & Mimi Mei Fair",
        "COP28 staff closing party",
        "Modulate @ KYO on the Palm",
        "Featured on BeatFM weekly show",
        "Courses with Point Blank, Toolroom & Granular DXB",
    ]),
]
for region, items in highlights:
    story.append(Paragraph(region, s_sub))
    for h in items:
        story.append(Paragraph("\xb7  " + h, s_item))

# ── Labels ──
add_divider()
section_label("Record Labels")
labels = ["Cafe De Anatolia", "Soviett Records", "Dyno Records", "Nova Mova Records", "Erase Records", "Browing", "Mystic Carousel"]
story.append(Paragraph("  \xb7  ".join(labels), s_body))

# ── Genres ──
add_divider()
section_label("Genres")
genres = ["Afrohouse", "Funky House", "Latin House", "Melodic House & Techno", "Nu Disco", "Organic House", "Progressive", "Techno"]
story.append(Paragraph("  \xb7  ".join(genres), s_body))

# ── Brands + Residencies ──
add_divider()
section_label("Brands & Residencies")

# Matches siteData.brands then siteData.events
brands = [
    ("Cool Daddy Gigs Management", ["Aki London, Resident DJ", "Kiyori, Resident DJ"]),
    ("London \xb7 Private Booking", ["Notting Hill Arts Club, DJ"]),
    ("Blackspoon Management", ["Blue Seafood Asia, Resident DJ", "Masti, Resident DJ"]),
    ("LSL Capital", ["Jamavar Dubai, Resident DJ", "Mimi Mei Fair Dubai, Resident DJ"]),
    ("Sole Agency", ["COP28 Closing Party", "Tilal Al Ghaf", "Destination Insights", "Inspiratus Brand Experience", "Dubai Shopping Festival", "Offside Sports Bar"]),
    ("Mais Musica", ["JA Resorts & Hotels", "Jebel Ali Recreation Club"]),
    ("Sounds by AKS", ["Helipad by Frozen Cherry", "Atelier M at Pier 7", "Zero Gravity", "Dubai Marina Yacht Club"]),
]
for org, venues in brands:
    story.append(Paragraph(org, ParagraphStyle('bh', fontName='Helvetica-Bold', fontSize=9, textColor=HexColor('#cccccc'), leading=13, spaceAfter=2, spaceBefore=6)))
    for v in venues:
        story.append(Paragraph("    " + v, ParagraphStyle('bv', fontName='Helvetica', fontSize=8.5, textColor=TEXT_DIM, leading=12, spaceAfter=1)))

# ── Teaching ──
add_divider()
section_label("Teaching Affiliations")
story.append(Paragraph('<b>Dubai Sound Academy</b>  <font color="#666666">The Middle East\u2019s first official Pioneer DJ school, offering private and group lessons in DJing and music production.</font>', s_item))
story.append(Paragraph('<b>Original Mix DJs</b>  <font color="#666666">DJ training and music production courses for kids and teens, including school programmes across Dubai.</font>', s_item))

# ── Testimonials ──
add_divider()
section_label("Testimonials")

# Matches siteData.testimonials
testimonials = [
    ("I worked with David for over five years, from Masti to bringing him to both our LSL Capital restaurants, Mimi Mei Fair and Jamavar. I never saw David as an external contractor. He was a partner and a core part of the team, always there, always involved, genuinely invested in the music management and audio across all our venues and always putting in extra effort to help grow the business. I trusted him completely to take care of everything music related and never had to worry when he was there.",
     "Daniel Miranda", "Group General Manager, LSL Capital (Mimi Mei Fair & Jamavar) / Masti"),
    ("David worked with us for several years across multiple venues covering private events, brunches and dinner services, and was one of the best DJs we\u2019ve had. Great music, smooth flow, and he always knew how to read the room and keep the energy suitable for our guests. Reliable, always available, and happy to help with anything sound related our venues required.",
     "Charbel Mhanna", "CEO, Blackspoon Management"),
    ("Dave \u201813uxz\u2019 Buckley is an exceptionally talented DJ and producer I\u2019ve had the pleasure of collaborating with. He\u2019s one of the most driven and hardworking artists I\u2019ve come across, with a constant hunger to learn, connect, and create. He\u2019s already delivered one of our standout releases of 2025 on my label, with more strong material on the way. Beyond music, Dave is a person of great character, thoughtful, insightful, and deeply dedicated to his craft. He has all the makings of an artist with limitless potential and a wonderful future ahead.",
     "Aritra \u2018ARIII\u2019 Dasgupta", "Label Founder, Dyno Music Records"),
    ("13UXZ has been a huge part of the journey at Sounds by AKS. From early on, he played a big role in shaping the energy and identity of the brand. His creative style, fresh selection of music, and especially his own productions really stood out and connected strongly with our audience. He brought a unique sound to the floor and consistently delivered sets that people remembered. Artists like him are a big reason Sounds by AKS has grown into what it is today.",
     "Karanveer Singh", "DJ KV5, AKS and Laya Events"),
    ("I\u2019ve worked with many artists and DJs over the years, but DJ David stands out. He has a deep understanding of atmosphere and knows exactly what vibe to create, backed by an immense knowledge of music. He reads the motion and flow of any event or restaurant setting and plays accordingly, consistently earning appreciation from guests and colleagues alike.",
     "Bhim Gaur", "Restaurant Manager, Jamavar Dubai"),
    ("DJ David brings the perfect combination of professional communication, an ability to read the room, and was always comfortable with different audiences. Respected by everyone at Masti, guests always commented on his performances and we were sad to see him leave.",
     "Joseph Adegoke", "Manager, Masti Dubai"),
    ("DJ David is one of the most refined and sophisticated DJs I\u2019ve worked with. His music selection, timing, and ability to read the room were perfectly aligned with our restaurant\u2019s mood, delivering both elegance and energy at the highest level.",
     "Jeet Verma", "Bar Manager, LSL Capital"),
    ("Dave attended my music production course, where he showed strong technical ability and a clear focus on sound design. He has a great ear for detail and a solid creative instinct. He\u2019s also played at my techno events, delivering well structured sets that connect with the crowd and build energy properly. Reliable, easy to work with, and committed to his craft. I\u2019d happily recommend him for bookings.",
     "Kevisen", "DJ, Cattaree"),
    ("An incredibly versatile DJ with the ability to deliver open format, house classics, and upfront sets.",
     "Jon Besant", "Partner, Mais Musica"),
    ("Sharing the stage with 13uxz was a great experience. As a percussionist, I really value his musical sensitivity and his ability to connect with the audience in real time. The dynamic between DJ and percussionist is really important and flowed naturally, making every performance feel authentic and full of energy.",
     "Osmany Ramirez Varona", "Percussionist, Miti Percussion"),
    ("I\u2019ve had the chance to share the same space at Mimi Mei Fair with David, and even without fully overlapping, his presence and musical awareness were always noticeable. He really knows how to read a room and create the right energy. Definitely someone who adds value wherever he plays.",
     "DJ Miss Rich", "DJ"),
    ("Dave\u2019s one of those DJs you can tell actually lives the music he plays. We\u2019ve worked together in the studio on edits and originals, and that production knowledge really comes through in his sets. Playing alongside him you notice he\u2019s always a few steps ahead, and it never feels forced. Solid guy to work with behind the decks or in the studio.",
     "Rico Mannion", "DJ"),
]

for quote, name, title in testimonials:
    story.append(Paragraph('\u201c%s\u201d' % quote, s_quote))
    story.append(Paragraph('%s <font color="#666666">%s</font>' % (name, title), s_quote_attr))

# ── Links + Contact + Footer ──
add_divider()

section_label("Links")
for label, url, href in [
    ("Website", "13uxz.com", "https://13uxz.com"),
    ("EPK", "13uxz.com/epk", "https://13uxz.com/epk"),
    ("Instagram", "instagram.com/13uxz", "https://www.instagram.com/13uxz/"),
    ("SoundCloud", "soundcloud.com/13uxz", "https://soundcloud.com/13uxz"),
    ("Mixcloud", "mixcloud.com/13uxz", "https://www.mixcloud.com/13uxz/"),
    ("Spotify", "open.spotify.com/artist/13uxz", "https://open.spotify.com/artist/2Es179UXrz8RKShF3HrEXl"),
    ("Beatport", "beatport.com/artist/13uxz", "https://www.beatport.com/artist/13uxz/1166973"),
    ("Linktree", "linktr.ee/13uxz", "https://linktr.ee/13uxz"),
]:
    story.append(Paragraph('<b>%s:</b>  <a href="%s" color="%s">%s</a>' % (label, href, LINK, url), s_link))

add_divider()

section_label("Contact")
for label, val, href in [
    ("Email", "13uxz.official@gmail.com", "mailto:13uxz.official@gmail.com"),
    ("UK", "+44 7345 847418", "tel:+447345847418"),
    ("UAE", "+971 50 301 9926", "tel:+971503019926"),
    ("Web", "13uxz.com", "https://13uxz.com"),
]:
    story.append(Paragraph('<b>%s:</b>  <a href="%s" color="%s">%s</a>' % (label, href, LINK, val), s_link))

story.append(Spacer(1, 30))
add_divider()
story.append(Spacer(1, 12))
story.append(Paragraph("13UXZ", s_footer))
story.append(Spacer(1, 4))
story.append(Paragraph("13uxz.official@gmail.com  \xb7  13uxz.com", s_footer_sm))
story.append(Spacer(1, 4))
story.append(Paragraph("\xa9 2026 13uxz. All rights reserved.", s_footer_sm))

doc = SimpleDocTemplate(
    OUTPUT, pagesize=A4,
    leftMargin=18*mm, rightMargin=18*mm, topMargin=16*mm, bottomMargin=16*mm,
    title="13uxz \u2013 Electronic Press Kit", author="13uxz",
)
doc.build(story, onFirstPage=bg_canvas, onLaterPages=bg_canvas)
print("Wrote", OUTPUT)
