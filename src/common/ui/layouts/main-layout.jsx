import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import SideBarRight from "../components/sidebar-right.comp";
import SideBarMovil from "../components/sidebar-movil.comp";
import { motion } from "framer-motion";

function MainLayout() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <div className="p-2 min-h-screen">
      <NavBar setIsSideMenuOpen={setIsSideMenuOpen} />
      <SideBarMovil
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
      <div className="flex  gap-x-4 min-h-screen">
        <SideBar />

        <Outlet />
        <SideBarRight />
      </div>
    </div>
  );
}

export default MainLayout;
