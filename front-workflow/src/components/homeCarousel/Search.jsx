import React from "react";
import search from "../../pictures/search.svg";
const Search = () => {
  return (
    <>
      <section className="h-screen w-full flex flex-col justify-center gap-16 text-center">
        <div className="w-full">
          <img className="m-auto " src={search} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl w-[70%] m-auto text-black">Buscar</h3>
          <p className="text-black w-[70%] m-auto">Busca a un profesional para la tarea que necesites</p>
        </div>
      </section>
    </>
  );
};

export default Search;
