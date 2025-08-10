"use client";

import { works } from "@/data";
import { PinContainer } from "./ui/Pin";
import { TextGenerateTwoColors } from "./ui/TextGenerateEffect";
import { ExperienceItem, ProjectInfo } from "@/types/customTypes";
import { CheckLiveSite, ListIcons } from "@/lib/UiUtils";

const Works = () => {
  const { config, data } = works;
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          <TextGenerateTwoColors config={config} />
        </h1>
        {/* <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10"> video version*/}
        {/* <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10"> new version  */}
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {data.map((item: ProjectInfo) => (
            <div
              // className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"  //older version
              // className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"   //new version
              className={`flex items-center justify-center sm:w-[570px] w-[80vw] ${
                item.isHalfHeight
                  ? "h-[23rem] sm:h-[32rem]"
                  : "h-[34rem] sm:h-[46rem] lg:min-h-[53rem] "
              }`} //new version
              key={item.id}
            >
              <PinContainer title={item.project} href={item.link}>
                {/* <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"> //oldver version */}
                {/* <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10"> //new version */}
                <div
                  className={`relative flex items-center justify-center mb-10 sm:w-[570px] w-[80vw] lg:w-[600px] overflow-hidden ${
                    item.isHalfHeight
                      ? "h-[12rem] sm:h-[26vh] lg:h-[26vh]"
                      : "h-[23rem] sm:h-[49vh] lg:h-[52vh]"
                  }`}
                >
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                  {item.project}
                </h1>

                {/* <h1 className="font-normal lg:text-lg md:text-xl text-base line-clamp-1">
                  {item.description}
                </h1> */}

                <p
                  className="lg:text-sm lg:font-normal font-light text-xs line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <ListIcons iconLists={item.iconLists} />
                  {item.link && (
                    <CheckLiveSite
                      link={item.link}
                      id={item.id}
                      fontColor={"text-purple"}
                      arrowColor={"#CBACF9"}
                    />
                  )}
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
