import React, { useEffect } from "react";
import Item from "../components/message/Item";
import imagenTop from "../assets/imagenTop.png";
import Title from "../components/title/Title";
import io from "socket.io-client";
import auxImgUrl from "../assets/Portrait_Placeholder.png";
// const socket = io.connect("http://localhost:3000");

const Message = () => {
  useEffect(() => {}, []);

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

  const sendMessage = () => {};

  return (
    <>
      <div className="w-full absolute -top-2 z-5">
        <img className="w-full" src={imagenTop} alt="fondo" />
      </div>
      <div className="h-screen mx-5 flex flex-col gap-7 relative">
        <Title textColor="text-white" text="Mensajes" />
        <div className="flex flex-col gap-1">
          {messagesList.map(({ name, message, imgURL, i }) => (
            <Item key={i} name={name} message={message} imgURL={imgURL} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Message;
