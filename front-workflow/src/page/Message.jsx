import React from "react";
import Item from "../components/message/Item";
import imagenTop from "../assets/imagenTop.png";

const Message = () => {
  const auxImgUrl = "https://picsum.photos/200";
  const messagesList = [
    {
      name: "Pablo Villafañe",
      message: "Ya llegué, estoy afuera de ...",
      imgURL: auxImgUrl,
    },
    {
      name: "María Bernal",
      message: "Muchas gracias!",
      imgURL: auxImgUrl,
    },
    {
      name: "Flavia Dominguez",
      message: "Ok!",
      imgURL: auxImgUrl,
    },
    {
      name: "Andres Vera",
      message: "Gracias por su valoración!",
      imgURL: auxImgUrl,
    },
  ];

  return (
    <>
      <div className="w-full absolute -top-2 z-5">
        <img className="w-full" src={imagenTop} alt="fondo" />
      </div>
      <div className="h-screen mx-5 flex flex-col gap-7 relative">
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
