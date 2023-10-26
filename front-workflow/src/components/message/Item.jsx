import React from "react";
import { Link } from "react-router-dom";

const Item = ({ name, message, imgURL }) => {
  // const newMessage =
  return (
    <Link to={name}>
      <div className="bg-white flex flex-row gap-5 p-4 shadow-md">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={imgURL} />
          </div>
        </div>
        <div className="flex flex-col justify-evenly center items-start">
          <div className="text-black">{name}</div>
          <div className="truncate">{message}</div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
