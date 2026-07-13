// All site copy lives here so it's easy to update without touching markup.

// Maps a project type to a css modifier so each badge reads distinctly
// (shape + label, never colour alone): "client" | "personal" | "demo" | "concept".
export function badgeKey(type = "") {
  return type.toLowerCase().split(" ")[0];
}

// Finds a project by its case-study slug.
export function projectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------
   SITE — shared contact + link config used across nav, hero, contact,
   footer, and case-study pages. Update links in one place.

   RÉSUMÉ: `resumeUrl` points at a file that does NOT exist yet. Export
   your résumé to `public/JV-Marte-Resume.pdf` and it will be served at
   this path automatically — no code change needed. Until then the button
   still renders; see SCREENSHOT_GUIDE.md / PORTFOLIO_CHANGELOG.md.
   ------------------------------------------------------------------ */
export const site = {
  name: "John Vincent Marte",
  title: "CRM & Automation Virtual Assistant",
  email: "martejohnvincent13@gmail.com",
  resumeUrl: "/JV-Marte-Resume.pdf", // TODO: add this PDF to /public
  calendly: "https://calendly.com/martejohnvincent13/30min",
  // Public profiles. Set onlineJobs when the URL is available to render it.
  linkedin: "https://www.linkedin.com/in/john-vincent-marte-6b1530330/",
  instagram: "https://www.instagram.com/jvmarte_",
  facebook: "https://www.facebook.com/JVincent51",
  onlineJobs: null, // TODO: add OnlineJobs.ph profile URL
};

/* ------------------------------------------------------------------
   SERVICES — three focused categories (CRM, automation, web/ops).
   Web dev, bookkeeping and data work live as features of category 3,
   not as separate careers.
   ------------------------------------------------------------------ */
export const services = [
  {
    n: "01",
    title: "CRM & Lead Management",
    blurb:
      "Organized pipelines, clean contact records, clear lead stages, and follow-up processes — so opportunities don't slip through the cracks.",
    items: [
      "GoHighLevel setup",
      "Lead pipelines & stages",
      "Contact organization",
      "Appointment workflows",
      "Email & SMS follow-ups",
      "Basic reporting",
    ],
  },
  {
    n: "02",
    title: "Workflow Automation",
    blurb:
      "Connect your tools and automate the repetitive parts, so less time goes to copying data, chasing reminders, and routine admin.",
    items: [
      "Zapier & n8n workflows",
      "Form & intake automation",
      "Automated notifications",
      "Lead routing",
      "Spreadsheet integrations",
      "API-based connections",
    ],
  },
  {
    n: "03",
    title: "Web & Operations Support",
    blurb:
      "Practical websites, landing pages, spreadsheets, and back-office systems that keep day-to-day operations running.",
    items: [
      "Landing pages & websites",
      "Website updates",
      "Forms & lead capture",
      "Google Sheets systems",
      "Basic bookkeeping support",
      "Data organization & docs",
    ],
  },
];

/* ------------------------------------------------------------------
   WORK PROCESS — simple four-step flow.
   ------------------------------------------------------------------ */
export const steps = [
  {
    n: "01",
    title: "Understand",
    body: "I learn how the current process works, where tasks get stuck, and what result you actually need.",
  },
  {
    n: "02",
    title: "Plan",
    body: "I map out the workflow, the tools, the information, and the steps it'll take to get there.",
  },
  {
    n: "03",
    title: "Build",
    body: "I create and test the CRM, automation, website, or operational system until it works the way it should.",
  },
  {
    n: "04",
    title: "Improve",
    body: "I document the setup, fix what comes up, and refine the system based on how it runs and your feedback.",
  },
];

/* ------------------------------------------------------------------
   TOOLS — split into honest proficiency levels, not a flat logo wall.
   `label` is the level; `note` is an optional one-liner; each tool has
   a `name`, an optional `img` logo (else a text chip), and an optional
   short `desc`. Move tools between levels here as skills grow — no
   percentages, no progress bars.
   ------------------------------------------------------------------ */
