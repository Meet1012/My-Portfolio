import React, { useContext } from "react";
import ThumbsUp from "../img/thumbup.png";
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
import { useTypewriter, Cursor } from "react-simple-typewriter";
import My_Photo from "../img/my_photo.png";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const { darkMode } = useContext(ThemeContext);
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Web Designer",
      "Python Developer",
      "Database Developer",
    ],
    loop: 10,
  });
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
            Hi ! I AM
          </span>
          <span
            className={`${
              darkMode ? "text-teal-300 " : "text-orange-400"
            } font-bold text-5xl mb-2`}
          >
            {text}
            <Cursor />
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
          <a href="https://github.com/Meet1012">
            <ImGithub className="h-[5rem] w-[7rem]" />
          </a>
          <a href="https://www.linkedin.com/in/meet-patel-a323b3248/">
            <BsLinkedin className="h-[5rem] w-[7rem]" />
          </a>
          <a href="https://leetcode.com/Meet_10/">
            <SiLeetcode className="h-[5rem] w-[7rem]" />
          </a>
          <a href="https://www.hackerrank.com/meet20003">
            <LiaHackerrank className="h-[5rem] w-[7rem]" />
          </a>
        </div>
      </div>

      {/* Right Side*/}
      <div className="flex-[1] relative z-[1] mr-[-5%]">
        <img
          src={My_Photo}
          alt="My_Photo"
          className="absolute scale-[0.3] left-[-10%] mt-[-45%]"
        />

        <div
          className={`h-28 w-28 left-24 border-l-8 border-t-8 absolute ${
            darkMode ? "border-teal-400 " : "border-orange-400"
          }`}
        ></div>
        <div
          className={`h-28 w-28 border-b-8 border-r-8 left-64 top-56 absolute ${
            darkMode ? "border-teal-400 " : "border-orange-400"
          }`}
        ></div>
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
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: -50 }}
            transition={transition}
            className="ml-[68%]"
          >
            <Floatingdiv image={Crown} text1="Web" text2="Developer" />
          </motion.div>
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 100 }}
            transition={transition}
            className="mt-[45%]"
          >
            <Floatingdiv image={ThumbsUp} text1="Best" text2="Designer" />
          </motion.div>
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
