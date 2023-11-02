import React from "react";
import { useParams } from "react-router-dom";
import BubbleMsg from "./BubbleMsg";
import { IoIosSend } from "react-icons/io";
import imagenTop from "../../assets/imagenTop.png";
import Title from "../title/Title";
const Chat = () => {
  const params = useParams();

  const messageList = [
    {
      own: false,
      msg: "Hola, estás cerca?",
    },
    {
      own: true,
      msg: "Estaré allí en unos minutos",
    },
    {
      own: false,
      msg: "Ok!",
    },
    {
      own: true,
      msg: "Ya llegué, estoy afuera de suu domicilio",
    },
    ,
    {
      own: true,
      msg: "Ya llegué, estoy afuera de suu domicilio",
    },
    ,
    {
      own: true,
      msg: "Ya llegué, estoy afuera de suu domicilio",
    },
    ,
    {
      own: true,
      msg: "Ya llegué, estoy afuera de suu domicilio",
    },
  ];
  return (
    <div>
      <div className="w-full absolute -top-2 z-5">
        <img className="w-full" src={imagenTop} alt="fondo" />
      </div>

      <div className="h-screen mx-5 flex flex-col gap-7 relative">
        <Title textColor="text-white" text="Mensajes" />
        <div className="h-[70vh] flex flex-col gap-5 justify-between bg-white bg-opacity-30 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  rounded-xl p-5">
          <div className="font-bold text-black text-2xl shadow-bottom-black rounded-md p-1 bg-[rgba(255,255,255,0.5)]">
            {params.id}
          </div>
          <div className="flex flex-col gap-7 overflow-y-scroll">
            {messageList.map(({ own, msg, i }) => (
              <div key={i}>
                <BubbleMsg own={own} msg={msg} />
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <textarea
              rows="1"
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
