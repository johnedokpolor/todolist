import React from "react";
import TodoItem from "./TodoItem";
import { assets } from "../assets/assests";

const TaskStatus = () => {
  return (
    <div className="p-3 shadow-md">
      <div className="mb-3 flex">
        <div className="flex gap-2">
          <img src={assets.taskstatusImg} alt="" />
          <p className="text-sm text-[#FF6767]">Task Status</p>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div>
          <div className="mb-2 h-16 w-16 rounded-full border-4 border-gray-500"></div>
          <div className="flex items-center gap-1">
            <div className="h-1 w-1 rounded-full bg-[#0225FF]"></div>
            <p className="text-[11px]">Completed</p>
          </div>
        </div>
        <div>
          <div className="mb-2 h-16 w-16 rounded-full border-4 border-gray-500"></div>
          <div className="flex items-center gap-1">
            <div className="h-1 w-1 rounded-full bg-[#0225FF]"></div>
            <p className="text-[11px]">Completed</p>
          </div>
        </div>
        <div>
          <div className="mb-2 h-16 w-16 rounded-full border-4 border-gray-500"></div>
          <div className="flex items-center gap-1">
            <div className="h-1 w-1 rounded-full bg-[#0225FF]"></div>
            <p className="text-[11px]">Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
