# Vikas Pondric — Premium Portfolio

An award-caliber personal portfolio built with Next.js 15, Tailwind, Framer Motion, GSAP, Lenis Smooth Scroll, and Three.js (React Three Fiber).

## Stack

- **Framework:** Next.js 15 (App Router) · React 18
- **Styling:** Tailwind CSS · shadcn/ui tokens · CSS variables (dark/light)
- **Animation:** Framer Motion · GSAP · Lenis (smooth scroll)
- **3D:** Three.js · @react-three/fiber · @react-three/drei
- **Icons:** lucide-react
- **Notifications:** sonner
- **Theming:** next-themes

## Features

- Cinematic loader with animated logo + percentage
- Custom cursor (magnetic + mix-blend, hover variants)
- Lenis buttery-smooth scroll with scroll progress bar
- Three.js particle field + animated glow blobs background
- Split-text hero with typing role rotation and 3D-tilt image
- Marquee strip, animated counters, skills bars
- Magnetic service cards with radial-glow hover
- Filtered projects grid with hover image zoom
- Vertical timeline for process, glass carousel for testimonials
- Resume card, floating-label contact form with toast
- Fully responsive · dark/light theme toggle · SEO metadata

## Quick Start

```bash
# 1. Install dependencies (use yarn, not npm)
yarn install --ignore-engines

# 2. Set env (already provided in .env)
# MONGO_URL, DB_NAME are placeholders — portfolio is purely frontend.

# 3. Run dev server
yarn dev

# 4. Open
http://localhost:3000
```

## Build for Production

```bash
yarn build
yarn start
```

## Folder Structure

```
app/
├── api/[[...path]]/route.js   # (unused for portfolio, safe to remove)
├── globals.css                # Design tokens, dark/light vars, utilities
├── layout.js                  # Fonts + ThemeProvider + metadata
├── page.js                    # Portfolio entry
└── providers.js               # React Query provider

components/portfolio/
├── Portfolio.jsx              # Composition root
├── Loader.jsx                 # Animated 1.8s loader
├── CustomCursor.jsx           # Mix-blend cursor with hover/view states
├── SmoothScroll.jsx           # Lenis wrapper
├── ScrollProgress.jsx         # Top progress bar
├── ParticlesBg.jsx            # Three.js particles + glow blobs
├── Navbar.jsx                 # Sticky glass navbar with active pill
├── Hero.jsx                   # Split-text + tilt image + magnetic buttons
├── MarqueeStrip.jsx           # Infinite scrolling text strip
├── About.jsx                  # Story + animated counters
├── Skills.jsx                 # 15 skill cards with progress bars
├── Services.jsx               # 6 magnetic service cards
├── Projects.jsx               # Filtered project grid
├── Process.jsx                # 7-step animated timeline
├── Testimonials.jsx           # Auto-rotating glass carousel
├── Resume.jsx                 # CV preview + download card
├── Contact.jsx                # Floating-label form + socials
├── Footer.jsx                 # Giant type + back-to-top
└── ThemeProvider.jsx          # next-themes wrapper

components/ui/                 # shadcn primitives (unused subset available)
```

## Customization Cheatsheet

- **Change name / roles** → `components/portfolio/Hero.jsx` (`ROLES` array + `SplitText` strings)
- **Update projects** → `components/portfolio/Projects.jsx` (`PROJECTS` array)
- **Update services** → `components/portfolio/Services.jsx` (`SERVICES` array)
- **Update skills** → `components/portfolio/Skills.jsx` (`SKILLS` array)
- **Testimonials** → `components/portfolio/Testimonials.jsx` (`REVIEWS` array)
- **Colors / theme** → `app/globals.css` (CSS variables at `:root` and `.dark`)
- **Fonts** → `app/layout.js` (Bricolage Grotesque + Instrument Serif + Inter)

## Notes

- Uses `--ignore-engines` in yarn install because one transitive dep (`camera-controls`) requests Node 22, but the project runs perfectly on Node 20+.
- Images from Unsplash — replace with your own hosted assets when going live.
- Contact form uses a toast for demo. Wire it to Resend / SendGrid / Web3Forms for real emails.

## License

MIT — do whatever you want with it. If you ship it, a shoutout is appreciated.
