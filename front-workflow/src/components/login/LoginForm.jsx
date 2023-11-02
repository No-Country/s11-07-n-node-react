import React, { useEffect, useState } from "react";
import logo from "../../pictures/logo.png";
import { useForm } from "react-hook-form";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { localUser, loginUser } from "../../store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import bg from "../../assets/img_WL_IS.png";
import logob from "../../assets/logo_b.png";
import Success from "../Success/Success";

const LoginForm = ({ setShowFooter, setShowNavbar }) => {
  const { register, handleSubmit, reset } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    let userCredentials = {
      email: email,
      password: password,
    };
    // PARA PROBAR SIN CONECTAR AL BACK
    // dispatch(localUser(userCredentials));
    // setEmail("");
    // setPassword("");
    // localStorage.setItem("user", JSON.stringify(userCredentials));
    // navigate("/home");
    // setShowFooter(true);
    // setShowNavbar(true);

    // PARA USAR CONECTADO AL BACK
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        localStorage.setItem("user", JSON.stringify(userCredentials));
        navigate("/home");
        setShowFooter(true);
        setShowNavbar(true);
      } else {
        console.log("Error al logear");
      }
    });
  };
  const forgetPass = () => {
    // console.log("olvide mi contrase;a");
  };

  return (
    <>
      {loading && (
        <div className="bg-white">
          <span className="p-2 text-[#000] blur-0 loading loading-spinner loading-lg absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></span>
        </div>
      )}
      <section
        className={`h-screen w-full bg-white flex items-center ${
          loading && "bg-[rgba(0,0,0,0.2)] blur-sm"
        }`}
      >
        <section className="lg:hidden max-w-xs px-4 m-auto  ">
          <div className="w-full pt-8 ">
            <img className="m-auto  " src={logo} alt="" />
          </div>
          <form className="py-7  text-center">
            <input
              type="email"
              className="actionRegisterForm "
              placeholder="Ingresar correo o Usuario"
              // {...register("email" || "user")}
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="actionRegisterForm"
              placeholder="Contraseña"
              // {...register("password")}
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
              {loading ? "Cargando..." : "Iniciar Sesión"}
              {/* Iniciar sesión */}
            </button>
            {error && (
              <p className="text-red-600">Usuario o contaseña incorrectas</p>
            )}
            <Link to="/register">
              <button className="actionRegister">Registrate</button>
            </Link>
          </form>
          <div className="flex my-8 text-xl w-full justify-center gap-10">
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
                        // {...register("email" || "user")}
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
                        // {...register("password")}
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
