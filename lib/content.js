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

   RÉSUMÉ: `resumeUrl` is live — `public/JV-Marte-Resume.pdf` is the
   automation résumé with the phone number stripped, and it is linked from
   the nav and the contact CTA row. Regenerate it from the source in
   `~/Jv/Resumes` with `python3 build-public.py 1-automation.html
   <repo>/public/JV-Marte-Resume.pdf` — never copy a résumé here by hand,
   the local ones carry a phone number.
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
     gallery    optional [{ src, label }] — thumbnail strip + lightbox on
                the case study page

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
    slug: "northside-hvac",
    type: "Demo Project",
    status: "Demo",
    featured: true,
    title: "Northside HVAC · Lead Routing Automation",
    blurb:
      "n8n workflow that scores inbound HVAC service requests and alerts the shop the moment a job is worth interrupting a technician for.",
    problem:
      "An HVAC contractor's contact form emailed every submission to one inbox, so a furnace out call in January looked exactly like a filter change question. Emergency work is the highest margin job in the trade and it is won on response time: if nobody calls back inside an hour, the customer calls the next contractor on Google.",
    built:
      "An n8n workflow that takes website service requests by webhook, normalizes the fields, then scores each one from 0 to 100 the way HVAC actually sells: emergency language, install and replacement jobs, commercial property, and a callable phone number. Anything above the threshold is logged and fires an immediate email alert; everything else is logged for normal business hours. Two gates run last and zero the score for zips outside the service area and for submissions with no real contact method.",
    role: [
      "n8n workflow design",
      "Lead scoring logic (Code node)",
      "Google Sheets & Gmail integration",
    ],
    features: [
      "Webhook intake straight from the website form",
      "0 to 100 scoring with hot / standard routing",
      "Every logged row explains its own routing decision",
    ],
    outcomes: [
      "Eight node workflow: webhook, normalize, score, route, log, alert, respond",
      "Hot requests trigger an email alert, the rest are logged for business hours",
      "Service area and spam gates zero the score before anything reaches the alert path",
      "Importable JSON with documented setup and test payloads",
    ],
    challenges: [
      "Keeping all scoring in one Code node so every routing decision stays auditable from the spreadsheet, instead of spreading the logic across a chain of IF nodes.",
      "Responding on both branches so standard submissions do not hang until the form times out.",
    ],
    stack: ["n8n", "Google Sheets", "Gmail", "Webhooks"],
    image: "/assets/images/northside-hvac-router.png",
  },
  {
    slug: "northside-missed-call",
    type: "Demo Project",
    status: "Demo",
    featured: true,
    title: "Northside HVAC · Missed Call Text-Back",
    blurb:
      "Two n8n workflows that text back a missed call, then check whether the customer actually replied and escalate to the owner when nobody did.",
    problem:
      "Techs are on roofs, the office line is busy, and after 6pm nobody answers. In HVAC a missed call is usually someone already uncomfortable and already dialing the next contractor on Google. The shop had no idea how many calls it was losing, because a call that never connects leaves no record anyone reads. And an auto text nobody follows up on is worse than silence: it promises responsiveness and then delivers none.",
    built:
      "Two n8n workflows coordinating through a shared Google Sheet. The first takes the missed call webhook, confirms the call was genuinely missed, composes a text that makes a different promise inside and outside business hours, logs the caller as awaiting reply, and waits five minutes. On resume it re-reads the row from the sheet rather than trusting what it held before the pause, because a separate workflow may have written to it in that window. Still awaiting a reply means the owner gets an escalation email. The second workflow takes the inbound SMS webhook and marks that caller replied, which is what calls the escalation off.",
    role: [
      "Two n8n workflows (missed call & inbound reply)",
      "Escalation state machine over Google Sheets",
      "Phone normalization & SMS copy",
    ],
    features: [
      "Business hours and after hours messages that promise different things",
      "One row per caller, so repeat callers are never double texted",
      "Five minute wait, then escalate only if nobody replied",
    ],
    outcomes: [
      "Missed calls get an immediate text back instead of going unrecorded",
      "Escalation fires only when the customer did not reply, verified by re-reading the sheet after the wait",
      "One row per caller keyed on the phone number, so repeat calls update instead of piling up",
      "The Twilio send is wired and deliberately disabled: delivery to Philippine numbers needs carrier sender ID registration, so the state machine is proven end to end rather than resting on a send that would silently never arrive",
    ],
    challenges: [
      "Google Sheets reads a leading + as a formula prefix, so writing +639513219802 stored the digits and dropped the plus. The write succeeded, the value changed, every later lookup matched nothing, and every caller escalated as though they had never replied. Fixed by storing digits only and reattaching the + where a telephony API needs it.",
      "Trusting nothing across the five minute wait. Another workflow can write to the row while execution is paused, so the data captured before the pause is already stale on resume.",
    ],
    stack: ["n8n", "Google Sheets", "Twilio", "Gmail", "Webhooks"],
    image: "/assets/images/northside-missed-call.png",
  },
  {
    slug: "azure-ops-digest",
    type: "Demo Project",
    status: "Demo",
    featured: true,
    title: "Azure Sands · Daily Ops Digest",
    blurb:
      "n8n workflow that emails the condotel owner one page every morning: who arrives, who leaves, and the short list of things that cost money if nobody touches them.",
    problem:
      "A four room property is not somebody's full time job. It gets run from a phone between other work, and an admin dashboard only helps the person who remembers to open it. The facts that decide whether a day makes or loses money are already in the database: a guest arriving this afternoon whose payment still says pending, a booking that has held a room off the market for six days, an inquiry from Tuesday nobody answered, four empty nights next week that are still discountable today and worthless on Friday.",
    built:
      "An eight node n8n workflow on the Azure Sands database. At 6am Manila time it runs two Postgres queries in parallel, one for today's movements and one for the week ahead, merges them into a single item, and a Code node turns that into an HTML email. A language model writes the two sentence opening brief and nothing else. Gmail sends it.",
    role: [
      "n8n workflow design",
      "Postgres queries & digest logic (Code node)",
      "HTML email build & AI brief prompt",
    ],
    features: [
      "Subject line carries the whole summary, for reading on a phone",
      "Action list ranked money first, then inventory, then reputation",
      "Sends on quiet days too, so silence always means broken",
    ],
    outcomes: [
      "Eight node workflow: schedule, two parallel Postgres queries, merge, digest builder, AI brief, Gmail send",
      "One email covers arrivals, departures, guests staying, seven day occupancy and revenue to date",
      "Priority list surfaces unpaid arrivals, stuck bookings, unanswered inquiries and rooms with no nights sold",
      "The AI brief continues on error, so a dead API key drops one paragraph and the digest still sends",
    ],
    challenges: [
      "Keeping every calculation in the Code node and letting the language model write only prose. It receives finished numbers, never booking rows, so it cannot recompute occupancy or invent an amount.",
      "Casting every date to text in SQL. A Postgres date read on a UTC server turns 30 July into 29 July in Manila, and the whole digest then reports on the wrong day.",
    ],
    stack: ["n8n", "PostgreSQL", "Supabase", "Gmail", "OpenAI"],
    image: "/assets/images/azure-ops-digest-canvas.png",
  },
  {
    slug: "azure-channel-sync",
    type: "Demo Project",
    status: "Demo",
    featured: true,
    title: "Azure Sands · Channel Sync",
    blurb:
      "Two n8n workflows that keep a condotel from selling the same room twice across Airbnb, Booking.com and its own booking site.",
    problem:
      "A unit listed in three places has three calendars and none of them talk. Someone books November 12 to 15 on Airbnb, the direct site still shows those nights open and sells them that evening. In high season the guest has already flown in, so you refund the stay, pay for a room at another property, and take the review. Small operators either block dates by hand across three dashboards or pay for a channel manager. This is the channel manager, in two workflows.",
    built:
      "An inbound workflow runs every 30 minutes, reads the iCal export from each channel, and reconciles the property's blocked dates in a single SQL statement that upserts what is in the feed and deletes what has left it. An outbound workflow answers an authenticated webhook with an RFC 5545 calendar the channels subscribe to. They never call each other; they meet in the database, so neither depends on the other being up.",
    role: [
      "Two n8n workflows (inbound sync & outbound feed)",
      "Postgres schema & reconcile SQL",
      "iCal parser and renderer (Code nodes)",
    ],
    features: [
      "Imports channel reservations as blocked dates every 30 minutes",
      "Removes blocks that leave a feed, so cancellations release the room",
      "Token protected iCal endpoint the channels subscribe to",
    ],
    outcomes: [
      "Eleven node inbound sync plus an outbound iCal feed served over webhook",
      "Upsert and delete commit as one statement, so a room is never observably free mid sync",
      "A failed fetch, a login page, or an empty body all count as no information: blocks are kept, never deleted",
      "Only manually entered blocks go back out, which stops the channels echoing blocks at each other",
      "Conflicts are emailed to the owner with both records, once per block, and never auto resolved",
    ],
    challenges: [
      "Making deletion safe. Deleting blocks that vanish from a feed is what makes cancellations work, and it is also what oversells the property if a 503 gets read as an empty calendar.",
      "Splitting ownership of one table between staff and the sync with a source column, so the sync can freely delete its own rows and can never touch a block a human entered on purpose.",
    ],
    stack: ["n8n", "PostgreSQL", "iCal / RFC 5545", "Webhooks", "Gmail"],
    image: "/assets/images/azure-channel-sync-canvas.png",
    gallery: [
      {
        src: "/assets/images/azure-ical-feed-canvas.png",
        label: "Outbound iCal feed: token check, room lookup, and the 401 and 404 paths",
      },
      {
        src: "/assets/images/azure-ical-feed-executions.png",
        label: "Execution history for the outbound feed, every run succeeded",
      },
    ],
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
