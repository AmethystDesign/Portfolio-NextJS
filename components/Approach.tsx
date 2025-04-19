import React from "react";

import { approachSteps } from "@/data";
import ApproachStepList from "./ui/ApproachSteps";

const Approach = () => {
  return (
    <section className="w-full py-20" id="approach">
      <ApproachStepList 
        stepList={approachSteps}
      ></ApproachStepList>
    </section>
  );
};

export default Approach;
