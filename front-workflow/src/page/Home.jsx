import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../pictures/logo.png";
import lupa from "../assets/lupa.png";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const navigate = useNavigate();

  const inputStyle = {
    backgroundImage: `url(${lupa})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px center",
    paddingLeft: "60px",
  };
  return (
    <>
      <section className="min-h-screen w-full bg-white flex items-center font-roboto">
        <section className=" w-full md:rounded-m px-2 md:px-3 max-w-xs m-auto flex items-center md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
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
