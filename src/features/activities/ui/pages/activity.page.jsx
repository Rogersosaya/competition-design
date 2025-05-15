import React from "react";
import { useParams } from "react-router-dom";
import Title from "../../../../common/ui/components/title.comp";
import { AiOutlineControl, AiOutlineTrophy } from "react-icons/ai";
import clsx from "clsx";
import MatchCard from "../components/match-card.comp";
import GroupTable from "../components/group-table.comp";
import MatchBracket from "../components/match-bracket.comp";
import TitleTwo from "../../../../common/ui/components/title-two.comp";
import transition from "../../../../common/helpers/transition";

function ActivityPage() {
  const { id } = useParams();
  const positionsOfActivity = [
    {
      position: 1,
      points: 200,
      team: "21-2",
    },
    {
      position: 2,
      points: 180,
      team: "21-1",
    },
    {
      position: 3,
      points: 160,
      team: "22-1",
    },
    {
      position: 4,
      points: 140,
      team: "22-2",
    },
    {
      position: 5,
      points: 120,
      team: "23-1",
    },
    {
      position: 6,
      points: 100,
      team: "23-2",
    },
    {
      position: 7,
      points: 80,
      team: "24-1",
    },
    {
      position: 8,
      points: 60,
      team: "24-2",
    },
    {
      position: 9,
      points: 40,
      team: "25-1",
    },
    {
      position: 10,
      points: 20,
      team: "25-2",
    },
  ];

  return (
    <div className="flex-1 bg-black rounded-md relative">
      <div className="w-full absolute top-0">
        <img
          src="/sports/1.jpg"
          className="object-cover bg-cover w-full opacity-15 mask-b-from-2 h-96"
          alt=""
        />
      </div>
      <div className=" px-6 py-12  relative">
        <div className="md:flex gap-x-4">
          <div className="flex flex-col gap-y-12">
            <TitleTwo title={id} borderColor={"border-primary"} />

            <div className="bg-gray30  rounded-md">
              <div className="flex flex-col">
                <Title
                  icon={<AiOutlineControl className="" />}
                  title="Tabla de posiciones"
                />

                <div className="space-y-1 p-4">
                  {positionsOfActivity.map((position, index) => (
                    <div
                      key={index}
                      className={clsx(
                        `flex gap-x-12 bg-gray25 p-2 justify-between items-center rounded-md px-6`,
                        index == 0 && "bg-yellow-600",
                        index == 1 && "bg-zinc-600",
                        index == 2 && "bg-yellow-800"
                      )}
                    >
                      <div>{position.position}°</div>
                      <div className="">{position.points} pts</div>
                      <div>{position.team}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex-1 space-y-2">
              <Title title={"Próximamente"} icon={<AiOutlineTrophy />} />
              <MatchCard />
              <MatchCard />
              <MatchCard />
            </div>
            <div className="flex-1 space-y-2">
              <Title title={"Últimos partidos"} icon={<AiOutlineTrophy />} />
              <MatchCard />
              <MatchCard />
              <MatchCard />
            </div>
            <div className="flex-1 space-y-2">
              <Title title={"Fase de grupos"} icon={<AiOutlineTrophy />} />
              <div className="bg-gray30 rounded-md p-4 gap-y-2 flex flex-wrap gap-x-4">
                <GroupTable />
                <GroupTable />
              </div>
            </div>
            <div className="flex-1 space-y-2  flex flex-col">
              <Title title={"Bracket"} icon={<AiOutlineTrophy />} />
              
              <div className="bg-gray30 rounded-md p-4  gap-y-2 flex  gap-x-18 overflow-x-auto md:w-auto w-86 flex-1 [&>div]:flex-shrink-0">
                <div className="space-y-6">
                  <div className=" grid grid-cols-3 gap-x-18">
                    <div className="text-black px-2 py-2 rounded-xl bg-tertiary font-black text-center">
                      CUARTOS DE FINAL
                    </div>
                    <div className="text-black px-2 py-2 rounded-xl bg-tertiary font-black text-center">
                      SEMIFINAL
                    </div>
                    <div className="text-black px-2 py-2 rounded-xl bg-tertiary font-black text-center">
                      FINAL
                    </div>
                  </div>
                  <div className="gap-y-2 flex  gap-x-18">
                    <div className="flex flex-col gap-y-8 ">
                      <MatchBracket />
                      <MatchBracket />
                      <MatchBracket />
                      <MatchBracket />
                    </div>
                    <div className="flex flex-col gap-y-8 justify-around">
                      <MatchBracket />
                      <MatchBracket />
                    </div>
                    <div className="flex flex-col gap-y-8 justify-around">
                      <MatchBracket />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(ActivityPage);
