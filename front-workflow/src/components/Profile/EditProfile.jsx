import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const EditProfile = () => {
    const [isFormExpanded, setIsFormExpanded] = useState(true);

    const toggleForm = () => {
        setIsFormExpanded(!isFormExpanded);
    };

    return (
        <div className="h-screen flex justify-center items-start">
            <div className="bg-white p-4 rounded-lg w-80">
                <div className="flex items-center space-x-6 mb-[5rem] pt-10">
                    <span onClick={toggleForm} className="cursor-pointer text-[#41BCAC]">
                        <FaArrowLeft />
                    </span>
                    <h1 className="text-2xl font-bold text-black">Editar perfil</h1>
                </div>
                {isFormExpanded && (
                    <form>
                        <div class=" bg-white text-xs ">
                            <div class="flex items-center justify-between mb-3 bg-slate-100 ">
                                <label class="text-gray-700 font-bold pl-2" for="nivel">
                                    Nivel
                                </label>
                                <div class="relative">
                                    <select class="bg-slate-100  appearance-none cursor-pointer rounded
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline pr-8" id="nivel">
                                        <option>Gold</option>
                                        <option>Medio</option>
                                        <option>Básico</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/1000/svg"
                                            viewBox="0 0 20 20">
                                            <path d="M10 12l5-6H5l5 6z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full p-1 bg-slate-50 ">
                                <div class="flex items-center justify-between mb-1 bg-slate-100 ">
                                    <label class="text-gray-700 font-bold pl-2" for="nombre">
                                        Nombre
                                    </label>
                                    <input class="
                                    bg-slate-100 text-right  appearance-none  rounded 
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline w-1/2 " id="nombre"
                                        type="text" placeholder="Nombre Apellido" />
                                </div>
                                <div class="flex items-center justify-between mb-1 bg-slate-100">
                                    <label class="text-gray-700 font-bold pl-2" for="email">
                                        Email
                                    </label>
                                    <input class="bg-slate-100 text-right  appearance-none  rounded
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline " id="email" type="email"
                                        placeholder="ejemplo@gmail.com" />
                                </div>
                                <div class="flex items-center justify-between mb-1 bg-slate-100">
                                    <label class="text-gray-700 font-bold pl-2" for="fechaNacimiento">
                                        Fecha de nacimiento
                                    </label>
                                    <input class="bg-slate-100 text-right  appearance-none  rounded
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline w-1/2" id="fechaNacimiento" type="date"
                                        placeholder="dd/mm/aaaa" />
                                </div>
                                <div class="flex items-center justify-between mb-1 bg-slate-100">
                                    <label class="text-gray-700 font-bold pl-2" for="numeroTelefono">
                                        Número de teléfono
                                    </label>
                                    <input class="bg-slate-100 text-right  appearance-none  rounded
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline w-1/2" id="numeroTelefono" type="tel"
                                        placeholder="+92 1234567890" />
                                </div>
                                <div class="flex items-center justify-between mb-1 bg-slate-100">
                                    <label class="text-gray-700 font-bold pl-2" for="pais">
                                        País
                                    </label>
                                    <input class="bg-slate-100 text-right  appearance-none  rounded 
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline w-1/2" id="pais" type="text"
                                        placeholder="Argentina" />
                                </div>
                                <div class="flex items-center justify-between mb-1 bg-slate-100">
                                    <label class="text-gray-700 font-bold pl-2" for="contraseña">
                                        Contraseña
                                    </label>
                                    <input class="bg-slate-100 text-right  appearance-none  rounded 
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline w-1/2" id="contraseña" type="password"
                                        placeholder="••••••••" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-[#41BCAC] shadow-bottom-black text-white text-base rounded-[24px] w-[220px] h-[40px] mt-4">
                                CONFIRMAR DATOS
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default EditProfile;
