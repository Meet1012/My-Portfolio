import React from "react";
import Toggle from "./Toggle.jsx";
import { Link } from "react-scroll";
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";
import Contacts from "./Contacts.jsx";

const Navbar = () => {
  return (
    <div className="h-10 flex justify-between">
      <div className="flex gap-8 items-center">
        <div className="font-bold text-2xl">Meet</div>
        <Toggle />
      </div>
      <div className="flex text-center justify-between font-normal">
        <div className="flex">
          <ul className="mt-2 flex gap-8 mr-16 cursor-pointer ">
            <Link
              smooth={true}
              spy={true}
              to='Navbar'
              activeClass="activeClass"
            >
              <li className="hover:text-orange-400">Home</li>
            </Link>
            <Link
              smooth={true}
              spy={true}
              to='Services'
              activeClass="activeClass"
            >
              <li className="hover:text-orange-400">Services</li>
            </Link>
            {/* <li className="hover:text-orange-400">Experience</li> */}
            <Link
              smooth={true}
              spy={true}
              to='Portfolio'
              activeClass="activeClass"
            >
              <li className="hover:text-orange-400">Portfolio</li>
            </Link>
            <Link
              smooth={true}
              spy={true}
              to={Navbar}
              activeClass="activeClass"
            >
              <li className="hover:text-orange-400">Skills</li>
            </Link>
          </ul>
        </div>
        <Link smooth={true} spy={true} to='Contacts' activeClass="activeClass">
          <button className="rounded-full p-[11px] text-[16px] hover:from-white bg-gradient-to-r from-orange-300 to-orange-500 shadow-lg shadow-orange-300 hover:border-orange-500 hover:border-2">
            Contact Me !
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
