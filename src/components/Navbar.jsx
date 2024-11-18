import React from "react";
import { assets } from "../assets/assests";

const Navbar = () => {
  return (
    <div className="z-50 flex items-center justify-between bg-[whitesmoke] px-10 pt-6 shadow-md">
      <p className="text-2xl font-bold">
        <span className="text-[#FF6767]">Dash</span>board
      </p>
      <div className="flex h-8 w-[600px] items-center justify-between rounded-lg bg-white">
        <input
          className="flex-1 px-5 outline-0"
          type="text"
          name=""
          id=""
          placeholder="Search your task here..."
        />
        <img src={assets.searchImg} alt="" />
      </div>
      <div className="flex items-center gap-8">
        <div className="flex gap-2">
          <img src={assets.bellImg} alt="" />
          <img src={assets.calenderImg} alt="" />
        </div>
        <div>
          <p className="text-sm font-bold">Tuesday</p>
          <p className="text-sm font-semibold text-[#3ABEFF]">20/06/2023</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
