import React from "react";

import { workExperienceCards } from "@/data";
import CardList from "./ui/CardList";

const Experience = () => {
  return (
    <section id="experience">
      <CardList
        cardList={workExperienceCards}
      ></CardList>
    </section>
  );
};

export default Experience;
