import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectMedia } from "./ProjectMedia";
import { StatusBadge } from "./StatusBadge";
import { Arrow } from "./Arrow";

/**
 * Whole card links to the case study. External links live on the case study page,
 * which keeps the card a single, simple tap target.
 */
export function ProjectCard({
  project,
  size = "default",
  priority = false,
  headingLevel = "h3",
}: {
  project: Project;
  size?: "large" | "default";
  priority?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const large = size === "large";
  const Heading = headingLevel;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.18)] motion-reduce:hover:translate-y-0">
      <div className="border-b border-line">
        <ProjectMedia
          project={project}
          priority={priority}
          aspect={large ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[16/10]"}
          sizes={large ? "(min-width: 1100px) 1036px, 100vw" : "(min-width: 768px) 520px, 100vw"}
        />
      </div>
      <div className={`flex flex-1 flex-col gap-3 ${large ? "p-5 sm:p-7" : "p-5 sm:p-6"}`}>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="text-[13px] text-muted">{project.type}</span>
        </div>
        <Heading className={`font-semibold tracking-tight ${large ? "text-2xl" : "text-xl"}`}>
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </Heading>
        <p className={`text-muted ${large ? "max-w-2xl text-[17px]" : "text-[15px]"}`}>
          {project.summary}
        </p>
        {project.disclaimer && project.status !== "Released" && project.status !== "Game" && (
          <p className="text-[13px] text-muted">{project.disclaimer}</p>
        )}
        <div className="mt-auto flex items-center justify-between gap-4 pt-2">
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-muted" aria-label="Technologies">
            {project.tags.slice(0, 3).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <span className="flex shrink-0 items-center gap-1 text-sm text-ink">
            <span className="sr-only">Read the {project.title} case study</span>
            <Arrow className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
