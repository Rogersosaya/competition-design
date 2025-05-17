import clsx from "clsx";
import React from "react";
import { AiFillHome, AiOutlineControl } from "react-icons/ai";
import { Link } from "react-router-dom";

function ActivityCard({title , color, urlImage, state}) {
  return (
    <Link to={`/activities/${title}`} className={clsx(`flex-1   relative h-40 min-w-70 md:min-w-80  overflow-hidden    transition-all duration-300  rounded-xl  bg-black  ring-gray22 ring-1` )}>
      <img src="/1.png" alt="" className="absolute top-0 h-full w-full object-cover" />
      <img
        src={urlImage}
        className=" h-full  absolute  right-0 top-0 mask-l-from-2"
      ></img>
      <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/20 to-black"></div>
      <h2 className="text-gray10 text-3xl font-semibold relative p-4 flex flex-col justify-between h-full">
        <div>{title}</div>
        <div className="text-sm flex items-center gap-x-2">
          <AiFillHome className="text-tertiary text-xl" />
          <div className="text-gray-400">{state}</div>
        </div>
      </h2>
      
    </Link>
  );
}

export default ActivityCard;
