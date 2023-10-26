import React, { useState } from "react";
import Logo from "../pictures/logo.png";
import { FaCheckCircle } from "react-icons/fa";

const ProvideService = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        phone: "",
        email: "",
        service: "",
    });

    // Estado para controlar la visibilidad del modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Manejar cambios en los campos de entrada
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        // Actualiza el estado con los nuevos valores del campo cambiado
        setFormData({ ...formData, [id]: value });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Abre el modal de éxito
        setIsModalOpen(true);
    };

    // Cancelar el modal de éxito
    const cancelModal = () => {
        // Cierra el modal de éxito
        setIsModalOpen(false);
    };

    // Cerrar el modal de éxito
    const closeModal = () => {
        // Cierra el modal de éxito
        setIsModalOpen(false);
    };

    // Función para guardar los datos en una base de datos (aquí, solo se muestra en la consola)
    const saveDataToDatabase = () => {
        // Aquí puedes enviar los datos a una base de datos
        // En este caso, solo los mostraremos en la consola
        console.log("Datos guardados:", formData);
    };
    return (
        <section className="h-screen px-4 m-auto max-w-xs bg-white">
            <div>
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
                                className="bg-[#41BCAC] shadow-bottom-black text-white text-base rounded-[18px] 
                                w-[180px] h-[35px] text-[15px] transition-transform transform hover:scale-105"
                            >
                                CONFIRMAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/*Fondo oscurecido cuando se muestra el modal*/}
            {isModalOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" />}
            
            {/*Ventana emergente*/}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 pb-1 shadow-md flex flex-col">
                        <div className="flex flex-col items-center">
                            <span className="text-center mb-4 text-[#41BCAC]" style={{ fontSize: '90px' }}>
                                <FaCheckCircle />
                            </span>

                            <p className="text-[#41BCAC] text-2xl font-bold mb-2">Realizado con éxito</p>
                            <p>¡Mantén activas las notificaciones!</p>
                        </div>
                        <div className="flex justify-end mt-auto">
                            <button
                                onClick={cancelModal}
                                className=" text-[#3f3f3f] p-6 pb-1 hover:text-[#3e9e92] mr-4"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => {
                                    closeModal();
                                    saveDataToDatabase();
                                }}
                                className=" text-[#41BCAC] p-6 pb-1 hover:text-[#3f3f3f]"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProvideService;
