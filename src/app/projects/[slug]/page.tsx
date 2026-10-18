import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ProjectMedia } from "@/components/ProjectMedia";
import { StatusBadge } from "@/components/StatusBadge";
import { ExternalLink } from "@/components/ExternalLink";
import { Arrow, ArrowUpRight } from "@/components/Arrow";
import { getProject, projects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const cover = project.images[0];
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
      ...(cover && { images: [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }] }),
    },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-line pt-8 md:grid-cols-[200px_1fr] md:gap-8">
      <h2 className="text-sm font-medium uppercase tracking-[0.08em] text-muted">{title}</h2>
      <div className="min-w-0 max-w-2xl text-[17px] leading-relaxed">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const gallery = project.images.slice(1);
  const liveLinks = project.links.filter((l) => l.kind === "live");
  const codeLinks = project.links.filter((l) => l.kind === "code");

  return (
    <article>
      <Container className="pt-10 sm:pt-14">
        <Link
          href="/projects"
          className="-ml-1 inline-flex min-h-11 items-center gap-1.5 px-1 text-[15px] text-muted hover:text-ink"
        >
          <Arrow className="rotate-180" />
          Back to work
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            <span className="text-[13px] text-muted">
              {project.type} · {project.year}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {project.summary}
          </p>
          {project.links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.links.map((l) => (
                <li key={l.href}>
                  <ExternalLink
                    href={l.href}
                    label={`${project.title} on ${l.label}`}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-line bg-white px-3.5 text-[15px] font-medium transition-colors duration-200 hover:border-neutral-300"
                  >
                    {l.label}
                    <ArrowUpRight className="text-muted" />
                  </ExternalLink>
                </li>
              ))}
            </ul>
          )}
          {project.disclaimer && (
            <p className="mt-6 max-w-2xl rounded-lg border border-line bg-subtle px-4 py-3 text-[15px] text-muted">
              {project.disclaimer}
            </p>
          )}
        </header>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <ProjectMedia
            project={project}
            priority
            aspect="aspect-[16/10] sm:aspect-[16/9]"
            sizes="(min-width: 1100px) 1036px, 100vw"
          />
        </div>
        {project.images[0]?.caption && (
          <p className="mt-2 text-[15px] text-muted">{project.images[0].caption}</p>
        )}

        <div className="mt-14 flex flex-col gap-10">
          <Block title="The problem">
            <p>{project.problem}</p>
          </Block>

          {project.sections
            ?.filter((s) => s.heading === "Core flow")
            .map((s) => (
              <Block key={s.heading} title={s.heading}>
                <p>{s.body}</p>
              </Block>
            ))}

          <Block title="What I built">
            <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-neutral-400">
              {project.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Block>

          {project.sections
            ?.filter((s) => s.heading !== "Core flow")
            .map((s) => (
              <Block key={s.heading} title={s.heading}>
                <p>{s.body}</p>
              </Block>
            ))}

          <Block title="Technology">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <li key={t} className="rounded-md border border-line bg-white px-2.5 py-1 text-[15px]">
                  {t}
                </li>
              ))}
            </ul>
          </Block>

          {gallery.length > 0 && (
            <Block title="Screenshots">
              <div className="flex flex-col gap-8">
                {gallery.map((img) => (
                  <figure key={img.src}>
                    <div className="overflow-hidden rounded-xl border border-line bg-subtle">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        sizes="(min-width: 1100px) 672px, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="mt-2 text-[15px] text-muted">{img.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </Block>
          )}

          <Block title="What I learned">
            <p>{project.learned}</p>
          </Block>

          {(liveLinks.length > 0 || codeLinks.length > 0) && (
            <Block title={liveLinks.length > 0 ? "Live product" : "Code"}>
              <ul className="flex flex-col gap-2">
                {[...liveLinks, ...codeLinks].map((l) => (
                  <li key={l.href}>
                    <ExternalLink href={l.href} label={`${project.title} on ${l.label}`} className="link">
                      {l.label}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </div>

        <nav aria-label="Next project" className="mt-20 border-t border-line pt-8">
          <Link href={`/projects/${next.slug}`} className="group flex items-center justify-between gap-4">
            <span>
              <span className="block text-sm text-muted">Next project</span>
              <span className="mt-1 block text-xl font-semibold tracking-tight group-hover:underline group-hover:underline-offset-4">
                {next.title}
              </span>
            </span>
            <Arrow className="size-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </nav>
      </Container>
    </article>
  );
}
