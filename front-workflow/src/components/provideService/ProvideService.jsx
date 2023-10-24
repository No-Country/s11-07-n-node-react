import React, { useState } from "react";
import Logo from "../../pictures/logo.png";
import { IoMdNotifications } from "react-icons/io";

const ProvideService = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        phone: "",
        email: "",
        service: "",
    });

    // Función para manejar cambios en los campos de entrada
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        // Actualiza el estado con los nuevos valores del campo cambiado
        setFormData({ ...formData, [id]: value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes acceder a formData y realizar la lógica para guardar o procesar los datos.
        console.log(formData);
    };

    return (
        <section className="h-screen px-4 m-auto max-w-xs bg-white">
            <div>
                <div className="text-[#41BCAC] mt-8 text-2xl cursor-pointer float-right">
                    <IoMdNotifications />
                </div>
                <div className="w-[70px] m-auto pt-14">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="w-full p-1 mt-6 bg-slate-100 rounded-lg shadow-xl text-xs">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col bg-slate-100 mb-1">
                            <label className="text-gray-700 pl-2" htmlFor="name">
                                Nombre y apellido
                            </label>
                            <input
                                className="bg-white appearance-none rounded py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:-outline"
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col bg-slate-100 mb-1">
                            <label className="text-gray-700 pl-2" htmlFor="gender">
                                Género
                            </label>
                            <div className="relative">
                                <select
                                    className="bg-white appearance-none rounded py-2 px-3 cursor-pointer
                                    text-gray-700 leading-tight focus:outline-none focus:-outline w-full"
                                    id="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                >
                                    <option value=""></option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col bg-slate-100 mb-1">
                            <label className="text-gray-700 pl-2" htmlFor="phone">
                                Número de teléfono
                            </label>
                            <input
                                className="bg-white appearance-none rounded py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:-outline"
                                id="phone"
                                type="text"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col bg-slate-100 mb-1">
                            <label className="text-gray-700 pl-2" htmlFor="email">
                                Correo electrónico
                            </label>
                            <input
                                className="bg-white appearance-none rounded py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:-outline"
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col bg-slate-100 mb-1">
                            <label className="text-gray-700 pl-2" htmlFor="service">
                                Servicio a brindar
                            </label>
                            <input
                                className="bg-white appearance-none rounded py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:-outline"
                                id="service"
                                type="text"
                                value={formData.service}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex justify-center p-4">
                            <button
                                type="submit"
                                className="bg-[#41BCAC] shadow-bottom-black text-white text-base rounded-[18px] w-[180px] h-[35px] text-[15px] transition-transform transform hover:scale-105"
                            >
                                CONFIRMAR
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProvideService;
