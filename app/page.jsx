import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import ProjectPreview from "@/components/ProjectPreview";
import { services, steps, toolGroups, projects, reasons } from "@/lib/content";

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
              leads, automate follow-ups, cut down repetitive admin, and keep
              their operations running smoothly.
            </p>

            <div className="hero__actions">
              <a href="#work" className="btn btn--solid">
                View my work
              </a>
              <a href="#contact" className="btn btn--ghost">
                Contact me →
              </a>
            </div>

            <p className="hero__trust">
              GoHighLevel · Workflow Automation · Web Support · Business
              Operations
            </p>
          </div>

          <div className="hero__rule wrap">
            <span>Available for freelance work</span>
            <span>Remote · Worldwide</span>
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
                A selection of CRM systems, automation workflows, websites, and
                operational tools I&rsquo;ve built or developed as practical
                projects. Each card is labelled so you can see what kind of
                project it is.
              </p>
            </header>

            <div className="work__grid">
              {projects.map((p, i) => (
                <Reveal
                  as="article"
                  key={p.title}
                  className="card"
                  delay={(i % 2) * 80}
                >
                  <ProjectPreview
                    src={p.image}
                    alt={`${p.title} project preview`}
                  />

                  <span className={`card__tag badge badge--${badgeKey(p.type)}`}>
                    {p.type}
                  </span>
                  <h3>{p.title}</h3>

                  <p className="card__problem">
                    <strong>Problem</strong> {p.problem}
                  </p>
                  <p className="card__built">{p.built}</p>

                  {p.features?.length > 0 && (
                    <ul className="card__features">
                      {p.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  )}

                  <ul className="card__stack" aria-label="Tools used">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <div className="card__actions">
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="link-arrow link-arrow--sm"
                      >
                        {p.cta || "Visit website"} →
                      </a>
                    ) : (
                      <a href="#contact" className="link-arrow link-arrow--sm">
                        {p.cta || "Discuss a build like this"} →
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
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
              <span className="about__caption">JV — CRM &amp; Automation VA</span>
            </Reveal>

            <div className="about__body">
              <p className="eyebrow">About</p>
              <Reveal as="h2" className="section__title">
                Hi, I&rsquo;m <em>JV.</em>
              </Reveal>
              <Reveal className="prose" delay={80}>
                <p>
                  I help service-based businesses organize the messy parts of
                  their operations — from lead tracking and follow-ups to
                  websites, spreadsheets, and repetitive admin tasks.
                </p>
                <p>
                  My background in <strong>business finance and operations</strong>
                  &nbsp;helps me understand both the technical side of a system
                  and the business reason behind it. I focus on building
                  practical solutions that are easy to understand, maintain, and
                  use.
                </p>
                <p>
                  I&rsquo;m continuously improving my skills across CRM
                  platforms, automation, web development, and business systems.
                </p>
              </Reveal>
              <a href="#contact" className="link-arrow">
                Work with me →
              </a>
            </div>
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
                I pick tools based on the business problem in front of me, not
                to pad a list. These are the ones I reach for most, grouped by
                what they&rsquo;re for.
              </p>
            </header>

            <div className="tools__groups">
              {toolGroups.map((group, i) => (
                <Reveal
                  as="div"
                  key={group.label}
                  className="tools__group"
                  delay={i * 60}
                >
                  <h3 className="tools__label">{group.label}</h3>
                  <ul className="tools__grid">
                    {group.tools.map((t) => (
                      <li key={t.name} className="tool">
                        {t.img && (
                          <img src={t.img} alt="" aria-hidden="true" loading="lazy" />
                        )}
                        <span>{t.name}</span>
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
                Let&rsquo;s make your workflow <em>simpler.</em>
              </h2>
              <p className="prose">
                Need help organizing leads, automating repetitive work,
                improving a website, or building a practical business system?
                Send me a message and tell me what currently takes too much of
                your time.
              </p>

              <ul className="contact__meta">
                <li>
                  <span>Email</span>
                  <a href="mailto:martejohnvincent13@gmail.com">
                    martejohnvincent13@gmail.com
                  </a>
                </li>
                <li>
                  <span>Book a call</span>
                  <a
                    href="https://calendly.com/martejohnvincent13/30min"
                    target="_blank"
                    rel="noreferrer"
                  >
                    calendly.com/…/30min
                  </a>
                </li>
                <li>
                  <span>Status</span>
                  <em>Available for new projects</em>
                </li>
              </ul>

              <div className="socials">
                <a
                  href="https://www.linkedin.com/in/john-vincent-marte-6b1530330/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/jvmarte_"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/JVincent51"
                  target="_blank"
                  rel="noreferrer"
                >
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

// Maps a project type to a css modifier so each badge reads distinctly
// (shape + label, never colour alone).
function badgeKey(type = "") {
  return type.toLowerCase().split(" ")[0]; // "client" | "personal" | "demo" | "concept"
}
