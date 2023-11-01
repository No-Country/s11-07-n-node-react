import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../pictures/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdElectricRickshaw } from "react-icons/md";
import { LuAirVent } from "react-icons/lu";

const SearchPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    localStorage.setItem("category", value);
    navigate("/professionalfilter")
  };

  const services = [
    { name: "Electricista" },
    { name: "Plomero" },
    { name: "Mecánico del automotor" },
    { name: "Abogado" },
    { name: "Dermatologo" },
    { name: "Veterinario" },
  ];

  return (
    <>
      <section className="w-full h-auto min-h-[140vh] pt-[10vh]">
        <img className="m-auto" src={logo} alt="" />
        <section onClick={()=>setIsOpen(!isOpen)} className="flex bg-[#41BCAC] w-[70%] items-center m-auto px-4 rounded-full">
          <div className="bg-[#41BCAC]">
            <AiOutlineSearch className="text-gray-500" />
          </div>
          <select
            className="appearance-none outline-none w-[90%] bg-[#41BCAC]  max-w-[350px] mt-1 m-auto p-2 bg-[c] text-white rounded-full "
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option >selecicionar servicio</option>
            {services.map((option) => (
      
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <div>
            {isOpen ? (
              <IoIosArrowUp className="self-center text-white ml-auto" />
            ) : (
              <IoIosArrowDown className="self-center text-white ml-auto" />
            )}
          </div>
        </section>

        <section className=" text-black w-[90%] max-w-[350px] mt-5 py-3 px-2   m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <p className=" font-semibold text-sm mb-2">LO MÁS BUSCADO</p>
          <div className="wastedOption-services">
            <MdElectricRickshaw className="wastedOption-icon" />
            <Link to={"/professionalfilter"}>
              <p>Electricista</p>
            </Link>
          </div>
          <div className="wastedOption-services">
            <LuAirVent className="wastedOption-icon" />
            <p>Tec.En aire acondicionado</p>
          </div>
          <div className="wastedOption-services">
            <AiOutlineSearch className="wastedOption-icon" />
            <p>Mecánico general</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default SearchPage;
