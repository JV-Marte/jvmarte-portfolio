import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import WorkGrid from "@/components/WorkGrid";
import CopyEmail from "@/components/CopyEmail";
import {
  site,
  services,
  toolLevels,
  projects,
  packages,
  packagePerks,
  packageIncludes,
  supportServices,
  badgeKey,
} from "@/lib/content";

const featuredProjects = projects.filter((p) => p.featured);
const moreBuilds = projects.filter((p) => !p.featured);

export default function Home() {
  return (
    <>
      <Nav />
      <span id="top" />

      <main>
        {/* ============== HERO ============== */}
        <section className="hero" id="home">
          <div className="wrap hero__inner">
            <div className="hero__copy">
              <p className="hero__badge">
                <span className="hero__badge-dot" aria-hidden="true" />
                Available for remote roles and client projects
              </p>

              <h1 className="hero__title">
                Websites and systems that <em>keep work moving.</em>
              </h1>

              <p className="hero__lede">
                I&rsquo;m JV. I build clean websites, booking flows, CRM
                updates, automations, and simple finance-admin systems for
                small businesses.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--solid">
                  Hire me / discuss a role
                </a>
                <a href="#work" className="btn btn--ghost">
                  See proof ↓
                </a>
              </div>

              <ul className="hero__proof" aria-label="Portfolio highlights">
                <li>
                  <strong>Websites</strong>
                  <span>Fast, clear pages that look credible</span>
                </li>
                <li>
                  <strong>Automation</strong>
                  <span>Forms, bookings, CRM, and follow ups</span>
                </li>
                <li>
                  <strong>Support</strong>
                  <span>Spreadsheets, records, and admin cleanup</span>
                </li>
              </ul>
            </div>

            <div className="hero__visual" aria-label="JV portfolio snapshot">
              <div className="hero__photo">
                <Image
                  src="/assets/images/jv-photo.png"
                  alt="John Vincent Marte"
                  width={520}
                  height={640}
                  priority
                  className="hero__img"
                />
              </div>

              <div className="hero__status-card">
                <p>Current focus</p>
                <strong>Web, automation, CRM, and finance admin</strong>
                <span>Next.js · GoHighLevel · Excel · Google Sheets</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============== SERVICES ============== */}
        <section className="section section--alt" id="services">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Services</p>
              <h2 className="section__title">
                What I can take <em>off your plate.</em>
              </h2>
              <p className="section__intro">
                Four areas, set up properly and documented, so anyone on your
                team can run them after handover.
              </p>
            </header>

            <ul className="services__grid">
              {services.map((s, i) => (
                <Reveal as="li" key={s.title} className="service" delay={i * 60}>
                  <span className="service__index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <ul className="service__items">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============== WORK ============== */}
        <section className="section" id="work">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Selected work</p>
              <h2 className="section__title">
                Real projects, <em>live right now.</em>
              </h2>
              <p className="section__intro">
                Storefronts, booking systems, dashboards, and CRM automations.
                Every card links to a breakdown of the problem, the build, and
                the outcome.
              </p>
            </header>

            <Reveal as="div" className="work__spotlight">
              <div>
                <p className="work__spotlight-label">Why this matters</p>
                <h3>Clients do not need another pretty page. They need a working flow.</h3>
              </div>
              <p>
                The work below shows the parts employers and clients care
                about: forms that submit, bookings that make sense, dashboards
                that organize records, and follow-up systems that reduce manual
                work.
              </p>
            </Reveal>

            <WorkGrid projects={featuredProjects} />

            {moreBuilds.length > 0 && (
              <div className="more">
                <h3 className="more__title">More builds</h3>
                <ul className="more__list">
                  {moreBuilds.map((p, i) => (
                    <Reveal as="li" key={p.slug} className="more__item" delay={i * 60}>
                      <span className={`badge badge--${badgeKey(p.type)}`}>
                        {p.type}
                      </span>
                      <h4>{p.title}</h4>
                      <p>{p.blurb}</p>
                      {p.outcomes?.length > 0 && (
                        <a
                          href={`/work/${p.slug}/`}
                          className="link-arrow link-arrow--sm"
                        >
                          Case study →
                        </a>
                      )}
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ============== PACKAGES ============== */}
        <section className="section section--alt" id="pricing">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Packages</p>
              <h2 className="section__title">
                Clear pricing, <em>no surprises.</em>
              </h2>
              <p className="section__intro">
                Fixed price website builds. Pick the size that fits, or tell me
                what you have in mind and I&rsquo;ll quote it. Every package
                ships with the full list underneath, not a stripped down
                version of it.
              </p>
            </header>

            <div className="tiers">
              {packages.map((p, i) => (
                <Reveal
                  as="article"
                  key={p.name}
                  className={`tier ${p.highlight ? "tier--featured" : ""}`}
                  delay={i * 70}
                >
                  {p.highlight && (
                    <span className="tier__flag">Most popular</span>
                  )}

                  <h3 className="tier__name">{p.name}</h3>
                  <p className="tier__scope">{p.scope}</p>

                  <p className="tier__price">
                    {/* Rendered on every card so the amounts line up across the row */}
                    <span className="tier__from">
                      {p.from ? "Starts at" : "Fixed price"}
                    </span>
                    <span className="tier__amount">
                      <span className="tier__currency">USD</span> {p.price}
                    </span>
                  </p>

                  <p className="tier__blurb">{p.blurb}</p>

                  <ul className="tier__perks">
                    <li>{p.delivery}</li>
                    {packagePerks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`btn ${
                      p.highlight ? "btn--solid" : "btn--ghost"
                    } tier__cta`}
                  >
                    Start with {p.name}
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal as="div" className="includes">
              <h3 className="includes__title">Every package includes</h3>
              <ul className="includes__list">
                {packageIncludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="includes__note">
                Not sure which one fits?{" "}
                <a href="#contact">Tell me what you need</a> and I&rsquo;ll
                point you at the right size, even if it&rsquo;s the cheapest
                one.
              </p>
            </Reveal>

            <Reveal as="div" className="support-offer">
              <div className="support-offer__head">
                <p className="eyebrow">Ongoing support</p>
                <h3>
                  Need help running the numbers and admin after the site is
                  live?
                </h3>
                <p>
                  I also take on regular support work connected to my financial
                  management course: bookkeeping support, spreadsheet reporting,
                  CRM cleanup, and back-office organization.
                </p>
              </div>

              <div className="support-offer__grid">
                {supportServices.map((service, i) => (
                  <article className="support-card" key={service.title}>
                    <span className="support-card__index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="support-card__label">{service.label}</p>
                    <h4>{service.title}</h4>
                    <p>{service.blurb}</p>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="support-offer__foot">
                <p>
                  Available as weekly or monthly support. Scope depends on your
                  current tools, transaction volume, and handover process.
                </p>
                <a href="#contact" className="btn btn--solid">
                  Ask about support work
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============== TOOLBOX ============== */}
        <section className="section" id="tools">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Toolbox</p>
              <h2 className="section__title">Tools I reach for.</h2>
            </header>

            <div className="toolbox__groups">
              {toolLevels.map((group, i) => (
                <Reveal as="div" key={group.label} delay={i * 60}>
                  <h3 className="toolbox__label">{group.label}</h3>
                  <ul className="toolbox__chips">
                    {group.tools.map((t) => (
                      <li
                        key={t.name}
                        className={`chip ${i === 0 ? "chip--primary" : ""}`}
                      >
                        {t.name}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <p className="toolbox__note">
              No skill bars or percentages, just an honest split by how often I
              use them.
            </p>
          </div>
        </section>

        {/* ============== CONTACT ============== */}
        <section className="section" id="contact">
          <div className="wrap">
            <div className="contact__panel">
              <div className="contact__left">
                <p className="eyebrow">Get in touch</p>
                <h2 className="contact__title">
                  Tell me what&rsquo;s <em>eating your week.</em>
                </h2>
                <p className="prose">
                  Whether it&rsquo;s a website that needs building or busywork
                  that should run itself, send me a note. I read everything and
                  usually reply within a day.
                </p>

                <div className="contact__cta-row">
                  <a
                    href={site.calendly}
                    className="btn btn--solid"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a 30 min call
                  </a>
                  <a
                    href={site.resumeUrl}
                    className="btn btn--ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Résumé
                  </a>
                  <CopyEmail email={site.email} />
                </div>

                <ul className="contact__meta">
                  <li>
                    <span>Email</span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                  {site.onlineJobs && (
                    <li>
                      <span>OnlineJobs.ph</span>
                      <a href={site.onlineJobs} target="_blank" rel="noreferrer">
                        View profile
                      </a>
                    </li>
                  )}
                  <li>
                    <span>Status</span>
                    <em>Open to remote roles &amp; projects</em>
                  </li>
                </ul>

                <div className="socials">
                  <a href={site.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a href={site.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a href={site.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </div>
              </div>

              <div className="contact__right">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============== FOOTER ============== */}
      <footer className="footer">
        <div className="wrap footer__inner">
          <a href="#top" className="nav__logo">
            JV<span>.</span>Marte
          </a>
          <p>© {new Date().getFullYear()} John Vincent Marte · Aklan, PH</p>
          <a href="#contact" className="link-arrow link-arrow--sm">
            Contact me →
          </a>
        </div>
      </footer>
    </>
  );
}
