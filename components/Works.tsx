"use client";

import React from "react";

import { works, skills } from "@/data";
import { TextGenerateTwoColors } from "./ui/TextGenerateEffect";
import { InfiniteMovingCases } from "./ui/InfiniteShowcase";

const Works = () => {
  const { config, layoutSetting, data } = works;
  const { resource } = skills;
  return (
    <section id="works" className="py-20">
      <h1 className="heading">
        <TextGenerateTwoColors config={config} />
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCases
            items={data}
            layoutSetting={layoutSetting}
            direction="left"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {resource.map((item) => (
            <React.Fragment key={item.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img src={item.img} alt={item.name} className="md:w-10 w-5" />
                <img
                  src={item.nameImg}
                  alt={item.name}
                  width={item.nameImgLength}
                  // className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
