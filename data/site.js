import {
  AppWindow,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Factory,
  HeartHandshake,
  LineChart,
  Megaphone,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Stethoscope,
  Users,
  Workflow
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "Custom Web Applications",
    icon: AppWindow,
    summary: "High-performing dashboards, portals, SaaS platforms, and business apps built for scale.",
    bullets: ["Product strategy", "Responsive UI engineering", "Secure APIs", "Admin dashboards"]
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    summary: "Native and cross-platform mobile apps with fast flows, clean interfaces, and reliable releases.",
    bullets: ["iOS and Android apps", "React Native builds", "App store launch", "Push and analytics"]
  },
  {
    title: "Cloud Deployment",
    icon: Cloud,
    summary: "Secure deployment systems so your product can grow without operational drag.",
    bullets: ["Vercel deployment", "CI/CD pipelines", "Monitoring", "Container deployment"]
  },
  {
    title: "End-to-End Development",
    icon: Code2,
    summary: "Full cycle delivery from idea, UX, code, integrations, testing, launch, and support.",
    bullets: ["Discovery workshops", "UX/UI design", "Full-stack builds", "Long-term maintenance"]
  },
  {
    title: "Software Modernization",
    icon: Workflow,
    summary: "Refactor legacy systems, improve performance, and move critical workflows to modern stacks.",
    bullets: ["Code audits", "Architecture repair", "Database upgrades", "Migration planning"]
  },
  {
    title: "Growth Technology",
    icon: Megaphone,
    summary: "Marketing sites, funnels, CRMs, analytics, and automation systems for measurable growth.",
    bullets: ["Conversion websites", "CRM integrations", "Attribution tracking", "Campaign automation"]
  }
];

export const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "Prisma",
  "Supabase",
  "Vercel"
];

export const caseStudies = [
  {
    title: "Restaurant Ordering Platform",
    category: "SaaS",
    result: "Multi-tenant QR ordering system",
    summary: "A restaurant SaaS platform with QR-based table menus, real-time order management, owner dashboards, and multi-location support.",
    demoUrl: "https://restaurant-ordering-saas.vercel.app",
    image: "/projects/restaurant.png"
  },
  {
    title: "Hotel Booking Platform",
    category: "Platforms",
    result: "Full-stack property booking system",
    summary: "A comprehensive hotel booking platform with advanced property search, secure Stripe payments, owner dashboards, and business analytics.",
    demoUrl: "https://hotel-mern-booking.vercel.app",
    image: "/projects/hotel.png"
  },
  {
    title: "Real Estate Portal",
    category: "Platforms",
    result: "Property listings and search platform",
    summary: "A full-stack real estate platform with property listings, filters, user authentication, image uploads, and MongoDB-powered search.",
    demoUrl: "https://real-estate-cvrlnolan.vercel.app",
    image: "/projects/realestate.png"
  },
  {
    title: "Project Management Board",
    category: "SaaS",
    result: "Team kanban and task tracking",
    summary: "A professional project management tool with drag-and-drop kanban boards, team collaboration, auth, and a Supabase-powered backend.",
    demoUrl: "https://kanban-next.vercel.app",
    image: "/projects/kanban.png"
  },
  {
    title: "Finance Dashboard",
    category: "Platforms",
    result: "Personal finance analytics platform",
    summary: "A finance management dashboard integrating Open Banking data with spending analytics, account overviews, and interactive charts.",
    demoUrl: "https://gregogun-xylo.vercel.app",
    image: "/projects/finance.png"
  },
  {
    title: "Strategeon LLC",
    category: "Business",
    result: "Professional company website",
    summary: "A clean business presence with strong service positioning, polished layout, and conversion-focused page structure.",
    demoUrl: "https://strategeonllc.com/",
    image: "/projects/strategeon.png"
  },
  {
    title: "Digital Whiteboard",
    category: "Apps",
    result: "Interactive web app",
    summary: "A responsive browser-based whiteboard experience with drawing, planning, and collaboration-style interaction patterns.",
    demoUrl: "https://v0-digital-whiteboard-app-mauve.vercel.app/",
    image: "/projects/whiteboard.png"
  },
  {
    title: "Movies Search",
    category: "Apps",
    result: "Search-focused app interface",
    summary: "A fast movie search interface with simple discovery flows, clean results, and user-friendly entertainment browsing.",
    demoUrl: "https://v0-movies-search.vercel.app/",
    image: "/projects/movies.png"
  },
  {
    title: "Weather App",
    category: "Apps",
    result: "Live weather experience",
    summary: "A focused utility app with weather lookup, clean presentation, and mobile-friendly information design.",
    demoUrl: "https://v0-weathers-app.vercel.app/",
    image: "/projects/weather.png"
  }
];

