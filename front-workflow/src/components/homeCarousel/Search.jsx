import React from "react";
import search from "../../pictures/search.svg";
const Search = () => {
  return (
    <>
      <section className="h-screen px-4 m-auto  max-w-xs  bg-white">
        <div className="w-full pt-[15vh]">
          <img className="m-auto w-[278px]" src={search} alt="" />
        </div>
        <div className=" pt-[6vh]">
          <h2 className="text-3xl text-center font-roboto	text-black ">
            Buscar
          </h2>
          <p className=" mt-8 text-center text-black w-72 font-roboto">
          Busca a un profesional para la tarea que necesites
          </p>
        </div>
      </section>
    </>
  );
};

export default Search;
