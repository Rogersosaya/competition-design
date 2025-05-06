import React from "react";
import { AiOutlineTrophy } from "react-icons/ai";

function RecentActivityCard() {
  return (
    <div className="bg-gradient-to-r from-gray30 p-0.5 to-primary rounded-md relative">
      <div className="bg-linear-to-r from-gray30 to-primary-dark  rounded-md flex p-4 items-center justify-end py-8">
        <div className="flex gap-x-6 md:gap-x-12">
          <div className="text-yellow-500 text-xl md:text-4xl font-bold flex items-center gap-x-4">
            <div>
              <AiOutlineTrophy />
            </div>
            <div>21-2</div>
          </div>
          <div className="text-zinc-400 text-lg md:text-2xl font-bold flex items-center gap-x-4">
            <div>
              <AiOutlineTrophy />
            </div>
            <div>21-2</div>
          </div>
          <div className="text-yellow-700 md:text-xl font-bold  flex items-center gap-x-4 ">
            <div>
              <AiOutlineTrophy />
            </div>
            <div>21-2</div>
          </div>
        </div>
      </div>
      <div className="absolute  top-0 h-full flex items-center justify-center">
        <img
          src="/sports/1.jpg "
          className=" h-full md:w-80 mask-r-from-3  object-cover relative top-0"
          alt=""
        />
        <div className="absolute  md:text-2xl font-bold text-shadow-lg text-shadow-primary-dark">
          FUTBOL
        </div>
      </div>
    </div>
  );
}

export default RecentActivityCard;
