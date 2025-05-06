import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Tooltip from "./tooltip";
import clsx from "clsx";

function SocialNetworks({isExtendSidebar}) {
  const [socialNetworks, setSocialNetworks] = useState({
    isOpenFacebook: false,
    isOpenInstagram: false,
    isOpenLinkedin: false,
  });
  const socialNetworksData = [
    {
      icon: <FaFacebookF className="text-gray10 text-4xl" />,
      color: "bg-blue-600",
      state: "isOpenFacebook",
      tooltipLabel: "Ver facebook",
      isOpen: socialNetworks.isOpenFacebook,
    },
    {
      icon: <FaInstagram className="text-gray10 text-4xl" />,
      color: "bg-pink-800",
      state: "isOpenInstagram",
      tooltipLabel: "Ver instagram",
      isOpen: socialNetworks.isOpenInstagram,
    },
    {
      icon: <FaLinkedinIn className="text-gray10 text-4xl" />,
      color: "bg-blue-900",
      state: "isOpenLinkedin",
      tooltipLabel: "Ver linkedin",
      isOpen: socialNetworks.isOpenLinkedin,
    },
  ];
  return (
    <div className={clsx("space-y-2 mt-14 transition-all duration-1000",  isExtendSidebar ? "flex" : "block")}>
      {socialNetworksData.map((network, index) => (
        <div key={index}>
          <div
            key={index}
            className="transition-all duration-300 p-1.5 hover:bg-gray25"
          >
            <div
              onMouseEnter={() =>
                setSocialNetworks((prev) => ({
                  ...prev,
                  [network.state]: true,
                }))
              }
              onMouseLeave={() =>
                setSocialNetworks((prev) => ({
                  ...prev,
                  [network.state]: false,
                }))
              }
              className={`${network.color} p-2 rounded-md cursor-pointer`}
            >
              {network.icon}
            </div>
          </div>
          <Tooltip
            label={network.tooltipLabel}
            isOpenTooltip={network.isOpen}
          />
        </div>
      ))}
     
    </div>
  );
}

export default SocialNetworks;
