// All site copy lives here so it's easy to update without touching markup.

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
   TOOLS — grouped by purpose, not a logo wall. `img` is optional;
   tools without a logo render as a text chip.
   ------------------------------------------------------------------ */
export const toolGroups = [
  {
    label: "CRM & Automation",
    tools: [
      { name: "GoHighLevel", img: "/assets/tools/Go_High_Level_logo_e857db4f10.webp" },
      { name: "Zapier", img: "/assets/tools/zapier-logo-11609384024iqadesape3.png" },
      { name: "n8n", img: "/assets/tools/N8n-logo-new.svg.png" },
    ],
  },
  {
    label: "Web Development",
    tools: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Supabase" },
    ],
  },
  {
    label: "Business & Finance",
    tools: [
      { name: "Google Sheets" },
      { name: "Microsoft Excel" },
      { name: "QuickBooks", img: "/assets/tools/images.png" },
      { name: "Xero", img: "/assets/tools/xero-logo-11609383483yebtmp69gf.png" },
    ],
  },
  {
    label: "Productivity & Design",
    tools: [
      { name: "Google Workspace", img: "/assets/tools/unnamed.webp" },
      { name: "Microsoft 365", img: "/assets/tools/office-365-11549843412oc6csanuay.png" },
      { name: "Canva", img: "/assets/tools/canva-icon-logo.png" },
      { name: "Figma", img: "/assets/tools/90ef330c93e43555f96ecb647c5d1d.webp" },
      { name: "VS Code", img: "/assets/tools/png-clipart-visual-studio-code-full-logo-tech-companies.png" },
    ],
  },
];

/* ------------------------------------------------------------------
   PROJECTS — each card has an honest type, a problem, what was built,
   key features, tools, and an optional live url. `image` is left null
   so the ProjectPreview component shows a replaceable placeholder.

   type controls the badge: "Client Project" | "Personal Project"
   | "Demo Project" | "Concept Project". Only CC Source is a confirmed
   client engagement — keep it that way unless real evidence is added.
   ------------------------------------------------------------------ */
export const projects = [
  {
    type: "Client Project",
    title: "CC Source — Website Redesign",
    problem:
      "An Asian sourcing firm for LED and industrial components needed a site credible enough to win the trust of North American and European manufacturers.",
    built:
      "Rebuilt the frontend of their existing Next.js + TypeScript site into a cleaner, more credible, multilingual experience.",
    features: [
      "Multilingual, responsive UI",
      "Clearer trust-building layout",
      "Reworked existing Next.js codebase",
    ],
    stack: ["Next.js", "TypeScript", "UI Redesign", "Responsive"],
    url: "https://cc-source.com",
    image: null,
    cta: "Visit website",
  },
  {
    type: "Demo Project",
    title: "Service-Business CRM (GoHighLevel)",
    problem:
      "Service businesses lose leads when follow-ups are manual and the pipeline lives in someone's head.",
    built:
      "A GoHighLevel build with automated follow-ups, lead tracking, and pipeline management — set up as a working demo of the system.",
    features: [
      "Automated SMS & email follow-ups",
      "Lead tracking across pipeline stages",
      "Designed to reduce manual follow-up work",
    ],
    stack: ["GoHighLevel", "Automation", "Pipelines"],
    image: null,
    cta: "Ask about a CRM build",
  },
  {
    type: "Demo Project",
    title: "Plumbing OS — GHL Snapshot",
    problem:
      "Local trades miss jobs when they're slow to respond and have no system for reviews or reactivating past customers.",
    built:
      "A productized GoHighLevel snapshot for plumbing businesses: speed-to-lead automation, booking, review requests, and reactivation campaigns.",
    features: [
      "Speed-to-lead automation",
      "Booking & review requests",
      "Customer reactivation campaigns",
    ],
    stack: ["GHL Snapshots", "Workflows", "SMS / Email"],
    image: null,
    cta: "Ask about this snapshot",
  },
  {
    type: "Personal Project",
    title: "Silencio Co — Web Platform",
    problem:
      "My streetwear brand needed a real storefront with accounts and members-only access, not just a brochure site.",
    built:
      "A live e-commerce web app built with Next.js and TypeScript on a Supabase Postgres database: a limited-drop store with secure accounts and a code-locked VIP members area.",
    features: [
      "Secure accounts & authentication",
      "Code-locked VIP members area",
      "Limited-drop product catalog",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Auth"],
    url: "https://silencio-clothing.com",
    image: null,
    cta: "Visit website",
  },
  {
    type: "Personal Project",
    title: "Silencio Co — Accounting System",
    problem:
      "Running my own business meant I needed clear numbers — margins, cash flow, and break-even — without paying for heavy software.",
    built:
      "A bookkeeping system in Google Sheets: a sales log and expense tracker that auto-calculate COGS, gross & net margin, A/R and A/P, inventory value, and net worth, feeding a live dashboard.",
    features: [
      "Auto-calculated P&L and margins",
      "Live dashboard with cash-flow alerts",
      "Break-even calculator",
    ],
    stack: ["Google Sheets", "Bookkeeping", "Dashboards", "Break-Even"],
    image: null,
    cta: "Talk about a finance system",
  },
  {
    type: "Concept Project",
    title: "Multi-Tool Automation Workflow",
    problem:
      "Teams waste hours re-entering the same data between tools that don't talk to each other.",
    built:
      "A concept workflow connecting multiple tools through APIs and Zapier to remove manual data entry and streamline day-to-day operations.",
    features: [
      "API & Zapier connections",
      "Designed to remove manual data entry",
      "Routine operations on autopilot",
    ],
    stack: ["Zapier", "n8n", "API"],
    image: null,
    cta: "Ask about an automation",
  },
  {
    type: "Concept Project",
    title: "Conversion-Focused Business Site",
    problem:
      "A marketing site only earns its keep when visitors turn into enquiries.",
    built:
      "A responsive marketing-site concept with lead-capture forms, SEO basics, and a hosting/deployment setup.",
    features: [
      "Lead-capture forms",
      "SEO fundamentals",
      "Hosting & deployment setup",
    ],
    stack: ["HTML / CSS", "JavaScript", "Hosting"],
    image: null,
    cta: "Talk about a landing page",
  },
];

/* ------------------------------------------------------------------
   WHY ME — honest, specific reasons (no metrics or invented history).
   ------------------------------------------------------------------ */
export const reasons = [
  {
    title: "I understand business and technology",
    body: "A background in operations and finance means I can speak your language and prioritize what actually affects the bottom line.",
  },
  {
    title: "Adaptable and quick to learn",
    body: "Drop me into a new tool, industry, or process and I'll get up to speed — picking up what the work needs and putting it to use.",
  },
  {
    title: "Reliable and easy to work with",
    body: "Consistent follow-through, on-time delivery, and a calm, professional approach you can hand things to.",
  },
  {
    title: "Clear, proactive communication",
    body: "No silent gaps. You'll always know what I'm working on, where things stand, and what I need from you next.",
  },
];
