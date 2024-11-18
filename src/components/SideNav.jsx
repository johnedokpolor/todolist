import React from "react";
import { assets } from "../assets/assests";

const SideNav = () => {
  return (
    <div className="h-screen max-h-[89vh] w-[310px] translate-y-1 rounded-e-md bg-black p-3 text-white placeholder:h-[400px]">
      <img
        className="mx-auto w-[70px] -translate-y-12"
        src={assets.profilepicImg}
        alt=""
      />

      <div className="flex -translate-y-12 flex-col gap-2">
        <div className="text-center">
          <h4 className="font-bold">amanuel</h4>
          <p>amanuel@gmail.com</p>
        </div>
        <div className="flex items-center gap-3 rounded-md bg-[#fc9b9b] px-3 py-3 lg:cursor-pointer">
          <img src={assets.dashboardImg} alt="" />
          Dashboard
        </div>
        <div className="flex items-center gap-3 rounded-md px-3 py-3 lg:cursor-pointer">
          <img src={assets.vitaltaskImg} alt="" />
          Vital Task
        </div>
        <div className="flex -translate-x-1 items-center gap-3 rounded-md px-3 py-3 lg:cursor-pointer">
          <img src={assets.mytaskImg} alt="" />
          My Task
        </div>
        <div className="flex items-center gap-3 rounded-md px-3 py-3 lg:cursor-pointer">
          <img src={assets.taskcategoriesImg} alt="" />
          Task Categories
        </div>
        <div className="flex items-center gap-3 rounded-md px-3 py-3 lg:cursor-pointer">
          <img src={assets.settingImg} alt="" />
          Settings
        </div>
        <div className="flex items-center gap-3 rounded-md px-3 py-3 lg:cursor-pointer">
          <img src={assets.helpImg} alt="" />
          Help
        </div>
      </div>
      <div className="absolute bottom-10 flex items-center gap-3 rounded-md px-3 py-2 lg:cursor-pointer">
        <img src={assets.logoutImg} alt="" />
        Logout
      </div>
    </div>
  );
};

export default SideNav;
