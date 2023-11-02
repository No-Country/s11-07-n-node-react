import React, { useEffect, useState } from "react";
import imagenTop from "../assets/ImagenTop.png";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import myImage from "../assets/Portrait_Placeholder.png";
import { BsStarFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import Title from "../components/title/Title";

// Componente de calificación de estrellas
const StarRating = ({ maxStars, setRating }) => {
  const [localRating, setLocalRating] = useState(0);
  const stars = [...Array(maxStars).keys()];

  const handleClick = (index) => {
    setLocalRating(index + 1);
    setRating(index + 1);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {stars.map((star, index) => (
        <span key={index} onClick={() => handleClick(index)}>
          <BsStarFill
            color={star < localRating ? "#41BCAC" : "#E5E7EB"}
            size={40}
            style={{ margin: "5px" }}
          />
        </span>
      ))}
    </div>
  );
};

const ConfirmService = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cancelModal = () => {
    // Aquí puedes agregar el código para manejar lo que sucede cuando se cancela la ventana emergente
    setIsModalOpen(false);
  };
  const saveDataToDatabase = () => {
    // Aquí puedes agregar el código para manejar lo que sucede cuando se guarda la calificación y el comentario en la base de datos
    console.log("Calificación:", rating);
    console.log("Comentario:", comment);
  };

  const handleConfirm = () => {
    console.log("Calificación:", rating);
    console.log("Comentario:", comment);
    // Aquí puedes enviar la calificación y el comentario a tu servidor o manejarlos como necesites
  };

  return (
    <>
      <section className="h-screen m-auto  bg-white">
        <div className="w-full absolute -top-2 z-10">
          <img className="w-full" src={imagenTop} alt="" />
        </div>
        <header className=" p-4 ">
          <Title textColor="text-white" text={params?.category} />
        </header>
        <div className="relative mt-16 z-20 shadow-2xl rounded-lg p-2 m-6 bg-[#f0f0f0]">
          <div className="w-[85px] absolute top-[-42px] left-[calc(50%-42px)]">
            <img src={myImage} alt="perfil" className="rounded-full" />
          </div>
          <div className="text-center pt-10">
            <p className="text-[#242E42] text-sm font-semibold pb-4">
              {params?.name}
            </p>
            <h2 className="text-[#242E42] text-xl font-medium pb-1">
              {params?.category}
            </h2>
            <p className="text-[#6d6d6e] pb-4">Calificación de los usuarios</p>
            <div className="pb-4">
              <StarRating maxStars={5} setRating={setRating} />
            </div>
            <div className="p-2">
              <textarea
                className="bg-[#EFEFF2] border border-gray-300 p-2 rounded-md"
                style={{ width: "240px", height: "100px" }}
                placeholder="Añadir un comentario..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center p-4">
            <button
              type="submit"
              className="bg-[#41BCAC] shadow-bottom-black text-white text-base rounded-[18px] 
                                w-[180px] h-[35px] text-[15px] transition-transform transform hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              CONFIRMAR
            </button>
          </div>
        </div>

        {/*Fondo oscurecido cuando se muestra el modal*/}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-10" />
        )}

        {/*Ventana emergente*/}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 pb-1 shadow-md flex flex-col">
              <div className="flex flex-col items-center">
                <span
                  className="text-center mb-4 text-[#41BCAC]"
                  style={{ fontSize: "90px" }}
                >
                  <FaCheckCircle />
                </span>

                <p className="text-[#41BCAC] text-2xl font-bold mb-2">
                  Realizado con éxito
                </p>
                <p>¡Gracias por tu calificación!</p>
              </div>
              <div className="flex justify-end mt-auto">
                <button
                  onClick={cancelModal}
                  className=" text-[#3f3f3f] p-6 pb-1 hover:text-[#3e9e92] mr-4"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    handleConfirm();
                  }}
                  className=" text-[#41BCAC] p-6 pb-1 hover:text-[#3f3f3f]"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ConfirmService;
