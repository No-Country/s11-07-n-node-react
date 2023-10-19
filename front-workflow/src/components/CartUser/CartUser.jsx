import React from "react";
import Oval from "../CartUser/iconssvg/Oval";
import Line from "../CartUser/iconssvg/Line";
import Simdoll from "./iconssvg/Simdoll";
import phun from "../../pictures/phun.png";
import { IoIosArrowForward } from "react-icons/io";
const CartUser = ({ name, ubication, distance, photo, price }) => {
  return (
    <article className="text-black bg-white my-3  h-[180px] py-2 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative ">
      <div className="orderDataCart ">
        <img className="w-[30px] mx-2" src={phun} alt="" />
        <h3>{name}</h3>
        <img
          className="w-[50px] h-[50px] rounded-full absolute right-2 top-2  "
          src={photo}
          alt=""
        />
      </div>
      <div className=" w-min ml-2 flex items-center px-4 ">
        <Line />
      </div>
      <div className="orderDataCart ">
        <span className="px-2">
          <Oval />
        </span>
        <p className="">{ubication}</p>
      </div>
      <p className="px-10 text-xs text-gray-400">{distance}</p>
      <div className="w-full h-[.5px] bg-slate-300 my-1"></div>
      <div className="orderDataCart  ">
        <Simdoll />
        <p className="px-2">{price}</p>
        <p className="ml-auto text-[#31D2DC]">siguiente </p>
        <IoIosArrowForward className="bg-black text-white ml-1 " />
      </div>
    </article>
  );
};
export default CartUser;
