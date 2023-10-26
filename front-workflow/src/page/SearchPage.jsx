import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../pictures/logo.png";
import { AiFillCar, AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdElectricRickshaw } from "react-icons/md";
import { LuAirVent } from "react-icons/lu";
const SearchPage = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = () => {
    if (selectedOption === "Electricista") {
      navigate("/professionalfilter");
    } else if (selectedOption === "Plomero") {
      navigate("/professionalfilter");
    } else if (selectedOption === "Mecánico del automotor") {
      navigate("/professionalfilter");
    } else if (selectedOption === "Otros") {
      navigate("/professionalfilter");
    }
  };

  const services = [
    { name: "Electricista" },
    { name: "Plomero" },
    { name: "Mecanico del automotor" },
    { name: "otros" },
  ];

  return (
    <>
      <section className="w-full h-auto min-h-[140vh] pt-[10vh]">
        <img className="m-auto" src={logo} alt="" />
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="mt-5 bg-[#41BCAC] text-white rounded-full flex gap-1 items-center  w-[90%] max-h-[70px] text-lg max-w-[300px] p-2 m-auto"
        >
          <AiOutlineSearch className="text-gray-500" />
          <button>seleccionar servicio</button>
          {isOpen ? (
            <IoIosArrowUp className="self-center ml-auto" />
          ) : (
            <IoIosArrowDown className="self-center ml-auto" />
          )}
        </div>
        {isOpen && (
          <section className=" w-[90%] bg-[#41BCAC]  max-w-[350px] mt-1 m-auto px-3 py-1 bg-[c] text-white rounded-md">
            {services.map((service) => (
              <div key={service.name}>{service.name}</div>
            ))}
          </section>
        )}
        <section className=" text-black w-[90%] max-w-[350px] mt-5 py-3 px-2   m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <p className=" font-semibold text-sm mb-2">L0 MAS BUSCADO</p>
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
            <AiFillCar className="wastedOption-icon" />
            <p>Mecanico general</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default SearchPage;
