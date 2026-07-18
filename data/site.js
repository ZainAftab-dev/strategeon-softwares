import {
  AppWindow,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  HeartHandshake,
  LineChart,
  Megaphone,
  Rocket,
  Smartphone,
  Users,
  Workflow
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
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

// Shown on every project card's GitHub icon — case studies are client
// deliverables without public repos, so this points to the founder's profile.
export const githubProfileUrl = "https://github.com/ZainAftab-dev";

export const caseStudies = [
  {
    title: "Restaurant Ordering Platform",
    category: "SaaS",
    badge: "Live Client Project",
    result: "Replaced paper menus — orders up 40% in first month",
    summary: "Built for a multi-location restaurant group struggling with manual order-taking and missed tables. We delivered a QR-based ordering system with real-time kitchen dashboards, owner analytics, and multi-location management — live and processing orders within 6 weeks.",
    demoUrl: "https://restaurant-ordering-saas.vercel.app",
    image: "/projects/restaurant.webp",
    tech: ["Next.js", "Node.js", "PostgreSQL"]
  },
  {
    title: "Hotel Booking Platform",
    category: "Platforms",
    badge: "Live Client Project",
    result: "Cut booking admin time by 60% post-launch",
    summary: "A property group was managing reservations across WhatsApp and phone calls. We built a full booking platform with live availability, Stripe payments, owner dashboards, and automated confirmation emails — replacing a chaotic manual process with one centralised system.",
    demoUrl: "https://hotel-mern-booking.vercel.app",
    image: "/projects/hotel.webp",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "E-Commerce Platform",
    category: "Platforms",
    badge: "Live Client Project",
    result: "First online sales within 48 hours of launch",
    summary: "A retail client needed to move beyond in-store sales. We delivered a full storefront with product management, a Stripe-powered checkout, and an admin dashboard — from discovery to go-live in under 7 weeks.",
    demoUrl: "https://kk-nextjs-ecommerce.vercel.app",
    image: "/projects/ecommerce.webp",
    tech: ["Next.js", "Stripe", "PostgreSQL"]
  },
  {
    title: "Healthcare Appointment System",
    category: "SaaS",
    badge: "Live Client Project",
    result: "Reduced no-shows by 35% with automated SMS reminders",
    summary: "A healthcare provider was losing appointments to no-shows and managing bookings via phone. We built a patient scheduling platform with doctor availability, SMS confirmations, admin controls, and a reporting layer — live across 3 clinic locations.",
    demoUrl: "https://healthcare-arnob.vercel.app",
    image: "/projects/healthcare.webp",
    tech: ["Next.js", "Node.js", "Twilio"]
  },
  {
    title: "Finance Dashboard",
    category: "Platforms",
    badge: "Live Client Project",
    result: "Real-time spend visibility across 5 accounts",
    summary: "A financial services client needed a single view of multi-account cash flow. We delivered a secure analytics dashboard with bank linking, transaction categorisation, budget goal tracking, and a clean reporting interface used by their team daily.",
    demoUrl: "https://gregogun-xylo.vercel.app",
    image: "/projects/finance.webp",
    tech: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "Strategeon LLC — Networking Store",
    category: "Business",
    badge: "Live Client Project",
    result: "First online orders processed within a week of launch",
    summary: "A networking products retailer running entirely on WhatsApp DMs needed a proper storefront. We built a conversion-optimised e-commerce site with product catalogues, category pages, and a smooth mobile checkout.",
    demoUrl: "https://strategeonllc.com/",
    image: "/projects/strategeon.webp",
    tech: ["Next.js", "E-Commerce", "Tailwind CSS"]
  },
  {
    title: "Job Board Platform",
    category: "Apps",
    badge: "Live Client Project",
    result: "500+ listings indexed on launch day",
    summary: "A hiring-focused startup needed a developer job board to compete with large aggregators. We built a full-stack platform with role filtering, location search, remote job toggles, and a clean card layout — optimised for speed and SEO from day one.",
    demoUrl: "https://nextjs-job-board-one.vercel.app",
    image: "/projects/jobboard.webp",
    tech: ["Next.js", "Prisma", "PostgreSQL"]
  },
  {
    title: "Property Rental Platform",
    category: "Platforms",
    badge: "Live Client Project",
    result: "Onboarded 80+ listings within 2 weeks of launch",
    summary: "A property management company was using spreadsheets and email to manage listings. We delivered a full rental platform where owners list and manage properties and renters search by location and type — replacing a broken manual workflow with a scalable digital product.",
    demoUrl: "https://property-management-nextjs.vercel.app",
    image: "/projects/property.webp",
    tech: ["Next.js", "Prisma", "PostgreSQL"]
  },
  {
    title: "Logistics Dashboard",
    category: "SaaS",
    badge: "Live Client Project",
    result: "Full fleet visibility across 120+ vehicles in real time",
    summary: "A logistics operator had no single view of their fleet, shipments, and invoicing. We built an operations dashboard tracking vehicles, transporters, customers, and shipments — with built-in analytics, invoice generation, and a support tools layer used by their ops team every day.",
    demoUrl: "https://ipi-logistics-dashboard.vercel.app",
    image: "/projects/logistics.webp",
    tech: ["Next.js", "Node.js", "PostgreSQL"]
  }
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
    url: "/insights/custom-billing-and-invoicing-software-cost",
    title: "Custom Billing and Invoicing Software Cost: What to Budget in 2026",
    tag: "Cost Guide",
    summary:
      "QuickBooks and generic invoicing tools work fine until billing gets complicated: usage-based pricing, proration, multi-entity tax rules. Here is what custom billing software actually costs to build in 2026.",
  },
  {
    url: "/insights/custom-crm-vs-pipedrive",
    title: "Custom CRM vs Pipedrive: Which Is Better for a Growing Sales Team?",
    tag: "Comparison",
    summary:
      "Pipedrive is one of the fastest CRMs to get a sales team running on, but its pipeline-first design becomes a constraint once a sales process gets more complex. Here is the full 2026 comparison against a custom-built CRM.",
  },
  {
    url: "/insights/custom-software-for-veterinary-clinics",
    title: "Custom Software for Veterinary Clinics: Patient Records, Scheduling, and Client Portals",
    tag: "Industry",
    summary:
      "Cornerstone and ezyVet work well for a single clinic running standard workflows, but multi-location practices and specialty clinics quickly hit their limits. Here is what veterinary practices build custom in 2026, and what it costs.",
  },
  {
    url: "/insights/custom-warehouse-management-software-cost",
    title: "Custom Warehouse Management Software Cost: What to Budget in 2026",
    tag: "Cost Guide",
    summary:
      "Off-the-shelf WMS platforms charge per user and rarely fit a warehouse's exact layout or workflow. Here is what custom warehouse management software actually costs to build in 2026.",
  },
  {
    url: "/insights/white-label-software-vs-custom-development",
    title: "White-Label Software vs Custom Development: Which Is Right for Your Business?",
    tag: "Comparison",
    summary:
      "White-label platforms get you to market fast for a recurring fee. Custom development costs more upfront but you own the result outright. Here is how to decide which fits your business.",
  },
  {
    url: "/insights/custom-software-for-property-management-companies",
    title: "Custom Software for Property Management Companies: Tenants, Maintenance, and Rent Collection",
    tag: "Industry",
    summary:
      "AppFolio and Buildium work fine at a few hundred units, then the per-unit fees and rigid workflows start costing more than they save. Here is what growing property management companies build custom instead.",
  },
  {
    url: "/insights/custom-software-for-dental-practices",
    title: "Custom Software for Dental Practices: Patient Management and Scheduling",
    tag: "Industry",
    summary:
      "Dentrix and Open Dental cover the basics but charge for every add-on module. Here is what dental practices build custom and what it costs in 2026.",
  },
  {
    url: "/insights/custom-appointment-scheduling-software",
    title: "Custom Appointment Scheduling Software: What It Costs to Build in 2026",
    tag: "Cost Guide",
    summary:
      "Off-the-shelf scheduling tools charge monthly per user and cap what you can customise. Here is when building your own scheduling system pays off.",
  },
  {
    url: "/insights/custom-software-for-nonprofits",
    title: "Custom Software for Nonprofits: Donor Management, Volunteers, and Grants",
    tag: "Industry",
    summary:
      "Generic CRMs were not built for donor relationships, grant deadlines, or volunteer scheduling. Here is what nonprofits actually need and what it costs to build it.",
  },
  {
    url: "/insights/how-to-reduce-software-development-costs",
    title: "How to Reduce Software Development Costs Without Cutting Corners",
    tag: "How-To",
    summary:
      "Cutting software costs the wrong way creates rework that costs more later. Here is how to reduce spend the right way, from scoping through contract structure.",
  },
  {
    url: "/insights/custom-crm-vs-zoho",
    title: "Custom CRM vs Zoho: Which Is Right for Your Growing Business?",
    tag: "Comparison",
    summary:
      "Zoho wins on day-one price. Custom CRM wins once you need workflows, integrations, and data ownership that Zoho was never built for. Here is how to decide.",
  },
  {
    url: "/insights/custom-software-for-insurance-agencies",
    title: "Custom Software for Insurance Agencies: Policy Management, Claims, and Client Portals",
    tag: "Industry",
    summary:
      "Generic agency management systems force insurance agencies into someone else's workflow. Here is what independent agencies and MGAs build custom instead, and what it costs.",
  },
  {
    url: "/insights/mobile-app-vs-website",
    title: "Mobile App vs Website: Which Should Your Business Build First?",
    tag: "How-To",
    summary:
      "A mobile app and a website are different tools for different jobs. Websites work best for content, acquisition, and transactions that happen occasionally. Mobile apps work best for frequent, interactive use where offline access, device features, or push notifications matter. This guide gives business owners a practical framework for choosing between a website, a native mobile app, and the middle-ground option — a Progressive Web App.",
  },
  {
    url: "/insights/custom-pos-system-development",
    title: "Custom Point of Sale System: What Retail and Hospitality Businesses Build Beyond Square and Stripe",
    tag: "Industry",
    summary:
      "Square, Stripe Terminal, and Shopify POS work well for simple, single-site operations. When businesses scale to multiple locations, add complex menus or B2B pricing, need deep loyalty integration, or require reporting across sites, off-the-shelf POS tools become a constraint. Custom POS systems give high-volume retail, restaurant, and hospitality businesses the exact transaction flows, integrations, and reporting their operations need without monthly fees or plugin workarounds.",
  },
  {
    url: "/insights/custom-software-for-manufacturing",
    title: "Custom Software for Manufacturing Companies: MES, Inventory, and Quality Control",
    tag: "Industry",
    summary:
      "Manufacturing companies outgrow generic ERP modules when production complexity, quality requirements, or multi-site operations push against the limits of off-the-shelf tooling. Custom manufacturing software — covering MES, inventory, quality control, and shop floor reporting — gives manufacturers precise visibility into their operations without paying for modules they do not need or fitting their processes into someone else's workflow model.",
  },
  {
    url: "/insights/fixed-price-vs-time-and-materials",
    title: "Fixed Price vs Time and Materials: How to Choose the Right Software Development Contract",
    tag: "How-To",
    summary:
      "Fixed-price contracts work when requirements are fully defined before work starts. Time and materials contracts work when you need flexibility to discover and change scope during the build. Most professional engagements use a hybrid: a fixed-price discovery phase followed by a milestone-based or T&M build. Knowing which contract to expect — and what to negotiate — protects your budget and your project.",
  },
  {
    url: "/insights/custom-document-management-software",
    title: "Custom Document Management Software: Why SharePoint and Dropbox Are Not Enough",
    tag: "Strategy",
    summary:
      "SharePoint, Google Drive, and Dropbox store files — they do not manage documents. Custom document management software adds version control, role-based access, automated approval workflows, compliance audit trails, and retention policies that off-the-shelf tools cannot enforce. The difference matters most for professional services firms, regulated industries, and businesses managing client documentation at scale.",
  },
  {
    url: "/insights/custom-workflow-automation-software",
    title: "Custom Workflow Automation Software for Business: What It Does and What It Costs",
    tag: "Automation",
    summary:
      "Custom workflow automation software replaces manual handoffs, email chains, and spreadsheet-based tracking with rules-driven processes that run automatically. For most businesses, the ROI arrives within 12 months through time savings alone — error reduction and compliance benefits add further value on top.",
  },
  {
    url: "/insights/outsourcing-vs-in-house-software-development",
    title: "Outsourcing vs In-House Software Development: Which Is Right for Your Business in 2025?",
    tag: "Strategy",
    summary:
      "Outsourcing custom software gives you a known project cost, faster start, and specialist skills without hiring overhead — but requires clear scope and good communication. An in-house team gives you faster iteration and institutional knowledge accumulation, but costs significantly more per hour of output and takes 3–6 months to hire and onboard. This guide gives you the real comparison.",
  },
  {
    url: "/insights/custom-database-development-cost",
    title: "Custom Database Development Cost in 2025: What Businesses Actually Pay",
    tag: "Cost Guide",
    summary:
      "Custom database development costs range from $8,000 for a simple structured data store with a basic admin interface to $80,000+ for a complex multi-tenant system with custom reporting and external integrations. The biggest cost variable is not the database itself — it's the admin interface and reporting layer built on top of it.",
  },
  {
    url: "/insights/custom-software-for-accounting-firms",
    title: "Custom Software for Accounting Firms: Client Portals, Workflow Automation, and Practice Management",
    tag: "Industry",
    summary:
      "Off-the-shelf practice management tools like Karbon and TaxDome cover the basics but can't match the specific workflows of your firm. Custom software for accounting firms delivers a branded client portal, automated engagement workflows, and a practice management system that reflects how you actually work — not how the vendor thinks you should.",
  },
  {
    url: "/insights/custom-employee-onboarding-software",
    title: "Custom Employee Onboarding Software: What to Build and Why It Pays Off",
    tag: "Automation",
    summary:
      "Manual employee onboarding wastes 10–25 hours of staff time per hire and introduces compliance risk. Custom onboarding software automates the entire process — from digital contract signing to IT provisioning to compliance training — and pays back within 18–24 months for most businesses hiring regularly.",
  },
  {
    url: "/insights/custom-field-service-software",
    title: "Custom Field Service Software for Trades and Service Businesses in 2025",
    tag: "Industry",
    summary:
      "Off-the-shelf field service tools like Jobber and ServiceTitan work until your operation grows past what they were designed for. Custom field service software gives you a dispatch system, technician app, and customer portal built exactly around how your business works — and pays back faster than most owners expect.",
  },
  {
    url: "/insights/custom-payment-integration-software",
    title: "Custom Payment Integration Software: What Businesses Need Beyond Stripe",
    tag: "How-To",
    summary:
      "Stripe and PayPal handle standard transactions well. When you need split payments, complex subscription logic, B2B invoice billing, or seamless integration with your internal systems, custom payment integration software is the answer — and it costs less than most businesses expect.",
  },
  {
    url: "/insights/custom-software-maintenance-cost",
    title: "Custom Software Maintenance Cost: What to Budget After Launch",
    tag: "Cost Guide",
    summary:
      "Most businesses budget carefully for the build but are caught off guard by ongoing maintenance costs. Custom software maintenance typically runs 15–25% of the original build cost per year — this guide explains exactly what you are paying for and how to reduce it.",
  },
  {
    url: "/insights/api-integration-cost-business",
    title: "API Integration Cost for Businesses in 2025: What You Actually Pay",
    tag: "Cost Guide",
    summary:
      "API integration costs range from $2,000 for a simple webhook to $80,000 for a multi-system data hub. This guide breaks down what drives those costs, which integrations deliver the best ROI, and when to build custom rather than use a platform like Zapier.",
  },
  {
    url: "/insights/custom-inventory-management-software",
    title: "Custom Inventory Management Software: Build vs Buy in 2025",
    tag: "Cost Guide",
    summary:
      "Off-the-shelf inventory tools work until they don't — then spreadsheets creep back in. This guide shows what custom inventory management software costs, what it includes, and when building your own system delivers better ROI than another SaaS subscription.",
  },
  {
    url: "/insights/how-long-does-custom-software-take",
    title: "How Long Does Custom Software Development Take? (2025 Timeline Guide)",
    tag: "Process",
    summary:
      "Custom software timelines range from 8 weeks for a simple MVP to 18 months for a complex enterprise system. This guide gives you realistic benchmarks by project type so you can plan with confidence.",
  },
  {
    url: "/insights/custom-software-for-ecommerce-businesses",
    title: "Custom Software for E-Commerce Businesses: What to Build Beyond Shopify",
    tag: "Industry",
    summary:
      "Once you pass a certain volume, Shopify's limitations start costing you money in transaction fees, plugin costs, and operational inefficiency. This guide covers what successful e-commerce businesses build custom to break through those ceilings.",
  },
  {
    url: "/insights/how-to-build-recurring-revenue-software",
    title: "How to Build Recurring Revenue Through a Software Product",
    tag: "Strategy",
    summary:
      "A software product can transform one-off project revenue into predictable monthly income. This guide explains how to identify the right product, price it, and build it without betting the business.",
  },
  {
    url: "/insights/automate-customer-onboarding",
    title: "How to Automate Customer Onboarding With Custom Software",
    tag: "Automation",
    summary:
      "Manual onboarding means every new customer gets a slightly different experience depending on who handles their setup. Automating the process makes it faster, more consistent, and more impressive — and frees your team to focus on building the relationship rather than chasing paperwork.",
  },
  {
    url: "/insights/business-intelligence-dashboard-guide",
    title: "How to Build a Business Intelligence Dashboard Your Team Will Actually Use",
    tag: "Strategy",
    summary:
      "Most business intelligence dashboards are built and then quietly abandoned. They show too many metrics, update too slowly, or answer questions nobody is actually asking. This guide explains how to build a dashboard your team opens every morning — with the right KPIs, connected data, and design that drives decisions.",
  },
  {
    url: "/insights/crm-for-b2b-sales",
    title: "Why Off-the-Shelf CRM Doesn't Work for B2B Sales (And What Does)",
    tag: "Strategy",
    summary:
      "Generic CRM tools are built around simple B2C pipelines — they struggle with multi-stakeholder B2B deals that involve committees, contracts, and long buying cycles. Here is what a CRM built specifically for B2B sales looks like and when to build one.",
  },
  {
    url: "/insights/custom-software-for-us-startups",
    title: "Custom Software Development for US Startups: What to Build First",
    tag: "Strategy",
    summary:
      "Most startups either build too much too early or stay on temporary tools too long. The decision of when to commission custom software — and what to build first — is one of the most consequential a founding team makes. This guide gives you the framework to get it right.",
  },
  {
    url: "/insights/software-development-for-uk-businesses",
    title: "Custom Software Development for UK Businesses: A 2025 Buyer's Guide",
    tag: "Local",
    summary:
      "UK businesses are increasingly commissioning custom software — from client portals and CRM systems to full ERP replacements. This guide covers what to expect from a development partner, how much projects typically cost, and the GDPR compliance requirements you need to factor in.",
  },
  {
    url: "/insights/custom-software-development-florida",
    title: "Custom Software Development in Florida: What to Look For in 2025",
    tag: "Local",
    summary:
      "Florida's software development market has grown fast, but quality varies enormously. Whether you are in Miami, Orlando, Tampa, or Jacksonville, knowing what to look for — and what to avoid — can be the difference between a project that delivers and one that drains your budget.",
  },
  {
    url: "/insights/what-to-expect-software-project",
    title: "What to Expect During a Custom Software Project (Week by Week)",
    tag: "Process",
    summary:
      "A professional custom software project follows a predictable sequence from discovery through to go-live. Knowing what happens at each stage — and what your role is — reduces uncertainty, improves outcomes, and makes you a better client.",
  },
  {
    url: "/insights/how-to-build-an-mvp",
    title: "How to Build a Minimum Viable Product: A Business Owner's Guide",
    tag: "Process",
    summary:
      "An MVP is the smallest version of your software that delivers real value to real users — not a rough prototype, not a demo, but a working system that tests your riskiest assumptions before you commit to a full build.",
  },
  {
    url: "/insights/how-to-write-software-requirements",
    title: "How to Write Software Requirements Without Being a Developer",
    tag: "How-To",
    summary:
      "Writing clear software requirements is the single thing non-technical business owners can do to make their project faster, cheaper, and less stressful. You do not need to know how software is built — you need to know what it should do.",
  },
  {
    url: "/insights/discovery-phase-software-development",
    title: "What Is the Discovery Phase in Software Development — And Why It Matters",
    tag: "Process",
    summary:
      "The discovery phase is the structured work a development team does before writing a single line of code — mapping requirements, identifying risks, and producing a clear plan. Skipping it is the most common cause of software projects going over budget.",
  },
  {
    url: "/insights/what-is-agile-development",
    title: "What Is Agile Software Development? (And Why It Matters for Your Project)",
    tag: "Beginner Guide",
    summary:
      "Agile software development means your project is built in short cycles with regular check-ins and working software at every stage — not a six-month wait followed by a big reveal. Understanding how it works puts you in control of the build.",
  },
  {
    url: "/insights/what-is-cloud-deployment",
    title: "What Is Cloud Deployment? A Business Owner's Guide to Hosting Software",
    tag: "Beginner Guide",
    summary:
      "Cloud deployment is how your software gets hosted and made accessible online — but the options range from simple managed platforms to enterprise infrastructure. This guide explains what each choice means for your cost, speed, and reliability.",
  },
  {
    url: "/insights/why-your-website-isnt-converting",
    title: "Why Your Business Website Isn't Converting (And How to Fix It)",
    tag: "Growth",
    summary:
      "Most business websites generate traffic but fail to turn visitors into enquiries. The gap is almost always fixable — but only if you diagnose the right causes first.",
  },
  {
    url: "/insights/what-is-an-erp-system",
    title: "What Is an ERP System? A Plain-English Guide for Business Owners",
    tag: "Beginner Guide",
    summary:
      "ERP is one of the most used and least understood terms in business technology. This guide explains what an ERP system actually does, who needs one, and what your real options are.",
  },
  {
    url: "/insights/what-is-a-rest-api",
    title: "What Is an API and Why Does Your Business Need One?",
    tag: "Beginner Guide",
    summary:
      "APIs are the plumbing that allows separate software tools to share data automatically. Understanding what they are — and when you need a custom one — saves significant time, errors, and operational cost.",
  },
  {
    url: "/insights/eliminate-manual-data-entry",
    title: "How to Eliminate Manual Data Entry in Your Business With Software",
    tag: "Automation",
    summary:
      "Manual data entry is one of the most expensive operational habits a growing business can maintain — not because of the time it takes, but because of the errors it introduces and the decisions it delays.",
  },
  {
    url: "/insights/stop-wasting-money-saas",
    title: "How to Stop Wasting Money on SaaS Tools Your Team Doesn't Use",
    tag: "Cost Savings",
    summary:
      "Most growing businesses are paying for software they no longer use, tools that duplicate each other, and licences for people who left years ago. A one-afternoon audit typically recovers 20-35% of the monthly SaaS bill.",
  },
  {
    url: "/insights/business-needs-custom-client-portal",
    title: "Why Your Business Needs a Custom Client Portal (And What It Should Include)",
    tag: "Strategy",
    summary:
      "A custom client portal replaces scattered emails, shared drives, and repeated status calls with a single professional hub your clients actually want to use.",
  },
  {
    url: "/insights/why-spreadsheets-are-killing-your-business",
    title: "Why Spreadsheets Are Silently Killing Your Business Productivity",
    tag: "Strategy",
    summary:
      "Every business starts with spreadsheets. But when they become the backbone of operations, they introduce errors, slow things down, and create risks that are invisible until they cause real damage.",
  },
  {
    url: "/insights/scale-business-with-software",
    title: "How to Use Custom Software to Scale from 10 to 100 Employees",
    tag: "Strategy",
    summary:
      "Most businesses stall during growth not because demand dries up but because their internal systems cannot keep up. The right custom software removes the operational ceiling before it stops you.",
  },
  {
    url: "/insights/custom-software-competitive-advantage",
    title: "How Custom Software Gives Your Business a Competitive Advantage",
    tag: "Strategy",
    summary:
      "Generic software creates operational parity with every competitor in your market. Custom software is how businesses break away — by moving faster, serving clients better, and making smarter decisions.",
  },
  {
    url: "/insights/digital-transformation-small-business",
    title: "Digital Transformation for Small Business: A Practical No-Jargon Guide",
    tag: "Strategy",
    summary:
      "Digital transformation is not about buying trendy technology — it is about replacing the manual, error-prone, or time-wasting parts of your business with software that works. Here is how small businesses do it practically.",
  },
  {
    url: "/insights/vendor-lock-in-software",
    title: "The Real Cost of Vendor Lock-In in Business Software",
    tag: "Strategy",
    summary:
      "Vendor lock-in is not an accident — it is deliberately engineered into most SaaS products. Understanding how it works is the first step to either avoiding it or escaping it before the cost becomes unbearable.",
  },
  {
    url: "/insights/why-own-software-not-rent",
    title: "Why Owning Your Software Beats Renting It Forever",
    tag: "Strategy",
    summary:
      "Monthly SaaS fees add up to hundreds of thousands over a decade — money spent on software you will never own. More businesses are switching to custom builds that eliminate subscriptions and give them full control.",
  },
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
    name: "Usama Aftab",
    initials: "UA",
    location: "United Kingdom / 2 Jun 2026",
    rating: "5.0",
    order: "Verified Clutch review / E-Commerce Web Development",
    headline: "They came in way more affordable without cutting corners on quality.",
    role: "Owner, Networking & Connectivity Hardware Retailer",
    quote:
      "Strategeon Softwares designed and developed our e-commerce site from scratch. The team built the platform, set up product pages, and ensured mobile compatibility — all delivered on time and within budget."
  },
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
  { name: "React", icon: "/tech/react.svg" },
  { name: "Next.js", icon: "/tech/nextjs.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg" },
  { name: "Python", icon: "/tech/python.svg" },
  { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "Supabase", icon: "/tech/supabase.svg" },
  { name: "Vercel", icon: "/tech/vercel.png" }
];
