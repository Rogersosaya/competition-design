import React from "react";
import { FaMedal } from "react-icons/fa";
import RowTablePositions from "../components/row-table-positions.comp";
import TitleTwo from "../../../../common/ui/components/title-two.comp";
import transition from "../../../../common/helpers/transition";
import BorderAnimation from "../../../../common/ui/components/border-animation.comp";

function PositionsPage() {
  return (
    <BorderAnimation>
    
    <div className="flex-1 shadow-[0_0_10px_rgb(0,0,0,0.5)] shadow-gray-700 rounded-xl  bg-black   md:px-6  py-12 space-y-2 h-full">
      <div className="px-6 md:px-0">
        <TitleTwo title="TABLA DE POSICIONES" />
      </div>

      <div className="max-w-full md:max-w-[1000px]  flex justify-between my-2 text-md md:text-2xl items-center">
        <div className="w-[150px] md:w-[500px]"></div>
        <div className="w-10 md:w-20 text-center">
          <FaMedal className="mx-auto text-gold" />
        </div>
        <div className="w-10 md:w-20 text-center">
          <FaMedal className="mx-auto text-silver" />
        </div>
        <div className="w-10 md:w-20 text-center">
          <FaMedal className="mx-auto text-bronze" />
        </div>
        <div className="w-10 md:w-20 text-center">Pts</div>
      </div>

      <RowTablePositions />
      <RowTablePositions />

      <RowTablePositions />

      <RowTablePositions />
      <RowTablePositions />
      <RowTablePositions />
      <RowTablePositions />
      <RowTablePositions />
    </div>
    </BorderAnimation>

  );
}

export default transition(PositionsPage);
