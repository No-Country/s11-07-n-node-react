import React from "react";
import ViewImage from "../../assets/View-image.png";
import "./Ver.css";
import { Link } from "react-router-dom";

const Ver = () => {
  const handleClick = () => {
    localStorage.setItem("introPage", true);
  };
  return (
    // <section className="h-screen px-4 max-w-xs bg-white m-auto ">
    //   <div className="pt-28 flex flex-col justify-center items-center">
    //     <img
    //       src={ViewImage}
    //       alt="ConfirmImage"
    //       style={{ width: "253px", height: "236px" }}
    //     />
    //   </div>

    //   <div className="m-6 flex flex-col justify-center items-center font-roboto">
    //     <h1
    //       style={{
    //         fontFamily: "Roboto",
    //         fontStyle: "normal",
    //         fontWeight: "400",
    //         fontSize: "30px",
    //         lineHeight: "normal",
    //         color: "#262628",
    //         textAlign: "center",
    //         margin: "10px",
    //       }}
    //     >
    //       Ver
    //     </h1>

    //     <h3
    //       style={{
    //         fontFamily: "Roboto",
    //         fontStyle: "normal",
    //         fontSize: "17px",
    //         lineHeight: "normal",
    //         // weight: "400",
    //         color: "#262628",
    //         shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    //         textAlign: "center",
    //         margin: "10px",
    //       }}
    //     >
    //       {" "}
    //       Podrá ver a los profesionales más cercano a tu hogar{" "}
    //     </h3>
    //     <Link to="/home" className="text-center actionRegister">
    //       Comenzar
    //     </Link>
    //   </div>
    // </section>
    <>
      <section className="h-screen px-4 m-auto  max-w-xs  bg-white">
        <div className="w-full pt-[15vh]">
          <img className="m-auto w-[278px]" src={ViewImage} alt="" />
        </div>
        <div className=" pt-[6vh]">
          <h2 className="text-3xl text-center font-roboto	text-black ">Ver</h2>
          <p className=" mt-8 text-center text-black w-72 font-roboto">
            Podrá ver a los profesionales más cercano a tu hogar
          </p>
        </div>
        <div className="mt-2">
          <Link to="/login">
            <button onClick={handleClick} className="actionRegister w-full">
              Comenzar
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Ver;
