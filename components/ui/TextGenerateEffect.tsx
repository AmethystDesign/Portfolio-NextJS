"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { TitleConfig } from "@/types/customTypes";

export const TextGenerateEffect = ({
  words,
  className,
  secondFontColorIndexList,
  fontColors,
}: {
  words: string;
  className?: string;
  secondFontColorIndexList: number[];
  fontColors: string[];
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    // console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change the text color to second color defined in the array
              className={` ${secondFontColorIndexList.includes(idx) ? fontColors[0] : fontColors[1]
                } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export const TextGenerateTwoColors = ({ config }: { config:  TitleConfig }) => {
  const wordsArray = config.title.split(" ");

  const twoColorsWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
        return(
          <span
            key={word + idx}
            className={` ${config.secondFontColorIndexList.includes(idx) ? config.fontColors[0] : config.fontColors[1]}`}
          >
            {word}{" "}
          </span>
        );
      })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", config.className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {twoColorsWords()}
        </div>
      </div>
    </div>
  );
};
