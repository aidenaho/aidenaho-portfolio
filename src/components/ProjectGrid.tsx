"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const filters: ("All" | ProjectCategory)[] = ["All", "Shipped", "In development", "Prototype", "Game"];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`min-h-11 rounded-lg border px-3.5 text-[15px] transition-colors duration-200 ${
              active === f
                ? "border-ink bg-ink text-white"
                : "border-line bg-white text-muted hover:border-neutral-300 hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} headingLevel="h2" />
        ))}
      </div>
    </>
  );
}
