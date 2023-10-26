import React from "react";
import logo from "../../pictures/logo.png";
import { useForm } from "react-hook-form";
import axios from "axios";
const LoginRegister = () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    console.log(data);
    e.preventDefault();

    axios
      .post(``, userData)
      .then((res) => {
        // localStorage.setItem('user', userData.user)
        navigate("/login");
        console.log(res.data);
      })
      .catch((err) => {
        // console.log(err)
        console.log(err.response.data.error);
      });
  };
  return (
    <>
      <section className="h-screen w-full bg-white flex items-center">
        <section className="w-full max-w-xs px-4 m-auto  bg-white md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="w-full pt-8">
            <img className="m-auto " src={logo} alt="" />
          </div>

          <form className="text-center" onSubmit={handleSubmit(submit)}>
            <input
              type="text"
              className="i-register"
              placeholder="Nombre"
              {...register("nombre")}
              autoComplete="off"
            />
            <input
              type="text"
              className="i-register"
              placeholder="Apellido"
              {...register("apellido")}
              autoComplete="off"
            />
            <input
              type="text"
              className="i-register"
              placeholder="Ciudad"
              {...register("ciudad")}
              autoComplete="off"
            />
            <input
              type="text"
              className="i-register"
              placeholder="Numero de telefono"
              {...register("numero")}
              autoComplete="off"
            />
            <input
              type="email"
              className="i-register"
              placeholder="Email"
              {...register("email")}
              autoComplete="off"
            />
            <input
              type="password"
              className="i-register"
              placeholder="Contraseña"
              {...register("pass")}
              autoComplete="off"
            />
            <button className="actionRegister ">Finalizar</button>
          </form>
        </section>
      </section>
    </>
  );
};

export default LoginRegister;
