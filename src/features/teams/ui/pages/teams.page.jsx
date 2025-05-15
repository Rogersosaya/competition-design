import React from "react";
import TeamCard from "../components/team-card.comp";
import Title from "../../../../common/ui/components/title.comp";
import { AiOutlineControl } from "react-icons/ai";
import TitleTwo from "../../../../common/ui/components/title-two.comp";
import transition from "../../../../common/helpers/transition";

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
    <div className="flex-1 bg-gray30 px-6 rounded-md space-y-2 py-12 h-full">
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
  );
}

export default transition(TeamsPage);
