import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Portfolio_Img from "../img/portfolio.png";
import Stock_Market from "../img/Stock_Market.png";
import Shoe_Shop from "../img/Shoe_Store.png";
import ThemeContext from "../Context/ThemeContext";

const Portfolio = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className="flex items-center justify-center flex-col h-[90vh] pt-4"
      id="Portfolio"
    >
      <div
        className="w-[22rem] h-[12rem] absolute bg-[#edd0ff] rounded-lg blur-2xl 
        z-[-1] mt-[30rem] ml-[-50rem]"
      ></div>
      <div
        className="w-[22rem] h-[12rem] absolute bg-[#edd0ff] rounded-lg blur-2xl 
        z-[-1] mt-[15rem] ml-[50rem]"
      ></div>
      <div
        className="w-[22rem] h-[14rem] absolute bg-[#c1f5ff] rounded-xl blur-2xl 
          z-[-5]  mt-[-20rem]"
      ></div>
      <span className={`${
            darkMode ? "text-gray-300" : "text-gray-700"
          } font-bold text-5xl mb-2`}>My Projects</span>
      <span className={`${
            darkMode ? "text-teal-300 " : "text-orange-400"
          } font-bold text-5xl mb-2`}>Portfolio</span>
      <div className="h-[31rem] w-[45rem] mt-[3rem] items-center ">
        <Carousel
          swipeable={true}
          autoPlay={true}
          infiniteLoop={true}
          labels={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          className={`border-[10px] rounded-md ${darkMode ? "border-gray-800":"border-gray-300"} `}
        >
          <div>
            <img src={Portfolio_Img} alt="" />
          </div>
          <div>
            <img src={Stock_Market} alt="" />
          </div>
          <div>
            <img src={Shoe_Shop} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Portfolio;
