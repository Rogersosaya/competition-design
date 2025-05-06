import React from "react";
import { FaRegFlag } from "react-icons/fa";
import { useParams } from "react-router-dom";
import InfoTeamCard from "../components/info-team-card";
import { CgMathEqual } from "react-icons/cg";
import { AiOutlineControl, AiOutlineTrophy } from "react-icons/ai";
import Title from "../../../../common/ui/components/title.comp";
import NextTeamActivityCard from "../components/next-team-activity-card.comp";
import { HiMiniTrophy } from "react-icons/hi2";
import AchievementCard from "../components/achievement-card.comp";
import TeamCard from "../components/team-card.comp";

function TeamPage() {
  const { id } = useParams();
  const eventos = [
    { nombre: "Concurso de Cuentos Cortos", valor: 390 },
    { nombre: "Carrera vallas masculino", valor: 160 },
    { nombre: "Carrera postas mixto", valor: 240 },
    { nombre: "Carrera 100m masculino", valor: 180 },
    { nombre: "Carrera 100m femenino", valor: 240 },
  ];
  const infoTeam = [
    {
      borderColor: "border-secondary",
      backgroundColor: "bg-secondary-dark",
      textColor: "text-secondary",
      label: "Puesto",
      icon: <FaRegFlag className="text-2xl text-secondary" />,
    },
    {
      borderColor: "border-red-500",
      backgroundColor: "bg-red-950",
      textColor: "text-red-500",
      label: "Puntos",
      icon: <CgMathEqual className="text-2xl text-red-500" />,
    },
    {
      borderColor: "border-green-500",
      backgroundColor: "bg-green-950",
      textColor: "text-green-500",
      label: "Medallas",
      icon: <HiMiniTrophy className="text-2xl text-green-500" />,
    },
    {
      borderColor: "border-blue-500",
      backgroundColor: "bg-blue-950",
      textColor: "text-blue-500",
      label: "Eventos",
      icon: <AiOutlineControl className="text-2xl text-blue-500" />,
    },
  ];
  return (
    <div className="flex-1 bg-gradient-to-b from-red-900  to-40%  to-black px-6 py-12 rounded-md md:block ">
      <div className="md:flex mb-12 md:mb-24">
        <div className="md:flex items-center md:mr-28">
          <div className="h-46 w-46  md:mr-4 mx-auto">
            <img src="/teams/23-1.png" alt="" className="rounded-full"/>
          </div>

          <div className="text-4xl font-semibold mb-4 mx-auto md:text-start text-center">Código {id}</div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-x-8">
          {infoTeam.map((info, index) => (
            <InfoTeamCard
              key={index}
              borderColor={info.borderColor}
              backgroundColor={info.backgroundColor}
              textColor={info.textColor}
              label={info.label}
              icon={info.icon}
            />
          ))}
        </div>
      </div>
      <div className="md:flex gap-x-4">
        <div className="flex flex-col space-y-4">
          <div className="bg-gray30  rounded-md">
            <div className="flex flex-col">
              <Title
                icon={<AiOutlineControl className="" />}
                title="Recuento de puntos"
              />

              <div className="space-y-1 p-4">
                {eventos.map((evento, index) => (
                  <div
                    key={index}
                    className="flex gap-x-12 bg-gray25 p-2 justify-between items-center rounded-md"
                  >
                    <div>{evento.nombre}</div>
                    <div className="bg-tertiary px-1 rounded-md text-black font-black">
                      +{evento.valor}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray30  rounded-md">
            <div className="flex flex-col">
              <Title
                icon={<AiOutlineTrophy className="" />}
                title="Logros"
              />

              <div className=" p-4 flex flex-wrap gap-x-4 gap-y-4">
                <AchievementCard />
                <AchievementCard />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 space-y-2">
          <Title title={"Próximamente"} icon={<AiOutlineTrophy />} />
          <NextTeamActivityCard />
          <NextTeamActivityCard />
          <NextTeamActivityCard />
          <NextTeamActivityCard />
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
