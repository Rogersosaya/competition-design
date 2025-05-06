import React, { useState } from "react";
import { AiFillHome, AiOutlineDash } from "react-icons/ai";
import Tooltip from "./tooltip";
import SearchBox from "./search-box";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar({setIsSideMenuOpen}) {
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  return (
    <div className="flex md:px-4 px-0 py-4 justify-between items-center md:gap-x-0 gap-x-4">
      <div className="hidden md:flex items-center text-2xl">
        
        Semana FIIS
      </div>
      <div className="block md:hidden bg-gray30  h-full p-2 cursor-pointer" onClick={()=> setIsSideMenuOpen(true)}>
        <RxHamburgerMenu className="text-3xl md:text-4xl" />
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
      <SearchBox />
      <div className="md:block hidden"></div>
    </div>
  );
}

export default NavBar;
