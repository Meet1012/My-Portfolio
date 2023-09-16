import React, { useContext } from "react";
import { LuSunMedium } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import ThemeContext from "../Context/ThemeContext";

const Toggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      className="flex flex-row justify-between border-[3px] border-orange-400 relative rounded-xl cursor-pointer h-[1.5rem] items-center"
      onClick={() => setDarkMode(!darkMode)}
    >
      <LuMoon className="h-[1rem] w-[1rem] text-orange-400 ml-1" />
      <LuSunMedium className="h-[1rem] w-[1rem] text-orange-400 ml-[0.25rem] mr-1" />
      <div
        className={`rounded-full bg-orange-400 absolute h-[1rem] w-[1rem] duration-500
      ${darkMode ? "ml-6" : "ml-1"}`}
      ></div>
    </div>
  );
};

export default Toggle;
