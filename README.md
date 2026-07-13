# Strategeon Softwares

> Full stack development solutions for businesses that need modern, scalable, high-performing web and mobile applications.

A professional agency website built with **Next.js 16** (App Router) and **React 19**. Most pages are statically generated at build time; the homepage hero features an interactive 3D robot (desktop) with an AI chat widget and a Web3Forms-powered contact form.

---

## Live Demo

Coming soon — deploy link will appear here after Vercel deployment.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Animation | Framer Motion |
| 3D / Interactive hero | Spline (`@splinetool/react-spline` + `@splinetool/runtime`) |
| AI chat widget | Groq (Llama 3.3 70B) via a first-party `/api/chat` route |
| Styling | Plain CSS (`app/globals.css`) |
| Icons | Lucide React |
| Contact form delivery | Web3Forms (client-side submission, no backend needed) |
| Deployment | Vercel |

---

## Features

- Interactive 3D robot in the homepage hero (desktop) — cursor-tracking head movement and an ambient spotlight that follows the pointer. Automatically falls back to a static image on phones/tablets, so the ~1.4MB 3D asset is never downloaded on mobile.
- **Sage**, an AI chat widget answering visitor questions about services, process, and pricing (Groq-powered, rate-limited server-side).
- Real contact-form email delivery via Web3Forms — no SMTP credentials needed.
- Filterable project grid (`/work`) with live demo links.
- Sticky responsive navigation with mobile hamburger menu and active-route highlighting.
- Client reviews carousel, tech-stack marquee, and proof-point stats.
- SEO metadata and JSON-LD structured data on every page.
- Long-tail SEO article library under `/insights`.

---

## Performance

The interactive hero underwent a real optimization pass (measured with Lighthouse against production builds, not estimated):

| | Before | After |
|---|---|---|
| Desktop performance score | 41 | 80 |
| Mobile performance score | 35 | 77–82 |

Key techniques: the Spline runtime is fetched only after the browser goes idle (so it never competes with the page's critical first paint), it renders on-demand instead of running a continuous per-frame loop, and it doesn't load at all on screens under 980px wide — those get the original static photo instead.

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
git clone https://github.com/ZainAftab-dev/strategeon-softwares.git
cd strategeon-softwares
npm install
```

### Environment variables

Create a `.env.local` in the project root:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your-web3forms-access-key
GROQ_API_KEY=your-groq-api-key
```

- `NEXT_PUBLIC_WEB3FORMS_KEY` — get a free key at [web3forms.com](https://web3forms.com). This key is meant to be public/client-embedded by Web3Forms' own design (their abuse prevention is domain-restriction on their dashboard, not secrecy) — that's why it's `NEXT_PUBLIC_`.
- `GROQ_API_KEY` — get a free key at [console.groq.com](https://console.groq.com). This one must **stay server-only** — never prefix it with `NEXT_PUBLIC_`. Without it, the chat widget returns a clean error instead of crashing the app.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

---

## Project Structure

```
strategeon-softwares/
├── app/
│   ├── layout.js              # Root layout (Header + Footer + ChatWidget)
│   ├── page.js                # Home page
│   ├── globals.css            # All styles
│   ├── api/chat/route.js      # Groq-powered chat API (rate-limited, server-only key)
│   ├── about/page.js
│   ├── contact/page.js
│   ├── industries/page.js
│   ├── insights/[slug]/       # SEO article library
│   ├── process/page.js
│   ├── services/page.js
│   └── work/page.js
├── components/
│   ├── Header.js              # Sticky nav with mobile menu
│   ├── Footer.js               # Site footer with links and contact info
│   ├── HeroSection.js          # Homepage hero — robot (desktop) / photo (mobile)
│   ├── SplineScene.js          # SSR-safe, idle-deferred loader for the 3D robot
│   ├── ChatWidget.js            # "Sage" AI chat widget
│   ├── PageHero.js             # Reusable inner-page hero
│   ├── CaseStudyGrid.js        # Filterable project grid (used on /work)
│   ├── ContactForm.js           # Web3Forms-powered contact form
│   └── CTA.js                  # Call-to-action section
├── data/
│   └── site.js                 # All site content (projects, services, reviews, etc.)
└── public/
    └── projects/                # Project screenshot images
```

---

## Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) — no backend or SMTP credentials required. The access key is read from `NEXT_PUBLIC_WEB3FORMS_KEY` (see [Environment variables](#environment-variables)) and is safe to expose client-side by Web3Forms' own design.

## Chat Widget Setup

"Sage" is powered by [Groq](https://groq.com) (Llama 3.3 70B). The system prompt and rate limiting (30 messages/IP/hour) live in `app/api/chat/route.js`. The Groq key must stay server-only — it's read via `process.env.GROQ_API_KEY` inside the API route and never sent to the browser.

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repository
4. Add both environment variables from [Environment variables](#environment-variables) above in the Vercel project settings
5. Click **Deploy**

Vercel automatically detects Next.js and runs `npm run build`.

---

## Content Customization

All site content lives in [`data/site.js`](data/site.js):

- `caseStudies` — projects shown on the Work page
- `services` — service cards
- `industries` — industry verticals
- `processSteps` — delivery process steps
- `reviews` — client testimonials
- `stats` — proof-point numbers
- `navItems` — navigation links
- `technologyLogos` — tech stack logos

The homepage robot scene URL and Sage's system prompt are configured directly in `components/HeroSection.js` and `app/api/chat/route.js` respectively.

---

## License

MIT — feel free to use this as a template for your own agency site.

---

Built by [Strategeon Softwares](https://github.com/ZainAftab-dev/strategeon-softwares)
