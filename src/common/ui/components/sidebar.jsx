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
import { AnimatePresence, motion } from "framer-motion";

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
    <div className=" flex-col  rounded-md gap-y-2 md:flex hidden ">
      {/* <div className="transition-all duration-300 p-1.5 hover:bg-gray25">
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
      </div> */}
      <div className="relative">
        <motion.div
          className="h-20 w-20 bg-black flex p-3.5 absolute top-0  rounded-xl"
          initial={{ y: "0" }}
          animate={{
            y:
              location.pathname === "/"
                ? "0%" // Para la ruta "/"
                : location.pathname === "/teams"
                ? "100%" // Para la ruta "/teams"
                : location.pathname === "/activities"
                ? "200%" // Para la ruta "/activities"
                : location.pathname === "/positions"
                ? "300%" // Para la ruta "/positions"
                : "0", // Valor predeterminado por si no coincide con ninguna ruta
            opacity:
              location.pathname === "/" ||
              location.pathname === "/teams" ||
              location.pathname === "/activities" ||
              location.pathname === "/positions"
                ? 1
                : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          &nbsp;
        </motion.div>
        <div className="relative top-0">
          {routes.map((route, index) => (
            <Link to={route.url} key={index}>
              <div to={route.url} key={index} className="  h-20 w-20 flex flex-col items-center gap-y-2 p-3.5 ">
                <div className={clsx(location.pathname == route.url ? "text-primary" : "text-primary-dark")}>{route.icon}</div>
                <div className={clsx("text-xs",location.pathname == route.url ? "" : "text-gray-400")}>{route.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <SocialNetworks
        // isExtendSidebar={isExtendSidebar}
        />
      </div>
    </div>
  );
}

export default SideBar;
