import React, { useContext } from "react";
import MyPhoto from "../img/boy.png";
import ThumbsUp from "../img/thumbup.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import Crown from "../img/crown.png";
import GlassesEmoji from "../img/glassesimoji.png";
import Floatingdiv from "./FloatingDiv";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContext";
import { Link } from "react-scroll";
import { ImGithub } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="flex h-[77vh] mt-[6rem]">
      {/* Left */}
      <div className="relative flex-1 flex-col gap-[2rem]">
        <div className="flex flex-col">
          <span
            className={`${
              darkMode ? "text-gray-300" : "text-gray-700"
            } font-bold text-5xl mb-2`}
          >
            Hy ! I AM
          </span>
          <span
            className={`${
              darkMode ? "text-teal-300 " : "text-orange-400"
            } font-bold text-5xl mb-2`}
          >
            Web Developer
          </span>
          <span className="text-gray-500 text-base font-thin">
            Frontend Developer with high level of experience in web designing
            <br />
            and development, producting the Quality work
          </span>
        </div>
        <Link spy={true} smooth={true} to="Contacts">
          <button
            className={`rounded-full p-[11px] text-[16px] w-[7rem] mt-8
          ${
            darkMode
              ? "bg-gradient-to-r from-teal-200 to-teal-500 hover:from-white hover:to-teal-200 border-teal-300 border-[3px] shadow-lg shadow-teal-300"
              : "hover:from-white bg-gradient-to-r from-orange-300 to-orange-500 shadow-lg shadow-orange-300 hover:border-orange-500 hover:border-2"
          }`}
          >
            Hire Me!
          </button>
        </Link>
        <div
          className={`${
            darkMode ? "text-teal-300" : "text-orange-400"
          } mt-[3rem] flex flex-row gap-20 cursor-pointer scale-50 ml-[-12rem] `}
        >
          <ImGithub className="h-[5rem] w-[7rem]" />
          <BsLinkedin className="h-[5rem] w-[7rem]" />
          <SiLeetcode className="h-[5rem] w-[7rem]" />
          <LiaHackerrank className="h-[5rem] w-[7rem]" />
        </div>
      </div>
      {/* Right */}
      <div className="flex-[1] relative z-[1] mr-[-5%]">
        <img
          src={Vector1}
          alt="Vector1"
          className="absolute scale-[0.95] left-[-8%] top-[-9%]"
        />
        <img
          src={Vector2}
          alt="Vector2"
          className="absolute top-[-2rem] scale-[0.93] left-[-0.1rem]"
        />
        <img
          src={MyPhoto}
          alt="My_Photo"
          className="absolute scale-[1.4] left-[28%]"
        />
        <div>
          <motion.img
            initial={{ left: "-25%" }}
            whileInView={{ left: "0%" }}
            transition={transition}
            src={GlassesEmoji}
            className="absolute scale-50 mt-[-10%] ml-[-24%] rounded-lg"
            alt="Not Found"
          />
          {/* Blur Effect 1*/}
          <div
            className={`w-[22rem] h-[14rem] absolute rounded-lg blur-2xl 
          z-[-1] ml-[50%] mt-[-10%] ${darkMode ? "bg-black" : "bg-[#edd0ff]"}`}
          ></div>
          {/* Blur Effect 1 */}
          <div className="ml-[68%]">
            <Floatingdiv image={Crown} text1="Web" text2="Developer" />
          </div>
          <div className="mt-[45%]">
            <Floatingdiv image={ThumbsUp} text1="Best" text2="Designer" />
          </div>
        </div>
        {/* Blur Effect 2 */}
        <div
          className={`w-[22rem] h-[14rem] absolute  rounded-xl blur-2xl 
          z-[-1] ml-[-10%] mt-[-30%] ${darkMode ? "bg-black" : "bg-[#c1f5ff]"}`}
        ></div>
        {/* Blur Effect 2 */}
      </div>
    </div>
  );
};

export default Intro;
