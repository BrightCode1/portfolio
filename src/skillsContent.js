import { BiCodeCurly } from "react-icons/bi";
import { IoServerOutline } from "react-icons/io5";
import { BsVectorPen } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

export const mySkills = [
  {
    id: 0,
    title: "Frontent Developer",
    subtitle: "More than 4 years",
    icon: BiCodeCurly,
    languages: [
      {
        name: "HTML",
        lowerCase: "html",
        level: "90%",
        number: "90",
      },
      {
        name: "CSS",
        lowerCase: "css",
        level: "80%",
        number: "80",
      },
      {
        name: "JavaScript",
        lowerCase: "js",
        level: "70%",
        number: "70",
      },
      {
        name: "React.js",
        lowerCase: "react",
        level: "70%",
        number: "70",
      },
    ],
  },
  {
    id: 1,
    title: "Backend Developer",
    subtitle: "More than 4 years",
    icon: IoServerOutline,
    languages: [
      {
        name: "PHP",
        lowerCase: "php",
        level: "80%",
        number: "80",
      },
      {
        name: "Node.js (Express.js)",
        lowerCase: "node",
        level: "80%",
        number: "80",
      },
      {
        name: "Firebase",
        lowerCase: "firebase",
        level: "70%",
        number: "70",
      },
      {
        name: "MySql",
        lowerCase: "mysql",
        level: "80%",
        number: "80",
      },
      {
        name: "MongoDB",
        lowerCase: "mongodb",
        level: "70%",
        number: "70",
      },
    ],
  },
  {
    id: 2,
    title: "Designer",
    subtitle: "More than 3 years",
    icon: BsVectorPen,
    languages: [
      {
        name: "Figma",
        lowerCase: "figma",
        level: "80%",
        number: "80",
      },
      {
        name: "illustrator",
        lowerCase: "illustrator",
        level: "60%",
        number: "60",
      },
    ],
  },
  {
    id: 3,
    title: "Others",
    subtitle: "More than 3 years",
    icon: GiSkills,
    languages: [
      {
        name: "Rest Api",
        lowerCase: "rest",
        level: "80%",
        number: "80",
      },
      {
        name: "Blockchain",
        lowerCase: "blockchain",
        level: "40%",
        number: "40",
      },
    ],
  },
];
