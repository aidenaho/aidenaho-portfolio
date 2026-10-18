import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "./Container";
import { ExternalLink } from "./ExternalLink";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Aiden Aho</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {site.email && (
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                Email
              </a>
            </li>
          )}
          {site.github && (
            <li>
              <ExternalLink href={site.github} className="hover:text-ink">
                GitHub
              </ExternalLink>
            </li>
          )}
          {site.linkedin && (
            <li>
              <ExternalLink href={site.linkedin} className="hover:text-ink">
                LinkedIn
              </ExternalLink>
            </li>
          )}
          <li>
            <Link href="/projects" className="hover:text-ink">
              All work
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
