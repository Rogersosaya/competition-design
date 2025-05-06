import React from "react";

function NextTeamActivityCard() {
  return (
    <div className="bg-gradient-to-r from-gray30 p-0.5 to-primary rounded-md text-xs">
      <div className="relative">
        <div className="bg-linear-to-r from-gray30 to-primary-dark  rounded-md flex md:p-4 py-4 px-2 items-center ">
          <div className="md:block hidden md:w-24 md:mr-4 "></div>

          <div className="flex-1 flex items-center">
            <div className="flex flex-col space-y-1">
              <div className="text-gray-400">Fecha</div>
              <div>06/05</div>
            </div>
          </div>
          <div className="flex-1 flex items-center">
            <div className="flex flex-col space-y-1">
              <div className="text-gray-400">Hora</div>
              <div>13:00</div>
            </div>
          </div>
          <div className="flex-1 flex items-center">
            <div className="flex flex-col space-y-1">
              <div className="text-gray-400">Lugar</div>
              <div>Lozas FIIS</div>
            </div>
          </div>
          <div className="flex-1 flex items-center">
            <div className="flex flex-col space-y-1">
              <div className="text-gray-400">Versus</div>
              <div>23-2</div>
            </div>
          </div>
          <div className="text-primary  md:text-xl font-bold md:max-w-36 md:w-36">
            FÚTBOL
          </div>
        </div>
        <img
          src="/sports/1.jpg "
          className="absolute  top-0 h-full w-10 md:w-30 mask-r-from-3  object-cover md:block hidden"
          alt=""
        />
      </div>
    </div>
  );
}

export default NextTeamActivityCard;
