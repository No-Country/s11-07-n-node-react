import React, { useState } from 'react';
import ImagenTop from '../assets/ImagenTop.png';


const PayStripe = () => {
  const [checkoutSessionData, setCheckoutSessionData] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [cancelMessage, setCancelMessage] = useState('');

  const createCheckoutSession = async () => {
    try {
      const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // agregar cualquier dato adicional para enviar al back-workflow
        })
      })

      const data = await response.json()

      setCheckoutSessionData(data)
    } catch (error) {
      setErrorMessage('Error al crear la sesión de pago')
      setTimeout(() => {
        setErrorMessage('');
      }, 1500);
    };
    }
  
    const handleCancel = () => {
        setCancelMessage('Cancelando proceso de pago...');
    
        setTimeout(() => {
          setCancelMessage('');
          window.history.back();
        }, 1000);
      };

  const handleButtonClick = async () => {
    await createCheckoutSession()
  }

  return (
    <div className="min-h-screen bg-gray-100 ">
      <img
        src={ImagenTop}
        alt="ImagenTop"
        className="w-full h-[273px]"
      />
      <div className="absolute font-bold left-4 justify-items-center text-center ">
        <h2 className="text-xl font-semibold mt-4 ">Al inscribirte accederás</h2>
        <h2 className="text-xl font-semibold ">a todos nuestros servicios</h2>
        <h1 className="text-xl font-semibold mt-4 mb-4">siguiente botón para INSCRIBIRTE</h1>
        <div className='flex justify-center flex-col items-center'>
        <button 
            className="bg-[#41BCAC] text-white rounded-md mb-8 px-4 py-2 hover-bg-[#41BCAC]"
            onClick={handleButtonClick}>Acceder sesión de pago</button>
        <button
          className="bg-gray-700 text-white rounded-md px-4 mb-8 py-2 hover-bg-gray-700"
          onClick={handleCancel}
        >
          Cancelar
        </button>
      </div>
      
      {errorMessage && (
        <div className='text-center'>
          {errorMessage}
        </div>
      )}
      </div>

     
    </div>
  )
}

export default PayStripe;