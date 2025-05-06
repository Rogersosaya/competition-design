import React from "react";
import Title from "./title.comp";
import { AiOutlineControl } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import NextActivityCard from "./next-activity-card.comp";

function SideBarRight() {
  return (
    <div className="flex-col bg-gray30 p-4 rounded-md space-y-2 md:flex hidden">
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
