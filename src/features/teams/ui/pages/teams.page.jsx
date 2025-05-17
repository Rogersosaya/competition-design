import React from "react";
import TeamCard from "../components/team-card.comp";
import Title from "../../../../common/ui/components/title.comp";
import { AiOutlineControl } from "react-icons/ai";
import TitleTwo from "../../../../common/ui/components/title-two.comp";
import transition from "../../../../common/helpers/transition";
import BorderAnimation from "../../../../common/ui/components/border-animation.comp";

function TeamsPage() {
  const teams = [
    {
      name: "21-1",
      urlImage: "/teams/21-1.png",
      color: "bg-orange-950",
    },
    {
      name: "21-2",
      urlImage: "/teams/21-2.png",
      color: "bg-orange-950",
    },
    {
      name: "22-1",
      urlImage: "/teams/22-1.png",
      color: "bg-orange-950",
    },
    {
      name: "22-2",
      urlImage: "/teams/22-2.png",
      color: "bg-orange-950",
    },
  ];
  return (
    <BorderAnimation>

    <div className="flex-1 shadow-[0_0_10px_rgb(0,0,0,0.5)] shadow-gray-700 rounded-xl  bg-black    space-y-2 py-12 h-full  px-6 md:min-h-[calc(100vh-40px)] min-h-[calc(100vh-16px)]">
      <TitleTwo  title="EQUIPOS" />
      {/* <div className="text-3xl font-semibold mb-4">Teams</div> */}
      <div className="flex gap-x-4 md:gap-x-8 gap-y-4  flex-wrap justify-stretch ">
        {teams.map((team, index) => (
          <TeamCard
            name={team.name}
            urlImage={team.urlImage}
            color={team.color}
            key={index}
          />
        ))}
      </div>
    </div>
    </BorderAnimation>

  );
}

export default transition(TeamsPage);
