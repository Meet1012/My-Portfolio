import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import HTML from "../img/HTML.png";
import CSS from "../img/CSS.png";
import Python from "../img/Python.png";
import Javascript from "../img/Javascript.png";
import ReactLogo from "../img/React.png";
import MongoDB from "../img/Mongodb.png";
import FastAPI from "../img/FastAPI.png";
import NodeJS from "../img/Nodejs.png";
import Tailwind from "../img/Tailwind.png";
import SQL from "../img/SQL.png";

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);
  const techs = [
    {
      id: 1,
      src: Python,
      title: "Python",
      style: "shadow-yellow-800",
    },
    {
      id: 2,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: ReactLogo,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: NodeJS,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: SQL,
      title: "My SQL",
      style: "shadow-pink-400",
    },
    {
      id: 9,
      src: FastAPI,
      title: "Fast API",
      style: "shadow-blue-300",
    },
    {
      id: 10,
      src: MongoDB,
      title: "Mongo DB",
      style: "shadow-[#D2691E]",
    },
  ];
  return (
    <div className="h-[110vh] mt-52" id="Skills">
      <div className=" flex flex-col items-center justify-center">
        <div
          className={`w-[22rem] h-[14rem] absolute rounded-lg blur-2xl 
          z-[-1] mt-[-60%] ${darkMode ? "bg-black" : "bg-[#c1f5ff]"}`}
        ></div>
        <div
          className={`w-[22rem] h-[14rem] absolute rounded-lg blur-2xl 
          z-[-1] ml-[-40%] ${darkMode ? "bg-black" : "bg-[#edd0ff]"}`}
        ></div>
        <div
          className={`w-[22rem] h-[14rem] absolute rounded-lg blur-2xl 
          z-[-1] mt-[30%] ml-[40%] ${darkMode ? "bg-black" : "bg-[#c1f5ff]"}`}
        ></div>
        <span
          className={`${
            darkMode ? "text-gray-300" : "text-gray-700"
          } font-bold text-5xl`}
        >
          My Skills
        </span>
        <br />
        <span className="font-medium text-lg">
          These are the Technologies I have Worked with
        </span>

        <div className="w-full grid grid-cols-3 gap-8 text-center py-16 px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
