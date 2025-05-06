import clsx from "clsx";
import React, { useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineTeam,
} from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function SideBarMovil({ isSideMenuOpen, setIsSideMenuOpen }) {
    const location = useLocation()
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
    <>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}
      {isSideMenuOpen && (
        <div
          onClick={() => setIsSideMenuOpen(false)}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm "
        />
      )}

      <div
        className={clsx(
          "fixed pt-5  min-h-screen bg-black  top-0 left-0 w-2/3 z-20    transform transition-all duration-300 overflow-y-auto max-h-screen",
          {
            "-translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-3 right-3 cursor-pointer"
          onClick={() => setIsSideMenuOpen(false)}
        />

        <div className="mt-14 ">
          <ul className="">
            {routes.map((route, index) => (
              <Link to={route.url} key={index}>
                <li
                  className={clsx(
                    "transition-all duration-300 p-1.5 hover:bg-gray25",
                    location.pathname === route.url && "bg-gray25 "
                  )} onClick={()=> setIsSideMenuOpen(false)}
                >
                  <div
                    className={clsx(
                      `p-2 rounded-md cursor-pointer flex items-end gap-x-5 transition-all duration-200 `
                    )}
                  >
                    <div className=" flex gap-x-3 ">
                      <div
                        className={clsx(
                          location.pathname === route.url ? "text-primary" : ""
                        )}
                      >
                        {route.icon}
                      </div>

                      <div className="text-2xl">{route.title}</div>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBarMovil;
