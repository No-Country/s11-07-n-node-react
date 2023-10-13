import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center">
      <p className="font-bold font-roboto text-xl text-[#000]">
        Página no encontrada - Error 404
      </p>
      <Link to="/home">
        <button className="btn btn-info font-roboto">Volver</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
