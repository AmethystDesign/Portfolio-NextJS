"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { workExperiences } from "@/data";
import { PinContainer } from "./ui/Pin";
import { TextGenerateTwoColors } from "./ui/TextGenerateEffect";
import { ExperienceItem } from "@/types/customTypes";
import { CheckLiveSite, ListIcons } from "@/lib/UiUtils";

const WorkExperience = () => {
  const { config, data } = workExperiences;
  return (
    <section id="workExperience">
      <div className="py-20">
        <h1 className="heading">
          <TextGenerateTwoColors config={config} />
        </h1>
        {/* <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10"> video version*/}
        {/* <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10"> new version  */}
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {data.map((item: ExperienceItem) => (
            <div
              // className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"  //older version
              // className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"   //new version
              className="sm:h-[41rem] h-[32rem] lg:min-h-[48.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]" //new version
              key={item.id}
            >
              <PinContainer title={item.company} href={item.link}>
                {/* <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"> //oldver version */}
                {/* <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10"> //new version */}
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
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
                  {item.company}
                </h1>

                <h1 className="font-normal lg:text-lg md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.responsibility}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <ListIcons iconLists={item.iconLists} />
                  {/* <div className="flex items-center">
                    {item.iconLists.map((icon: string, index: number) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img
                          src={icon}
                          alt="icon"
                          // width={"20px"}
                          // height={"20px"}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div> */}
                  <CheckLiveSite
                    link={item.link}
                    id={item.id}
                    fontColor={"text-purple"}
                    arrowColor={"#CBACF9"}
                  />
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
