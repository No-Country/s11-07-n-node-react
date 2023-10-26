import React from "react";
import { useParams } from "react-router-dom";
import BubbleMsg from "./BubbleMsg";

const Chat = () => {
  const params = useParams();

  return (
    <div>
      <div className="h-screen mx-5 flex flex-col gap-7">
        <h1 className="text-2xl font-bold text-black pt-[8vh]">Mensajes</h1>
        <div className="flex flex-col gap-5 border border-solid border-black rounded-xl p-5">
          <div className="font-bold text-black text-2xl">{params.id}</div>
          <BubbleMsg
            position="start"
            msg="Hola, estás cerca?"
            color="bg-white"
          />
          <BubbleMsg
            position="end"
            msg="Estaré allí en unos minutos"
            color="bg-slate-500"
          />
          <BubbleMsg position="start" msg="OK" color="bg-white" />
          <BubbleMsg
            position="end"
            msg="Ya llegué, estoy afuera de su domicilio"
            color="bg-slate-500"
          />
          <div>
            <input type="text" placeholder="Enviar un mensaje" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
