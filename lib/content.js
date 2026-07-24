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
   SITE · shared contact + link config used across nav, hero, contact,
   footer, and case-study pages. Update links in one place.

   RÉSUMÉ: `resumeUrl` points at a file that does NOT exist yet, so no
   page renders a download button right now. Export your résumé to
   `public/JV-Marte-Resume.pdf`, then add the button back where you
   want it (nav / contact).
   ------------------------------------------------------------------ */
export const site = {
  name: "John Vincent Marte",
  title: "Web Developer, Designer & Automation Specialist",
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
   SERVICES · the four things JV sells: web development, web design,
   automation, and business support. Keep each blurb one or two plain
   sentences; the items list is scanned, not read.
   ------------------------------------------------------------------ */
export const services = [
  {
    n: "01",
    title: "Web Development",
    blurb:
      "Custom sites and web apps built on Next.js: booking systems, storefronts, dashboards, and landing pages that load fast on any phone.",
    items: [
      "Custom websites & web apps",
      "Booking & e-commerce builds",
      "Admin dashboards",
      "Landing pages",
    ],
  },
  {
    n: "02",
    title: "Web Design",
    blurb:
      "Clean layouts that make a small business look credible and point every visitor to one clear action.",
    items: [
      "UI & layout design",
      "Website redesigns",
      "Responsive on every screen",
      "Figma to working code",
    ],
  },
  {
    n: "03",
    title: "Automation",
    blurb:
      "Zapier, n8n, and GoHighLevel workflows that take over the copying, the chasing, and the follow up messages.",
    items: [
      "Zapier & n8n workflows",
      "CRM & follow up sequences",
      "Lead routing & alerts",
      "API connections",
    ],
  },
  {
    n: "04",
    title: "Business Support",
    blurb:
      "The back office, handled: clean CRM records, spreadsheets that do the math for you, and books that stay tidy.",
    items: [
      "CRM management (GoHighLevel)",
      "Google Sheets dashboards",
      "Bookkeeping support",
      "Data entry & organization",
    ],
  },
];

/* ------------------------------------------------------------------
   TOOLS · chips grouped by honest proficiency level. Primary tools get
   the highlighted chip style. No percentages, no progress bars.
   ------------------------------------------------------------------ */
export const toolLevels = [
  {
    label: "Daily drivers",
    tools: [
      { name: "Next.js" },
      { name: "GoHighLevel" },
      { name: "Google Sheets" },
      { name: "Supabase" },
      { name: "Excel" },
    ],
  },
  {
    label: "Working knowledge",
    tools: [
      { name: "Zapier" },
      { name: "n8n" },
      { name: "QuickBooks" },
      { name: "Xero" },
      { name: "Figma" },
      { name: "Canva" },
    ],
  },
];

/* ------------------------------------------------------------------
   PROJECTS · proof-first. Each project carries enough structured data to
   render both the homepage card and a `/work/[slug]` case-study page, so
   the same facts are never hardcoded in two places.

   Shape:
     slug       url segment for the case study (/work/<slug>)
     type       badge label: Client / Personal / Demo Project
     status     short honest label ("Live", "Demo")
     featured   true = homepage work grid; false = "More builds" list
     title      project name
     blurb      one-sentence homepage card description
     problem, built                   case-study copy
     role[]     what JV personally handled
     features[] key deliverables
     outcomes[] truthful results (no invented metrics)
     challenges[] one or two real challenges (optional)
     stack[]    tools actually used
     url        live site (optional)
     image      cover screenshot, or null for a graceful placeholder

   Only CC Source is a confirmed client engagement · keep it that way
   unless real evidence is added. No invented testimonials or metrics.
   ------------------------------------------------------------------ */
export const projects = [
  {
    slug: "azure-sands",
    type: "Demo Project",
    status: "Live",
    featured: true,
    title: "Azure Sands · Condotel Booking",
    blurb:
      "Booking site for a Boracay condotel. Guests check availability and reserve a room; staff manage rooms and bookings from an admin dashboard.",
    problem:
      "A boutique Boracay condotel needs more than a Facebook page. Guests should be able to check availability and reserve a room on their own, and staff should manage rooms and bookings without touching code.",
    built:
      "A full condotel booking app on Next.js with a dual mode data layer: it runs on an in-memory demo store out of the box and switches to a Supabase Postgres database when configured. Guests search by dates and guest count, then book through a short wizard that ends with a confirmation email. Staff manage rooms and bookings from an admin dashboard.",
    role: [
      "Full stack build (Next.js + Supabase)",
      "Availability search & booking flow",
      "Admin dashboard",
    ],
    features: [
      "Availability search by dates & guests",
      "Booking wizard with confirmation emails",
      "Admin dashboard for rooms & bookings",
    ],
    outcomes: [
      "Live booking site deployed on Vercel",
      "Dual mode data layer: demo store or Supabase Postgres",
      "Admin dashboard for rooms, bookings and availability",
    ],
    challenges: [
      "Designing a data layer that runs as a zero setup demo, then upgrades to a real Supabase database with no code changes.",
      "Keeping availability, booking, and confirmation emails working as one reliable flow.",
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
    title: "Silencio Co · E-commerce",
    blurb:
      "My own streetwear storefront with customer accounts, backed by a Sheets dashboard that tracks profit, margins, and inventory.",
    problem:
      "My streetwear brand needed a real storefront with customer accounts, plus clear numbers behind the scenes: margins, cash flow, and the break even point, without paying for accounting software.",
    built:
      "A live e-commerce app built with Next.js and TypeScript on a Supabase Postgres database. It runs limited drops with secure customer accounts, and a Google Sheets dashboard behind it works out COGS, margins, receivables, payables, inventory value, and the break even point from raw sales and expense logs.",
    role: [
      "Full stack build (Next.js + TypeScript + Supabase)",
      "Authentication & account management",
      "Accounting & operations dashboard (Google Sheets)",
    ],
    features: [
      "Secure accounts & authentication",
      "Limited drop product catalog",
      "Sheets dashboard: P&L, margins & break even",
    ],
    outcomes: [
      "Live store with secure customer accounts",
      "Limited drop catalog on a Supabase Postgres database",
      "Sheets dashboard covering P&L, COGS, margins, receivables, payables and inventory value",
    ],
    challenges: [
      "Building secure customer accounts and authentication on Supabase.",
      "Running the storefront and the numbers as one system, with the dashboard updating itself from raw sales and expense logs.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Google Sheets"],
    url: "https://silencio-clothing.com",
    image: "/assets/images/silencio-co.png",
  },
  {
    slug: "tawid-gutom",
    type: "Personal Project",
    status: "Live",
    featured: true,
    title: "Tawid Gutom · Food Ordering",
    blurb:
      "Food ordering site for a home kitchen in Aklan: cart, COD and GCash checkout, and an admin the owner runs herself.",
    problem:
      "A Filipino home kitchen in Kalibo, Aklan needed more than a menu photo on Facebook: a real storefront that takes orders, and a simple way for the owner to manage the menu without touching code.",
    built:
      "A food ordering app on Next.js and Supabase: a storefront with menu, cart, and a checkout that supports Cash on Delivery and GCash, plus an admin dashboard where the owner manages menu items, promos, and incoming orders herself.",
    role: [
      "Full stack build (Next.js + Supabase)",
      "Storefront & cart UX",
      "Admin dashboard",
    ],
    features: [
      "Storefront with cart & checkout (COD / GCash)",
      "Admin dashboard for menu, promos & orders",
      "One click sold out toggle per item",
    ],
    outcomes: [
      "Live storefront with cart and COD / GCash checkout",
      "Admin dashboard for menu, promotions and incoming orders",
      "One click sold out / available toggle per item",
    ],
    challenges: [
      "Letting the owner run the menu and orders herself, with no code involved.",
      "Supporting Cash on Delivery and GCash in one checkout.",
    ],
    stack: ["Next.js", "Supabase", "E-commerce"],
    url: "https://tawid-gutom.vercel.app",
    image: "/assets/images/tawid-gutom.png",
  },
  {
    slug: "cc-source",
    type: "Client Project",
    status: "Live",
    featured: true,
    title: "CC Source · Website Redesign",
    blurb:
      "Client redesign: rebuilt a sourcing firm's frontend into a cleaner, multilingual site that earns the trust of overseas buyers.",
    problem:
      "An Asian sourcing firm for LED and industrial components needed a site credible enough to win the trust of manufacturers in North America and Europe.",
    built:
      "Rebuilt the frontend of their existing Next.js and TypeScript site into a cleaner, multilingual experience that reads as trustworthy to overseas buyers, without breaking what already worked.",
    role: ["Frontend redesign", "Responsive implementation", "Multilingual UI"],
    features: [
      "Multilingual, responsive UI",
      "Clearer trust building layout",
      "Reworked existing Next.js codebase",
    ],
    outcomes: [
      "Cleaner, more credible frontend layout",
      "Multilingual, responsive experience on desktop and mobile",
      "Improved the existing codebase instead of rebuilding from scratch",
    ],
    challenges: [
      "Working inside an existing Next.js + TypeScript codebase without breaking current functionality.",
      "Making a B2B sourcing firm read as trustworthy across languages.",
    ],
    stack: ["Next.js", "TypeScript", "UI Redesign"],
    url: "https://cc-source.com",
    image: "/assets/images/cc-source.png",
  },
  {
    slug: "ghl-crm",
    type: "Demo Project",
    status: "Demo",
    featured: false,
    title: "Service Business CRM · GoHighLevel",
    blurb:
      "GoHighLevel pipeline demo with automated SMS and email follow ups, so leads get a reply even when the team is busy.",
    problem:
      "Service businesses lose leads when follow ups are manual and the pipeline lives in someone's head.",
    built:
      "A GoHighLevel build with automated follow ups, lead tracking, and pipeline management, set up as a working demo of the system.",
    role: ["CRM pipeline setup", "Workflow automation", "Follow up sequences"],
    features: [
      "Automated SMS & email follow ups",
      "Lead tracking across pipeline stages",
      "Built to cut manual follow up work",
    ],
    outcomes: [
      "Automated SMS & email follow up sequences",
      "Lead tracking across clear pipeline stages",
      "A reusable working demo of the setup",
    ],
    challenges: [
      "Designing follow ups that cut manual work for a small service team.",
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
    featured: false,
    title: "Plumbing OS · GoHighLevel Snapshot",
    blurb:
      "A reusable GoHighLevel snapshot for plumbers: speed to lead automation, bookings, review requests, and reactivation campaigns.",
    problem:
      "Local trades miss jobs when they respond slowly and have no system for reviews or winning back past customers.",
    built:
      "A productized GoHighLevel snapshot for plumbing businesses: speed to lead automation, booking, review requests, and reactivation campaigns, packaged so any trades business can import it.",
    role: [
      "GHL snapshot build",
      "Speed to lead automation",
      "Review & reactivation campaigns",
    ],
    features: [
      "Speed to lead automation",
      "Booking & review requests",
      "Customer reactivation campaigns",
    ],
    outcomes: [
      "Speed to lead automation for inbound enquiries",
      "Booking and review request flows",
      "Reactivation campaigns, packaged as a reusable snapshot",
    ],
    challenges: [
      "Productizing a repeatable setup that any trades business can import.",
      "Automating review requests and reactivation without spamming customers.",
    ],
    stack: ["GHL Snapshots", "Workflows", "SMS / Email"],
    image: null,
    cta: "View project breakdown",
  },
];
