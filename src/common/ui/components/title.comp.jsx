import React from "react";
import { AiOutlineControl } from "react-icons/ai";

function Title({ title, icon }) {
  return (
    <div>
      <div className="flex items-center gap-x-4  p-4 pb-2">
        <div className="text-2xl text-primary">{icon}</div>

        <div>{title}</div>
      </div>
      <div className="h-[2px] w-full bg-gray25 "></div>
    </div>
  );
}

export default Title;
