import clsx from "clsx";
import React from "react";

export default function Tooltip({ label, isOpenTooltip }) {
  return (
    <div
      className={clsx(
        "relative transition-opacity duration-500 ease-in-out",
        isOpenTooltip ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div
        className="text-sm font-semibold bg-gray30 text-gray10 px-2 py-1 rounded-md text-center absolute top-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
      >
        {label}
      </div>
    </div>
  );
}
