import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import discordLogo from "@/public/discord-logo-png-transparent.png";
import pokemon from "@/public/pokemon.jpg";
import melody from "@/public/melody.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Systems Integration Intern",
    location: "",
    img: "https://1000logos.net/wp-content/uploads/2020/04/Lockheed-Martin-Logo.png", 
    description:
      "Data Center / Networking",
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2022",
  },
  {
    title: "Software Engineer Intern",
    location: "",
    img:"https://download.logo.wine/logo/JPMorgan_Chase/JPMorgan_Chase-Logo.wine.png",
    description:
      "Full Stack Development",
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2023",
  },
  {
    title: "Student",
    location: "",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/UT_Arlington_Mavericks_logo.svg/1200px-UT_Arlington_Mavericks_logo.svg.png", 
    description:
      "Final Year",
    icon: React.createElement(LuGraduationCap),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "Discord Clone",
    description:
      "Full stack discord clone with server, channel, video, audio, and messaging features",
    tags: ["React", "Next.js", "Tailwind", "MySQL", "Prisma", "Socket.io"],
    imageUrl: discordLogo,
  },
  {
    title: "Pokedex Pro",
    description:
      "Developed a web-based Pokemon index using React. Utilized PokeAPI, an open-source RESTful API, to retrieve and display Pokemon data.",
    tags: ["Javascript","React", "RESTful APIs", "Material UI", "Figma"],
    imageUrl: pokemon,
  },
  {
    title: "MelodyMatch",
    description:
      "Developed an application in Java to recommend a playlist of songs based off of user preferences. Application allowed for users to play a snippet of the song before deciding to like or dislike it.",
    tags: ["Java", "JavaFX", "Object Oriented Proogramming"],
    imageUrl: melody,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Junit",
  "RESTful APIs",
  "Express",
  "Postman",
  "Docker",
  "Python",
  "C", 
  "SQL",
  "Networking",
] as const;
