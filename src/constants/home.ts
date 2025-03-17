import {
  ccsImg,
  ecommerProjectImg,
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
    position: "Frontend Developer",
    date: "Apr 2023 - Apr 2024 ",
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
  "Playing game.",
  "Listening to music.",
  "Research new technologies",
];

export const PROJECTS = [
  {
    title: "Stick Together",
    description:
      " A web application in which users can create a room and invite friends to the room. Then, can send messages, chat voice, and listen to music in real-time. The web application built by NextJS, MaterialUI, PeerJS, and Firebase.",
    coverImg: stickTogetherImg,
    githubLink: "https://github.com/lucvuro/stick-together",
    demoLink: "https://stick-together-lemdg6sha-lucvuro.vercel.app/login",
  },
  {
    title: "NextJS Ecommerce App",
    description:
      "A web application in which user view and add items to user's carts., they can checkout it. I built the project for training my skills and learning more about technologies. The web application was built by NextJS, Material-UI, and Redux Toolkits.",
    coverImg: ecommerProjectImg,
    githubLink: "https://github.com/lucvuro/ecommerce-nextjs-app",
    demoLink: "https://ecommerce-nextjs-app.vercel.app/",
  },
  {
    title: "My Portfolio",
    description:
      "A web application that shows info about me. Correctly, this is a portfolio website. The website was built by NextJS, Material-UI.",
    coverImg: porfolioImg,
    githubLink: "https://github.com/lucvuro/my-portfolio",
    demoLink: "https://my-portfolio-2ktckl3h9-lucvuro.vercel.app/",
  },
  {
    title: "CCS Cards Database",
    description:
      "A web application that users can find and get information about the clow cards. The web application was built by ReactJS, AntDesign, and Firebase",
    coverImg: ccsImg,
    githubLink: "https://github.com/lucvuro/ccsakura-react",
    demoLink: "https://sakura-react.vercel.app/",
  },
];
