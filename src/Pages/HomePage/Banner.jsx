import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/736x/07/8e/a5/078ea578bab61461d205de7516afe3b8.jpg")',
      }}
    >
      {/* background img--Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 shadow-md">
          Drive Your Dreams Today!
        </h1>
        <NavLink to={"/availableCars"}>
          <button className="px-8 py-4 border-2 hover:bg-[#136b7a] text-white text-xl font-bold rounded-md shadow-lg transition-all duration-300">
            View Available Cars
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;
