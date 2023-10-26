import React from "react";

const BubbleMsg = ({ position, msg, color }) => {
  return (
    <div>
      <div
        className={`text-${position} ${
          position === "start" ? "text-black" : "text-white"
        }`}
      >
        <div className={`${color} inline-block shadow-md p-2 rounded-md`}>
          {msg}
        </div>
      </div>
    </div>
  );
};

export default BubbleMsg;
