import React from "react";
import HeartEmoji from "../img/heartemoji.png";
import GlassesEmoji from "../img/glasses.png";
import HumbleEmoji from "../img/humble.png";
import Card from "./Card";
import Resume from "./Resume.txt";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };

  return (
    <div className="p-[0,3rem,0,3rem] flex h-[32rem] pt-4 mt-[9rem] mb-[13rem]" id="Services">
      {/* Left Side */}
      <div className="flex flex-col relative ">
        <span className="text-4xl font-bold text-black">My Awesome</span>
        <span className="text-4xl text-orange-400 font-bold mt-1">
          Services
        </span>
        <span className="text-lg text-gray-500 mt-3 mb-2">
          I offer top-tier frontend services, delivering excellence in web
          <br />
          development to enhance your digital presence.
        </span>
        <a href={Resume} download={true}>
          <button className="h-10 w-44 rounded-full p-[11px] text-[16px] hover:from-white bg-gradient-to-r from-orange-300 to-orange-500 shadow-lg shadow-orange-300 hover:border-orange-500 hover:border-2 ">
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
          initial={{left:"8rem"}}
          whileInView={{left:"0%"}}
          transition={transition}
        className="absolute ml-[6rem]">
          <Card
            image={HeartEmoji}
            heading="Design"
            description="Figma, Photoshop, Adobe , Sketch, Adobe xd"
          />
        </motion.div>
        <motion.div
        initial={{left:"-8rem"}}
        whileInView={{left:"0%"}}
        transition={transition}
        className="absolute mt-[16rem] ml-[-14rem]">
          <Card
            image={GlassesEmoji}
            heading="Developer"
            description="HTML, CSS, Javascript, React, Express, MongoDB"
          />
        </motion.div>
        <motion.div
        initial={{left:"8rem"}}
        whileInView={{left:"0rem"}}
        transition={transition}
        className="absolute ml-[4rem] mt-[20rem]">
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
