import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ExternalLink } from "@/components/ExternalLink";
import { ArrowUpRight } from "@/components/Arrow";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aiden Aho.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const rows = [
    site.email && { label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
    site.github && {
      label: "GitHub",
      value: site.github.replace(/^https?:\/\//, ""),
      href: site.github,
      external: true,
    },
    site.linkedin && {
      label: "LinkedIn",
      value: site.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: site.linkedin,
      external: true,
    },
  ].filter(Boolean) as { label: string; value: string; href: string; external: boolean }[];

  return (
    <Container className="pt-14 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mt-3 max-w-xl text-lg text-muted">
        The best way to reach me is email. I read everything, and I&apos;ll get back to you as soon
        as I can.
      </p>
      <dl className="mt-10 max-w-2xl divide-y divide-line border-y border-line">
        {rows.map((r) => (
          <div key={r.label} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:items-center sm:gap-4">
            <dt className="text-muted">{r.label}</dt>
            <dd>
              {r.external ? (
                <ExternalLink href={r.href} className="link inline-flex min-h-11 items-center gap-1 sm:min-h-0">
                  {r.value}
                  <ArrowUpRight />
                </ExternalLink>
              ) : (
                <a href={r.href} className="link inline-flex min-h-11 items-center sm:min-h-0">
                  {r.value}
                </a>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
