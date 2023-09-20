import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Card = ({ image, heading, description }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`h-[16rem] w-[15rem] absolute flex flex-col gap-[1rem] items-center text-center  border-[7px] rounded-2xl border-solid  shadow-lg  p-[0,26px,2rem,26px] ${darkMode ? "border-teal-300 shadow-teal-300":"border-orange-300 shadow-orange-300"}`}
    >
      <img src={image} alt="" className="h-[6rem] w-[4rem]" />
      <span className={`text-lg ${darkMode ? "text-gray-100":"text-gray-700"}`}>{heading}</span>
      <span className="text-base text-gray-500">{description}</span>
      <button className="w-24 shadow-md text-blue-600 mb-6 rounded-lg ">
        Learn More
      </button>
    </div>
  );
};

export default Card;
