import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ThemeContext from "../Context/ThemeContext";

const Contacts = () => {
  const form = useRef();
  const emptyName = useRef("");
  const emptyEmail = useRef("");
  const emptyMessage = useRef("");
  
  const [done, setdone] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_af5r98o",
        "template_lyofcng",
        form.current,
        "vNI9CPtpPN895Tx1h"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    emptyName.current.value = "";
    emptyEmail.current.value = "";
    emptyMessage.current.value = "";
  };

  return (
    <div
      className="lg:mt-15 lg:flex flex-col p-[0,3rem,0,3rem] h-[90vh] mt-[15rem] pt-[3rem] ml-[5rem]"
      id="Contacts"
    >
      {/* Left View */}
      <div>
        <div className="flex flex-col ">
          <span
            className={`${
              darkMode ? "text-gray-300" : "text-gray-700"
            } font-bold text-5xl mb-2`}
          >
            Get In Touch
          </span>
          <span
            className={`${
              darkMode ? "text-teal-300 " : "text-orange-400"
            } font-bold text-5xl mb-2`}
          >
            Contact Me
          </span>
          <div
            className="w-[22rem] h-[12rem] absolute bg-[#abf1ff94] rounded-lg blur-2xl 
        z-[-1]"
          ></div>
        </div>
      </div>

      {/* Right View */}
      <div className="flex justify-center flex-1 relative mt-14 lg:mt-0">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-[2rem] items-center"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            ref={emptyName}
            className={`${darkMode ? "dark_mode_CSS" : "light_mode_CSS"}`}
          />
          <input
            type="text"
            name="user_email"
            placeholder="Email"
            ref={emptyEmail}
            className={`${darkMode ? "dark_mode_CSS" : "light_mode_CSS"}`}
          />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            ref={emptyMessage}
            className={`${
              darkMode ? "dark_mode_CSS" : "light_mode_CSS"
            } !h-[8rem]`}
          />
          <input
            type="submit"
            value="Send"
            className={`rounded-full p-[11px] text-[16px] w-[10rem] mt-8
          ${
            darkMode
              ? "bg-gradient-to-r from-teal-200 to-teal-500 hover:from-white hover:to-teal-200 border-teal-300 border-[3px] shadow-lg shadow-teal-300"
              : "hover:from-white bg-gradient-to-r from-orange-300 to-orange-500 shadow-lg shadow-orange-300 hover:border-orange-500 hover:border-2"
          }`}
          />
          <span className="">{done && "Thanks for Contacting Me"}</span>
          <div
            className="w-[22rem] h-[12rem] absolute bg-[#edd0ff] rounded-lg blur-2xl 
        z-[-1]"
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
