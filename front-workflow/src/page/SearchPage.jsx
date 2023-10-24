import React from "react";
import workflow from "../assets/workflow.png";
import lupa from "../assets/lupa.png";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const inputStyle = {
    backgroundImage: `url(${lupa})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px center",
    paddingLeft: "60px",
  };

  return (
    <div className="flex flex-col items-center h-screen pt-16">
      <img src={workflow} alt="Workflow" className="w-48 h-48 mb-4" />
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Buscar"
          className="w-64 h-12 mt-8 px-4 rounded-full bg-verdeMarino text-white ml-2 placeholder:text-white"
          style={inputStyle}
        />
      </div>
    </div>
  );
};

export default SearchPage;
