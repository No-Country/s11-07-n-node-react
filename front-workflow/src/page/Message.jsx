import React from "react";
import Item from "../components/message/Item";
import imagenTop from "../assets/imagenTop.png";

const Message = () => {
  const messagesList = [
    {
      name: "Pablo Villafañe",
      message: "Ya llegué, estoy afuera de su do...",
      imgURL: "https://random.imagecdn.app/150/150",
    },
    {
      name: "María Bernal",
      message: "Muchas gracias!",
      imgURL: "https://random.imagecdn.app/150/150",
    },
    {
      name: "Flavia Dominguez",
      message: "Ok!",
      imgURL: "https://random.imagecdn.app/150/150",
    },
    {
      name: "Andres Vera",
      message: "Gracias por su valoración!",
      imgURL: "https://random.imagecdn.app/150/150",
    },
  ];

  return (
    <>
      <div className="w-full absolute -top-2 z-5">
        <img className="w-full" src={imagenTop} alt="fondo" />
      </div> 
      <div className="h-screen mx-5 flex flex-col gap-7 relative z-20 ">
        <h1 className="text-2xl font-bold text-white pt-[8vh]">Mensajes</h1>
        <div className="flex flex-col gap-1">
          {messagesList.map(({ name, message, imgURL }) => (
            <Item name={name} message={message} imgURL={imgURL} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Message;
