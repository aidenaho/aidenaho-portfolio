export function SectionHeading({
  id,
  children,
  aside,
}: {
  id?: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2 id={id} className="text-sm font-medium uppercase tracking-[0.08em] text-muted">
        {children}
      </h2>
      {aside}
    </div>
  );
}
