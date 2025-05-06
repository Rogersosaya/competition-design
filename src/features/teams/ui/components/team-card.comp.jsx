import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

function TeamCard({ name, urlImage, color }) {
  return (
    <Link
      to={`/teams/${name}`}
      className={clsx(
        `min-w-38 md:min-w-52 rounded-3xl   transition-all duration-400 bg-black hover:bg-zinc-900 relative overflow-hidden md:flex-none flex-1`
      )}
    >
      <img
        src={urlImage}
        className="absolute h-full object-cover top-0 opacity-10 "
        alt=""
      />
        <div className="absolute h-full  top-0 bg-gradient-to-b from-black/10 to-black w-full to-70%"></div>

      <div className="p-4 py-10 flex flex-col items-center relative top-0">
        <img
          src={urlImage}
          className="mb-40 md:mb-56 rounded-full overflow-hidden w-24 mt-4 "
          alt=""
        />
        <div className="text-center  font-bold text-3xl  text-shadow-2xs text-shadow-primary">
          {name}
        </div>
      </div>
    </Link>
  );
}

export default TeamCard;
