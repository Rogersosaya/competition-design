import React from "react";
import { FaMedal } from "react-icons/fa";
import RowTablePositions from "../components/row-table-positions.comp";
import TitleTwo from "../../../../common/ui/components/title-two.comp";

function PositionsPage() {
  return (
    <div className="flex-1 bg-gray30 md:px-6  py-12 rounded-md space-y-2 ">
      <div className="px-6 md:px-0">
        <TitleTwo title="TABLA DE POSICIONES" />
      </div>

      <div className=" max-w-[1000px]  flex justify-between my-2 text-md md:text-2xl items-center">
        <div className="w-[150px] md:w-[500px]"></div>
        <div className="w-20">
          <FaMedal className="mx-auto text-goldMedal" />
        </div>
        <div className="w-20">
          <FaMedal className="mx-auto text-silverMedal" />
        </div>
        <div className="w-20">
          <FaMedal className="mx-auto text-bronzeMedal" />
        </div>
        <div className="w-20 text-center">Pts</div>
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
  );
}

export default PositionsPage;
