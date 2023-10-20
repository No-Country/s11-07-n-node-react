import React from "react";
import { Link } from "react-router-dom";

const NotPay = () => {
  
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center">
      <p className="font-bold font-roboto text-2xl text-[#000]">
        Metodo de pago no habilitado
      </p>
      <Link to="/paymentMethods">
        <button className="btn btn-info bg-verdeMarino font-roboto">Volver</button>
      </Link>
    </div>
  );
};

export default NotPay;
