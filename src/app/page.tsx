import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectRow } from "@/components/ProjectRow";
import { SectionHeading } from "@/components/Section";
import { ExternalLink } from "@/components/ExternalLink";
import { Arrow, ArrowUpRight } from "@/components/Arrow";
import { getProject, otherProjects, releases } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  const dropdesk = getProject("dropdesk")!;
  const secondRow = ["statefarm-drive", "rader-farms-companion"].map((s) => getProject(s)!);
  const game = getProject("steal-a-fidget-pet")!;

  return (
    <>
      <Container className="pb-16 pt-16 sm:pb-24 sm:pt-24">
        <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted">
          Software developer
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Hi, I&apos;m Aiden. I build useful software.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          I develop mobile apps, websites, and interactive products, from the first prototype to a
          public release.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="#work"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-ink px-4 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-neutral-700"
          >
            See my work
            <Arrow />
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-lg border border-line bg-white px-4 text-[15px] font-medium transition-colors duration-200 hover:border-neutral-300"
          >
            Get in touch
          </Link>
        </div>
      </Container>

      <Container>
        <section aria-labelledby="work">
          <SectionHeading
            id="work"
            aside={
              <Link href="/projects" className="text-sm text-muted hover:text-ink">
                All projects
              </Link>
            }
          >
            Featured work
          </SectionHeading>
          <div className="flex flex-col gap-6">
            <ProjectCard project={dropdesk} size="large" priority />
            <div className="grid gap-6 md:grid-cols-2">
              {secondRow.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard project={game} />
              <section
                aria-labelledby="other-projects"
                className="rounded-2xl border border-line bg-white p-5 sm:p-6"
              >
                <h3 id="other-projects" className="text-xl font-semibold tracking-tight">
                  Other projects
                </h3>
                <ul className="mt-2 divide-y divide-line">
                  {otherProjects.map((p) => (
                    <ProjectRow key={p.slug} project={p} />
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>

        <section aria-labelledby="releases" className="mt-20">
          <SectionHeading id="releases">Shipped &amp; published</SectionHeading>
          <ul className="divide-y divide-line border-y border-line">
            {releases.map((r) => (
              <li key={r.href}>
                <ExternalLink
                  href={r.href}
                  className="group flex min-h-14 items-center justify-between gap-4 py-3"
                >
                  <span className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                    <span className="font-medium group-hover:underline group-hover:underline-offset-4">
                      {r.title}
                    </span>
                    <span className="text-[15px] text-muted">{r.detail}</span>
                  </span>
                  <ArrowUpRight className="shrink-0 text-muted group-hover:text-ink" />
                </ExternalLink>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="about" className="mt-20 grid gap-6 md:grid-cols-[200px_1fr]">
          <h2 id="about" className="text-sm font-medium uppercase tracking-[0.08em] text-muted">
            About
          </h2>
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed">
              I&apos;m Aiden Aho, a student developer based in {site.location}. I like turning
              practical problems into working software, from mobile apps and browser extensions to
              interactive experiences. My favorite part of building is taking something from an idea
              to a product someone can actually use.
            </p>
            <Link href="/about" className="link mt-4 inline-block text-[15px]">
              More about me
            </Link>
          </div>
        </section>

        <section
          aria-labelledby="contact"
          className="mt-20 rounded-2xl border border-line bg-white px-6 py-10 sm:px-10"
        >
          <h2 id="contact" className="text-2xl font-semibold tracking-tight">
            Want to talk about a project?
          </h2>
          <p className="mt-2 max-w-xl text-muted">
            I&apos;m always happy to hear about an idea, an opportunity, or feedback on something
            I&apos;ve made.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center rounded-lg bg-ink px-4 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-neutral-700"
              >
                Email me
              </a>
            )}
            {site.github && (
              <ExternalLink
                href={site.github}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-line px-4 text-[15px] font-medium transition-colors duration-200 hover:border-neutral-300"
              >
                GitHub
                <ArrowUpRight />
              </ExternalLink>
            )}
          </div>
        </section>
      </Container>
    </>
  );
}
