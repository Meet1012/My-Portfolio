import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const [done,setdone] = useState(false)

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
          setdone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex p-[0,3rem,0,3rem] h-[90vh] mt-[10rem] pt-[3rem]">
      {/* Left View */}
      <div>
        <div className="flex flex-col">
          <span className="text-5xl font-bold text-black">Get In Touch</span>
          <span className="text-5xl text-orange-400 font-bold mt-1">
            Contact Me
          </span>
          <div
            className="w-[22rem] h-[12rem] absolute bg-[#abf1ff94] rounded-lg blur-2xl 
        z-[-1]"
          ></div>
        </div>
      </div>

      {/* Right View */}
      <div className="flex justify-center flex-1 relative">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-[2rem] items-center">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="inputCSS"
          />
          <input
            type="text"
            name="user_email"
            placeholder="Email"
            className="inputCSS"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            className="inputCSS !h-[8rem]"
          />
          <input
            type="submit"
            value="Send"
            className="h-10 w-44 rounded-full p-[11px] text-[16px] hover:from-white bg-gradient-to-r from-orange-300 to-orange-500 shadow-lg shadow-orange-300 hover:border-orange-500 hover:border-2 "
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
