import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pictures/logo.png";
import lupa from "../assets/lupa.png";
import { BsSearch } from "react-icons/bs";
import { GiShakingHands } from 'react-icons/gi';
const Home = () => {


  return (
    <>
<<<<<<< HEAD
    <section className="w-full h-screen pt-[10vh]">
      <img  className="m-auto " src={logo} alt="" />
      <div className="w-[80%] max-w-[400px] m-auto  mt-5 ">
        <div className="flex rounded-2xl bg-[#41BCAC] shadow-[0px_10px_6px_0px_#00000024]">
        <span className="iconsHome">
        <BsSearch className="ml-auto"/>
        </span>
        <button className=" buttonsHome ">Buscar servicio </button>
        </div>
        <div className="flex shadow-[0px_10px_6px_0px_#00000024] bg-[#41BCAC] rounded-2xl mt-5">
       <span className="iconsHome">
        <GiShakingHands className="ml-auto"/>
       </span>
          <button className="buttonsHome ">Brindar servicio</button>
        </div>
      </div>
    </section>
=======
      <section className="min-h-screen w-full bg-white flex items-center font-roboto relative z-10">
        <div className="w-full absolute top-0 h-[80px]  flex items-center  px-4"></div>
        <section className=" w-full md:rounded-m px-2 md:px-3 max-w-xs m-auto flex items-center md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
          <section className="m-auto w-full">
            <div className="w-full">
              <img className="m-auto " src={logo} alt="" />
            </div>
            <div className=" pt-[6vh] text-center">
              <Link to="/search-services">
                <button
                  style={inputStyle}
                  className="w-64 h-12 mt-8 px-4 rounded-full bg-[#41BCAC] text-white ml-2 placeholder:text-white"
                >
                  Buscar Servicio
                </button>
              </Link>
              <Link to="/register">
                <button className="w-64 h-12 mt-8 px-4 rounded-full bg-[#41BCAC] text-white ml-2 placeholder:text-white">
                  Brindar Servicio
                </button>
              </Link>
            </div>
          </section>
        </section>
      </section>
>>>>>>> 1938a733e3c4681a9831a7300727bdbc21260e45
    </>
  );
};

export default Home;
