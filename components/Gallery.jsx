"use client";

import { useCallback, useEffect, useState } from "react";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";

// Screenshot strip for a case study: a row of thumbnails that open
// a full-size lightbox. `screens` is an array of { src, label }.
// Keyboard: Esc closes, ← / → step through images.
export default function Gallery({ screens = [], title = "" }) {
  const [open, setOpen] = useState(null); // active index, or null when closed

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) =>
      setOpen((i) =>
        i === null ? i : (i + dir + screens.length) % screens.length
      ),
    [screens.length]
  );

  // Wire up keyboard nav + lock background scroll while the lightbox is open.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  if (screens.length === 0) return null;

  return (
    <div className="gallery">
      <ul className="gallery__thumbs">
        {screens.map((s, i) => (
          <li key={s.src}>
            <button
              type="button"
              className="gallery__thumb"
              onClick={() => setOpen(i)}
              aria-label={`View screenshot: ${s.label}`}
            >
              <img src={s.src} alt="" loading="lazy" />
            </button>
            <span className="gallery__cap">{s.label}</span>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title}: ${screens[open].label}`}
          onClick={close}
        >
          <figure
            className="lightbox__figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="lightbox__img"
              src={screens[open].src}
              alt={`${title}: ${screens[open].label}`}
            />
            <figcaption className="lightbox__caption">
              {screens[open].label}
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__close"
            onClick={close}
            aria-label="Close"
          >
            <X size={20} aria-hidden="true" />
          </button>

          {screens.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--prev"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous screenshot"
              >
                <CaretLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--next"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next screenshot"
              >
                <CaretRight size={22} aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
