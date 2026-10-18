import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/about", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}` })),
  ];
}
