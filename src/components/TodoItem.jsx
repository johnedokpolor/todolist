import React from "react";
import { assets } from "../assets/assests";

const TodoItem = ({
  status,
  statusicon,
  image,
  title,
  desc,
  date,
  completed,
}) => {
  return (
    <div className="relative rounded-2xl border p-3">
      <img className="absolute right-3 top-2" src={assets.menuImg} alt="" />
      <div className="flex items-start gap-2">
        {completed ? (
          <img className="pt-[2px]" src={assets.completedImg} alt="" />
        ) : (
          <img className="pt-[2px]" src={assets.notstartedImg} alt="" />
        )}

        <div>
          <div className="mb-2 flex items-center gap-3 pr-6">
            <div>
              <p className="text-[15px] font-semibold">
                Attend Nichal's birthday Party
              </p>
              <p className="text-[11px]">
                Buy gifts on the way and pick up cake from the bakery. (6 PM |
                Fresh Elements).....
              </p>
            </div>
            <img className="w-14" src={assets.task1Img} alt="" />
          </div>
          {completed ? (
            <p className="text-[10px] text-black/40">Completed 2 days ago</p>
          ) : (
            <div className="flex justify-between text-[10px]">
              <p>
                Priority: <span className="text-[#0225FF]">Moderate</span>
              </p>
              <p>
                Status: <span className="text-[#FF6767]">Not Started</span>
              </p>
              <p className="text-black/40">Created On: 20/06/2023</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
