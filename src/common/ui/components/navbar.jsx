import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function NavBar({ setIsSideMenuOpen }) {
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const socialNetworksData = [
    {
      icon: <FaFacebookF className="text-gray10 text-xl" />,
      color: "bg-blue-600",
      state: "isOpenFacebook",
      tooltipLabel: "Ver facebook",
    },
    {
      icon: <FaInstagram className="text-gray10 text-xl" />,
      color: "bg-pink-800",
      state: "isOpenInstagram",
      tooltipLabel: "Ver instagram",
    },
    {
      icon: <FaLinkedinIn className="text-gray10 text-xl" />,
      color: "bg-blue-900",
      state: "isOpenLinkedin",
      tooltipLabel: "Ver linkedin",
    },
  ];
  return (
    <div className="flex md:hidden md:px-4 px-0  justify-between items-center md:gap-x-0 gap-x-4  rounded-full bg-black ring-1 ring-gray25 mb-2">
      <div
        className="block md:hidden bg-gray25  h-full p-2 cursor-pointer rounded-full"
        onClick={() => setIsSideMenuOpen(true)}
      >
        <RxHamburgerMenu className="text-3xl md:text-4xl" />
      </div>
      <div className="flex">
        {socialNetworksData.map((network, index) => (
          <div
            key={index}
            className="transition-all duration-300 p-1.5 hover:bg-gray25"
          >
            <div className={`${network.color} p-2 rounded-md cursor-pointer`}>
              {network.icon}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col ml-32 mr-4">
        <button
          onMouseEnter={() => setIsOpenTooltip(true)}
          onMouseLeave={() => setIsOpenTooltip(false)}
          className="flex items-center justify-center p-2 bg-gray30 rounded-full hover:scale-105 hover:bg-gray25 cursor-pointer transition-all duration-200"
        >
          <AiFillHome className="text-gray10 text-4xl" />
        </button>
        <Tooltip label="Inicisssssssso" isOpenTooltip={isOpenTooltip} />
      </div> */}
      {/* <SearchBox /> */}
    </div>
  );
}

export default NavBar;
