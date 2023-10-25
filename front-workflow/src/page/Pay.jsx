import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import ImagenTop from '../assets/ImagenTop.png';
import { loadStripe } from '@stripe/stripe-js';


const Pay = () => {
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [cancelMessage, setCancelMessage] = useState('');

  useEffect(() => {
    const stripePromise = loadStripe('pk_test_51O4gkgD3YXfw7A9OCrcmMR7KH5RB0lHjigzLXqtap7qigk2Le0kh9Q0OGTjSaYpdSTRTcJS1yIFA9jIVML956B9O00NqWfPeG6');

    
    stripePromise.then((stripe) => {
      
      stripe.paymentIntents.create({
        amount: 1000, 
        currency: 'USD', 
      }).then((data) => {
        setClientSecret(data.client_secret);
      });
    });
  }, []);

  const handleCancel = () => {
    setCancelMessage('Cancelando proceso de pago...');

    setTimeout(() => {
      setCancelMessage('');
      window.history.back();
    }, 1000);
  };

  const handlePayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error);
    } else if (result.paymentIntent.status === 'succeeded') {
      
    }
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
        <h2 className="text-xl font-semibold mt-4">PAGAR CON TARJETA</h2>
      </div>
      <h2 className="text-xl font-semibold text-center mb-8">INGRESA LOS DATOS DE TU TARJETA</h2>

      <CardElement className="p-3 border border-gray-300 rounded mb-16" />
      <div>{cancelMessage && <p className="text-black font-bold text-center mb-2 text-xl">{cancelMessage}</p>}</div>
      <div className='flex justify-center'>
        <button
          className="bg-gray-700 text-white rounded-md px-4 py-2 mr-16 hover-bg-gray-700"
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button
          className="bg-[#41BCAC] text-white rounded-md px-4 py-2 hover-bg-[#41BCAC]"
          onClick={handlePayment}
        >
          Realizar Pago
        </button>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Pay;