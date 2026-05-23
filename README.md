# OZ Software Agency

> Full stack development solutions for businesses that need modern, scalable, high-performing web and mobile applications.

A professional agency website built with **Next.js 16** and deployed on **Vercel**. Every page is statically generated for maximum performance. The contact form delivers submissions directly to the agency inbox via Web3Forms — no backend required.

---

## Live Demo

Coming soon — deploy link will appear here after Vercel deployment.

---

## Screenshots

| Home | Work | Contact |
|------|------|---------|
| Hero section with developer photo | Real project screenshots with live links | Contact form with email delivery |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Plain CSS (globals.css) |
| Icons | Lucide React |
| Email | Web3Forms |
| Deployment | Vercel |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services strip, values, tech logos, projects, reviews |
| `/services` | Full service breakdown with tech stack and engagement models |
| `/work` | Filterable project grid with live demo links |
| `/industries` | Industry verticals served |
| `/process` | Five-step delivery process |
| `/about` | Company story, stats, values, and client reviews |
| `/insights` | Strategy articles and guides |
| `/contact` | Contact form + email, phone, and address |

---

## Features

- Fully static export — all 10 routes pre-rendered at build time
- Real email delivery via Web3Forms (no SMTP credentials needed)
- Filterable project grid with category tabs
- Sticky responsive navigation with mobile hamburger menu
- Active route highlighting
- Client reviews section
- Technology logo strip
- Proof stats section
- SEO metadata on every page

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
git clone https://github.com/ZainAftab-dev/OZ-Agency.git
cd OZ-Agency
npm install
```

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
oz-agency/
├── app/
│   ├── layout.js          # Root layout (Header + Footer)
│   ├── page.js            # Home page
│   ├── globals.css        # All styles
│   ├── about/page.js
│   ├── contact/page.js
│   ├── industries/page.js
│   ├── insights/page.js
│   ├── process/page.js
│   ├── services/page.js
│   └── work/page.js
├── components/
│   ├── Header.js          # Sticky nav with mobile menu
│   ├── Footer.js          # Site footer with links and contact info
│   ├── PageHero.js        # Reusable inner-page hero
│   ├── CaseStudyGrid.js   # Filterable project grid
│   ├── ContactForm.js     # Web3Forms-powered contact form
│   └── CTA.js             # Call-to-action section
├── data/
│   └── site.js            # All site content (projects, services, reviews, etc.)
└── public/
    └── projects/          # Project screenshot images (PNG)
```

---

## Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) — no backend or SMTP credentials required.

The access key is embedded directly in `components/ContactForm.js`. To use your own:

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email to receive a free access key
3. Replace the `access_key` value in `components/ContactForm.js`

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repository
4. Leave all settings as default — no env vars needed
5. Click **Deploy**

Vercel automatically detects Next.js and runs `npm run build`.

---

## Content Customization

All site content lives in [`data/site.js`](data/site.js):

- `caseStudies` — projects shown on the Work page and home grid
- `services` — service cards
- `industries` — industry verticals
- `processSteps` — delivery process steps
- `reviews` — client testimonials
- `stats` — proof-point numbers
- `navItems` — navigation links
- `technologyLogos` — tech stack logos

---

## License

MIT — feel free to use this as a template for your own agency site.

---

Built by [OZ Software Agency](https://github.com/ZainAftab-dev/OZ-Agency)
