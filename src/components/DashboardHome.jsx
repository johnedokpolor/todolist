import React from "react";
import { assets } from "../assets/assests";
import Todo from "./Todo";
import TaskStatus from "./TaskStatus";
import CompletedTask from "./CompletedTask";

const DashboardHome = () => {
  return (
    <div className="h-full flex-1">
      <div className="mb-2 flex w-full justify-between px-16">
        <h1 className="text-xl">Welcome Back, amanuel👋🏻</h1>
        <div className="flex gap-4">
          <div className="flex gap-[2px]">
            <img className="h-7 w-7" src={assets.friendImg} alt="" />
            <img className="h-7 w-7" src={assets.friendImg} alt="" />
            <img className="h-7 w-7" src={assets.friendImg} alt="" />
            <img className="h-7 w-7" src={assets.friendImg} alt="" />
            <img className="h-7 w-7" src={assets.friendImg} alt="" />
          </div>
          <img className="h-7 w-20" src={assets.inviteImg} alt="" />
        </div>
      </div>
      <div className="mr-20 grid h-full grid-cols-2 gap-4 border p-4">
        <Todo />
        <div className="space-y-2">
          <TaskStatus />
          <CompletedTask />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
