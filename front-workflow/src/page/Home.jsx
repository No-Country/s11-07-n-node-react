import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../pictures/logo.png";
import lupa from "../assets/lupa.png";
import Footer from "../components/Footer/Footer";
import { IoIosNotifications } from "react-icons/io";
import Notification from "../components/Notifications/Notification";

const Home = () => {
  const navigate = useNavigate();

  const inputStyle = {
    backgroundImage: `url(${lupa})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px center",
    paddingLeft: "60px",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen w-full bg-white flex items-center font-roboto relative z-10">
        <div className="w-full absolute top-0 h-[80px]  flex items-center  px-4">
          <button onClick={() => setIsOpen(!isOpen)} className="ml-auto">
            <IoIosNotifications className=" text-3xl text-[#41BCAC]" />
          </button>
        </div>
        <section className=" w-full md:rounded-m px-2 md:px-3 max-w-xs m-auto flex items-center md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
          <section className="m-auto w-full">
            <div className="w-full">
              <img className="m-auto " src={logo} alt="" />
            </div>
            <div className=" pt-[6vh] text-center">
              <Link to="/professionalfilter">
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
              {/* <Footer /> */}
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
