import React, { useContext } from "react";
import HeartEmoji from "../img/heartemoji.png";
import GlassesEmoji from "../img/glasses.png";
import HumbleEmoji from "../img/humble.png";
import Card from "./Card";
import Resume from "./Resume.txt";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContext";

const Services = () => {
  const transition = { duration: 1, type: "spring" };
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className="p-[0,3rem,0,3rem] flex h-[32rem] pt-4 mt-[9rem] mb-[13rem]"
      id="Services"
    >
      {/* Left Side */}
      <div className="flex flex-col relative ">
        <span
          className={`${
            darkMode ? "text-gray-300" : "text-gray-700"
          } font-bold text-5xl mb-2`}
        >
          My Awesome
        </span>
        <span
          className={`${
            darkMode ? "text-teal-300 " : "text-orange-400"
          } font-bold text-5xl mb-2`}
        >
          Services
        </span>
        <span className="text-lg text-gray-500 mt-3 mb-2">
          I offer top-tier frontend services, delivering excellence in web
          <br />
          development to enhance your digital presence.
        </span>
        <a href={Resume} download={true}>
          <button
            className={`rounded-full p-[11px] text-[16px] w-[7rem] mt-8 text-gray-700
          ${
            darkMode
              ? "bg-gradient-to-r from-teal-200 to-teal-500 hover:from-white hover:to-teal-200 border-teal-300 border-[3px] shadow-lg shadow-teal-300"
              : "hover:from-white bg-gradient-to-r from-orange-300 to-orange-500 shadow-lg shadow-orange-300 hover:border-orange-500 hover:border-2"
          }`}
          >
            Download Resume
          </button>
        </a>
        {/* Blur Section */}
        <div
          className="w-[22rem] h-[14rem] absolute bg-[#c1f5ff] rounded-xl blur-2xl 
          z-[-5] ml-64"
        ></div>
        <div
          className="w-[22rem] h-[14rem] absolute bg-[#c1f5ff] rounded-xl blur-2xl 
          z-[-9] mt-[20rem] ml-[-10rem]"
        ></div>
        {/* Blur Section */}
      </div>
      {/* Left Side */}

      {/* Right Side */}
      <div className="relative ml-[12rem]">
        <motion.div
          initial={{ left: "8rem" }}
          whileInView={{ left: "0%" }}
          transition={transition}
          className="absolute ml-[6rem]"
        >
          <Card
            image={HeartEmoji}
            heading="Design"
            description="Figma, Photoshop, Adobe , Sketch, Adobe xd"
          />
        </motion.div>
        <motion.div
          initial={{ left: "-8rem" }}
          whileInView={{ left: "0%" }}
          transition={transition}
          className="absolute mt-[16rem] ml-[-14rem]"
        >
          <Card
            image={GlassesEmoji}
            heading="Developer"
            description="HTML, CSS, Javascript, React, Express, MongoDB"
          />
        </motion.div>
        <motion.div
          initial={{ left: "8rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="absolute ml-[4rem] mt-[20rem]"
        >
          <Card
            image={HumbleEmoji}
            heading="UI/UX"
            description="Adobe XD, Sketch, Figma, InVision, Balsamiq, and Axure RP"
          />
        </motion.div>
      </div>
      {/* Blur Section */}
      <div
        className="w-[22rem] h-[14rem] absolute bg-[#edd0ff] rounded-lg blur-2xl 
        z-[-1] ml-[50%] mt-[-10%]"
      ></div>
      <div
        className="w-[26rem] h-[20rem] absolute bg-[#edd0ff] rounded-lg blur-2xl 
        z-[-1] ml-[60%] mt-[20rem]"
      ></div>
      {/* Blur Section */}
      {/* Right Side */}
    </div>
  );
};

export default Services;
