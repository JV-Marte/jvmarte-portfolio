import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  FilePdf,
  Plus,
} from "@phosphor-icons/react/dist/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
} from "@/lib/content";

const featuredProjects = projects.filter((p) => p.featured);
const moreBuilds = projects.filter((p) => !p.featured);

const pad = (n) => String(n).padStart(2, "0");

function Bar({ label }) {
  return <div className="bar" aria-hidden="true"><span>{label}</span></div>;
}

export default function Home() {
  return (
    <>
      <Nav />
      <span id="top" />

      <main>
        {/* ============== HERO ============== */}
        <section className="hero" id="home">
          <div className="wrap">
            <div className="hero__layout">
              <div className="hero__content">
                <p className="hero__status"><span className="hero__pulse" aria-hidden="true" /> Available for client projects</p>
                <p className="hero__eyebrow">Virtual Assistant & Business Support</p>
                <h1 className="hero__title">Your business,<br />better <em>supported.</em></h1>
                <p className="hero__lede">I&rsquo;m JV. I help small business owners stay on top of admin, CRM records, spreadsheets, and bookkeeping support. Need a better website or less manual work? I can help with that too.</p>
                <div className="hero__actions">
                  <a href={site.calendly} className="btn btn--solid" target="_blank" rel="noreferrer">Let&rsquo;s talk about your business <ArrowUpRight size={18} aria-hidden="true" /></a>
                  <a href="#work" className="btn btn--ghost">Explore my work <ArrowRight size={18} aria-hidden="true" /></a>
                </div>
                <p className="hero__location">Based in Aklan, Philippines <span aria-hidden="true">↗</span> Working worldwide</p>
              </div>
              <div className="hero__visual">
                <span className="hero__spark" aria-hidden="true">✳</span>
                <figure className="hero__photo">
                  <Image src="/assets/images/jv-portrait-editorial.webp" alt="John Vincent Marte in a charcoal overshirt" width={1000} height={1250} priority sizes="(max-width: 760px) 90vw, 440px" />
                  <figcaption><span>Hi, I&rsquo;m JV.</span><span>Your next collaborator.</span></figcaption>
                </figure>
                <div className="hero__note"><span aria-hidden="true">↗</span><p>Reliable support.<br />Organized systems.<br /><strong>Less busywork.</strong></p></div>
              </div>
            </div>
            <div className="hero__strip"><span>Made for small businesses with big plans.</span><p>Business support <span>·</span> CRM & admin <span>·</span> Automation <span>·</span> Websites</p></div>
          </div>
        </section>

        {/* ============== WORK ============== */}
        <section className="section" id="work">
          <div className="wrap">
            <Bar
              code="WRK"
              label="Selected work"
              count={`${pad(projects.length)} builds`}
            />
            <header className="head head--split">
              <h2 className="title">
                A little proof.<br /><em>A lot of possibilities.</em>
              </h2>
              <p className="intro">
                Storefronts, booking systems, dashboards, and CRM automations.
                Each case study covers the problem, the build, and the outcome.
              </p>
            </header>

            <WorkGrid projects={featuredProjects} />

            {moreBuilds.length > 0 && (
              <div className="more">
                <h3 className="more__title">More builds</h3>
                <ul className="more__list">
                  {moreBuilds.map((p) => (
                    <li key={p.slug} className="more__item">
                      <div>
                        <h4>{p.title.split(" · ")[0]}</h4>
                        <p>{p.blurb}</p>
                      </div>
                      {p.outcomes?.length > 0 && (
                        <a href={`/work/${p.slug}/`} className="plink">
                          Case study{" "}
                          <ArrowRight size={15} weight="bold" aria-hidden="true" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ============== SERVICES ============== */}
        <section className="section" id="services">
          <div className="wrap">
            <Bar
              code="SVC"
              label="Services"
              count={`${pad(services.length)} units`}
            />
            <header className="head">
              <h2 className="title">
                What I can take <em>off your plate.</em>
              </h2>
              <p className="intro">
                Four areas, set up properly and documented, so anyone on your
                team can run them after handover.
              </p>
            </header>

            {/* One ruled index of services: code, name, blurb, items */}
            <ul className="svc">
              {services.map((s, i) => (
                <Reveal as="li" key={s.title} className="svc__row" delay={i * 50}>
                  <p className="svc__code" aria-hidden="true">
                    {pad(i + 1)}
                  </p>
                  <h3 className="svc__title">{s.title}</h3>
                  <p className="svc__blurb">{s.blurb}</p>
                  <ul className="svc__items">
                    {s.items.map((it) => (
                      <li key={it}>
                        <Plus size={12} weight="bold" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============== PACKAGES ============== */}
        <section className="section" id="pricing">
          <div className="wrap">
            <Bar
              code="PRC"
              label="Packages"
              count={`${pad(packages.length)} tiers / USD`}
            />
            <header className="head">
              <h2 className="title">
                Clear pricing, <em>no surprises.</em>
              </h2>
              <p className="intro">
                Fixed price website builds. Pick the size that fits, or tell me
                what you have in mind and I&rsquo;ll quote it.
              </p>
            </header>

            {/* One ruled spec table of tiers; the featured one is inverted */}
            <Reveal as="div" className="tiers">
              {packages.map((p) => (
                <article
                  key={p.name}
                  className={`tier ${p.highlight ? "tier--featured" : ""}`}
                >
                  <div className="tier__top">
                    <p className="tier__scope">{p.scope}</p>
                    {p.highlight && <p className="tier__flag">Most popular</p>}
                  </div>
                  <h3 className="tier__name">{p.name}</h3>

                  <p className="tier__price">
                    <span className="tier__from">
                      {p.from ? "Starts at" : "Fixed price"}
                    </span>
                    <span className="tier__amount">
                      <span className="tier__currency">USD</span>
                      {p.price}
                    </span>
                  </p>

                  <p className="tier__blurb">{p.blurb}</p>

                  <ul className="tier__perks">
                    <li>
                      <Plus size={12} weight="bold" aria-hidden="true" />
                      {p.delivery}
                    </li>
                    {packagePerks.map((perk) => (
                      <li key={perk}>
                        <Plus size={12} weight="bold" aria-hidden="true" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </Reveal>

            <Reveal as="div" className="includes">
              <h3 className="includes__title">Every package includes</h3>
              <ul className="includes__list">
                {packageIncludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="includes__foot">
                <p>
                  Not sure which one fits? Tell me what you need and I&rsquo;ll
                  point you at the right size, even if it&rsquo;s the cheapest
                  one.
                </p>
                <a
                  href={site.calendly}
                  className="btn btn--solid"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a call
                </a>
              </div>
            </Reveal>

            {/* Ongoing support: split, the copy holds still on the left
                while the three services stack on the right */}
            <div className="support">
              <div className="support__intro">
                <h3>Ongoing help with the numbers and the admin.</h3>
                <p>
                  Regular support work connected to my financial management
                  course: bookkeeping support, spreadsheet reporting, CRM
                  cleanup, and back-office organization.
                </p>
                <p className="support__note">
                  Weekly or monthly. Scope depends on your current tools,
                  transaction volume, and handover process.
                </p>
              </div>

              <ul className="support__list">
                {supportServices.map((service, i) => (
                  <Reveal
                    as="li"
                    key={service.title}
                    className="support__item"
                    delay={i * 70}
                  >
                    <p className="support__label">{service.label}</p>
                    <h4>{service.title}</h4>
                    <p>{service.blurb}</p>
                    <ul className="support__tags">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============== TOOLBOX ============== */}
        <section className="section" id="tools">
          <div className="wrap">
            <Bar
              code="TLS"
              label="Toolbox"
              count={`${pad(
                toolLevels.reduce((n, g) => n + g.tools.length, 0)
              )} tools`}
            />
            <div className="toolbox">
              <header className="toolbox__intro">
                <h2 className="title">Tools I <em>reach for.</em></h2>
                <p>The right tools for your website, workflows, and day-to-day operations.</p>
              </header>

              <div className="toolbox__groups">
                {toolLevels.map((group, i) => (
                  <Reveal
                    as="div"
                    key={group.label}
                    className={`toolbox__group ${i === 0 ? "toolbox__group--primary" : ""}`}
                    delay={i * 80}
                  >
                    <h3 className="toolbox__label">{group.label}</h3>
                    <p className="toolbox__description">
                      {i === 0 ? "The tools I use most often." : "Tools I can work with when the project calls for them."}
                    </p>
                    <ul
                      className={`toolbox__list ${
                        i === 0 ? "toolbox__list--primary" : ""
                      }`}
                    >
                      {group.tools.map((t) => (
                        <li key={t.name}>{t.name}</li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============== CONTACT ============== */}
        <section className="section" id="contact">
          <div className="wrap">
            <Bar code="MSG" label="Contact" count="Reply within a day" />
            <h2 className="title title--xl">
              Your next chapter<br /><em>starts here.</em>
            </h2>

            <div className="contact">
              <div className="contact__left">
                <p className="intro">
                  Whether it&rsquo;s a website that needs building or busywork
                  that should run itself, send me a note. I read everything
                  and usually reply within a day.
                </p>

                <div className="contact__actions">
                  <a
                    href={site.calendly}
                    className="btn btn--solid"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a call
                  </a>
                  <a
                    href={site.resumeUrl}
                    className="btn btn--ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FilePdf size={16} weight="bold" aria-hidden="true" /> Résumé
                  </a>
                  <CopyEmail email={site.email} />
                </div>

                <dl className="spec contact__meta">
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </dd>
                  </div>
                  {site.onlineJobs && (
                    <div>
                      <dt>OnlineJobs.ph</dt>
                      <dd>
                        <a href={site.onlineJobs} target="_blank" rel="noreferrer">
                          View profile
                        </a>
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt>Elsewhere</dt>
                    <dd className="contact__socials">
                      <a href={site.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
                      </a>
                      <a href={site.instagram} target="_blank" rel="noreferrer">
                        Instagram <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
                      </a>
                      <a href={site.facebook} target="_blank" rel="noreferrer">
                        Facebook <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="contact__form">
                <p className="contact__formhead" aria-hidden="true">
                  <span>Form / Project brief</span>
                  <span>Straight to my inbox</span>
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
