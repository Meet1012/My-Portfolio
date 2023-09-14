import React from "react";
import Github from "../img/github.png";
import Linkedin from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import MyPhoto from "../img/boy.png";
import ThmubsUp from "../img/thumbup.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import Crown from "../img/crown.png";
import GlassesEmoji from "../img/glassesimoji.png";
import Floatingdiv from "./FloatingDiv";

const Intro = () => {
  return (
    <div className="flex h-[77vh] mt-[6rem]">
      {/* Left */}
      <div className="relative flex-1 flex-col gap-[2rem]">
        <div className="flex flex-col">
          <span className="text-black font-bold text-5xl mb-2">Hy ! I AM</span>
          <span className="text-orange-400 font-bold text-5xl mb-2">
            Meet Patel
          </span>
          <span className="text-gray-500 text-base font-thin">
            Frontend Developer with high level of experience in web designing
            <br />
            and development, producting the Quality work
          </span>
        </div>
        <button className="mt-1 h-[2rem] w-[6rem] rounded-full p-[10px] text-[16px] hover:from-white bg-gradient-to-r from-orange-300 to-orange-500 shadow-lg shadow-orange-300 hover:border-orange-500 hover:border-2">
          Hire Me!
        </button>
        <div className="mt-[3rem] flex flex-row gap-20 h-[4rem] w-[6rem] cursor-pointer scale-50">
          <img src={Github} alt="Github" />
          <img src={Linkedin} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
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
          <img
            src={GlassesEmoji}
            className="absolute scale-50 mt-[-10%] ml-[-24%] rounded-lg"
          />
        </div>
        {/* Blur Effect 1*/}
        <div
          className="w-[22rem] h-[14rem] absolute bg-[#edd0ff] rounded-lg blur-2xl 
        z-[-9] ml-[50%] mt-[-10%]"
        ></div>
        {/* Blur Effect 1 */}
        <div className="ml-[68%]">
          <Floatingdiv image={Crown} text1="Web" text2="Developer" />
        </div>
        <div className="mt-[55%]">
          <Floatingdiv image={ThmubsUp} text1="Best" text2="Designer" />
        </div>
        {/* Blur Effect 2 */}
        <div
          className="w-[22rem] h-[14rem] absolute bg-[#c1f5ff] rounded-xl blur-2xl 
          z-[-9] ml-[-10%] mt-[-30%]"
        ></div>
        {/* Blur Effect 2 */}
      </div>
    </div>
  );
};

export default Intro;
