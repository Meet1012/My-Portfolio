import React from "react";

const Floatingdiv = ({ image, text1, text2 }) => {
  return (
    <div className="h-14 w-36 relative justify-around flex bg-white rounded-2xl shadow-xl ">
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
