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
      <div className="relative">
        <motion.div
          className="text-2xl bg-gray25 flex p-3.5 absolute top-0 w-full rounded-md"
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

        {routes.map((route, index) => (
          <Link to={route.url} key={index} className="relative">
            <div
              className={clsx(
                "transition-all duration-300 p-1.5 hover:bg-gray25 rounded-md"
                // location.pathname === route.url && "bg-gray25 "
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
                  <AnimatePresence>
                    {isExtendSidebar && (
                      <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -80 }}
                        transition={{ duration: 0.2 }}
                        className="text-2xl"
                      >
                        {route.title}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
