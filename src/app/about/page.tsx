import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About Aiden Aho, a student developer in ${site.location}.`,
  alternates: { canonical: "/about" },
};

const focus = [
  { area: "Mobile", items: "React Native, Expo, SwiftUI" },
  { area: "Web & extensions", items: "TypeScript, React, Next.js, Chrome extensions (Manifest V3)" },
  { area: "Backend", items: "Supabase, PostgreSQL, Fastify, Prisma, Redis" },
  { area: "AI", items: "Claude and OpenAI APIs, structured outputs" },
  { area: "Games", items: "Roblox" },
];

export default function AboutPage() {
  return (
    <Container className="pt-14 sm:pt-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_300px] md:items-start">
      <div className="flex max-w-2xl flex-col gap-5 text-[17px] leading-relaxed">
        <p>
          I&apos;m Aiden Aho, a high-school student developer based in {site.location}. I like
          turning practical problems into working software, from mobile apps and browser extensions
          to interactive experiences. My favorite part of building is taking something from an idea
          to a product someone can actually use.
        </p>
        <p>
          The project I&apos;m proudest of is{" "}
          <Link href="/projects/dropdesk" className="link">
            Dropdesk
          </Link>
          , an app and Chrome extension for moving files from your phone to your computer. I built
          it end to end: the mobile app, the extension, the backend, the website, and the store
          listings. Getting it through review on the App Store, Google Play, and the Chrome Web
          Store taught me more than any tutorial.
        </p>
        <p>
          Not everything I make ships. Some projects are competition prototypes or concepts, and I
          label them that way on this site. I&apos;d rather show where something really stands than
          make it sound bigger than it is.
        </p>
        {site.currentlyBuilding && (
          <p className="text-muted">Currently building: {site.currentlyBuilding}</p>
        )}
      </div>
      <Image
        src="/aiden.jpg"
        alt="Portrait of Aiden Aho"
        width={1492}
        height={1054}
        sizes="(min-width: 768px) 300px, 100vw"
        className="aspect-[4/5] w-full max-w-[300px] rounded-2xl border border-line object-cover md:order-none"
        priority
      />
      </div>

      <section aria-labelledby="tools" className="mt-16 max-w-2xl">
        <h2 id="tools" className="text-sm font-medium uppercase tracking-[0.08em] text-muted">
          What I work with
        </h2>
        <dl className="mt-4 divide-y divide-line border-y border-line">
          {focus.map((f) => (
            <div key={f.area} className="grid gap-1 py-3 sm:grid-cols-[180px_1fr] sm:gap-4">
              <dt className="font-medium">{f.area}</dt>
              <dd className="text-muted">{f.items}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Container>
  );
}
