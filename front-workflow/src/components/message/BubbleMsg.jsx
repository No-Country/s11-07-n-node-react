import React from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const BubbleMsg = ({ own, msg }) => {
  return (
    <div>
      <div
        className={` ${own ? "text-end" : "text-start"} ${
          own ? "text-white" : "text-black"
        } mr-3`}
      >
        <div
          className={`${
            own ? "bg-[#41BCAC]" : "bg-[#DADADA]"
          } inline-block shadow-md p-2 rounded-md max-w-[200px]`}
        >
          {msg}
        </div>
        <div
          className={`flex ${own ? "justify-end" : "justify-start"} mt-[-6px]`}
        >
          <div>
            <span className={`${own ? "bg-[#41BCAC]" : "bg-[#DADADA]"}`}>
              <TbTriangleInvertedFilled
                color={`${own ? "#41BCAC" : "#DADADA"}`}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleMsg;