export const toolLevels = [
  {
    label: "Primary tools",
    note: "What I reach for on most projects and use hands-on.",
    tools: [
      {
        name: "GoHighLevel",
        img: "/assets/tools/Go_High_Level_logo_e857db4f10.webp",
        desc: "Pipelines, workflows, forms, calendars, snapshots",
      },
      { name: "Google Sheets", desc: "Dashboards, trackers, formula-driven systems" },
      { name: "Microsoft Excel", desc: "Spreadsheet models & reporting" },
      { name: "Next.js", desc: "Websites & web apps (React)" },
      { name: "Supabase", desc: "Postgres database, auth, storage" },
    ],
  },
  {
    label: "Working knowledge",
    note: "Comfortable using these; still deepening.",
    tools: [
      { name: "Zapier", img: "/assets/tools/zapier-logo-11609384024iqadesape3.png" },
      { name: "n8n", img: "/assets/tools/N8n-logo-new.svg.png" },
      { name: "QuickBooks", img: "/assets/tools/images.png" },
      { name: "Xero", img: "/assets/tools/xero-logo-11609383483yebtmp69gf.png" },
      { name: "Figma", img: "/assets/tools/90ef330c93e43555f96ecb647c5d1d.webp" },
      { name: "Canva", img: "/assets/tools/canva-icon-logo.png" },
    ],
  },
];

/* ------------------------------------------------------------------
   PROJECTS — proof-first. Each project carries enough structured data to
   render both the homepage card and a `/work/[slug]` case-study page, so
   the same facts are never hardcoded in two places.

   Shape:
     slug       url segment for the case study (/work/<slug>)
     type       badge label: Client / Personal / Demo / Concept Project
     status     short honest label ("Live", "Demo", "Concept")
     featured   true = homepage carousel; false = "Experiments" list
     title, problem, built            headline copy
     role[]     what JV personally handled
     features[] key deliverables (shown on the card)
     outcomes[] truthful results (no invented metrics) — case study
     challenges[] one or two real challenges (optional) — case study
     stack[]    tools actually used
     url        live site (optional). When present the card shows
                "Visit live website"; otherwise the case study is primary.
     image      cover screenshot, or null for a graceful placeholder.

   Only CC Source is a confirmed client engagement — keep it that way
   unless real evidence is added. No invented testimonials or metrics.
   ------------------------------------------------------------------ */
