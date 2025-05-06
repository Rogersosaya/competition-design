import React from "react";
import { Link } from "react-router-dom";

function RowTablePositions() {
  return (
    <Link
      to={`/teams/21-2`}
      className=" max-w-full md:max-w-[1000px]  flex justify-between my-3 text-sm md:text-xl items-center bg-black h-14 rounded-xl  transition-all duration-400 md:cursor-pointer hover:bg-zinc-950"
    >
      <div className="w-[150px] md:w-[500px] flex items-center  h-full">
        <div
          className={`w-34  bg-gradient-to-b  to-black/30 h-full   flex items-center pl-3 md:pl-4 text-center md:gap-x-7 gap-x-3`}
          style={{
            backgroundImage: `linear-gradient(to bottom, #34512f, rgba(0, 0, 0, 0.3))`,
          }}
        >
          <div className="text-center w-3">1</div>
          <div className="font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-base text-xs">
            21-2
          </div>
        </div>
        <img
          src={"/teams/21-2.png"}
          width={350}
          height={350}
          alt="code"
          className="w-[50px] h-[50px] -ml-6 md:scale-125 scale-110 rounded-full"
        ></img>
      </div>
      <div className="w-20 text-center">5</div>
      <div className="w-20 text-center">12</div>
      <div className="w-20 text-center">16</div>
      <div className="w-20 text-center">25</div>
    </Link>
  );
}

export default RowTablePositions;
