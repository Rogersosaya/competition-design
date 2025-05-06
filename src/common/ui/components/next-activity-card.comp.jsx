import React from "react";
import { IoLocationOutline } from "react-icons/io5";

function NextActivityCard() {
  return (
    <div className="px-7 py-2  rounded-md ">
      <div>Futbol</div>
      <div className="text-xs text-gray-400">Sábado 03/06 15:10</div>
      <div className="flex items-center justify-center gap-x-4 my-2">
        <div>21-2</div>
        <div className="w-14 h-14 rounded-md border-tertiary border-2 overflow-hidden">
          <img src="/teams/21-1.png" alt="" />
        </div>
        <div>VS</div>
        <div className="w-14 h-14 rounded-md overflow-hidden border-tertiary border-2">
          <img src="/teams/21-1.png" alt="" />
        </div>
        <div>21-2</div>
      </div>
      <div className="flex justify-end gap-x-1 mt-4">
        <IoLocationOutline />
        <div className=" text-xs ">Lozas FIIS</div>
      </div>
    </div>
  );
}

export default NextActivityCard;
