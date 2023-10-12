import React, { useState } from "react";
import WorkFlow from "./WorkFlow.jsx";
import Confirm from "./Confirm.jsx";
import Ver from "./Ver.jsx";

const Carousel = () => {
  const [viewSelected, setViewSelected] = useState(1);
  return (
    <div className="h-screen bg-white">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <WorkFlow />
        </div>
        <div id="item2" className="carousel-item w-full">
          <p>En construcción</p>
        </div>
        <div id="item3" className="carousel-item w-full">
          <Confirm />
        </div>
        <div id="item4" className="carousel-item w-full">
          <Ver />
        </div>
      </div>
      <div className="flex justify-center w-full mt-[-50px]">
        <a
          href="#item1"
          onClick={() => setViewSelected(1)}
          className={`${
            viewSelected === 1 ? "bg-[#29103A]" : "bg-transparent"
          } w-10 h-2 rounded-lg shadow-2xl`}
        ></a>
        <a
          href="#item2"
          onClick={() => setViewSelected(2)}
          className={`${
            viewSelected === 2 ? "bg-[#29103A]" : "bg-transparent"
          } w-10 h-2 rounded-lg shadow-2xl`}
        ></a>
        <a
          href="#item3"
          onClick={() => setViewSelected(3)}
          className={`${
            viewSelected === 3 ? "bg-[#29103A]" : "bg-transparent"
          } w-10 h-2 rounded-lg shadow-2xl`}
        ></a>
        <a
          href="#item4"
          onClick={() => setViewSelected(4)}
          className={`${
            viewSelected === 4 ? "bg-[#29103A]" : "bg-transparent"
          } w-10 h-2 rounded-lg shadow-2xl`}
        ></a>
      </div>
    </div>
  );
};

export default Carousel;
