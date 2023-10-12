import React from "react";
import WorkFlow from "./WorkFlow.jsx";

const Carousel = () => {
  return (
    <div className="h-screen bg-white">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <WorkFlow />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://picsum.photos/200"
            className="w-[100vw] h-[100vh]"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://picsum.photos/200"
            className="w-[100vw] h-[100vh]"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://picsum.photos/200"
            className="w-[100vw] h-[100vh]"
          />
        </div>
      </div>
      <div className="flex justify-center w-full mt-[-50px] gap-2">
        <a href="#item1" className="btn btn-xs">
          -
        </a>
        <a href="#item2" className="btn btn-xs">
          -
        </a>
        <a href="#item3" className="btn btn-xs">
          -
        </a>
        <a href="#item4" className="btn btn-xs">
          -
        </a>
      </div>
    </div>
  );
};

export default Carousel;
