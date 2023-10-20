import React, { useState } from 'react';
import ImagenTop from '../assets/ImagenTop.png';
import card from '../assets/card.jpg';
import calendar from '../assets/calendar.jpg';
import code from '../assets/code.jpg';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Pay = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cancellationMessage, setCancellationMessage] = useState('');
  const [paymentMessage, setPaymentMessage] = useState('');

  const handleCancel = () => {
    setCancellationMessage('Proceso de pago cancelado');

    setTimeout(() => {
        setCancellationMessage('');
        window.location.href = '/PaymentMethods';
      }, 1000);
    };

   
  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    // Detectar el tipo de tarjeta (Visa, MasterCard, etc.) a partir de los primeros dígitos.
    if (/^4[0-9]{0,15}$/.test(input)) {
      setCardType('Visa');
    } else if (/^5[1-5][0-9]{0,14}$/.test(input)) {
      setCardType('MasterCard');
    } else {
      setCardType('');
    }
    setCardNumber(input);
  };

  const handlePayment = () => {
      // Realiza una validación simple del número de tarjeta y otros campos.
      if (
          /^\d{16}$/.test(cardNumber) &&
          cardHolderName &&
          /^\d{2}-\d{2}$/.test(expiry) && // Cambio en la expresión regular
          /^\d{3}$/.test(securityCode)
          ) {
            
              // Aquí podrías realizar una acción simulada, como mostrar un mensaje de pago exitoso.
              setPaymentMessage('Pago exitoso');
            } else {
                // Aquí mostrarías un mensaje de error si los datos no son válidos.
              setPaymentMessage('Por favor, ingrese todos los datos válidos');
            }
            setTimeout(() => {
                setPaymentMessage('');
              }, 1000);
        };
        
        return (
    <div className="min-h-screen bg-gray-100 ">
        <img
          src={ImagenTop}
          alt="ImagenTop"
          className="w-full h-[273px]"
          />
        <div className="absolute top-4 left-4 ">
        <a href="/PaymentMethods" className="text-white text-4xl">
          {'<'}
        </a>
      </div>
        <div className="bg-white absolute flex flex-col items-center top-[100px]  left-8 right-8 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">PAGAR CON TARJETA</h2>
        <div className="mb-4 w-full">
          <label htmlFor="cardHolderName" className="block font-medium  text-gray-700">Nombre del Propietario</label>
        
          <input
            type="text"
            id="cardHolderName"
            placeholder='Nombre del Propietario'
            className="w-full border border-gray-300 rounded-md p-2"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="cardNumber" className="block font-medium text-gray-700">Número de tarjeta</label>
          <div className='flex flex-row'>
        <img src={card} alt='card' className="w-8 h-8 mr-1" />
          <input
            type="text"
            id="cardNumber"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="XXXX - XXXX - XXXX - XXXX"
            value={cardNumber}
            onChange={handleCardNumberChange}
            />
        </div>  
        </div>
        <div className="mb-2">
          <label htmlFor="expiry" className="block font-medium text-gray-700">Caducidad (MM-YY)</label>
          <div className='flex flex-row'>
        <img src={calendar} alt='card' className="w-8 h-8 mr-1" />
          <input
            type="text"
            id="expiry"
            placeholder="MM-YY"
            className="w-full border border-gray-300 rounded-md p-2"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            />
        </div>  
        </div>
        <div className="mb-2">
          <label htmlFor="securityCode" className="block font-medium text-gray-700">Código de Seguridad</label>
          <div className='flex flex-row'>
        <img src={code} alt='card' className="w-12 h-12 mr-1" />
          <input
            type="text"
            id="securityCode"
            placeholder="XXX"
            className="w-full border border-gray-300 rounded-md p-2"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            />
        </div>  
        </div>
        <div>
          {cardType && <p>Tipo de tarjeta: {cardType}</p>}
        </div>
        <div className="mt-6">
        {paymentMessage && (
            <div className="text-[#41BCAC] font-bold text-center">{paymentMessage}</div>
            )}
            {cancellationMessage && (
            <div className="text-black font-bold text-center">{cancellationMessage}</div>
          )}
        <button
          className="bg-gray-700 text-white rounded-md px-4 py-2 mr-4 hover:bg-gray-700"
          onClick={handleCancel}
        >
          Cancelar
        </button>
          <button
            className="bg-[#41BCAC] text-white rounded-md px-4 py-2 hover:bg-[#41BCAC]"
            onClick={handlePayment}
          >
            Realizar Pago
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Pay;