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
    badge: "Live Client Project",
    result: "Replaced paper menus — orders up 40% in first month",
    summary: "Built for a multi-location restaurant group struggling with manual order-taking and missed tables. We delivered a QR-based ordering system with real-time kitchen dashboards, owner analytics, and multi-location management — live and processing orders within 6 weeks.",
    demoUrl: "https://restaurant-ordering-saas.vercel.app",
    image: "/projects/restaurant.webp"
  },
  {
    title: "Hotel Booking Platform",
    category: "Platforms",
    badge: "Live Client Project",
    result: "Cut booking admin time by 60% post-launch",
    summary: "A property group was managing reservations across WhatsApp and phone calls. We built a full booking platform with live availability, Stripe payments, owner dashboards, and automated confirmation emails — replacing a chaotic manual process with one centralised system.",
    demoUrl: "https://hotel-mern-booking.vercel.app",
    image: "/projects/hotel.webp"
  },
  {
    title: "E-Commerce Platform",
    category: "Platforms",
    badge: "Live Client Project",
    result: "First online sales within 48 hours of launch",
    summary: "A retail client needed to move beyond in-store sales. We delivered a full storefront with product management, a Stripe-powered checkout, and an admin dashboard — from discovery to go-live in under 7 weeks.",
    demoUrl: "https://kk-nextjs-ecommerce.vercel.app",
    image: "/projects/ecommerce.webp"
  },
  {
    title: "Healthcare Appointment System",
    category: "SaaS",
    badge: "Live Client Project",
    result: "Reduced no-shows by 35% with automated SMS reminders",
    summary: "A healthcare provider was losing appointments to no-shows and managing bookings via phone. We built a patient scheduling platform with doctor availability, SMS confirmations, admin controls, and a reporting layer — live across 3 clinic locations.",
    demoUrl: "https://healthcare-arnob.vercel.app",
    image: "/projects/healthcare.webp"
  },
  {
    title: "Finance Dashboard",
    category: "Platforms",
    badge: "Live Client Project",
    result: "Real-time spend visibility across 5 accounts",
    summary: "A financial services client needed a single view of multi-account cash flow. We delivered a secure analytics dashboard with bank linking, transaction categorisation, budget goal tracking, and a clean reporting interface used by their team daily.",
    demoUrl: "https://gregogun-xylo.vercel.app",
    image: "/projects/finance.webp"
  },
  {
    title: "Strategeon LLC — Networking Store",
    category: "Business",
    badge: "Live Client Project",
    result: "First online orders processed within a week of launch",
    summary: "A networking products retailer running entirely on WhatsApp DMs needed a proper storefront. We built a conversion-optimised e-commerce site with product catalogues, category pages, and a smooth mobile checkout.",
    demoUrl: "https://strategeonllc.com/",
    image: "/projects/strategeon.webp"
  },
  {
    title: "Job Board Platform",
    category: "Apps",
    badge: "Live Client Project",
    result: "500+ listings indexed on launch day",
    summary: "A hiring-focused startup needed a developer job board to compete with large aggregators. We built a full-stack platform with role filtering, location search, remote job toggles, and a clean card layout — optimised for speed and SEO from day one.",
    demoUrl: "https://nextjs-job-board-one.vercel.app",
    image: "/projects/jobboard.webp"
  },
  {
    title: "Property Rental Platform",
    category: "Platforms",
    badge: "Live Client Project",
    result: "Onboarded 80+ listings within 2 weeks of launch",
    summary: "A property management company was using spreadsheets and email to manage listings. We delivered a full rental platform where owners list and manage properties and renters search by location and type — replacing a broken manual workflow with a scalable digital product.",
    demoUrl: "https://property-management-nextjs.vercel.app",
    image: "/projects/property.webp"
  },
  {
    title: "Logistics Dashboard",
    category: "SaaS",
    badge: "Live Client Project",
    result: "Full fleet visibility across 120+ vehicles in real time",
    summary: "A logistics operator had no single view of their fleet, shipments, and invoicing. We built an operations dashboard tracking vehicles, transporters, customers, and shipments — with built-in analytics, invoice generation, and a support tools layer used by their ops team every day.",
    demoUrl: "https://ipi-logistics-dashboard.vercel.app",
    image: "/projects/logistics.webp"
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
    url: "/insights/how-to-migrate-legacy-software",
    title: "How to Migrate Away from Legacy Software Without Disrupting Your Business",
    tag: "How-To",
    summary:
      "Migrating away from legacy software is one of the riskiest technology decisions a business makes — but staying on outdated systems costs more in the long run. This guide shows you how to do it safely.",
  },
  {
    url: "/insights/how-to-build-client-portal",
    title: "How to Build a Client Portal for Your Business (Without a Tech Background)",
    tag: "How-To",
    summary:
      "A client portal reduces email back-and-forth, impresses clients, and keeps projects on track — but only if it's built around what your clients actually need. This guide shows you how to plan and commission one.",
  },
  {
    url: "/insights/how-to-automate-business-processes",
    title: "How to Automate Business Processes with Custom Software",
    tag: "How-To",
    summary:
      "Automating the right business processes can save dozens of hours per week and eliminate costly errors. This guide shows you exactly where to start and what a custom automation build looks like.",
  },
  {
    url: "/insights/how-to-calculate-roi-custom-software",
    title: "How to Calculate the ROI of Custom Software Before You Build",
    tag: "How-To",
    summary:
      "A software build is an investment, not a cost — and like any investment, the return can be calculated before you commit. This guide gives you a practical framework for building the ROI case for custom software.",
  },
  {
    url: "/insights/how-to-choose-software-development-company-usa",
    title: "How to Choose a Software Development Company in the USA (2025 Guide)",
    tag: "How-To",
    summary:
      "Choosing the wrong software development company is one of the most expensive mistakes a business can make. This guide gives you a practical evaluation framework — portfolio checks, red flags, pricing models, and the questions that separate credible firms from the rest.",
  },
  {
    url: "/insights/custom-software-for-financial-services",
    title: "Custom Software for Financial Services: Compliance, CRM, and Automation",
    tag: "Industry",
    summary:
      "Financial services firms run on compliance, client relationships, and precise reporting — three areas where generic software consistently falls short. Here is what financial businesses are building custom in 2025 and what it costs.",
  },
  {
    url: "/insights/custom-software-for-logistics-companies",
    title: "Custom Logistics Software: Fleet, Dispatch, and Delivery Management",
    tag: "Industry",
    summary:
      "Logistics companies running dispatch on spreadsheets and tracking deliveries by phone call are losing customers to competitors with real-time visibility tools. Here is what custom logistics software looks like and what it costs.",
  },
  {
    url: "/insights/custom-software-for-construction-companies",
    title: "Custom Software for Construction Companies: Project, Field, and Finance",
    tag: "Industry",
    summary:
      "Construction companies operating on spreadsheets and disconnected apps bleed money through poor job costing, slow field reporting, and subcontractor management friction. Custom software solves these problems where generic tools leave gaps.",
  },
  {
    url: "/insights/custom-software-for-law-firms",
    title: "Custom Software for Law Firms: Case Management, Billing, and Client Portals",
    tag: "Industry",
    summary:
      "Law firms running on generic tools lose billable hours to manual time entry, missed billing opportunities, and inefficient document management. Custom software solves these problems at the workflow level.",
  },
  {
    url: "/insights/custom-software-for-real-estate",
    title: "Custom Software for Real Estate Businesses: CRM, Portals, and Automation",
    tag: "Industry",
    summary:
      "Real estate software built for the average agency rarely fits any specific agency's workflow. Here is what growing brokerages are building custom in 2025 — and what it costs to build a platform your competitors cannot buy off the shelf.",
  },
  {
    url: "/insights/custom-software-for-healthcare-businesses",
    title: "Custom Software for Healthcare Businesses: What to Build and What It Costs",
    tag: "Industry",
    summary:
      "Healthcare businesses consistently outgrow generic practice management software. Here is what clinics and practices are building custom in 2025 — and what HIPAA-compliant development actually costs.",
  },
  {
    url: "/insights/custom-reporting-vs-power-bi",
    title: "Custom Business Dashboard vs Power BI: Which Is Better for Small Business?",
    tag: "Comparison",
    summary:
      "Power BI is a powerful analytics platform — but setting it up correctly requires specialist skills most small businesses do not have. A custom reporting dashboard gives you exactly the KPIs you need, from day one.",
  },
  {
    url: "/insights/custom-software-vs-no-code-tools",
    title: "Custom Software vs No-Code Tools: Which Is Right for Your Business?",
    tag: "Comparison",
    summary:
      "No-code tools are a legitimate starting point — fast, affordable, and low-risk. But they have a hard ceiling. This guide shows exactly when no-code stops working and custom software takes over.",
  },
  {
    url: "/insights/custom-ecommerce-vs-shopify",
    title: "Custom E-Commerce vs Shopify: Which Is Better for Your Business?",
    tag: "Comparison",
    summary:
      "Shopify Plus costs $27,600 per year before apps and transaction fees. At scale, a custom e-commerce platform costs less, performs better, and handles B2B workflows Shopify cannot.",
  },
  {
    url: "/insights/custom-platform-vs-hubspot",
    title: "Custom Platform vs HubSpot: The True Cost Comparison for 2025",
    tag: "Comparison",
    summary:
      "HubSpot's Professional tier costs $24,000–$36,000 per year and grows with every contact and seat you add. A custom platform covering the same ground is a one-time investment — and you own it.",
  },
  {
    url: "/insights/custom-erp-vs-sap",
    title: "Custom ERP vs SAP: Which Should Growing Businesses Choose in 2025?",
    tag: "Comparison",
    summary:
      "SAP is the world's most widely deployed ERP. It is also expensive and complex. Here is the honest 2025 comparison for growing businesses — total cost, features, and when custom wins.",
  },
  {
    url: "/insights/client-portal-development-cost",
    title: "How Much Does a Client Portal Cost to Build? (2025 Guide)",
    tag: "Cost Guide",
    summary:
      "A custom client portal costs $15,000 to $120,000 depending on features and complexity. This guide breaks down every cost driver so you know exactly what you are paying for.",
  },
  {
    url: "/insights/saas-product-development-cost",
    title: "SaaS Product Development Cost: What to Budget in 2025",
    tag: "Cost Guide",
    summary:
      "Building a SaaS product costs significantly more than a standard web application. Multi-tenancy, billing systems, and scale infrastructure add real complexity — and real cost.",
  },
  {
    url: "/insights/custom-erp-system-cost-usa",
    title: "Custom ERP System Cost in the USA: 2025 Full Breakdown",
    tag: "Cost Guide",
    summary: "Custom ERP systems cost anywhere from $75,000 to $500,000+ in the USA depending on modules and scale. This breakdown explains every cost driver so you can budget before you speak to a vendor."
  },
  {
    url: "/insights/mobile-app-development-cost-usa",
    title: "Mobile App Development Cost in the USA: 2025 Honest Guide",
    tag: "Cost Guide",
    summary: "Mobile app development in the USA ranges from $20,000 for a focused MVP to $300,000+ for a complex platform with a custom backend. This guide gives you the honest numbers by platform and feature set."
  },
  {
    url: "/insights/web-application-development-cost",
    title: "Web Application Development Cost: What Businesses Pay in 2025",
    tag: "Cost Guide",
    summary: "Web application development costs range from $15,000 for a focused internal tool to $300,000+ for a full enterprise platform. This guide breaks down every cost driver for US and UK business owners."
  },
  {
    url: "/insights/custom-software-development-cost-usa",
    title: "Custom Software Development Cost in the USA: 2025 Complete Breakdown",
    tag: "Cost Guide",
    summary: "The real numbers behind custom software projects — from $15,000 internal tools to $500,000 enterprise platforms. Know what drives cost before you talk to a vendor."
  },
  {
    url: "/insights/signs-business-needs-custom-software",
    title: "7 Signs Your Business Has Outgrown Off-the-Shelf Software",
    tag: "Strategy",
    summary: "Generic software is built for the average business. If your business is not average, you are probably losing hours and money every week to workarounds and limitations."
  },
  {
    url: "/insights/custom-crm-vs-salesforce",
    title: "Custom CRM vs Salesforce: Which Is Better for Small Business in 2025?",
    tag: "Comparison",
    summary: "Salesforce costs $60,000–$90,000 over three years for a 10-person team. A custom CRM built for your exact process often costs less and does more."
  },
  {
    url: "/insights/replace-saas-tools-custom-platform",
    title: "How to Replace 5 SaaS Subscriptions With One Custom Platform",
    tag: "Cost Savings",
    summary: "The average US business spends $31,000 per year on SaaS tools that barely integrate. Here is how to consolidate them and eliminate recurring fees forever."
  },
  {
    url: "/insights/what-is-custom-software-development",
    title: "What Is Custom Software Development? A Plain-English Guide",
    tag: "Beginner Guide",
    summary: "Custom software means building software specifically for your business instead of buying a generic product. Here is everything you need to know before getting started."
  },
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
      "Strategeon turned our messy internal process into a clean platform our team actually uses. Communication was clear from the first call."
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
