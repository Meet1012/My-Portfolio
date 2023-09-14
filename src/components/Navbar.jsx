import React from "react";

const Navbar = () => {
  return (
    <div className="h-10 flex justify-between">
      <div className="flex gap-8 items-center">
        <div className="font-bold text-2xl">Meet</div>
        <span>Toggle</span>
      </div>
      <div className="flex text-center justify-between font-normal">
        <div className="flex">
          <ul className="mt-2 flex gap-8 mr-16 cursor-pointer ">
            <li className="hover:text-orange-400">Home</li>
            <li className="hover:text-orange-400">Services</li>
            {/* <li className="hover:text-orange-400">Experience</li> */}
            <li className="hover:text-orange-400">Portfolio</li>
            <li className="hover:text-orange-400">Testimonials</li>
          </ul>
        </div>
        <button className="rounded-full p-[11px] text-[16px] hover:from-white bg-gradient-to-r from-orange-300 to-orange-500 shadow-lg shadow-orange-300 hover:border-orange-500 hover:border-2">
          Contact Me !
        </button>
      </div>
    </div>
  );
};

export default Navbar;
