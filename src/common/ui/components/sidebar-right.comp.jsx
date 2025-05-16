import React from "react";
import Title from "./title.comp";
import { AiOutlineControl } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import NextActivityCard from "./next-activity-card.comp";
import BorderAnimation from "./border-animation.comp";

function SideBarRight() {
  return (

    <div className="flex-col shadow-[0_0_10px_rgb(0,0,0,0.5)] shadow-gray-700 rounded-xl  bg-black p-4  space-y-2 md:flex hidden ring-gray22 ring-1">
      <Title icon={<AiOutlineControl className="" />} title="Próximamente" />
      <div className="flex flex-col divide-y-1 divide-gray-500 space-y-3">
        <NextActivityCard />
        <NextActivityCard />
        <NextActivityCard />
        <NextActivityCard />

      </div>
    </div>

  );
}

export default SideBarRight;
