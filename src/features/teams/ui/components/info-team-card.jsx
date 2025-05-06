import clsx from "clsx";
import React from "react";
import { FaRegFlag } from "react-icons/fa";

function InfoTeamCard({borderColor, backgroundColor, textColor, label, icon }) {
  return (
    <div
      className={clsx(
        `mb-8 border-2 ${borderColor} w-34 rounded-md p-4  space-y-3 ${backgroundColor} hover:scale-105 transition-all duration-300 flex flex-col items-center py-8 md:flex-none flex-1`
      )}
    >
      <div>
      {icon}
      </div>
      <div className={clsx(`mb-10 text-center ${textColor} font-bold text-xl`)}>
        {label}
      </div>
      <div className={clsx(` text-center ${textColor} font-bold text-3xl`)}>9°</div>
    </div>
    // <div className="flex flex-col bg-zinc-950 p-4 rounded-md items-center justify-center space-y-4 min-w-36 text-xl py-8">
    //   <div>
    //     <FaRegFlag className="text-2xl text-red-500" />
    //   </div>
    //   <div className="mb-10">Puesto</div>
    //   <div className="text-2xl">9°</div>
    // </div>
  );
}

export default InfoTeamCard;
