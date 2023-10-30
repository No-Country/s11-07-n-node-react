import React, { useState } from 'react';
import ImagenTop from '../assets/ImagenTop.png';
import Efectivo from '../assets/Efectivo.png';
import MercadoPago from '../assets/MercadoPago.png';
import Tarjeta from '../assets/Tarjeta.png';
import paypal from '../assets/paypal.png';
import chulo from '../assets/chulo.png';


const PaymentMethods = () => {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [checkoutSessionData, setCheckoutSessionData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
   

  const paymentMethods = [
    { name: 'Efectivo', imageSrc: Efectivo },
    { name: 'PayPal', imageSrc: paypal },
    { name: 'MercadoPago', imageSrc: MercadoPago },
    { name: 'Tarjeta de crédito - débito', imageSrc: Tarjeta },
  ];

  const handlePaymentSelect = (index) => {
    setSelectedPayment(index);
  };

  const handleConfirm = async   () => {
    if (selectedPayment !== null) {
      // Redirigir a diferentes rutas según el método de pago seleccionado
      switch (selectedPayment) {
        case 0: // Efectivo
          window.location.href = '/NotPay';
          break;
        case 1: // PayPal
          window.location.href = '/NotPay';
          break;
        case 2: // MercadoPago
          window.location.href = '/NotPay';
          break;
        case 3: // Tarjeta de crédito - débito
        try {
          const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              // agregar cualquier dato adicional para enviar al back-WORKFLOW
            }),
          });

          const data = await response.json();

          setCheckoutSessionData(data);
        } catch (error) {
          setErrorMessage('Error al crear la sesión de pago');
          setTimeout(() => {
            setErrorMessage('');
          }, 1500);
        }
        break;
      default:
        break;
    }
  } else {
    // Mostrar el mensaje de error durante 2 segundos
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  }
};

  return (
    <div className="min-h-screen bg-gray-100">
      <img
        src={ImagenTop}
        alt="ImagenTop"
        className="absolute w-full h-[273px]"
      />
      <div className="absolute top-4 left-4 ">
        <a href="/home" className="text-white text-4xl">
          {'<'}
        </a>
      </div>
      <div className="absolute top-16 left-4">
        <p className="text-white text-2xl font-roboto">Medios de pago</p>
      </div>
      <div className="absolute top-[164px] left-4 " >
  <div className="w-full h-[360px] ml-auto mr-4 bg-white flex flex-col p-6 rounded-md">
    <p className="text-lg mb-2 font-roboto">ELEGIR MÉTODO DE PAGO</p>
    {paymentMethods.map((method, index) => (
      <div
        key={index}
        className={`flex items-center my-2 bg-gray-200 rounded-md p-4 w-[295px] h-[55px] ${
                index === selectedPayment ? 'border border-verdeMarino cursor-pointer' : ''
              }`}
              onClick={() => handlePaymentSelect(index)}
       >
        <img src={method.imageSrc} alt={method.name} className="w-6 h-6" />
        <p className='ml-2 font-roboto'>{method.name}</p>
        {index === selectedPayment && (
                <img src={chulo} alt="Selected" className="w-6 h-6 ml-auto" />
              )}
      </div>
    ))}
  </div>
</div>
      <div className="absolute flex justify-center items-center bottom-20 left-4 right-4">
        <button 
        onClick={handleConfirm}
        className="bg-[#41BCAC] text-white px-4 py-2 w-[298px] h-[43px] rounded-2xl" >
          Confirmar
        </button>
      </div>
      {showMessage && (
        <div className="absolute bottom-40 text-red-500 left-4 right-4 text-center">
          Seleccione una de las formas de pago.
        </div>
      )}
       {errorMessage && (
        <div className="absolute bottom-40 text-red-500 left-4 right-4 text-center">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;