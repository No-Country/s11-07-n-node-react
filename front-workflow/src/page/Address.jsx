import React, { useState } from "react";
import flecha from "../assets/flecha.png";
import Footer from "../components/Footer/Footer";
import signomas from "../assets/signomas.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const [direccion, setDireccion] = useState("");
  const [direccionesGuardadas, setDireccionesGuardadas] = useState([]);
  const [guardado, setGuardado] = useState(false);
  const [direccionAEliminar, setDireccionAEliminar] = useState(null);
  const [direccionEliminada, setDireccionEliminada] = useState(false);

  const navigate = useNavigate();

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  const handleAgregarDireccion = () => {
    if (direccion) {
      const direccionConNumero = `${
        direccionesGuardadas.length + 1
      }) ${direccion}`;
      setDireccionesGuardadas([...direccionesGuardadas, direccionConNumero]);
      setDireccion("");
      setGuardado(false);
    }
  };

  const handleGuardarCambios = () => {
    // axios.post('http://localhost:3001/guardar-direcciones', { direccionesGuardadas })
    //   .then(response => {
    setGuardado(true);
    console.log("Cambios guardados:", direccionesGuardadas);
    // })
    // .catch(error => console.error('Error al guardar las direcciones:', error));
  };

  const handlePerfilButtonClick = () => {
    navigate("/perfil");
  };

  const handleEliminarDireccion = (index) => {
    setDireccionAEliminar(index);
  };

  const handleConfirmarEliminarDireccion = () => {
    const updatedDirecciones = direccionesGuardadas.filter(
      (dir, index) => index !== direccionAEliminar
    );
    setDireccionesGuardadas(updatedDirecciones);
    setDireccionAEliminar(null);
    setDireccionEliminada(true);
    setTimeout(() => {
      setDireccionEliminada(false);
    }, 3000);
  };

  return (
    <div data-theme="light" className="p-4 bg-gray-100 w-full min-h-screen">
      <div className="flex items-center my-16">
        {/* <button onClick={handlePerfilButtonClick}>
          <img src={flecha} alt="Flecha" className="h-4 w-4" />
        </button> */}
        <h5 className="font-bold ml-4 text-2xl">Mis direcciones</h5>
      </div>

      <input
        type="text"
        placeholder="Dirección"
        className={`w-full px-4 py-2 border  ${
          guardado ? "text-red-500" : "text-black"
        }`}
        value={direccion}
        onChange={handleDireccionChange}
      />

      <button
        className="w-full py-3 mt-4 bg-verdeClaro rounded-full font-bold flex items-left"
        onClick={handleAgregarDireccion}
      >
        <img src={signomas} alt="Signomas" className="h-6 w-6 ml-6 mr-2" />
        Agregar Dirección
      </button>

      <div className="mt-2 font-bold">
        {direccionesGuardadas.map((dir, index) => (
          <div
            key={index}
            className={`flex justify-between items-center mb-1 
      ${
        index === direccionesGuardadas.length - 1 && !guardado
          ? "text-red-500"
          : "text-black"
      }`}
          >
            <div>{dir}</div>
            {guardado && (
              <div className="flex">
                {direccionAEliminar === index ? (
                  <div>
                    <button
                      className="bg-red-500  text-white py-2 px-4 rounded mr-2"
                      onClick={handleConfirmarEliminarDireccion}
                    >
                      Confirmar Eliminar
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-red-500  text-white py-2 px-4 rounded mr-2"
                    onClick={() => handleEliminarDireccion(index)}
                  >
                    Eliminar
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="w-48 py-2 mt-8 bg-[#41BCAC] text-white text-center rounded-full"
          onClick={handleGuardarCambios}
        >
          GUARDAR CAMBIOS
        </button>
      </div>

      {guardado && (
        <p className="mt-2 text-center text-black">
          Dirección guardada exitosamente
        </p>
      )}
      {direccionEliminada && (
        <p className="mt-2 text-center text-black">
          Dirección eliminada exitosamente
        </p>
      )}
      <Footer />
    </div>
  );
};

export default Address;
