import React, { useContext } from "react";
import Toggle from "./Toggle.jsx";
import { Link } from "react-scroll";
import ThemeContext from "../Context/ThemeContext.js";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="h-10 flex justify-between">
      <div className="flex gap-8 items-center">
        <div
          className={`${
            darkMode ? "text-white" : "text-gray-700"
          } font-bold text-2xl`}
        >
          Meet Patel
        </div>
        <Toggle />
      </div>
      <div className="flex text-center justify-between font-normal">
        <div className="flex">
          <ul
            className={`mt-2 flex gap-8 mr-16 cursor-pointer ${
              darkMode ? "text-white" : ""
            }`}
          >
            <Link
              smooth={true}
              spy={true}
              to="Navbar"
              activeClass="activeClass"
            >
              <li
                className={`${
                  darkMode ? "hover:text-teal-300" : "hover:text-orange-300"
                }`}
              >
                Home
              </li>
            </Link>
            <Link smooth={true} spy={true} to="Services">
              <li
                className={`${
                  darkMode ? "hover:text-teal-300" : "hover:text-orange-300"
                }`}
              >
                Services
              </li>
            </Link>
            {/* <li className="hover:text-orange-400">Experience</li> */}
            <Link smooth={true} spy={true} to="Portfolio">
              <li
                className={`${
                  darkMode ? "hover:text-teal-300" : "hover:text-orange-300"
                }`}
              >
                Portfolio
              </li>
            </Link>
            <Link smooth={true} spy={true} to="Skills">
              <li
                className={`${
                  darkMode ? "hover:text-teal-300" : "hover:text-orange-300"
                }`}
              >
                Skills
              </li>
            </Link>
          </ul>
        </div>
        <Link smooth={true} spy={true} to="Contacts">
          <button
            className={`rounded-full p-[11px] text-[16px] w-[7rem] 
            ${
              darkMode
                ? "bg-gradient-to-r from-teal-200 to-teal-500 hover:from-white hover:to-teal-200 border-teal-300 border-[3px] shadow-lg shadow-teal-300"
                : "hover:from-white bg-gradient-to-r from-orange-300 to-orange-500 shadow-lg shadow-orange-300 hover:border-orange-500 hover:border-2"
            }`}
          >
            Contact Me !
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
