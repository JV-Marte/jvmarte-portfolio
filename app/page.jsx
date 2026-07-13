import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import WorkCarousel from "@/components/WorkCarousel";
import CopyEmail from "@/components/CopyEmail";
import {
  site,
  services,
  steps,
  toolLevels,
  projects,
  reasons,
  badgeKey,
} from "@/lib/content";

const featuredProjects = projects.filter((p) => p.featured);
const experiments = projects.filter((p) => !p.featured);

export default function Home() {
  return (
    <>
      <Nav />
      <span id="top" />

      <main>
        {/* ============== HERO ============== */}
        <section className="hero" id="home">
          <div className="wrap hero__inner">
            <p className="eyebrow">CRM, Automation &amp; Operations Support</p>

            <h1 className="hero__title">
              CRM &amp; automation support for <em>service businesses.</em>
            </h1>

            <p className="hero__lede">
              I build practical systems that help small businesses organize
              leads, automate follow ups, cut down repetitive admin, and keep
              their operations running smoothly.
            </p>

            <div className="hero__actions">
              <a href="#work" className="btn btn--solid">
                View my work
              </a>
              <a
                href={site.resumeUrl}
                className="btn btn--ghost"
                target="_blank"
                rel="noreferrer"
                download
              >
                Download résumé ↓
              </a>
            </div>

            <p className="hero__trust">
              GoHighLevel · Google Sheets · Next.js · Supabase
            </p>
            <p className="hero__proof">
              Client work, business systems, and live web projects.
            </p>
          </div>

          <div className="hero__rule wrap">
            <span>Available for freelance work</span>
            <span>Remote · Worldwide</span>
          </div>
        </section>

        {/* ============== ABOUT ============== */}
        <section className="section about" id="about">
          <div className="wrap about__grid">
            <Reveal className="about__photo">
              <Image
                src="/assets/images/jv-photo.png"
                alt="John Vincent Marte"
                width={520}
                height={640}
                className="about__img"
              />
              <span className="about__caption">JV CRM &amp; Automation VA</span>
            </Reveal>

            <div className="about__body">
              <p className="eyebrow">About</p>
              <Reveal as="h2" className="section__title">
                Hi, I&rsquo;m <em>JV.</em>
              </Reveal>
              <Reveal className="prose" delay={80}>
                <p>
                  I&rsquo;m a business-minded CRM and automation specialist from
                  the Philippines. Before working with websites and automation
                  tools, I ran my own small business &mdash; handling sales,
                  expenses, inventory, customer communication, and day-to-day
                  operations.
                </p>
                <p>
                  That taught me businesses rarely need more complicated
                  software. They need systems that are{" "}
                  <strong>clear, practical, and easy to maintain.</strong> Today
                  I build CRM pipelines, follow-up workflows, websites,
                  dashboards, and spreadsheet systems that reduce repetitive
                  work and keep operations organized.
                </p>
                <p>
                  My strongest tools are GoHighLevel, Google Sheets, Next.js,
                  and Supabase, backed by a foundation in business finance and
                  bookkeeping.
                </p>
              </Reveal>
              <a href="#contact" className="link-arrow">
                Work with me →
              </a>
            </div>
          </div>
        </section>

        {/* ============== SERVICES ============== */}
        <section className="section services" id="services">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">What I do</p>
              <h2 className="section__title">
                Systems that take work <em>off your plate.</em>
              </h2>
            </header>

            <ul className="services__list">
              {services.map((s, i) => (
                <Reveal as="li" key={s.n} className="service" delay={i * 60}>
                  <div className="service__main">
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                  </div>
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

        {/* ============== PROCESS ============== */}
        <section className="section process" id="process">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">How I work</p>
              <h2 className="section__title">
                A simple, repeatable <em>process.</em>
              </h2>
            </header>

            <ol className="process__grid">
              {steps.map((step, i) => (
                <Reveal as="li" key={step.n} className="step" delay={i * 60}>
                  <span className="step__num">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ============== WORK ============== */}
        <section className="section work" id="work">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Selected work &amp; system builds</p>
              <h2 className="section__title">
                Systems I&rsquo;ve <em>built.</em>
              </h2>
              <p className="section__intro">
                Real client work, live web apps, and business systems. Each
                card shows the project type, my role, and the tools used &mdash;
                open a breakdown to see the problem, what I built, and the
                outcome.
              </p>
            </header>

            <WorkCarousel projects={featuredProjects} />

            {experiments.length > 0 && (
              <div className="experiments">
                <h3 className="experiments__title">
                  Experiments &amp; practice builds
                </h3>
                <ul className="experiments__list">
                  {experiments.map((p) => (
                    <li key={p.slug} className="experiments__item">
                      <span
                        className={`badge badge--${badgeKey(p.type)}`}
                      >
                        {p.type}
                      </span>
                      <div>
                        <h4>{p.title}</h4>
                        <p>{p.built}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ============== TOOLS ============== */}
        <section className="section tools" id="tools">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Tools I use</p>
              <h2 className="section__title">
                Chosen for the <em>job at hand.</em>
              </h2>
              <p className="section__intro">
                Grouped by how much I actually use them &mdash; honest levels,
                no percentages or progress bars. I&rsquo;d rather be solid on a
                few tools than list every logo.
              </p>
            </header>

            <div className="tools__groups">
              {toolLevels.map((group, i) => (
                <Reveal
                  as="div"
                  key={group.label}
                  className="tools__group"
                  delay={i * 60}
                >
                  <h3 className="tools__label">{group.label}</h3>
                  {group.note && <p className="tools__note">{group.note}</p>}
                  <ul className="tools__grid">
                    {group.tools.map((t) => (
                      <li key={t.name} className="tool">
                        {t.img && (
                          <img src={t.img} alt="" aria-hidden="true" loading="lazy" />
                        )}
                        <span className="tool__body">
                          <span className="tool__name">{t.name}</span>
                          {t.desc && (
                            <span className="tool__desc">{t.desc}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============== WHY ME ============== */}
        <section className="section why">
          <div className="wrap why__grid">
            <div className="why__intro">
              <p className="eyebrow">Why work with me</p>
              <h2 className="section__title">
                Practical, honest, <em>easy to work with.</em>
              </h2>
            </div>
            <ul className="why__list">
              {reasons.map((r, i) => (
                <Reveal as="li" key={r.title} className="why__item" delay={i * 60}>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============== CTA + CONTACT ============== */}
        <section className="section contact" id="contact">
          <div className="wrap contact__grid">
            <div className="contact__left">
              <p className="eyebrow">Get in touch</p>
              <h2 className="contact__title">
                Looking for a CRM, automation, or operations <em>VA?</em>
              </h2>
              <p className="prose">
                I&rsquo;m available for remote roles, project-based work, and
                paid trial tasks. Tell me what currently takes too much of your
                time and I&rsquo;ll reply within 24 hours.
              </p>

              <div className="contact__cta-row">
                <a
                  href={site.resumeUrl}
                  className="btn btn--solid"
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  Download résumé ↓
                </a>
                <CopyEmail email={site.email} />
              </div>

              <ul className="contact__meta">
                <li>
                  <span>Email</span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <span>Book a call</span>
                  <a href={site.calendly} target="_blank" rel="noreferrer">
                    calendly.com/…/30min
                  </a>
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
        </section>
      </main>

      {/* ============== FOOTER ============== */}
      <footer className="footer">
        <div className="wrap footer__inner">
          <a href="#top" className="nav__logo">
            JV<span>.</span>
          </a>
          <p>© {new Date().getFullYear()} John Vincent Marte</p>
          <a href="#contact" className="link-arrow link-arrow--sm">
            Contact me →
          </a>
        </div>
      </footer>
    </>
  );
}
