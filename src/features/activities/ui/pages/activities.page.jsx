import React from "react";
import Title from "../../../../common/ui/components/title.comp";
import { AiOutlineControl } from "react-icons/ai";
import TitleTwo from "../../../../common/ui/components/title-two.comp";
import ActivityCard from "../components/activity-card.comp";
import transition from "../../../../common/helpers/transition";
import BorderAnimation from "../../../../common/ui/components/border-animation.comp";

function ActivitiesPage() {
  const sports = [
    { title: "Futbol", color: "bg-green-700", urlImage: "/sports/1.jpg", state: "Finalizado" },
    { title: "Basketball", color: "bg-red-700", urlImage: "/sports/1.jpg" ,
      state: "En curso"
    },
    { title: "Baseball", color: "bg-blue-700", urlImage: "/sports/1.jpg" ,
      state: "En curso"

    },
    { title: "Tennis", color: "bg-yellow-700", urlImage: "/sports/1.jpg", state: "En curso" },
    { title: "Golf", color: "bg-purple-700", urlImage: "/sports/1.jpg", state: "En curso" },
    { title: "Hockey", color: "bg-orange-700", urlImage: "/sports/1.jpg", state: "Sin comenzar" },
  ];
  const esports = [
    {
      title: "League of Legends",
      color: "bg-green-700",
      urlImage: "/sports/1.jpg",
    },
    { title: "Dota 2", color: "bg-red-700", urlImage: "/sports/1.jpg" },
    {
      title: "Counter Strike",
      color: "bg-blue-700",
      urlImage: "/sports/1.jpg",
    },
    { title: "Valorant", color: "bg-yellow-700", urlImage: "/sports/1.jpg" },
    { title: "Overwatch", color: "bg-purple-700", urlImage: "/sports/1.jpg" },
  ];
  return (
    <BorderAnimation>

    <div className="flex-1 shadow-[0_0_10px_rgb(0,0,0,0.5)] shadow-gray-700 rounded-xl  bg-black   px-6 py-12  space-y-2 h-full">
      <TitleTwo title="ACTIVIDADES" />
      <div className="flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-4">
          <Title icon={<AiOutlineControl className="" />} title="Deportes" />
          <div className="flex gap-x-8 gap-y-8  flex-wrap">
            {sports.map((sport, index) => (
              <ActivityCard
                title={sport.title}
                color={sport.color}
                urlImage={sport.urlImage}
                state={sport.state}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <Title icon={<AiOutlineControl className="" />} title="Esports" />
          <div className="flex gap-x-8 gap-y-8  flex-wrap">
            {sports.map((sport, index) => (
              <ActivityCard
                title={sport.title}
                color={sport.color}
                urlImage={sport.urlImage}
                state={sport.state}

                key={index}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <Title icon={<AiOutlineControl className="" />} title="Esports" />
          <div className="flex gap-x-8 gap-y-8  flex-wrap">
            {sports.map((sport, index) => (
              <ActivityCard
                title={sport.title}
                color={sport.color}
                urlImage={sport.urlImage}
                state={sport.state}

                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </BorderAnimation>

  );
}

export default transition(ActivitiesPage);
