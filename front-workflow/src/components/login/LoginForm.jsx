import React from "react";
import logo from "../../pictures/logo.png";
import { useForm } from "react-hook-form";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    console.log(data);
  };
  const forgetPass = () => {
    console.log("olvide mi contrase;a");
  };

  return (
    <>
      <section className="h-screen w-full bg-white flex items-center">
        <section className="h-[800px] max-w-xs px-4 m-auto  bg-white md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="w-full pt-[15vh] ">
            <img className="m-auto  " src={logo} alt="" />
          </div>
          <form onSubmit={handleSubmit(submit)} className="py-7  text-center">
            <input
              type="text"
              className="actionRegisterForm "
              placeholder="Ingresar correo o Usuario"
              {...register("email" || "user")}
              autoComplete="off"
            />
            <input
              type="text"
              className="actionRegisterForm"
              placeholder="Contraseña"
              {...register("password")}
              autoComplete="off"
            />
            <button
              type="button"
              onClick={forgetPass}
              className="text-xs  w-[85%] max-w-[350px] text-right"
            >
              {" "}
              ¿Haz olvidado tu contraseña?
            </button>
            <button className="actionRegister">Iniciar sesión</button>
            <Link to="/register">
              <button className="actionRegister">Registrate</button>
            </Link>
          </form>
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
        </section>
      </section>
    </>
  );
};

export default LoginForm;
