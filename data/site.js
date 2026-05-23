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
    title: "Formbricks",
    category: "Platforms",
    result: "Survey and experience platform",
    summary: "A polished customer feedback platform with surveys, dashboards, targeting, and product analytics style workflows.",
    demoUrl: "https://formbricks.com",
    image: "/projects/formbricks.png"
  },
  {
    title: "Papermark",
    category: "Platforms",
    result: "Secure document sharing platform",
    summary: "A professional data-room and document-sharing product with viewer analytics, branded rooms, and secure deal workflows.",
    demoUrl: "https://www.papermark.com",
    image: "/projects/papermark.png"
  },
  {
    title: "OpenStatus",
    category: "Platforms",
    result: "Status pages and uptime monitoring",
    summary: "A monitoring product with status pages, incident communication, API checks, and clean operational dashboards.",
    demoUrl: "https://www.openstatus.dev",
    image: "/projects/openstatus.png"
  },
  {
    title: "Infisical",
    category: "Platforms",
    result: "Secrets and access management",
    summary: "A security platform for managing secrets, certificates, permissions, audit logs, and developer infrastructure workflows.",
    demoUrl: "https://infisical.com",
    image: "/projects/infisical.png"
  },
  {
    title: "Unkey",
    category: "Platforms",
    result: "API key management platform",
    summary: "A developer platform for API keys, usage controls, analytics, permissions, and secure application access patterns.",
    demoUrl: "https://www.unkey.com",
    image: "/projects/unkey.png"
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
    slug: "scalable-mvp-before-launch",
    title: "What a scalable MVP really needs before launch",
    tag: "Product",
    summary: "The practical decisions that help a first release survive real users, new features, and investor questions.",
    content: [
      {
        heading: "The difference between functional and scalable",
        body: "Most MVPs are built to prove a concept. That is a reasonable goal. The problem is that proving a concept and surviving real users are two entirely different engineering challenges. A product that works in a demo can collapse under a few hundred concurrent users, a dataset with more than ten thousand rows, or a feature request that requires rethinking a core assumption. The goal of a scalable MVP is not to over-engineer on day one. It is to make the right bets early so that growth does not require a full rewrite six months in."
      },
      {
        heading: "Database design is the decision you cannot undo cheaply",
        body: "The single most expensive technical mistake in early-stage products is a poorly designed database schema. Migrations on a live system with real user data are painful, risky, and slow. Before writing the first line of application code, spend serious time on your data model. Ask how each entity relates to every other entity. Ask what queries your product will run at ten times current scale. Ask whether your primary keys and indexing strategy will hold up when a table has ten million rows instead of ten thousand. These are not premature optimizations. They are decisions that become increasingly expensive to reverse as users arrive."
      },
      {
        heading: "Keep the API surface small and consistent",
        body: "Your API is a contract. Every endpoint you expose to a frontend or a third party is a surface you have to maintain, version, and support. Early-stage products tend to accumulate endpoints the way startups accumulate Slack channels — fast, without governance, and with no cleanup mechanism. A better model is to define your resource structure before you build it. Use consistent naming conventions. Version your API from day one, even if version two never comes. Keep your response shapes predictable. An API that developers can understand without reading documentation is an API that scales with your team."
      },
      {
        heading: "Auth and permissions need to be right from the start",
        body: "Authentication and authorization are not features you can bolt on later. The moment you have multiple user types — customers and admins, for example, or free and paid tiers — you need a permissions system that can express those differences clearly. Retrofitting row-level security or role-based access control into a product that was not designed for it is one of the most disruptive engineering tasks a team can face. Build your auth layer to support the user model you expect to have in twelve months, not just the one you have today."
      },
      {
        heading: "Defer complexity, not quality",
        body: "Scalability does not mean building everything at once. It means making the choices that keep future complexity manageable. You can defer real-time features, advanced analytics, machine learning integrations, and sophisticated caching layers. What you cannot defer is clean architecture, consistent data modeling, and a deployment process that does not require a human to run commands on a server. The distinction matters because deferred complexity is a deliberate product decision. Deferred quality is technical debt that compounds with every new hire and every new feature."
      },
      {
        heading: "The minimum you actually need",
        body: "A scalable MVP needs four things: a data model designed for the actual product, an API that is consistent and versioned, an auth system that supports the user types you plan to have, and a deployment pipeline that makes pushing an update a non-event. Everything else is optional at launch. The goal is a foundation that lets your team move fast after users arrive, not one that feels impressive in a pitch deck but slows to a crawl the moment real data enters the system."
      }
    ]
  },
  {
    slug: "web-apps-operations-to-growth",
    title: "How modern web apps turn operations into growth",
    tag: "Strategy",
    summary: "A guide to replacing manual workflows with dashboards, automations, and measurable business systems.",
    content: [
      {
        heading: "Operations are where most growth gets stuck",
        body: "Most businesses do not have a demand problem. They have an execution problem. Leads come in and sit in a spreadsheet for three days. Orders get processed manually because the system cannot talk to the warehouse. Reports take a week to produce because someone has to pull data from four different tools and paste it into Excel. These are not small inefficiencies. They are growth ceilings. Every manual step in an operation is a constraint that limits how much output the business can produce per dollar of labor. Modern web applications exist specifically to remove those constraints."
      },
      {
        heading: "The real ROI of automation",
        body: "When a business replaces a manual workflow with a software system, the ROI calculation is usually obvious in retrospect and underestimated in advance. A sales team that spends two hours a day on data entry gets those hours back for selling. A service business that automates its scheduling and follow-up process can handle more clients without adding headcount. An operations manager who used to spend half their week building reports can spend that time analyzing them instead. The financial return is not just the hours saved multiplied by an hourly rate. It is the compounding effect of those hours being redirected toward the work that actually drives revenue."
      },
      {
        heading: "Dashboard-first thinking",
        body: "The most effective way to identify where software will have the greatest impact is to start with the question: what does leadership need to see every day to make good decisions? If the answer requires pulling data manually from multiple sources, that is a system worth building. A well-designed operational dashboard does two things. First, it surfaces the metrics that matter in real time. Second, it creates accountability because the numbers are visible. Teams that see their performance in a shared dashboard tend to improve it faster than teams that only review performance in quarterly meetings."
      },
      {
        heading: "Which operations translate to growth systems",
        body: "Not every operation is worth automating immediately. The highest-leverage candidates share a few characteristics. They are repetitive, meaning a human does approximately the same thing every time. They are high-volume, meaning they happen often enough that the overhead adds up. They are measurable, meaning you can track whether the automated version performs as well as the manual one. Lead routing, client onboarding, invoice generation, inventory updates, appointment scheduling, and report distribution all fit this pattern. Automating any one of them frees up capacity. Automating several of them together often changes the fundamental economics of the business."
      },
      {
        heading: "How to prioritize what to build first",
        body: "Start with the operation that costs the most time and has the clearest success criteria. A workflow that takes twenty hours a week and produces a predictable output is a better first project than a complex decision-support system that requires significant judgment. Early wins matter because they build organizational confidence in software investment. A team that sees one system work well is far more receptive to the next one. The goal in the first project is not to build the most impressive system. It is to demonstrate that the time and money spent on software development produces a measurable return."
      },
      {
        heading: "The compounding effect",
        body: "Businesses that invest in operational software do not just get faster. They get smarter. Every system that captures operational data creates a record that can be analyzed. Patterns emerge that were invisible when the work was done manually. Bottlenecks become identifiable. Performance variations become explainable. Over time, the data from operational systems becomes one of the most valuable strategic assets the business owns. The companies that grow fastest are usually the ones that figured this out earliest."
      }
    ]
  },
  {
    slug: "custom-software-vs-off-the-shelf",
    title: "Choosing between custom software and off-the-shelf tools",
    tag: "Engineering",
    summary: "Where custom development pays off, where it does not, and how to make the decision without overbuilding.",
    content: [
      {
        heading: "The question most businesses ask too late",
        body: "By the time most businesses ask whether they should build or buy, they have already spent months stitching together off-the-shelf tools that almost fit their workflow. The integrations are fragile. The data is spread across four systems. The team has developed workarounds for every limitation of every tool. At that point, the build-versus-buy question becomes a rebuild-versus-keep-suffering question, and the answer is usually obvious. The better version of this decision gets made earlier, with clearer criteria, before the sunk cost of the current setup makes it emotionally difficult to change."
      },
      {
        heading: "The real cost of off-the-shelf tools",
        body: "Off-the-shelf software is sold on its monthly price. The actual cost includes that price multiplied by however many seats you need, plus the time spent working around its limitations, plus the productivity lost to a workflow that does not quite match the way your team operates, plus the integration costs when the tool does not connect cleanly to the rest of your stack, plus the lock-in risk when your data lives in a system you do not control. For standard processes — accounting, HR, email — these tradeoffs are usually worth it. For the workflows that differentiate your business, they often are not."
      },
      {
        heading: "When off-the-shelf makes sense",
        body: "There are clear cases where buying is the right answer. If your workflow is standard — the same as how most businesses in your category operate — a well-built SaaS product will almost always be faster to deploy, cheaper to maintain, and better supported than something custom. Accounting software, payroll systems, email marketing platforms, and customer support ticketing tools all fall into this category. The underlying process is not a source of competitive advantage. Using a standard tool for a standard process is efficient. Building a custom version of Quickbooks is not a good use of engineering resources."
      },
      {
        heading: "When custom development pays off",
        body: "Custom software makes sense when the workflow is unique to your business, when the off-the-shelf alternatives require enough compromises that your team is constantly working around them, or when the operation you are automating is a direct source of competitive advantage. A logistics company with a proprietary routing algorithm, a healthcare provider with a specific patient intake process, a service business with a complex pricing model that no off-the-shelf tool can express — these are all cases where custom development is not just justified but strategically important. The software becomes part of what makes the business hard to replicate."
      },
      {
        heading: "The hybrid approach most businesses end up with",
        body: "In practice, most businesses use a combination of both. Standard tools handle standard processes. Custom software handles the workflows that matter most. The integration layer between them is often where the real engineering challenge lies. A custom dashboard that pulls data from five existing tools and presents it in a way that is specific to how leadership makes decisions is more valuable than either replacing those tools entirely or accepting that the data will never be in one place. The goal is not to build everything or to buy everything. It is to identify which parts of the business deserve custom engineering and protect that investment from the pressure to cut corners."
      },
      {
        heading: "Questions to ask before deciding",
        body: "Before choosing, work through four questions. First, is this workflow standard or specific to how we operate? Second, if we use an off-the-shelf tool, how many workarounds will we need in the first six months? Third, does the data this process generates need to live somewhere we fully control? Fourth, is this operation a source of competitive advantage or just a cost to manage? If the answers point toward specific, many workarounds, controlled data, and competitive importance — build. If they point the other way — buy. Most decisions become clearer with those four questions on the table."
      }
    ]
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
