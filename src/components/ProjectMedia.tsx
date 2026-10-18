import Image from "next/image";
import type { Project } from "@/data/projects";

/**
 * Shows a project's cover image. When a project has no real screenshots yet, it renders a plain,
 * honest placeholder instead of a fake mockup.
 */
export function ProjectMedia({
  project,
  sizes,
  priority = false,
  aspect = "aspect-[16/10]",
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
  aspect?: string;
}) {
  const cover = project.images[0];

  if (!cover) {
    // Shorter than a real cover so an empty panel doesn't dominate the page.
    return (
      <div
        className={`aspect-[2/1] flex w-full flex-col items-center justify-center gap-1 bg-subtle text-center`}
      >
        <span className="text-lg font-medium tracking-tight text-ink/80">{project.title}</span>
        <span className="text-[13px] text-muted">{project.type} · screenshots coming soon</span>
      </div>
    );
  }

  return (
    <div className={`${aspect} relative w-full overflow-hidden bg-subtle`}>
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
