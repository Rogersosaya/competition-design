import React from "react";
import { HiMiniTrophy } from "react-icons/hi2";

function AchievementCard() {
  return (
    <div className="flex flex-1 bg-gray25 rounded-md flex-col items-center   px-2">
      <div className="mask-b-from-50% mask-radial-[50%_50%] mask-radial-from-0.5 bg-yellow-400/30 w-25 h-40 absolute rotate-45"></div>
      <div className="flex flex-col items-center space-y-8 py-2 pt-5 ">
        <div>
          <HiMiniTrophy className="text-6xl text-yellow-500" />
        </div>

        <div className="flex text-xs gap-x-6 bg-gray30 p-2 rounded-md px-3">
          <div className="flex flex-col flex-1">
            <div className="text-gray-400">Puesto</div>
            <div className="text-sm font-semibold">1º</div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="text-gray-400">Actividad</div>
            <div className="text-sm font-semibold">Futbol</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;