export const projects = [
  {
    slug: "azure-sands",
    type: "Demo Project",
    status: "Live",
    featured: true,
    title: "Azure Sands Boracay — Condotel Booking Site",
    problem:
      "A boutique Boracay condotel needs more than a Facebook page — a real booking site where guests can check availability and reserve a room, plus a way for staff to manage rooms and bookings without touching code.",
    built:
      "A full condotel booking web app on Next.js with a dual-mode data layer: it runs on an in-memory demo store out of the box and switches to a Supabase Postgres database when configured. Guests search by dates and guests, move through a booking wizard to an email-confirmed reservation, while staff manage rooms and bookings from an admin dashboard.",
    role: [
      "Full-stack build (Next.js + Supabase)",
      "Availability search & booking flow",
      "Admin dashboard",
    ],
    features: [
      "Availability search by dates & guests",
      "Multi-step booking wizard with email confirmation",
      "Admin dashboard for rooms & bookings",
    ],
    outcomes: [
      "Live booking site deployed on Vercel",
      "Dual-mode data layer: in-memory demo or Supabase Postgres",
      "Admin dashboard to manage rooms, bookings and availability",
    ],
    challenges: [
      "Designing a dual-mode data layer so the site runs as a zero-setup demo, then upgrades to a real Supabase database with no code changes.",
      "Handling availability, booking, and confirmation emails as one reliable flow.",
    ],
    stack: ["Next.js", "Supabase", "Tailwind CSS", "Resend"],
    url: "https://azure-condotel.vercel.app",
    image: "/assets/images/azure-condotel.png",
  },
  {
    slug: "silencio",
    type: "Personal Project",
    status: "Live",
    featured: true,
    title: "Silencio Co — E-commerce Platform",
    problem:
      "My streetwear brand needed a real storefront with customer accounts, not just a brochure site — plus clear numbers behind the scenes (margins, cash flow, break-even) without paying for heavy accounting software.",
    built:
      "A live e-commerce web app built with Next.js and TypeScript on a Supabase Postgres database — a limited-drop store with secure customer accounts — backed by a Google Sheets accounting & operations dashboard that auto-calculates COGS, margins, A/R, A/P, inventory value, and break-even.",
    role: [
      "Full-stack build (Next.js + TypeScript + Supabase)",
      "Authentication & account management",
      "Accounting & operations dashboard (Google Sheets)",
    ],
    features: [
      "Secure accounts & authentication",
      "Limited-drop product catalog",
      "Accounting dashboard: auto P&L, margins & break-even",
    ],
    outcomes: [
      "Live e-commerce store with secure customer accounts",
      "Limited-drop catalog on a Supabase Postgres database",
      "Google Sheets dashboard: auto-calculated P&L, COGS, margins, A/R, A/P and inventory value",
    ],
    challenges: [
      "Building secure customer accounts and authentication on Supabase.",
      "Running the storefront and the numbers as one system, with the dashboard auto-updating from raw sales and expense logs — no paid accounting software.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Auth", "Google Sheets"],
    url: "https://silencio-clothing.com",
    image: "/assets/images/silencio-co.png",
  },
  {
    slug: "tawid-gutom",
    type: "Personal Project",
    status: "Live",
    featured: true,
    title: "Tawid Gutom — Food Ordering Platform",
    problem:
      "A local Filipino home-kitchen in Kalibo, Aklan needed more than a menu photo on Facebook — a real storefront to take orders and a simple way for the owner to manage the menu without touching code.",
    built:
      "A full food-ordering web app on Next.js backed by Supabase: a customer storefront with menu, cart, and Cash-on-Delivery / GCash checkout, plus an admin dashboard to manage menu items, promotions, and incoming orders.",
    role: ["Full-stack build (Next.js + Supabase)", "Storefront & cart UX", "Admin dashboard"],
    features: [
      "Storefront with cart & COD / GCash checkout",
      "Admin dashboard for menu, promos & orders",
      "Mark items sold out / available in one click",
    ],
    outcomes: [
      "Live storefront with cart and COD / GCash checkout",
      "Admin dashboard to manage menu, promotions and incoming orders",
      "One-click sold-out / available toggling per item",
    ],
    challenges: [
      "Giving a non-technical owner full control of the menu and orders without touching code.",
      "Supporting Cash-on-Delivery and GCash checkout flows in one storefront.",
    ],
    stack: ["Next.js", "Supabase", "Admin Dashboard", "E-commerce"],
    url: "https://tawid-gutom.vercel.app",
    image: "/assets/images/tawid-gutom.png",
  },
  {
    slug: "cc-source",
    type: "Client Project",
    status: "Live",
    featured: true,
    title: "CC Source — Website Redesign",
    problem:
      "An Asian sourcing firm for LED and industrial components needed a site credible enough to win the trust of North American and European manufacturers.",
    built:
      "Rebuilt the frontend of their existing Next.js + TypeScript site into a cleaner, more credible, multilingual experience.",
    role: ["Frontend redesign", "Responsive implementation", "Multilingual UI"],
    features: [
      "Multilingual, responsive UI",
      "Clearer trust building layout",
      "Reworked existing Next.js codebase",
    ],
    outcomes: [
      "Rebuilt the frontend into a cleaner, more credible layout",
      "Multilingual, responsive experience across desktop and mobile",
      "Improved the existing codebase instead of rebuilding from scratch",
    ],
    challenges: [
      "Working inside an existing Next.js + TypeScript codebase without breaking current functionality.",
      "Making a B2B sourcing firm read as trustworthy to buyers across different languages.",
    ],
    stack: ["Next.js", "TypeScript", "UI Redesign", "Responsive"],
    url: "https://cc-source.com",
    image: "/assets/images/cc-source.png",
  },
  {
    slug: "ghl-crm",
    type: "Demo Project",
    status: "Demo",
    featured: true,
    title: "Service Business CRM — GoHighLevel",
    problem:
      "Service businesses lose leads when follow-ups are manual and the pipeline lives in someone's head.",
    built:
      "A GoHighLevel build with automated follow-ups, lead tracking, and pipeline management, set up as a working demo of the system.",
    role: ["CRM pipeline setup", "Workflow automation", "Follow-up sequences"],
    features: [
      "Automated SMS & email follow-ups",
      "Lead tracking across pipeline stages",
      "Designed to reduce manual follow-up work",
    ],
    outcomes: [
      "Automated SMS & email follow-up sequences",
      "Lead tracking across clear pipeline stages",
      "A reusable working demo of the setup",
    ],
    challenges: [
      "Designing follow-ups that cut manual work for a small service team.",
      "Keeping the pipeline readable as leads move across stages.",
    ],
    stack: ["GoHighLevel", "Automation", "Pipelines"],
    image: null,
    cta: "See the workflow",
  },
  {
    slug: "plumbing-os",
    type: "Demo Project",
    status: "Demo",
    featured: true,
    title: "Plumbing OS — GoHighLevel Snapshot",
    problem:
      "Local trades miss jobs when they're slow to respond and have no system for reviews or reactivating past customers.",
    built:
      "A productized GoHighLevel snapshot for plumbing businesses: speed-to-lead automation, booking, review requests, and reactivation campaigns.",
    role: ["GHL snapshot build", "Speed-to-lead automation", "Review & reactivation campaigns"],
    features: [
      "Speed-to-lead automation",
      "Booking & review requests",
      "Customer reactivation campaigns",
    ],
    outcomes: [
      "Speed-to-lead automation for inbound enquiries",
      "Booking and review-request flows",
      "Customer reactivation campaigns, packaged as a reusable snapshot",
    ],
    challenges: [
      "Productizing a repeatable setup that any trades business can import.",
      "Automating review requests and reactivation without spamming customers.",
    ],
    stack: ["GHL Snapshots", "Workflows", "SMS / Email"],
    image: null,
    cta: "View project breakdown",
  },
  {
    slug: "multi-tool-automation",
    type: "Concept Project",
    status: "Concept",
    featured: false,
    title: "Multi-Tool Automation Workflow",
    problem:
      "Teams waste hours re-entering the same data between tools that don't talk to each other.",
    built:
      "A concept workflow connecting multiple tools through APIs and Zapier to remove manual data entry and streamline day-to-day operations.",
    role: ["Workflow design", "API / Zapier connections"],
    features: [
      "API & Zapier connections",
      "Designed to remove manual data entry",
      "Routine operations on autopilot",
    ],
    stack: ["Zapier", "n8n", "API"],
    image: null,
    cta: "Discuss an automation",
  },
];

/* ------------------------------------------------------------------
   WHY ME — evidence-based value props, not adjectives. Each one points
   at something the projects above actually demonstrate.
   ------------------------------------------------------------------ */
export const reasons = [
  {
    title: "Business-first systems",
    body: "I've run my own online business, so I know a system only matters when it saves time, protects revenue, or makes operations clearer — not when it adds another tool to babysit.",
  },
  {
    title: "Comfortable across tools",
    body: "My projects combine websites, databases, authentication, spreadsheets, and CRM workflows — so I can connect the moving parts instead of handing you a pile of disconnected apps.",
  },
  {
    title: "Clear handover",
    body: "I organize projects so the next person can understand the structure, update the content, and maintain the system without me in the room.",
  },
];
