import React from "react";
import logo from "../../pictures/logo.png";
import { useForm } from "react-hook-form";
const LoginRegister = () => {

  const {register,handleSubmit,reset}=useForm()

  const submit=(data)=>{
    console.log(data)
  }
  return (
    <>
      <section className="h-screen max-w-xs px-4 m-auto  bg-white">
        <div className="w-full pt-[10vh]">
          <img className="m-auto " src={logo} alt="" />
        </div>

        <form 
        className="text-center"
        onSubmit={handleSubmit(submit)}>
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
    </>
  );
};

export default LoginRegister;
