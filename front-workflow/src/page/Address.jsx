import React, { useState } from 'react';
import flecha from '../assets/flecha.png';
import Footer from '../components/Footer/Footer';
import signomas from '../assets/signomas.png';

const Address = () => {
  const [direccion, setDireccion] = useState('');
  const [direccionesGuardadas, setDireccionesGuardadas] = useState([]);
  const [guardado, setGuardado] = useState(false);

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  const handleAgregarDireccion = () => {
    if (direccion) {
      setDireccionesGuardadas([...direccionesGuardadas, direccion]);
      setDireccion('');
      setGuardado(false);
    }
  };

  const handleGuardarCambios = () => {
    setGuardado(true);
    console.log('Cambios guardados:', direccionesGuardadas);
  };

  const handlePerfilButtonClick = () => {
    // Implementa la navegación a la página de perfil si es necesario
  };

  return (
    <div className="p-4 bg-gray-100 w-full min-h-screen">
      <div className="flex items-center mb-16">
        <button onClick={handlePerfilButtonClick}>
          <img src={flecha} alt="Flecha" className="h-4 w-4" />
        </button>
        <h5 className="font-bold ml-4 text-2xl">Mis direcciones</h5>
      </div>

      <input
        type="text"
        placeholder="Dirección"
        className={`w-full px-4 py-2 border  ${guardado ? 'text-red-500' : 'text-black'}`}
        value={direccion}
        onChange={handleDireccionChange}
      />

      <button
        className="w-full py-3 mt-4 bg-verdeClaro rounded-full font-bold flex items-left"
        onClick={handleAgregarDireccion}
      >
        <img src={signomas} alt="Signomas" className="h-6 w-6 ml-6 mr-2"/>
        Agregar Dirección
      </button>

      <div className="mt-2 font-bold">
        {direccionesGuardadas.map((dir, index) => (
          <div key={index} className={`mb-1 ${guardado ? 'text-black' : 'text-red-500'}`}>
            {dir}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="w-48 py-2 mt-8 bg-verdeMarino text-white text-center rounded-full"
          onClick={handleGuardarCambios}
        >
          GUARDAR CAMBIOS
        </button>
      </div>

      {guardado && <p className="mt-2 text-center text-black">Dirección guardada exitosamente</p>}

      <Footer />
    </div>
  );
};

export default Address;