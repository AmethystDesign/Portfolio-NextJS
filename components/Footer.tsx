import { FaLocationArrow } from "react-icons/fa6";

import { footerInfo, heroInfo, socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { TextGenerateEffect, TextGenerateTwoColors } from "./ui/TextGenerateEffect";

const mailto = "mailto:" + heroInfo.email;

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <TextGenerateTwoColors
            words={footerInfo.question}
            className={footerInfo.className}
            secondFontColorIndexList={footerInfo.secondFontColorIndexList}
            fontColors={footerInfo.fontColors}
            ></TextGenerateTwoColors>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">{footerInfo.suggestion}</p>
        <a href={mailto}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex align-middle gap-3">
          <span>Copyright © {heroInfo.publishDate}</span>
          <img src={heroInfo.iconUrl} alt={heroInfo.organization} width={20} height={20} />
          <span>{heroInfo.organization}</span>
        </div>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href={info.url} key={info.id}>
              <div
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
              </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
