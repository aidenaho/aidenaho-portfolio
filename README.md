# aidenaho.com

Personal portfolio for Aiden Aho. Next.js (App Router) + TypeScript + Tailwind CSS v4, Geist font, fully static.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build      # production build; every page is prerendered
```

Node 20+ is required.

## Environment

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://aidenaho.com` | Canonical URL for metadata, sitemap, robots and Open Graph. |

Copy `.env.example` to `.env.local` to override it locally. On Vercel, set it per environment if previews should point elsewhere.

## Updating projects

Everything about projects lives in **`src/data/projects.ts`**.

- **Change a status:** edit `status` (`"Released"`, `"In development"`, `"Prototype"`, `"Unofficial concept"`, `"Game"`, `"Archived"`) and `category` (the `/projects` filter group: `"Shipped"`, `"In development"`, `"Prototype"`, `"Game"`).
- **Add screenshots:** put files in `public/projects/<slug>/`, then add entries to that project's `images` array with `src`, `alt`, `width` and `height` (the image's real pixel size). The first image is the cover on cards and at the top of the case study; the rest appear in the Screenshots gallery with optional captions. Projects with no images show a plain "screenshots coming soon" panel.
- **Add a link:** add `{ label, href, kind: "live" | "code" }` to `links`. Only add links you've checked work.
- **Feature a project on the home page:** set `featured: true`. The home page layout places Dropdesk, StateFarm Drive, Rader Family Farms Companion and Steal a Fidget Pet by slug in `src/app/page.tsx`; every non-featured project shows in "Other projects".
- **Add a project:** copy an existing entry, give it a new `slug`. Its case study page at `/projects/<slug>` is generated automatically.
- **Shipped & published list:** the `releases` array at the bottom of the same file.

Contact details, social links and the optional "Currently building" line are in **`src/data/site.ts`**. Set any of them to `undefined` to hide it everywhere.

## Content rules

The site intentionally avoids anything that can't be backed up: no download or user counts, press, awards, testimonials or invented metrics. Prototypes and concepts are labelled as such, and the Rader Family Farms and StateFarm Drive pages carry disclaimers. Please keep it that way when editing.

## Deployment

Import the repository in Vercel (framework preset: Next.js, no extra settings). To use the custom domain, add `aidenaho.com` under Project → Settings → Domains and follow Vercel's DNS instructions at your registrar.
