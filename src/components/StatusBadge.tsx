import type { ProjectStatus } from "@/data/projects";

const dot: Record<ProjectStatus, string> = {
  Released: "bg-emerald-600",
  "In development": "bg-amber-500",
  Prototype: "bg-sky-600",
  "Unofficial concept": "bg-violet-500",
  Game: "bg-rose-500",
  Archived: "bg-neutral-400",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-2 py-0.5 text-[13px] text-muted">
      <span aria-hidden className={`size-1.5 rounded-full ${dot[status]}`} />
      {status}
    </span>
  );
}
