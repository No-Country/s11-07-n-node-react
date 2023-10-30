import React from 'react';
import ImagenTop from '../assets/ImagenTop.png';
import success from '../assets/success.png';
import { Link } from 'react-router-dom';

const Succeeded = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <img src={ImagenTop} alt="ImagenTop" className="w-full h-[273px]" />
      <div className="absolute font-bold justify-items-center flex flex-col items-center w-full h-full">
        <div className="text-center">
        <div className="flex justify-center items-center">
          <img src={success} alt="succeeded"/>
        </div>
          <h2 className="text-xl font-semibold mt-4 mb-2">BIENVENIDO</h2>
          <h2 className="text-xl font-semibold mt-4 mb-8">Pago realizado exitosamente</h2>
            <Link to='/home'>
            <button
              className="bg-[#41BCAC] text-white rounded-md mb-8 px-4 py-2 hover-bg-[#41BCAC]"
            >
              Volver a Home
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Succeeded;