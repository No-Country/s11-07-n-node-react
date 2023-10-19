import React from "react";
import myImage from "../../pictures/Confirm-image.png";

const Confirm = () => {
  return (
    <>
      <section className="h-screen px-4 m-auto  max-w-xs  bg-white">
        <div className="w-full pt-[15vh]">
          <img className="m-auto w-[278px]" src={myImage} alt="" />
        </div>
        <div className=" pt-[6vh]">
          <h2 className="text-3xl text-center font-roboto	text-black ">
            Confirme
          </h2>
          <p className=" mt-8 text-center text-black w-72 font-roboto">
            Una enorme red de profesionales te ayudará con tus labores
          </p>
        </div>
      </section>
    </>
  );
};
export default Confirm;
