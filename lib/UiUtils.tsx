import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { cn } from "./utils";

export const ListIcons = ({ iconLists }: { iconLists: string[] }) => {
  return (
    <>
      <div className="flex items-center">
        {iconLists.map((icon: string, index: number) => (
          <div
            key={index}
            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
            style={{
              transform: `translateX(-${5 * index + 2}px)`,
            }}
          >
            <img src={icon} alt="icon5" className="p-2" />
          </div>
        ))}
      </div>
    </>
  );
};

export const CheckLiveSite = ({
  caption = "Check Live Site",
  link,
  id,
  fontColor,
  arrowColor,
}: {
  caption?: string;
  link: string;
  id: number;
  fontColor: string;
  arrowColor: string;
}) => {
  return (
    <>
      <div className="flex justify-right items-right">
        <a
          className="flex items-center"
          href={link}
          key={id}
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          <span className={cn("flex lg:text-l md:text-xs text-sm", fontColor)}>
            {caption}
          </span>
          <FaLocationArrow className="ms-3" color={arrowColor} />
        </a>
      </div>
    </>
  );
};
