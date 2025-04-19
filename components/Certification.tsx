import React from "react";

import { certificationCards } from "@/data";
import CardList from "./ui/CardList";

const Certification = () => {
  return (
    <section id="certifications">
      <CardList
        cardList={certificationCards}
      ></CardList>
    </section>
  );
};

export default Certification;
