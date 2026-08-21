import {
  ccsImg,
  ecommerceGenkinImg,
  genkinMobileImg,
  ecommerProjectImg,
  haunhanImg,
  maidoImg,
  porfolioImg,
  stickTogetherImg,
} from "@/assets/images";
import type { StaticImageData } from "next/image";
import type React from "react";

export type TProjectEntry = {
  title: string;
  org?: string;
  role?: string;
  period?: string;
  description: React.ReactNode;
  coverImg?: StaticImageData;
  coverNote?: string;
  liveLink?: string;
  githubLink?: string;
  demoLink?: string;
  appStoreLink?: string;
  googlePlayLink?: string;
  techStacks: string[];
};

export const DEFAULT_LOADING_VALUE = 0;

export const MENUS = {
  ABOUT: {
    value: "about",
    label: "About",
  },
  PROJECTS: {
    value: "projects",
    label: "Projects",
  },
  CONTACT: {
    value: "contact",
    label: "Contact",
  },
};

// Mirrors the LinkedIn profile - keep the two in sync, recruiters cross-check.
// Ordered most recent first.
export const EXPERIENCES = {
  GENKIN: {
    title: "GENKIN",
    period: "Apr 2023 - Present",
    roles: [
      {
        position: "Software Engineer",
        employmentType: "Full-time",
        date: "Apr 2024 - Present",
      },
      {
        position: "Frontend Developer",
        employmentType: "Full-time",
        date: "Jun 2023 - Apr 2024",
      },
      {
        position: "Frontend Developer",
        employmentType: "Internship",
        date: "Apr 2023 - Jun 2023",
      },
    ],
  },
  CHECKMATE: {
    title: "CHECKMATE",
    roles: [
      {
        position: "Software Engineer",
        employmentType: "Full-time",
        date: "Apr 2024 - Apr 2025",
      },
    ],
  },
  GEEK_UP: {
    title: "GEEK Up",
    roles: [
      {
        position: "Frontend Web Developer",
        employmentType: "Internship",
        date: "Aug 2022 - Oct 2022",
      },
    ],
  },
};

// `important: true` renders a solid badge. Reserved for the stack that the
// projects below actually demonstrate - keep the two in sync when either
// changes, otherwise the highlights read as unsupported claims.
export const SKILLS = [
  // Frontend
  { title: "Next.js", important: true },
  { title: "React", important: false },
  { title: "TypeScript", important: true },
  { title: "TailwindCSS", important: false },
  { title: "React Native", important: false },
  // Backend
  { title: "Python", important: true },
  { title: "Django", important: true },
  { title: "Node.js", important: false },
  // Data & infrastructure
  { title: "PostgreSQL", important: false },
  { title: "Redis", important: false },
  { title: "Docker", important: false },
  { title: "AWS", important: false },
];

export const HOBBIES = [
  "Playing video games for relaxation 🎮",
  "Listening to music 🎵",
  "Going to the beach, enjoying the breeze & smoking 🌊",
  "Exploring and experimenting with new technologies 💡",
];
// Client sites delivered while at CHECKMATE. All are publicly launched, so
// naming them is fine - keep the detail to what a visitor can already see.
export const CLIENT_PROJECTS: TProjectEntry[] = [
  {
    title: "Maido Agency",
    org: "CHECKMATE",
    role: "Software Engineer",
    period: "2024",
    description: (
      <div className="space-y-2">
        <p>
          Corporate website for a creative agency, built from high-fidelity
          Figma designs.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Translated the full design system into a responsive Next.js +
            TailwindCSS frontend.
          </li>
          <li>
            Shipped three-language support (Vietnamese, English, Japanese) with
            locale-aware routing.
          </li>
          <li>
            Handled contact form submissions and tuned layouts down to mobile
            breakpoints.
          </li>
        </ul>
      </div>
    ),
    coverImg: maidoImg,
    liveLink: "https://maido.agency",
    techStacks: ["Next.js", "TailwindCSS", "i18n"],
  },
  {
    title: "HauNhanWood",
    org: "CHECKMATE",
    role: "Software Engineer",
    period: "2024",
    description: (
      <div className="space-y-2">
        <p>
          Business website for a furniture manufacturer, delivered as a custom
          WordPress theme.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>Built a bespoke theme from the client&apos;s Figma designs.</li>
          <li>
            Configured bilingual content (Vietnamese, English) and contact form
            handling.
          </li>
          <li>
            Verified consistent rendering across major browsers and screen
            sizes.
          </li>
        </ul>
      </div>
    ),
    coverImg: haunhanImg,
    liveLink: "https://haunhanwood.com",
    techStacks: ["WordPress", "PHP", "CSS"],
  },
];

