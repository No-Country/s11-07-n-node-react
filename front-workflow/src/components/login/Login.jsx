import React from "react";
import logo from "../../pictures/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <section className="h-screen w-full bg-white flex items-center font-roboto">
        <section className="h-[800px] w-full md:rounded-m px-2 md:px-3 max-w-xs m-auto flex items-center md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <section className="m-auto w-full">
            <div className="w-full">
              <img className="m-auto " src={logo} alt="" />
            </div>
            <div className=" pt-[6vh] text-center">
              <button className="actionRegister">Iniciar Sesion</button>
              {/* <button className="actionRegister">Registrate</button> */}
              <Link to="/register" className="actionRegister">
                <button className="actionRegister">Registrate</button>
              </Link>
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
                Continuar como invitado
              </button>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};
export default Login;
