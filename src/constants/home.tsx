import {
  ccsImg,
  crmGenkinImg,
  ecommerceGenkinImg,
  ecommerProjectImg,
  haunhanImg,
  maidoImg,
  porfolioImg,
  stickTogetherImg,
} from "@/assets/images";

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

export const EXPERIENCES = {
  CHECKMATE: {
    title: "CHECKMATE",
    position: "Software Engineer",
    date: "Apr 2024 - Present",
  },
  GENKIN: {
    title: "GENKIN",
    position: "Software Engineer",
    date: "Apr 2023 - Present",
  },
  GEEK_UP: {
    title: "GEEK Up",
    position: "Internship - Product Frontend",
    date: "Aug 2022 - Nov 2022",
  },
};

export const SKILLS = [
  {
    title: "Node.js",
    important: true,
  },
  {
    title: "Python",
    important: true,
  },
  {
    title: "React",
    important: false,
  },
  {
    title: "NextJS",
    important: false,
  },
  {
    title: "Typescript",
    important: false,
  },
  {
    title: "Django",
    important: false,
  },
  {
    title: "Postgres",
    important: false,
  },
  {
    title: "Docker",
    important: false,
  },
  {
    title: "AWS Cloud",
    important: false,
  },
];

export const HOBBIES = [
  "Playing video games for relaxation 🎮",
  "Listening to music 🎵",
  "Going to the beach, enjoying the breeze & smoking 🌊",
  "Exploring and experimenting with new technologies 💡",
];
export const CLIENT_PROJECTS = [
  {
    title: "Maido Agency – Creative Agency Website",
    description: (
      <div className="space-y-2">
        <p>
          A corporate website for a creative agency, built from Figma designs
          with a focus on modern UI and multilingual support.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Converted high-fidelity Figma designs into a responsive Next.js +
            TailwindCSS frontend.
          </li>
          <li>
            Integrated Google Form API to handle client contact submissions
            seamlessly.
          </li>
          <li>
            Implemented multi-language support (Vietnamese, English, Japanese).
          </li>
          <li>
            Optimized for responsiveness across desktop, tablet, and mobile
            devices.
          </li>
        </ul>
      </div>
    ),
    coverImg: maidoImg,
    liveLink: "https://maido.agency",
    techStacks: ["Next.js", "TailwindCSS", "Google Form API", "i18n"],
  },
  {
    title: "HauNhanWood – Furniture Business Website",
    description: (
      <div className="space-y-2">
        <p>
          A business website for a furniture company, customized from WordPress
          to deliver a branded and multilingual experience.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Translated Figma designs into a custom WordPress theme
            implementation.
          </li>
          <li>
            Customized WordPress theme and plugins to support contact form
            submissions.
          </li>
          <li>
            Configured and tailored multilingual plugin (Vietnamese, English).
          </li>
          <li>
            Ensured cross-device responsiveness and consistent UI across major
            browsers.
          </li>
        </ul>
      </div>
    ),
    coverImg: haunhanImg,
    liveLink: "https://haunhanwood.com",
    techStacks: ["WordPress", "PHP", "HTML", "CSS", "Multilingual Plugin"],
  },
];

