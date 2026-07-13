"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import ProjectPreview from "@/components/ProjectPreview";
import Gallery from "@/components/Gallery";
import { badgeKey } from "@/lib/content";

// Horizontal, snap-scrolling row of project cards.
//  - display:flex + nowrap keeps every card on one line
//  - CSS scroll-snap parks each card in place (touch swipe, horizontal wheel)
//  - subtle prev/next arrows drive it on desktop; they disable at the ends
//  - vertical wheel/trackpad gestures are left alone so the page scrolls
//    normally when the pointer is over the strip
// Card markup is unchanged from the old .work__grid — same data, images,
// links, hover, and Reveal animation.
export default function WorkCarousel({ projects = [] }) {
  const scrollerRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Recompute which arrows are usable from the current scroll offset.
  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Only track scroll position (to enable/disable the arrows) and resize.
    // We deliberately do NOT hijack the wheel: a vertical two-finger trackpad
    // gesture must scroll the PAGE, not get redirected into the carousel.
    // Horizontal trackpad swipes still scroll the strip natively via deltaX.
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  // Scroll one card (width + gap) in the given direction, smoothly.
  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(".card");
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap) || 0;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="work__carousel">
      <button
        type="button"
        className="work__arrow work__arrow--prev"
        aria-label="Previous projects"
        onClick={() => scrollByCard(-1)}
        disabled={atStart}
      >
        <span aria-hidden="true">←</span>
      </button>

      <div className="work__scroller" ref={scrollerRef}>
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
              objectPosition={p.imagePosition}
            />

            <span className={`card__tag badge badge--${badgeKey(p.type)}`}>
              {p.type}
              {p.status === "Live" && (
                <span className="card__live"> · Live</span>
              )}
            </span>
            <h3>{p.title}</h3>

            {p.role?.length > 0 && (
              <p className="card__role">
                <strong>My role</strong> {p.role.join(" · ")}
              </p>
            )}

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
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow link-arrow--sm"
                >
                  Visit live website →
                </a>
              )}
              {p.slug && (
                <a
                  href={`/work/${p.slug}/`}
                  className="link-arrow link-arrow--sm"
                >
                  {p.url ? "View project breakdown" : p.cta || "View project breakdown"} →
                </a>
              )}
            </div>

            {p.gallery?.length > 0 && (
              <Gallery screens={p.gallery} title={p.title} />
            )}
          </Reveal>
        ))}
      </div>

      <button
        type="button"
        className="work__arrow work__arrow--next"
        aria-label="Next projects"
        onClick={() => scrollByCard(1)}
        disabled={atEnd}
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
