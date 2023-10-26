import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import imagenTop from "../../assets/ImagenTop.png";


const EditProfile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="h-screen px-4 m-auto  max-w-xs  bg-white">
      <div className="w-full absolute -top-2 max-w-xs">
        <img className="w-full" src={imagenTop} alt="" />
      </div>

      <div className="bg-white p-4 rounded-lg w-80">
        <div className="flex items-center space-x-6 mb-[5rem] pt-10">
          <span onClick={handleBack} className="cursor-pointer z-10 text-white">
            <FaArrowLeft />
          </span>
          <h1 className="text-2xl font-bold text-white z-10">Editar perfil</h1>
        </div>
        <form>
          <div className="flex items-center justify-between mb-3 relative z-1 bg-slate-100">
            <label className="text-gray-700 font-bold pl-2" htmlFor="nivel">
              Nivel
            </label>
            <div className="relative">
              <select
                className="bg-slate-100  appearance-none cursor-pointer rounded
                                py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                focus:-outline pr-8"
                id="nivel"
              >
                <option>Gold</option>
                <option>Medio</option>
                <option>Básico</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/1000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l5-6H5l5 6z" />
                </svg>
              </div>
            </div>
          </div>
          <div className=" bg-white text-xs relative">
            <div className="w-full p-1 bg-slate-50 ">
              <div className="flex items-center justify-between mb-1 bg-slate-100 ">
                <label className="text-gray-700 font-bold pl-2" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="
                                    bg-slate-100 text-right  appearance-none  rounded 
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline w-1/2 "
                  id="nombre"
                  type="text"
                  placeholder="Nombre Apellido"
                />
              </div>
              <div className="flex items-center justify-between mb-1 bg-slate-100">
                <label className="text-gray-700 font-bold pl-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="bg-slate-100 text-right  appearance-none  rounded
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline "
                  id="email"
                  type="email"
                  placeholder="ejemplo@gmail.com"
                />
              </div>
              <div className="flex items-center justify-between mb-1 bg-slate-100">
                <label
                  className="text-gray-700 font-bold pl-2"
                  htmlFor="fechaNacimiento"
                >
                  Fecha de nacimiento
                </label>
                <input
                  className="bg-slate-100 text-right  appearance-none  rounded
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline w-1/2"
                  id="fechaNacimiento"
                  type="date"
                  placeholder="dd/mm/aaaa"
                />
              </div>
              <div className="flex items-center justify-between mb-1 bg-slate-100">
                <label
                  className="text-gray-700 font-bold pl-2"
                  htmlFor="numeroTelefono"
                >
                  Número de teléfono
                </label>
                <input
                  className="bg-slate-100 text-right  appearance-none  rounded
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline w-1/2"
                  id="numeroTelefono"
                  type="tel"
                  placeholder="+92 1234567890"
                />
              </div>
              <div className="flex items-center justify-between mb-1 bg-slate-100">
                <label className="text-gray-700 font-bold pl-2" htmlFor="pais">
                  País
                </label>
                <input
                  className="bg-slate-100 text-right  appearance-none  rounded 
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline w-1/2"
                  id="pais"
                  type="text"
                  placeholder="Argentina"
                />
              </div>
              <div className="flex items-center justify-between mb-1 bg-slate-100">
                <label className="text-gray-700 font-bold pl-2" htmlFor="contraseña">
                  Contraseña
                </label>
                <input
                  className="bg-slate-100 text-right  appearance-none  rounded 
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline w-1/2"
                  id="contraseña"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#41BCAC] shadow-bottom-black text-white text-base rounded-[24px] w-[220px] h-[40px] mt-4"
            >
              CONFIRMAR DATOS
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProfile;
