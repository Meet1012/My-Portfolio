import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Floatingdiv = ({ image, text1, text2 }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`h-14 w-36 relative justify-around flex  rounded-2xl shadow-xl ${darkMode ? "bg-gray-800 text-white":"bg-white text-black"}`}
    >
      <img src={image} alt="" className="scale-[0.6] mr-5" />
      <span className="mr-2 mt-2">
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default Floatingdiv;
