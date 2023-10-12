import React from "react";
import logo from "../../pictures/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
const Login = () => {
  return (
    <>
      <section className="h-screen px-4 bg-white m-auto ">
        <div className="w-full pt-[15vh]">
          <img className="m-auto " src={logo} alt="" />
        </div>
        <div className=" pt-[6vh]">
          <button className="actionRegister">iniciar sesion</button>
          <button className="actionRegister">Registrate</button>
          <div className="flex my-8 text-xl w-full justify-center gap-10  ">
            <span className="">
              <FcGoogle />
            </span>
            <span>
              <BsFacebook className="text-sky-600" />
            </span>
            <span>
              {" "}
              <BsApple className="text-black" />{" "}
            </span>
          </div>
          <button className=" w-full text-center text-black ">
            continuar como invitado
          </button>
        </div>
      </section>
    </>
  );
};
export default Login;