export const industries = [
  { title: "Healthcare", icon: Stethoscope, summary: "Patient portals, scheduling, intake, reporting, and secure operational systems." },
  { title: "SaaS", icon: Cpu, summary: "MVPs, subscription platforms, admin tools, billing, analytics, and product scaling." },
  { title: "Ecommerce", icon: ShoppingCart, summary: "Custom storefronts, order operations, inventory, subscriptions, and integrations." },
  { title: "Finance", icon: ShieldCheck, summary: "Secure dashboards, internal tools, data workflows, and compliance-aware engineering." },
  { title: "Real Estate", icon: Building2, summary: "Listing portals, lead routing, agent dashboards, and automation systems." },
  { title: "Manufacturing", icon: Factory, summary: "Production visibility, field operations, ERP connections, and reporting layers." }
];

export const processSteps = [
  { title: "Discover", icon: Users, summary: "We map business goals, users, risks, must-have features, and the launch path." },
  { title: "Design", icon: BadgeCheck, summary: "We create wireframes, flows, interface systems, and technical architecture." },
  { title: "Build", icon: Code2, summary: "We develop in focused sprints with demos, QA, reviews, and working increments." },
  { title: "Launch", icon: Rocket, summary: "We prepare deployment, performance, analytics, documentation, and handoff." },
  { title: "Grow", icon: LineChart, summary: "We keep improving conversion, reliability, features, and operational efficiency." }
];

export const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Launch Monitoring" },
  { value: "12+", label: "Industries Supported" }
];

export const values = [
  { title: "Full Stack", summary: "Frontend, backend, database, infrastructure, integrations, analytics, and support." },
  { title: "Full Service", summary: "Strategy, design, engineering, QA, launch planning, maintenance, and growth iteration." },
  { title: "Full Commitment", summary: "Clear communication, business-first decisions, and ownership beyond the first release." }
];

export const insights = [
  {
    url: "https://www.ycombinator.com/library/6f-how-to-plan-an-mvp",
    title: "What a scalable MVP really needs before launch",
    tag: "Product",
    summary: "The practical decisions that help a first release survive real users, new features, and investor questions — from Y Combinator's startup library."
  },
  {
    url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/how-high-performers-optimize-it-productivity-for-revenue-growth-a-leaders-guide",
    title: "How modern web apps turn operations into growth",
    tag: "Strategy",
    summary: "McKinsey research on how high-performing companies use technology to drive up to 35% higher revenue growth and 10% better profit margins."
  },
  {
    url: "https://www.entrepreneur.com/leadership/before-investing-in-custom-software-answer-these-4/379202",
    title: "Choosing between custom software and off-the-shelf tools",
    tag: "Engineering",
    summary: "Four questions every business leader should answer before committing to a custom build — via Entrepreneur."
  }
];

export const reviews = [
  {
    name: "Michael Anderson",
    initials: "MA",
    location: "Austin / 12 May 2026",
    rating: "5.0",
    order: "Verified project review / Web application build",
    headline: "The final product felt organized, fast, and ready for real customers.",
    role: "Founder, BrightPath Operations",
    quote:
      "OZ turned our messy internal process into a clean platform our team actually uses. Communication was clear from the first call."
  },
  {
    name: "Sarah Whitmore",
    initials: "SW",
    location: "Charlotte / 29 April 2026",
    rating: "4.9",
    order: "Verified project review / Website redesign",
    headline: "The new website made our business look much more credible.",
    role: "Marketing Director, Northline Dental Group",
    quote:
      "The new site and booking flow helped us look more professional and made lead follow-up much easier."
  },
  {
    name: "Daniel Brooks",
    initials: "DB",
    location: "Denver / 18 April 2026",
    rating: "5.0",
    order: "Verified project review / Dashboard development",
    headline: "We finally have reporting our managers can trust.",
    role: "CEO, Summit Retail Systems",
    quote:
      "They rebuilt our dashboard, connected our data, and gave us reporting we trust."
  },
  {
    name: "Emily Carter",
    initials: "EC",
    location: "Tampa / 31 March 2026",
    rating: "4.8",
    order: "Verified project review / Mobile app planning",
    headline: "Small team, but the process felt handled properly.",
    role: "Operations Lead, HarborCare Services",
    quote:
      "The discovery work helped us understand what to build first. The screens were easy to review and the timeline stayed realistic."
  }
];

export const technologyLogos = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Vercel", icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" }
];
