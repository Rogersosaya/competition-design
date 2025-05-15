import React from "react";
import Title from "../../../../common/ui/components/title.comp";
import { AiOutlineTrophy } from "react-icons/ai";
import RecentActivityCard from "../components/recent-activity-card.comp";
import transition from "../../../../common/helpers/transition";

function HomePage() {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex-1 flex flex-wrap gap-x-4 gap-y-4">
        <div className="bg-gray30 flex flex-col items-center px-6 py-6 rounded-md gap-y-5 md:max-w-80 md:w-80 w-full">
          <img src="/teams/21-2.png" className="w-24 rounded-full" alt="" />
          <div className="text-2xl font-semibold">Campeón </div>
          <div className="space-y-5">
            <div className="text-sm flex gap-x-10">
              <div className="space-y-2">
                <div className="text-gray-400">Total de actividades</div>
                <div>60</div>
              </div>
              <div className="space-y-2">
                <div className="text-gray-400">Total de puntos</div>
                <div>400</div>
              </div>
            </div>
            <div className="text-sm flex gap-x-10">
              <div className="space-y-2">
                <div className="text-gray-400">Actividades faltantes</div>
                <div>60</div>
              </div>
              <div className="space-y-2">
                <div className="text-gray-400">Puntos faltantes</div>
                <div>400</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-md relative flex items-center justify-center overflow-hidden py-12">
          <img
            src="/background-2.jpg "
            className="absolute top-0 w-full h-full object-cover rounded-md"
            alt=""
          />
          <div className="bg-gradient-to-b from-black/40 to-black h-full w-full absolute top-0 "></div>
          <div className=" font-semibold mb-4 relative text-5xl">
            Semana FIIS
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray30">
        <div className="flex gap-x-2 md:gap-x-8 md:gap-y-6 gap-y-2 flex-wrap justify-evenly p-4 ">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div className="relative" key={index}>
                <div className="absolute top-0 bg-gradient-to-br to-primary from-tertiary rounded-lg w-full h-full opacity-50 blur-md"></div>
                <div className="p-1">
                  <div className="p-[2px] bg-gradient-to-br to-primary from-tertiary rounded-lg relative ">
                    <img
                      src="/teams/21-2.png"
                      className="w-14 rounded-lg border-2"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex-1 flex md:flex-nowrap flex-wrap gap-x-4">
        <div className="w-full md:w-auto">
          <div className="bg-gray30 flex flex-col rounded-md gap-y-5 md:max-w-80 ">
            <Title
              title={"Información importante"}
              icon={<AiOutlineTrophy />}
            />
            <div className="p-4 pt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              dolorem deleniti laudantium quod quia laboriosam, suscipit debitis
              accusantium, iste doloribus dolorum! Nemo architecto officia
              tenetur quas, dignissimos repellendus numquam nihil!
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <Title title={"Actividades finalizadas"} icon={<AiOutlineTrophy />} />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
        </div>
      </div>
    </div>
  );
}

export default transition(HomePage);
