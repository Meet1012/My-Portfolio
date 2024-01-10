import React, { useContext, useState } from "react";
import Toggle from "./Toggle.jsx";
import { Link } from "react-scroll";
import ThemeContext from "../Context/ThemeContext.js";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);
  const [nav, setnav] = useState(false);
  console.log(nav);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Skills",
    },
  ];

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
        <div className="flex justify-between ">
          <ul
            className={`mt-2 gap-8 lg:mr-16 cursor-pointer hidden lg:flex ${
              darkMode ? "text-white" : ""
            }`}
          >
            {links.map(({ id, link }) => (
              <Link smooth={true} spy={true} to={link}>
                <li
                  key={id}
                  className={`${
                    darkMode ? "hover:text-teal-300" : "hover:text-orange-300"
                  }`}
                >
                  {link}
                </li>
              </Link>
            ))}
          </ul>
          <div
            onClick={() => setnav(!nav)}
            className={`cursor-pointer lg:hidden ${
              darkMode
                ? "text-white hover:text-teal-300"
                : "text-gray-300 hover:text-orange-300"
            } `}
          >
            <div className="mt-2">
              {nav ? (
                <IoIosClose size={30} />
              ) : (
                <HiOutlineMenuAlt1 size={30} />
              )}
            </div>
          </div>

          {nav && (
            <ul
              className={`flex flex-col font-bold absolute top-[50px] -ml-[15rem] h-100 w-64 border-black border z-10 rounded-lg   ${
                darkMode ? "text-white bg-black " : "text-black  bg-white "
              }`}
            >
              {links.map(({ id, link }) => (
                <Link smooth={true} spy={true} to={link}>
                  <li
                    key={id}
                    className={`px-4 cursor-pointer capitalize py-6 text-4xl ${
                      darkMode ? "hover:text-teal-300" : "hover:text-orange-300"
                    }`}
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
        {/* <Link smooth={true} spy={true} to="Contacts">
          <button
            className={`rounded-full p-[11px] text-[16px] w-[7rem] hidden lg:block
            ${
              darkMode
                ? "bg-gradient-to-r from-teal-200 to-teal-500 hover:from-white hover:to-teal-200 border-teal-300 border-[3px] shadow-lg shadow-teal-300"
                : "hover:from-white bg-gradient-to-r from-orange-300 to-orange-500 shadow-lg shadow-orange-300 hover:border-orange-500 hover:border-2"
            }`}
          >
            Contact Me !
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
