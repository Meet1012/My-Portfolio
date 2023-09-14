import React from "react";

const Card = ({ image, heading, description }) => {
  return (
    <div className="h-[16rem] w-[15rem] absolute flex flex-col gap-[1rem] items-center text-center  border-[7px] rounded-2xl border-solid border-orange-300 shadow-lg shadow-orange-300 p-[0,26px,2rem,26px]">
      <img src={image} alt="" className="h-[6rem] w-[4rem]" />
      <span className="text-lg text-black">{heading}</span>
      <span className="text-base text-gray-500">{description}</span>
      <button className="w-24 shadow-md text-blue-600 mb-6 rounded-lg bg-white">
        Learn More
      </button>
    </div>
  );
};

export default Card;
