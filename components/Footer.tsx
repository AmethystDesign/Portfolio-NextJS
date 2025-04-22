import { FaLocationArrow } from "react-icons/fa6";

import { footerInfo } from "@/data";
import MagicButton from "./MagicButton";
import { TextGenerateTwoColors } from "./ui/TextGenerateEffect";

const Footer = () => {
  const { config, builder } = footerInfo;
  const mailto = "mailto:" + builder.email;
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
          <TextGenerateTwoColors config={config} />
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {builder.desc}
        </p>
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
          <span>Copyright © {builder.publishDate}</span>
          <img
            src={builder.iconUrl}
            alt={builder.organization}
            width={20}
            height={20}
          />
          <span>{builder.organization}</span>
        </div>
        <div className="flex items-center md:gap-3 gap-6">
          {footerInfo.socialMedia.map((info) => (
            <a
              href={info.url}
              key={info.id}
              rel={"noopener noreferrer"}
              target={"_blank"}
            >
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
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
