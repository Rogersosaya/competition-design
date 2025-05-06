import React, { useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineHome,
  AiOutlineLeftSquare,
  AiOutlineMenu,
  AiOutlineRightSquare,
  AiOutlineTeam,
} from "react-icons/ai";
import SocialNetworks from "./social-networks-comp";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const [isExtendSidebar, setisExtendSidebar] = useState(false);
  const location = useLocation(); // Get the current route
  const routes = [
    {
      title: "Inicio",
      url: "/",
      icon: <AiOutlineHome className=" text-3xl min-w-8" />,
    },
    {
      title: "Equipos",
      url: "/teams",
      icon: <AiOutlineTeam className=" text-3xl min-w-8" />,
    },
    {
      title: "Actividades",
      url: "/activities",
      icon: <AiOutlineAppstore className=" text-3xl min-w-8" />,
    },
    {
      title: "Posiciones",
      url: "/positions",
      icon: <AiOutlineMenu className=" text-3xl min-w-8" />,
    },
  ];

  return (
    <div className=" flex-col bg-gray30 px-2 py-4 rounded-md space-y-2 md:flex hidden">
      <div className="transition-all duration-300 p-1.5 hover:bg-gray25">
        <div
          className="p-2 flex justify-end cursor-pointer"
          onClick={() => setisExtendSidebar(!isExtendSidebar)}
        >
          {isExtendSidebar ? (
            <AiOutlineLeftSquare className="text-gray10 text-4xl " />
          ) : (
            <AiOutlineRightSquare className="text-gray10 text-4xl " />
          )}
        </div>
      </div>
      <div className="">
        {routes.map((route, index) => (
          <Link to={route.url} key={index}>
            <div
              className={clsx(
                "transition-all duration-300 p-1.5 hover:bg-gray25",
                location.pathname === route.url && "bg-gray25 "
              )}
            >
              <div
                className={clsx(
                  `p-2 rounded-md cursor-pointer flex items-end gap-x-5 transition-all duration-200 w-12`,
                  {
                    "w-80": isExtendSidebar,
                  }
                )}
              >
                <div className="w-full flex gap-x-3 ">
                  <div
                    className={clsx(
                      location.pathname === route.url ? "text-primary" : ""
                    )}
                  >
                    {route.icon}
                  </div>
                  {isExtendSidebar && (
                    <div className="text-2xl">{route.title}</div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex">
        <SocialNetworks isExtendSidebar={isExtendSidebar} />
      </div>
    </div>
  );
}

export default SideBar;
