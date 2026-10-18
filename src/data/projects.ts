/**
 * All project content lives here. See README.md → "Updating projects".
 *
 * Rules this file follows on purpose:
 * - `status` must be honest. Only use "Released" for something people can download or use today.
 * - Only add `links` you have checked are live.
 * - Only list `images` that are real screenshots. If a project has none, leave `images` empty
 *   and the site shows a neutral "screenshots coming soon" panel instead.
 */

export type ProjectStatus =
  | "Released"
  | "In development"
  | "Prototype"
  | "Unofficial concept"
  | "Game"
  | "Archived";

/** Groups used by the filter on /projects. */
export type ProjectCategory = "Shipped" | "In development" | "Prototype" | "Game";

export interface ProjectImage {
  /** Path under /public, e.g. "/projects/dropdesk/cover.png". */
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  /** "live" links are product/store pages; "code" links are repositories. */
  kind: "live" | "code";
}

export interface Project {
  slug: string;
  title: string;
  /** Short type line, e.g. "iOS app + Chrome extension". */
  type: string;
  status: ProjectStatus;
  category: ProjectCategory;
  year: string;
  /** One sentence used on cards and at the top of the case study. */
  summary: string;
  /** Up to three short tags shown on cards. */
  tags: string[];
  /** Full verified technology list for the case study. */
  stack: string[];
  /** Shown on the home page "Featured work" section, in this order. */
  featured: boolean;
  problem: string;
  built: string[];
  /** Optional extra case-study sections (e.g. "Core flow", "Challenges"). */
  sections?: { heading: string; body: string }[];
  learned: string;
  links: ProjectLink[];
  images: ProjectImage[];
  /** Shown in a callout on the card and case study. */
  disclaimer?: string;
}

