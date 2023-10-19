import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center">
      <p className="font-bold font-roboto text-xl text-[#000]">
        Página no encontrada - Error 404
      </p>
      <button onClick={() => navigate(-1)} className="btn btn-info font-roboto">
        Volver
      </button>
    </div>
  );
};

export default ErrorPage;
