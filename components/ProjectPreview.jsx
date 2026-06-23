// Reusable 16:9 screenshot frame for project cards.
//
// Pass a real image via `src` and it renders with object-fit: cover.
// Leave `src` null/undefined and it shows a styled, replaceable
// placeholder inside a sketched browser-window frame — no broken
// image icon, no reference to a missing local file.
//
//   <ProjectPreview
//     src={project.image}                       // null until you add one
//     alt={`${project.title} preview`}
//     placeholderLabel="Project Screenshot Coming Soon"
//     objectPosition="top"                       // optional framing
//   />
export default function ProjectPreview({
  src,
  alt = "",
  placeholderLabel = "Project Screenshot Coming Soon",
  objectPosition = "center",
}) {
  return (
    <figure className="preview">
      {/* faux browser chrome — purely decorative */}
      <div className="preview__bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="preview__frame">
        {src ? (
          <img
            className="preview__img"
            src={src}
            alt={alt}
            loading="lazy"
            style={{ objectPosition }}
          />
        ) : (
          // role/aria-label give screen readers meaningful context while
          // the visible text tells the owner exactly what to replace.
          <div className="preview__placeholder" role="img" aria-label={alt}>
            <span className="preview__label">{placeholderLabel}</span>
            <span className="preview__hint">
              Replace this placeholder with a real dashboard, workflow,
              website, or results screenshot.
            </span>
          </div>
        )}
      </div>
    </figure>
  );
}
