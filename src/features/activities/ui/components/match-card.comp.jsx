import React from "react";

function MatchCard() {
  return (
    <div className="bg-gradient-to-r from-gray30 p-0.5 via-primary  to-gray30 rounded-md">
      <div className="relative overflow-hidden">
        <div className="bg-linear-to-r from-gray30 via-primary-dark to-gray30  rounded-md flex flex-col p-4 py-2 items-center  justify-center space-y-2">
          <div className="flex items-center justify-center md:gap-x-9 gap-x-3">
            <div className="flex items-center gap-x-4">
              <div>21-2</div>
              <img className="w-14 rounded-xl" src="/teams/21-2.png" alt="" />
            </div>
            <div className="md:text-2xl font-bold">VS</div>
            <div className="flex items-center gap-x-4">
              <img className="w-14 rounded-xl" src="/teams/21-1.png" alt="" />
              <div>21-2</div>
            </div>
          </div>
          <div className="w-40 h-[1px] bg-primary"></div>
          <div className="flex gap-x-7 text-xs">
            <div>
              <div className="text-gray-400">Fecha</div>
              <div>01/02</div>
            </div>
            <div>
              <div className="text-gray-400">Hora</div>
              <div>13:00</div>
            </div>
            <div>
              <div className="text-gray-400">Lugar</div>
              <div>Lozas fiis</div>
            </div>
          </div>
        </div>

        <img
          src="/teams/21-2.png"
          className="absolute  top-0 h-full w-30 mask-r-from-3  object-cover opacity-20 -translate-x-10 "
          alt=""
        />
        <img
          src="/teams/21-1.png"
          className="absolute right-0 top-0 h-full w-40 mask-l-from-3  object-cover opacity-20 translate-x-10"
          alt=""
        />
      </div>
    </div>
  );
}

export default MatchCard;
