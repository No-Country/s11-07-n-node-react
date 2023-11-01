
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import ImagenTop from '../assets/ImagenTop.png';
import Efectivo from '../assets/Efectivo.png';
import MercadoPago from '../assets/MercadoPago.png';
import Tarjeta from '../assets/Tarjeta.png';
import paypal from '../assets/paypal.png';
import chulo from '../assets/chulo.png';
import axios from 'axios';

const PaymentMethods = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate(); // Usa useNavigate para la navegación

  const paymentMethods = [
    { name: 'Efectivo', imageSrc: Efectivo },
    { name: 'PayPal', imageSrc: paypal },
    { name: 'MercadoPago', imageSrc: MercadoPago },
    { name: 'Tarjeta de crédito - débito', imageSrc: Tarjeta },
  ];

  const handlePaymentSelect = (index) => {
    setSelectedPayment(index);
  };

  const handleConfirm = async () => {
    if (selectedPayment !== null) {
      switch (selectedPayment) {
        case 0: // Efectivo
        case 1: // PayPal
        case 2: // MercadoPago
          navigate('/NotPay'); // Redirige a la ruta '/NotPay'
          break;
        case 3: // Tarjeta de crédito - débito
          try {
            const token = localStorage.getItem('token');
            const data = {
              // Esta data debe de ser dinamica y la define cuando el usuario le de click a unb servicio en particular
              typeService: 'servicePlumber',
            };

            axios.post('http://localhost:3000/api/v1/create-checkout-session', data, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })

              .then((res) => {
                console.log(res.data.url);
                const stripeURL = res.data['session'];
                // const stripeURL = res.data.url;
                if (stripeURL) {
                  window.open(stripeURL, '_blank');
                }
              })
              .catch((err) => {
                console.log(err);
                setErrorMessage('Error al crear la sesión de pago');
                setTimeout(() => {
                  setErrorMessage('');
                }, 1500);
              });
          } catch (error) {
            console.error(error);
          }
          break;
        default:
          break;
      }
    } else {
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
              className={`flex items-center my-2 bg-gray-200 rounded-md p-4 w-[295px] h-[55px] ${index === selectedPayment ? 'border border-verdeMarino cursor-pointer' : ''
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