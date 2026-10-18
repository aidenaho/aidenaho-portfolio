export function ExternalLink({
  href,
  children,
  className,
  label,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Accessible name when the visible text needs more context. */
  label?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
