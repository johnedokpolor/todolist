import React from "react";
import { assets } from "../assets/assests";
import TodoItem from "./TodoItem";

const CompletedTask = () => {
  return (
    <div className="p-5 shadow-md">
      <div className="mb-3 flex justify-between">
        <div className="flex gap-2">
          <img src={assets.taskcompleteImg} alt="" />
          <p className="text-sm text-[#FF6767]">Completed Task</p>
        </div>
      </div>

      <div className="space-y-3">
        <TodoItem completed={true} />
        <TodoItem completed={true} />
      </div>
    </div>
  );
};

export default CompletedTask;
