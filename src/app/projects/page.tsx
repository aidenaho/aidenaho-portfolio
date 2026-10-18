import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Apps, browser extensions, prototypes and games built by Aiden Aho.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Container className="pt-14 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Work</h1>
      <p className="mt-3 mb-10 max-w-xl text-lg text-muted">
        Released apps, prototypes, and games. Each one is labeled with where it actually stands.
      </p>
      <ProjectGrid projects={projects} />
    </Container>
  );
}
