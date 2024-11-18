import React from "react";
import { assets } from "../assets/assests";
import TodoItem from "./TodoItem";

const Todo = () => {
  return (
    <div className="p-5 shadow-md">
      <div className="flex justify-between">
        <div className="flex">
          <img src={assets.taskpendingImg} alt="" />
          <p className="text-sm text-[#FF6767]">To-do</p>
        </div>
        <div className="flex">
          <img className="h-4 w-4" src={assets.newtaskImg} alt="" />
          <p className="text-[13px] text-black/60">Add Task</p>
        </div>
      </div>
      <p className="my-1 text-[13px]">
        20 June <span className="text-black/60">&bull; Today</span>
      </p>
      <div className="space-y-3">
        <TodoItem />
        <TodoItem />
        <hr />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todo;
