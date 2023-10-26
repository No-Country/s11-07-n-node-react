import React, { useState } from "react";
import logo from "../../pictures/logo.png";
import { useForm } from "react-hook-form";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { localUser } from "../../store/UserSlice";
import { useDispatch } from "react-redux";
import bg from "../../assets/img_WL_IS.png";
import logob from "../../assets/logo_b.png";

const LoginForm = ({ setShowFooter, setShowNavbar }) => {
  const { register, handleSubmit, reset } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    let userCredentials = {
      username: email,
      password: password,
    };
    dispatch(localUser(userCredentials));
    setEmail("");
    setPassword("");
    localStorage.setItem("user", JSON.stringify(userCredentials));
    navigate("/home");
    setShowFooter(true);
    setShowNavbar(true);
  };
  const forgetPass = () => {
    console.log("olvide mi contrase;a");
  };

  return (
    <>
      <section className="h-screen w-full bg-white flex items-center">
        <section className="lg:hidden max-w-xs px-4 m-auto  bg-white">
          <div className="w-full pt-8 ">
            <img className="m-auto  " src={logo} alt="" />
          </div>
          <form className="py-7  text-center">
            <input
              type="text"
              className="actionRegisterForm "
              placeholder="Ingresar correo o Usuario"
              {...register("email" || "user")}
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="actionRegisterForm"
              placeholder="Contraseña"
              {...register("password")}
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={forgetPass}
              className="text-xs  w-[85%] max-w-[350px] text-right"
            >
              {" "}
              ¿Haz olvidado tu contraseña?
            </button>
            <button onClick={submit} className="actionRegister">
              Iniciar sesión
            </button>
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
              <div className="w-full h-[70%] flex flex-col justify-center items-center">
                <h1 className="text-center  text-3xl text-black font-bold mb-10">
                  Inicia Seccion
                </h1>
                <div className="w-[80%] 2xl:w-[50%] m-auto">
                  <form
                    onSubmit={submit}
                    className="w-full rounded-2xl p-8  shadow shadow-black flex flex-col"
                  >
                    <label className="flex flex-col mb-3">
                      <span className="text-black font-semibold">Email</span>
                      <input
                        type="email"
                        {...register("email" || "user")}
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-4 bg-white outline-none border-gray rounded-md py-1"
                      />
                    </label>
                    <label className="flex flex-col">
                      <span className="text-black font-semibold">
                        Contraseña
                      </span>
                      <input
                        type="password"
                        {...register("password")}
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-4 bg-white outline-none border-gray rounded-md py-1"
                      />
                    </label>
                    <div className="flex justify-between mb-6">
                      <div className="">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className=" cursor-pointer"
                        />
                        <span className="ml-1">Recordar</span>
                      </div>
                      <button type="button" onClick={forgetPass}>
                        {" "}
                        ¿Haz olvidado tu contraseña?
                      </button>
                    </div>
                    <input
                      className="bg-[#41BCAC] w-min m-auto text-white py-2 px-10 rounded-md cursor-pointer"
                      type="submit"
                      value="Iniciar sesión"
                    />
                    <div className="text-center mt-4">
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
                      <p>
                        Sos nuevo?
                        <Link to="/register">
                          <span className="text-[#41BCAC] font-extrabold cursor-pointer ml-2">
                            Registrate
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

export default LoginForm;
