import React, { useState } from "react";
import Title from "../../../../common/ui/components/title.comp";
import { AiOutlineTrophy } from "react-icons/ai";
import RecentActivityCard from "../components/recent-activity-card.comp";
import transition from "../../../../common/helpers/transition";
import BorderAnimation from "../../../../common/ui/components/border-animation.comp";
import { RxHamburgerMenu } from "react-icons/rx";

function HomePage() {
  return (
    <BorderAnimation>
      <div className="relative flex-1 space-y-4 h-full shadow-[0_0_10px_rgb(0,0,0,0.5)] shadow-gray-700 rounded-xl  bg-black  md:min-h-[calc(100vh-40px)] min-h-[calc(100vh-16px)]">
        <div className="absolute top-0 bg-gradient-to-r from-primary via-black to-secondary w-full h-70 rounded-t-xl mask-b-from-10% mask-b-to-90% blur-3xl "></div>
        {/* <div
          className="block md:hidden ring-1 rounded-xl ring-gray22   p-2 cursor-pointer absolute m-1"
          onClick={() => setIsSideMenuOpen(true)}
        >
          <RxHamburgerMenu className="text-3xl md:text-4xl" />
        </div> */}
        <div className="flex-1  md:space-y-30 h-full  relative ">
          <div className="md:space-y-4 p-2">
            <div className="flex-1 flex flex-wrap gap-x-4 gap-y-4 justify-center py-10 mt-5 md:mt-0">
              <div className="md:text-6xl text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent md:text-start text-center">
                SEMANA FIIS
              </div>
            </div>
            <div className="flex-1 md:w-full flex justify-center ">
              <div className="flex gap-x-2 md:gap-x-8 md:gap-y-6 gap-y-2 flex-wrap  p-4 md:w-[500px] w-[300px] md:justify-center justify-center">
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
          </div>

          <div className="flex-1 flex md:flex-nowrap flex-wrap gap-x-4 px-6 py-12">
            <div className="w-full md:w-auto">
              <div className="bg-gray30 flex flex-col rounded-md gap-y-5 md:max-w-80 ">
                <Title
                  title={"Información importante"}
                  icon={<AiOutlineTrophy />}
                />
                <div className="p-4 pt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, dolorem deleniti laudantium quod quia laboriosam,
                  suscipit debitis accusantium, iste doloribus dolorum! Nemo
                  architecto officia tenetur quas, dignissimos repellendus
                  numquam nihil!
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <Title
                title={"Actividades finalizadas"}
                icon={<AiOutlineTrophy />}
              />
              <RecentActivityCard />
              <RecentActivityCard />
              <RecentActivityCard />
              <RecentActivityCard />
            </div>
          </div>
        </div>
      </div>
    </BorderAnimation>
  );
}

export default transition(HomePage);
