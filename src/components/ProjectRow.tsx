import Link from "next/link";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { Arrow } from "./Arrow";

/** Compact list row for secondary projects. */
export function ProjectRow({ project }: { project: Project }) {
  return (
    <li>
      <Link
        href={`/projects/${project.slug}`}
        className="group flex items-start justify-between gap-4 py-4 transition-colors duration-200"
      >
        <span className="flex flex-col gap-1.5">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-medium group-hover:underline group-hover:underline-offset-4">
              {project.title}
            </span>
            <StatusBadge status={project.status} />
          </span>
          <span className="text-[15px] text-muted">{project.summary}</span>
        </span>
        <Arrow className="mt-1 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-ink" />
      </Link>
    </li>
  );
}
