import { cvPath } from '../lib/profile';
export function ExternalLink({ href, children, className = 'text-link' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}
export function CVLink({ className = 'button-secondary' }) {
  return (
    <a href={cvPath} download="Ahmed-Adeshina-CV.docx" className={className}>
      Download CV <span aria-hidden="true">↓</span>
    </a>
  );
}
export function SectionHeading({ number, eyebrow, title, children }) {
  return (
    <div className="mb-9 max-w-2xl">
      <p className="eyebrow">
        <span className="mr-3 text-slate-400">{number} /</span>
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {children && <p className="mt-4 text-slate-300">{children}</p>}
    </div>
  );
}
