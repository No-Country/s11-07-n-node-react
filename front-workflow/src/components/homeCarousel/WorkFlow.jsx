import React from "react";
import FondoWorkflow from "../../assets/FondoWorkflow.png";
import Workflow from "../../assets/Workflow.png";

const WorkFlow = () => {
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${FondoWorkflow})`,
        backgroundSize: "cover",
      }}
    >
      <img src={Workflow} alt="Workflow" />
    </div>
  );
};

export default WorkFlow;
