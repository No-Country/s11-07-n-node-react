import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pictures/logo.png";
import { BsSearch } from "react-icons/bs";
import { GiShakingHands } from "react-icons/gi";
const Home = () => {
  return (
    <>
      <section className="w-full h-screen pt-[10vh]">
        <img className="m-auto " src={logo} alt="" />
        <div className="w-[80%] max-w-[400px] m-auto  mt-16 ">
          <div className="flex rounded-2xl bg-[#41BCAC] shadow-[0px_10px_6px_0px_#00000024]">
            <span className="iconsHome">
              <BsSearch className="ml-auto" />
            </span>
            <Link to="/search-services">
              <button className=" buttonsHome ">Buscar servicio </button>
            </Link>
          </div>
          <div className="flex shadow-[0px_10px_6px_0px_#00000024] bg-[#41BCAC] rounded-2xl mt-5">
            <span className="iconsHome">
              <GiShakingHands className="ml-auto" />
            </span>
            <Link to="/search-services">
              <button className="buttonsHome ">Brindar servicio</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