export const projects: Project[] = [
  {
    slug: "dropdesk",
    title: "Dropdesk",
    type: "iOS & Android app + Chrome extension",
    status: "Released",
    category: "Shipped",
    year: "2026",
    summary:
      "Move photos, files, and text from your phone to your computer without emailing yourself.",
    tags: ["React Native", "Chrome extension", "Supabase"],
    stack: [
      "Expo (React Native)",
      "TypeScript",
      "Chrome Manifest V3 side panel",
      "Supabase (Postgres, Storage, Edge Functions)",
      "AES-GCM via @noble/ciphers",
      "EAS Build & Update",
    ],
    featured: true,
    problem:
      "Getting a photo from your phone onto a website on your computer usually means emailing it to yourself, texting it to yourself, or digging through a cloud drive. If you don't have a Mac, AirDrop isn't an option. I wanted something that felt like dropping a file on a desk: open a panel, point your phone at it, and the file is there.",
    sections: [
      {
        heading: "Core flow",
        body: "Open the Dropdesk side panel in Chrome and it shows a QR code and a six-digit PIN. Scan the code (or type the PIN) in the phone app, pick photos, files, or clipboard text, and they appear in the panel within seconds. From there you can save them or drag them straight into an upload field on any website. No account is needed on either side.",
      },
      {
        heading: "Challenges",
        body: "The hardest part was keeping it simple while handling other people's photos responsibly. Files are encrypted on the phone before upload and decrypted locally in the extension, so the server only stores ciphertext. Uploads delete themselves after five minutes unless you tap Keep, PIN guesses are rate-limited on the server, and I had to get the drag-and-drop from a side panel into arbitrary web pages to behave the way people expect. Then came the store reviews for three different platforms.",
      },
    ],
    built: [
      "An Expo / React Native app for iOS and Android that pairs by QR code or PIN, sends photos, files, and clipboard text, and accepts shares from other apps.",
      "A Chrome side panel extension that receives files and lets you drag them directly into any website, or send files back to the phone.",
      "A Supabase backend with token-paired sessions, signed upload URLs from an Edge Function, server-side PIN rate limiting, and scheduled cleanup of expired files.",
      "On-device AES-GCM encryption of file contents before upload, plus the product website, privacy policy, and store listings.",
    ],
    learned:
      "Shipping is a different skill from building. Most of the work after the app \"worked\" was edge cases, permissions copy, store review notes, and making the first-run experience obvious to someone who has never seen it. I also learned to write down honestly what the app does and doesn't protect (filenames are still visible to the server, for example) instead of over-promising.",
    links: [
      { label: "dropdeskapp.com", href: "https://dropdeskapp.com/", kind: "live" },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/dropdesk/id6797108278",
        kind: "live",
      },
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/dropdesk/ecjfmndgcechdplkiogmpolmgodcpgii",
        kind: "live",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.dragnsave.app",
        kind: "live",
      },
    ],
    images: [
      {
        src: "/projects/dropdesk/cover-app.jpg",
        alt: "Three iPhone screens of the Dropdesk app (scanning a code, the home screen, and a sent photo) next to the Dropdesk Chrome side panel.",
        width: 2000,
        height: 1120,
      },
      {
        src: "/projects/dropdesk/phone-home-scan.jpg",
        alt: "Dropdesk on iPhone: the home screen with Scan code and Enter 6-digit code buttons, and the camera screen for scanning the code on your computer.",
        width: 1920,
        height: 1440,
        caption: "Pairing on iPhone: scan the code on your computer or type the six-digit PIN.",
      },
      {
        src: "/projects/dropdesk/phone-sent.jpg",
        alt: "Dropdesk on iPhone after sending a photo, showing 'Photo on your PC, ready to drag from your computer' and a countdown until it deletes.",
        width: 1920,
        height: 1440,
        caption: "After sending, the phone confirms the photo is waiting on the computer.",
      },
      {
        src: "/projects/dropdesk/extension-panels.png",
        alt: "Three states of the Dropdesk Chrome side panel: pairing with a QR code and PIN, waiting for uploads, and a list of received files.",
        width: 2000,
        height: 1120,
        caption: "The Chrome side panel: pairing, waiting, and received files ready to drag into a website.",
      },
    ],
  },
  {
    slug: "statefarm-drive",
    title: "StateFarm Drive",
    type: "iOS prototype",
    status: "Prototype",
    category: "Prototype",
    year: "2026",
    summary:
      "An iOS driving companion exploring navigation, road awareness, and post-drive coaching.",
    tags: ["SwiftUI", "iOS", "Maps"],
    stack: ["SwiftUI", "iOS", "Mapbox (mapping and route guidance)"],
    featured: true,
    problem:
      "New drivers get plenty of rules up front and very little feedback afterward. For a high-school STEM competition, I explored what a driving app could look like if it helped during the drive with clear guidance and context, then gave you useful coaching once you parked.",
    built: [
      "A SwiftUI navigation flow with a map and route guidance.",
      "Trip tracking that records a drive from start to finish.",
      "Contextual alerts for situations like school zones, speed zones, and hard braking.",
      "A post-drive summary screen with trip insights and driving feedback.",
    ],
    learned:
      "Driving apps have to be readable at a glance, so most of my design time went into cutting things from the screen rather than adding them. Building the prototype also showed me which ideas were straightforward to implement and which (reliable real-world detection, for example) would need far more testing before anyone should trust them.",
    links: [],
    images: [],
    disclaimer:
      "A student competition prototype. Not an official State Farm product, and not published on the App Store.",
  },
  {
    slug: "rader-farms-companion",
    title: "Rader Family Farms Companion",
    type: "Mobile app concept",
    status: "Unofficial concept",
    category: "Prototype",
    year: "2026",
    summary:
      "A farm visitor app concept with interactive navigation, attractions, tickets, and seasonal quests.",
    tags: ["Expo", "React Native", "TypeScript"],
    stack: ["Expo", "React Native", "TypeScript"],
    featured: true,
    problem:
      "On a visit to Rader Family Farms, finding the restrooms and specific activities was harder than it needed to be. The map was reached by a QR code and was essentially a static image. I wanted to see what a visitor app for a place like this could look like.",
    built: [
      "A working Expo / React Native prototype for iOS and Android with a searchable list of attractions, activities, and restrooms.",
      "A map view and wayfinding flow for getting to a specific spot on the farm.",
      "Event listings and a digital scavenger-hunt idea for seasonal visits.",
      "A proposed (not yet built) admin backend and a link out to the farm's existing ticket checkout.",
    ],
    sections: [
      {
        heading: "Prioritizing features",
        body: "It was tempting to build everything at once. I focused first on the problems I actually ran into, finding things and getting to them, and kept ticketing as a simple link to the existing checkout instead of trying to rebuild it.",
      },
    ],
    learned:
      "Starting from a real frustration made it much easier to decide what to build first. It also made me think about who would maintain the content: a farm's staff would need an easy way to update events and hours, which is why the next step is an admin side rather than more visitor features.",
    links: [],
    images: [],
    disclaimer:
      "Unofficial concept, not affiliated with Rader Family Farms. Not commissioned, endorsed, or sold to them.",
  },
  {
    slug: "steal-a-fidget-pet",
    title: "Steal a Fidget Pet",
    type: "Roblox game",
    status: "Game",
    category: "Game",
    year: "2026",
    summary:
      "A Roblox pet-collection game built around fidget-inspired creatures, eggs, upgrades, and progression.",
    tags: ["Roblox", "Luau", "Blender"],
    stack: ["Roblox Studio", "Luau", "Rojo", "Blender (pet and set models)", "Python asset tooling"],
    featured: true,
    problem:
      "I wanted to make a game with a loop that's easy to pick up and still gives you a reason to come back: grab something risky, get it home, and turn it into progress.",
    built: [
      "A steal-an-egg loop: run into fidget-toy arenas, grab an egg, and race it home before that area's guardian catches you. Deeper zones have rarer eggs and faster guardians.",
      "Pets modeled on fidget toys that hatch from eggs and earn in-game cash, with continuous weights and sizes, fusing, and rarity tiers.",
      "Progression through treadmill tiers for speed, a hex skill tree, a rebirth tree, and trails.",
      "Themed areas with floors that react like the material (keyboard keys, slime, butter squishies, pop-its), plus weather, live events, quests, and codes.",
    ],
    sections: [
      {
        heading: "How it was made",
        body: "I designed the game and directed every system, and built it with heavy help from AI coding tools. Pets and set pieces are modeled in Blender through scripted pipelines. The marketing thumbnails and some 2D art were generated with AI image tools, so I label them as promotional art rather than in-game footage.",
      },
    ],
    learned:
      "Game feel lives in small numbers. Guardian speed, egg odds, and treadmill pricing all interact, and changing one changes how the whole game plays. I also learned how much of a game is the pipeline around it: building, packing, uploading, and publishing assets reliably.",
    links: [
      {
        label: "Roblox game page",
        href: "https://www.roblox.com/games/120019689600031/Steal-a-Fidget-Pet",
        kind: "live",
      },
    ],
    images: [
      {
        src: "/projects/steal-a-fidget-pet/thumbnail.jpg",
        alt: "Promotional thumbnail for Steal a Fidget Pet: a Roblox character running with a pop-it egg while a giant blue keyboard-brick guardian chases them.",
        width: 1920,
        height: 1080,
        caption: "Promotional thumbnail (AI-generated art, not an in-game screenshot).",
      },
      {
        src: "/projects/steal-a-fidget-pet/pet-roster.jpg",
        alt: "A sheet of 85 rendered fidget-toy pets grouped by rarity from Common to Secret, such as Keycap Cat, Pop-It Pup and Keyboard Kraken.",
        width: 1600,
        height: 2624,
        caption: "Pet roster render sheet from an earlier release, grouped by rarity.",
      },
    ],
    disclaimer: "Published on Roblox under the Pristine Studios! group.",
  },
  {
    slug: "ridewise",
    title: "Ridewise",
    type: "Mobile app + API",
    status: "In development",
    category: "In development",
    year: "2026",
    summary:
      "Voice navigation that sounds like a passenger: directions based on landmarks instead of \"in 500 feet.\"",
    tags: ["Expo", "Mapbox", "Fastify"],
    stack: [
      "Expo Router + NativeWind",
      "Mapbox",
      "Fastify, PostgreSQL, Redis",
      "Claude (callout text) and ElevenLabs (voice)",
      "WebSockets",
    ],
    featured: false,
    problem:
      "Turn-by-turn directions are precise but not very human. A friend in the passenger seat says \"turn left after the gas station,\" not \"in 800 feet, turn left.\" I wanted to see if an app could give directions that way.",
    built: [
      "An Expo app with a glanceable drive screen, a live map, and a simulated-drive mode for testing without a car.",
      "A Fastify API that streams trip updates over WebSockets and handles rerouting.",
      "A callout pipeline that generates the next few instructions ahead of time and falls back to templates if a route changes or AI voice isn't available.",
    ],
    learned:
      "Timing matters more than wording. A great instruction delivered late is worse than a plain one delivered on time, so the fallback path got as much attention as the AI path.",
    links: [],
    images: [],
  },
  {
    slug: "jobai",
    title: "JobAI",
    type: "Mobile & web app",
    status: "In development",
    category: "In development",
    year: "2026",
    summary:
      "An AI job agent that surfaces local listings the big job boards miss, then helps with applications.",
    tags: ["Expo", "Supabase", "Claude"],
    stack: ["Expo", "React Native", "Supabase", "Claude"],
    featured: false,
    problem:
      "Big job boards miss a lot of small, local openings, which are exactly the jobs many students are looking for.",
    built: [
      "You describe the kind of work you want, and it searches for relevant openings, including small local listings.",
      "Claude handles search parsing and coaching, while ranking stays deterministic on purpose.",
      "Planned help with applications and interview practice.",
    ],
    learned:
      "Still in progress. So far the biggest lesson is deciding which parts should use AI and which parts should stay predictable.",
    links: [],
    images: [],
  },
  {
    slug: "planflow",
    title: "Planflow",
    type: "Web app",
    status: "Archived",
    category: "In development",
    year: "2026",
    summary: "Turned a one-sentence idea into a build-ready product plan. No longer active.",
    tags: ["React", "Gemini", "Mermaid"],
    stack: ["React", "Vite", "Tailwind CSS", "Google Gemini", "Mermaid"],
    featured: false,
    problem:
      "Going from \"I have an idea\" to knowing what to actually build takes a lot of thinking that most people skip. I wanted a tool that gave you a complete first draft to react to.",
    built: [
      "A web app where you describe an idea in plain English and get back a nine-part plan: product spec, technical architecture, business model, growth strategy, a pitch deck, brand identity, and a UI preview.",
      "Gemini generates each section, and Mermaid renders the architecture and flow diagrams.",
    ],
    learned:
      "A big generated document is easy to make and hard to make useful. Planflow taught me to care more about what someone does with the output than how much output there is. It's no longer running.",
    links: [],
    images: [],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

/** Short entries for the "Shipped & published" list on the home page. */
export const releases: { title: string; detail: string; href: string }[] = [
  {
    title: "Dropdesk for iOS",
    detail: "App Store · developer Aiden Aho · 2026",
    href: "https://apps.apple.com/us/app/dropdesk/id6797108278",
  },
  {
    title: "Dropdesk for Chrome",
    detail: "Chrome Web Store · 2026",
    href: "https://chromewebstore.google.com/detail/dropdesk/ecjfmndgcechdplkiogmpolmgodcpgii",
  },
  {
    title: "Dropdesk for Android",
    detail: "Google Play · 2026",
    href: "https://play.google.com/store/apps/details?id=com.dragnsave.app",
  },
  {
    title: "dropdeskapp.com",
    detail: "Product website",
    href: "https://dropdeskapp.com/",
  },
  {
    title: "Steal a Fidget Pet",
    detail: "Roblox · October 2026",
    href: "https://www.roblox.com/games/120019689600031/Steal-a-Fidget-Pet",
  },
];
