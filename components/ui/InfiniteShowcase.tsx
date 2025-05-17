"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { CheckLiveSite, ListIcons } from "../../lib/UiUtils";
import { ProjectInfo, ShowcaseLayoutSetting } from "@/types/customTypes";

export const InfiniteMovingCases = ({
  items,
  layoutSetting,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: ProjectInfo[];
  layoutSetting: ShowcaseLayoutSetting;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const { boardClassName } = layoutSetting;
  return (
    <>
      <div
        ref={containerRef}
        className={cn(
          // max-w-7xl to w-screen
          "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            // change gap-16
            " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
              className={cn(
                "w-[60vw] max-w-[60vw] relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-3 md:p-16",
                boardClassName
              )}
              style={{
                //   background:
                //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
              // change to idx cuz we have the same name
              key={idx}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <div className="relative z-20 mt-1 flex flex-row items-center gap-2">
                  {/* add this div for the profile img */}
                  <div className="me-1">
                    <img
                      src={item.img}
                      width={layoutSetting.imgMaxSize[0]}
                      height={layoutSetting.imgMaxSize[1]}
                      alt={item.img}
                    />
                  </div>
                  {/* <div className="flex flex-col gap-1">
                    {/* change text color, text-lg */}
                  {/*<p className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                      {item.project}
                    </p>
                  </div> */}
                  <div className="flex flex-col gap-1">
                    {/* change text color, font-normal to font-bold, text-xl */}
                    <p className="text-xl font-bold leading-[1.6] text-white">
                      {item.project}
                      <br />
                    </p>
                    {/* change text color */}
                    <p
                      className={cn(
                        " text-sm leading-[1.6] text-white-200 font-normal ",
                        layoutSetting.descWidth
                      )}
                    >
                      {item.description}
                      <br />
                    </p>
                    <ListIcons iconLists={item.iconLists} />
                    <br />
                    <CheckLiveSite
                      // caption="Goto site"
                      link={item.link}
                      id={item.id}
                      fontColor={"text-purple"}
                      arrowColor={"#CBACF9"}
                    />
                  </div>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