export const PROFESSIONAL_PROJECTS = [
  {
    title: "Ecommerce Genkin – Cross-Border Shopping Platform",
    description: (
      <div className="space-y-2">
        <p>
          An end‑to‑end ecommerce platform for cross‑border purchasing and
          auctions.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Co-designed UX/UI with the team using the Shadcn UI framework.
          </li>
          <li>
            Implemented CI/CD (GitLab CI) for zero‑downtime deploys to AWS
            (EC2/LightSail) with Docker.
          </li>
          <li>
            Extended the legacy database design and migrated critical tables
            safely.
          </li>
          <li>
            Built REST APIs in Django for product ingestion from JP marketplaces
            (crawl & normalize).
          </li>
          <li>
            Owned Next.js app architecture (routing, folder structure, API
            integration).
          </li>
          <li>
            Shipped core flows: Purchasing, Auctions, Order Management,
            Complaints & Support.
          </li>
          <li>
            Set up S3 for media storage and Lambda workers for background jobs
            (e.g., crawling, webhooks).
          </li>
          <li>
            Implemented caching and job queues with Redis to improve dashboard
            responsiveness.
          </li>
          <li>
            Monitored and optimized performance based on customer feedback and
            production metrics.
          </li>
        </ul>
      </div>
    ),
    coverImg: ecommerceGenkinImg, // replace with your actual import
    liveLink: "https://ecommerce.genkin.asia",
    techStacks: [
      "Next.js",
      "Django",
      "AWS (S3, Lambda, EC2, LightSail)",
      "Docker",
      "Redis",
      "Crawling/Selenium",
      "Shadcn UI",
      "GitLab CI/CD",
    ],
  },
  {
    title: "Genkin CRM – Internal Sales & Customer Management System",
    description: (
      <div className="space-y-2">
        <p>
          A lightweight internal CRM to manage revenue, finance, orders,
          customers, and inventory.
        </p>
        <ul className="ml-4 list-disc space-y-1">
          <li>
            Collaborated on information architecture and UI using Chakra UI v2.
          </li>
          <li>
            Supported CI/CD setup and automated deployments to AWS with
            Dockerized services.
          </li>
          <li>
            Co-developed Django APIs for analytics (revenue & finance), orders,
            customers, and warehouse.
          </li>
          <li>
            Integrated the Next.js front end with backend APIs; added auth,
            routing, and data tables.
          </li>
          <li>
            Delivered comprehensive QA and UAT; refined features with internal
            stakeholder feedback.
          </li>
          <li>
            Implemented caching and job queues with Redis to improve dashboard
            responsiveness.
          </li>
          <li>
            Monitored and optimized performance based on customer feedback and
            production metrics.
          </li>
        </ul>
      </div>
    ),
    coverImg: crmGenkinImg, // replace with your actual import
    liveLink: undefined, // internal app; set a URL if available
    techStacks: [
      "Next.js",
      "Django",
      "AWS (S3, Lambda, EC2, LightSail)",
      "Docker",
      "Redis",
      "Chakra UI v2",
      "GitLab CI/CD",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Stick Together",
    description: (
      <div className="space-y-2">
        <p>A web application where users can:</p>
        <ul className="ml-4 list-disc space-y-1">
          <li>Create rooms and invite friends</li>
          <li>Send messages and chat voice in real-time</li>
          <li>Listen to music together</li>
        </ul>
      </div>
    ),
    coverImg: stickTogetherImg,
    githubLink: "https://github.com/lucvuro/stick-together",
    demoLink: "https://stick-together-lemdg6sha-lucvuro.vercel.app/login",
    techStacks: ["NextJS", "MaterialUI", "PeerJS", "Firebase"],
  },
  {
    title: "NextJS Ecommerce App",
    description: (
      <div className="space-y-2">
        <p>An ecommerce web application where users can:</p>
        <ul className="ml-4 list-disc space-y-1">
          <li>Browse and view products</li>
          <li>Add items to shopping cart</li>
          <li>Complete checkout process</li>
        </ul>
      </div>
    ),
    coverImg: ecommerProjectImg,
    githubLink: "https://github.com/lucvuro/ecommerce-nextjs-app",
    demoLink: "https://ecommerce-nextjs-app.vercel.app/",
    techStacks: ["NextJS", "Material-UI", "Redux Toolkit"],
  },
  {
    title: "My Portfolio",
    description: (
      <div className="space-y-2">
        <p>A personal portfolio website showcasing:</p>
        <ul className="ml-4 list-disc space-y-1">
          <li>Personal information and skills</li>
          <li>Project showcase</li>
          <li>Contact information</li>
        </ul>
      </div>
    ),
    coverImg: porfolioImg,
    githubLink: "https://github.com/lucvuro/my-portfolio",
    demoLink: "https://my-portfolio-2ktckl3h9-lucvuro.vercel.app/",
    techStacks: ["NextJS", "Material-UI"],
  },
  {
    title: "CCS Cards Database",
    description: (
      <div className="space-y-2">
        <p>A web application for Cardcaptor Sakura fans to:</p>
        <ul className="ml-4 list-disc space-y-1">
          <li>Search and find Clow cards</li>
          <li>View detailed card information</li>
          <li>Browse card database</li>
        </ul>
      </div>
    ),
    coverImg: ccsImg,
    githubLink: "https://github.com/lucvuro/ccsakura-react",
    demoLink: "https://sakura-react.vercel.app/",
    techStacks: ["ReactJS", "AntDesign", "Firebase"],
  },
];