// Kept deliberately high-level: problem, ownership and outcome only.
// No internal architecture, infrastructure topology, business figures or
// customer data. Details are shared verbally on request.
export const PROFESSIONAL_PROJECTS: TProjectEntry[] = [
  {
    title: "Cross-Border Marketplace — Web Platform",
    org: "GENKIN",
    role: "Software Engineer",
    period: "Jun 2025 - Present",
    description: (
      <div className="space-y-2">
        <p>
          A consumer marketplace for buying and bidding on items from overseas
          retailers, covering the journey from discovery through to delivery and
          after-sales support.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Own the Next.js application architecture and shipped the core
            customer flows: purchasing, auctions, order management and support.
          </li>
          <li>
            Built the catalogue service that ingests and normalises product data
            from third-party suppliers, running on asynchronous background
            workers.
          </li>
          <li>
            Set up containerised CI/CD for zero-downtime releases, and
            introduced a caching layer that cut page load times noticeably for
            high-traffic listing pages.
          </li>
        </ul>
      </div>
    ),
    coverImg: ecommerceGenkinImg,
    liveLink: "https://ecommerce.genkin.asia",
    techStacks: ["Next.js", "Django", "AWS", "Docker", "Redis"],
  },
  {
    title: "Cross-Border Marketplace — Mobile App",
    org: "GENKIN",
    role: "Software Engineer",
    period: "Jun 2025 - Present",
    description: (
      <div className="space-y-2">
        <p>
          The same marketplace delivered as a native mobile experience, shipped
          to both the App Store and Google Play.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Owned the React Native app end to end, from architecture through to
            store release.
          </li>
          <li>
            Brought the platform&apos;s core journeys to mobile: purchasing,
            auctions, shipping requests and order tracking.
          </li>
          <li>
            Ran the full release process for both stores, covering the build
            pipeline, versioning and store review.
          </li>
        </ul>
      </div>
    ),
    coverImg: genkinMobileImg,
    appStoreLink: "https://apps.apple.com/vn/app/genkin/id6745806942",
    googlePlayLink:
      "https://play.google.com/store/apps/details?id=com.enso.buygenkin",
    techStacks: ["React Native", "iOS", "Android"],
  },
  {
    title: "Internal Operations Dashboard",
    org: "GENKIN",
    role: "Software Engineer",
    period: "Apr 2024 - Present",
    description: (
      <div className="space-y-2">
        <p>
          An internal tool that gives the operations team one place to manage
          orders, customers, inventory and revenue reporting.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Co-designed the information architecture and built the interfaces
            for order, customer and warehouse management.
          </li>
          <li>
            Developed the reporting APIs behind the revenue and finance views,
            backed by cached aggregate queries.
          </li>
          <li>
            Automated deployments and tuned query performance against real
            production usage patterns.
          </li>
        </ul>
      </div>
    ),
    coverNote:
      "Internal tool - screenshots not shared. Happy to walk through it in an interview.",
    liveLink: undefined,
    techStacks: ["Next.js", "Django", "AWS", "Docker", "Redis"],
  },
];

export const PROJECTS: TProjectEntry[] = [
  {
    title: "Stick Together",
    description: (
      <p>
        A real-time hangout room where friends can create a space, chat by text
        or voice, and listen to music together.
      </p>
    ),
    coverImg: stickTogetherImg,
    githubLink: "https://github.com/lucvuro/stick-together",
    demoLink: "https://stick-together-lemdg6sha-lucvuro.vercel.app/login",
    techStacks: ["Next.js", "Firebase", "PeerJS", "Material UI"],
  },
  {
    title: "NextJS Ecommerce App",
    description: (
      <p>
        A storefront built to practise the full purchase path: browsing
        products, managing a cart and checking out.
      </p>
    ),
    coverImg: ecommerProjectImg,
    githubLink: "https://github.com/lucvuro/ecommerce-nextjs-app",
    demoLink: "https://ecommerce-nextjs-app.vercel.app/",
    techStacks: ["Next.js", "Redux Toolkit", "Material UI"],
  },
  {
    title: "CCS Cards Database",
    description: (
      <p>
        A searchable database of Clow cards for Cardcaptor Sakura fans, with
        detail pages for every card.
      </p>
    ),
    coverImg: ccsImg,
    githubLink: "https://github.com/lucvuro/ccsakura-react",
    demoLink: "https://sakura-react.vercel.app/",
    techStacks: ["React", "Firebase", "Ant Design"],
  },
  {
    title: "My Portfolio (v1)",
    description: <p>The first iteration of this portfolio site.</p>,
    coverImg: porfolioImg,
    githubLink: "https://github.com/lucvuro/my-portfolio",
    demoLink: "https://my-portfolio-2ktckl3h9-lucvuro.vercel.app/",
    techStacks: ["Next.js", "Material UI"],
  },
];
