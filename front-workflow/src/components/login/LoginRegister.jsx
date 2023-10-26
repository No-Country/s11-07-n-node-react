import React from "react";
import logo from "../../pictures/logo.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import bg from "../../assets/img_WL_IS.png";
import logob from "../../assets/logo_b.png";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
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
        <section className="lg:hidden w-full max-w-xs px-4 m-auto  bg-white md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
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
        <section className="hidden lg:block w-full">
          <div className="flex">
            <div className="w-[50%] relative">
              <img
                src={bg}
                alt=""
                className="object-fill object-center w-full h-screen"
              />
              <img
                src={logob}
                alt=""
                className="absolute top-12 left-[42%] w-28"
              />
            </div>
            <div className="w-[50%] m-auto">
              <div className="w-full h-[90%] flex flex-col justify-center items-center">
                <h1 className="text-center  text-3xl text-black font-bold mb-5">
                  Registrarse
                </h1>
                <div className="w-[80%] 2xl:w-[50%] m-auto">
                  <form
                    onSubmit={handleSubmit(submit)}
                    className="w-full rounded-2xl p-4  shadow shadow-black flex flex-col"
                  >
                    <div className="flex justify-between w-full">
                      <label className="flex flex-col mb-2 w-[48%]">
                        <span className="text-black font-semibold">
                          Apellido
                        </span>
                        <input
                          type="text"
                          {...register("apellido")}
                          autoComplete="off"
                          className="border-4 bg-white outline-none border-gray rounded-md py-1 "
                        />
                      </label>
                      <label className="flex flex-col mb-2 w-[48%]">
                        <span className="text-black font-semibold">Nombre</span>
                        <input
                          type="text"
                          {...register("nombre")}
                          autoComplete="off"
                          className="border-4 bg-white outline-none border-gray rounded-md py-1"
                        />
                      </label>
                    </div>
                    <label className="flex flex-col mb-2">
                      <span className="text-black font-semibold">Email</span>
                      <input
                        type="text"
                        {...register("email")}
                        autoComplete="off"
                        className="border-4 bg-white outline-none border-gray rounded-md py-1"
                      />
                    </label>
                    <label className="flex flex-col mb-2">
                      <span className="text-black font-semibold">
                        Numero de teléfono
                      </span>
                      <input
                        type="text"
                        {...register("numero")}
                        autoComplete="off"
                        className="border-4 bg-white outline-none border-gray rounded-md py-1"
                      />
                    </label>
                    <label className="flex flex-col mb-2">
                      <span className="text-black font-semibold">
                        Contraseña
                      </span>
                      <input
                        type="text"
                        {...register("pass")}
                        autoComplete="off"
                        className="border-4 bg-white outline-none border-gray rounded-md py-1"
                      />
                    </label>
                    <label className="flex flex-col mb-2">
                      <span className="text-black font-semibold">
                        Confirmar contraseña
                      </span>
                      <input
                        type="text"
                        autoComplete="off"
                        className="border-4 bg-white outline-none border-gray rounded-md py-1"
                      />
                    </label>
                    <div className="flex mb-4">
                      <div className="">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className=" cursor-pointer"
                        />
                        <span className="ml-1 text-xs">
                          He leído y acepto los términos de servicio y nuestra
                          politica de privacidad
                        </span>
                      </div>
                    </div>
                    <input
                      className="bg-[#41BCAC] w-min m-auto text-white py-2 px-10 rounded-md cursor-pointer"
                      type="submit"
                      value="Registrarse"
                    />
                    <div className="text-center mt-4">
                      <div className="hidden xl:block">
                        <p>Seguir con</p>
                        <div className="flex my-8 text-xl w-full justify-center gap-10  ">
                          <span className="cursor-pointer">
                            <FcGoogle />
                          </span>
                          <span>
                            <BsFacebook className="text-sky-600 cursor-pointer" />
                          </span>
                          <span>
                            {" "}
                            <BsApple className="text-black cursor-pointer" />{" "}
                          </span>
                        </div>
                      </div>
                      <p>
                        '¿Ya tenés una cuenta?
                        <Link to="/login">
                          <span className="text-[#41BCAC] font-extrabold cursor-pointer ml-2">
                            Iniciar sesión
                          </span>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default LoginRegister;
