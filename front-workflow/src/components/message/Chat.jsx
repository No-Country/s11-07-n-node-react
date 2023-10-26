import React from "react";
import { useParams } from "react-router-dom";
import BubbleMsg from "./BubbleMsg";
import { IoIosSend } from "react-icons/io";
import imagenTop from "../../assets/imagenTop.png";
const Chat = () => {
  const params = useParams();

  const messageList = [
    {
      position: "start",
      msg: "Hola, estás cerca?",
      color: "bg-white",
    },
    {
      position: "end",
      msg: "Estaré allí en unos minutos",
      color: "bg-[#41BCAC]",
    },
    {
      position: "start",
      msg: "Ok!",
      color: "bg-white",
    },
    {
      position: "end",
      msg: "Ya llegué, estoy afuera de suu domicilio",
      color: "bg-[#41BCAC]",
    },
  ];
  return (
    <div>
      <div className="w-full absolute -top-2 z-5">
        <img className="w-full" src={imagenTop} alt="fondo" />
      </div>

      <div className="h-screen mx-5 flex flex-col gap-7 relative  ">
        <h1 className="text-2xl font-bold text-white pt-[8vh]">Mensajes</h1>
        <div className="h-[70vh] flex flex-col gap-5 justify-between bg-white bg-opacity-30 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  rounded-xl p-5">
          <div className="flex flex-col gap-7">
            <div className="font-bold text-black text-2xl shadow-bottom-black rounded-md p-1 bg-[rgba(255,255,255,0.5)]">
              {params.id}
            </div>
            {messageList.map(({ position, msg, color, i }) => (
              <BubbleMsg key={i} position={position} msg={msg} color={color} />
            ))}
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <input
              data-theme="light"
              type="text"
              placeholder="Escribir un mensaje"
              className="input input-ghost w-full shadow-md"
            />
            <div className="bg-[#41BCAC] rounded-md p-1 hover:scale-105 transition-all">
              <IoIosSend size={30} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
