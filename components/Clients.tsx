"use client";

import React from "react";

import { clients, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { TextGenerateTwoColors } from "./ui/TextGenerateEffect";

const Clients = () => {
  const { config, data } = clients;

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        <TextGenerateTwoColors
          config = {config}
        ></TextGenerateTwoColors>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {data.map((client) => (
            <React.Fragment key={client.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={client.img}
                  alt={client.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={client.nameImg}
                  alt={client.name}
                  width={client.id === 4 || client.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
