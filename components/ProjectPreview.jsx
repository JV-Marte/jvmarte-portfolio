// Screenshot frame for case-study pages (16:9, object-fit: cover).
//
// Pass a real image via `src`. Leave `src` null/undefined and it shows a
// labelled placeholder instead of a broken image icon.
//
//   <ProjectPreview
//     src={project.image}                       // null until you add one
//     alt={`${project.title} preview`}
//     objectPosition="top"                       // optional framing
//   />
export default function ProjectPreview({
  src,
  alt = "",
  placeholderLabel = "Screenshot coming soon",
  objectPosition = "center",
}) {
  return (
    <figure className="preview">
      {src ? (
        <img
          className="preview__img"
          src={src}
          alt={alt}
          style={{ objectPosition }}
        />
      ) : (
        <div className="preview__placeholder" role="img" aria-label={alt}>
          {placeholderLabel}
        </div>
      )}
    </figure>
  );
}
