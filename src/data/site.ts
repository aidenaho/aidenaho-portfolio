/**
 * Site-wide settings. Edit these values to change contact details, links and SEO defaults.
 * Leave a value as `undefined` to hide it everywhere on the site.
 */
export const site = {
  name: "Aiden Aho",
  title: "Aiden Aho — Software developer",
  description:
    "Aiden Aho is a student developer in Central Illinois who builds mobile apps, browser extensions and interactive products. Creator of Dropdesk.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://aidenaho.com").replace(/\/$/, ""),
  location: "Central Illinois",
  email: "ahoa0981@gmail.com" as string | undefined,
  github: "https://github.com/aidenaho" as string | undefined,
  linkedin: undefined as string | undefined,
  /** Shown on the About page only when set. Keep it current or set to undefined. */
  currentlyBuilding: undefined as string | undefined,
};

export const nav = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
