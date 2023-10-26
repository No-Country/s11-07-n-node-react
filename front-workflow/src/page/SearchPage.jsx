import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../pictures/logo.png";
import lupa from "../assets/lupa.png";
import { IoIosNotifications } from "react-icons/io";
import Notification from "../components/Notifications/Notification";
import electrician from '../assets/electrician.png';
import air from '../assets/air.png';
import car from '../assets/car.png';


const SearchPage = () => {
  const navigate = useNavigate();

  const inputStyle = {
    backgroundImage: `url(${lupa})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px center",
    paddingLeft: "60px",
  };

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


  return (
    <>
      <section className="min-h-screen w-full bg-[#EFEFF4] flex items-center font-roboto relative ">
        <div className="w-full absolute top-0 h-[80px]  flex items-center  px-4">
          <button onClick={() => setIsOpen(!isOpen)} className="ml-auto">
            <IoIosNotifications className=" text-3xl text-[#41BCAC]" />
          </button>
        </div>
        <section className=" w-full md:rounded-m px-2 md:px-3 max-w-xs m-auto flex items-center md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
          <section className="m-auto w-full">
            <div className="w-full">
              <img className="m-auto mt-[-100px] " src={logo} alt="" />
            </div>
            <div>
                <select value={selectedOption} onClick={handleSearch} onChange={handleOptionChange} 
                style={inputStyle} 
                className="w-full h-16 mt-8 px-4 rounded-full bg-[#41BCAC] text-white ml-2 placeholder:text-white relative">
                  <option value="">Seleccionar servicio</option>
                  <option value="Electricista">Electricista</option>
                  <option value="Plomero">Plomero</option>
                  <option value="Mecánico del automotor">Mecánico del automotor</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>  
              <div className=" w-full bg-white pt-8 pb-8 pl-2 pr-2 mt-8 rounded-md ">
                <p className="text-xl font-roboto font-semibold mb-4 text-left">LO MÁS BUSCADO</p>
                <div className="flex items-center p-2 mb-4 bg-[#EFEFF4] rounded-sm">
                  <img src={electrician} alt="Electricista" className="w-8 h-8 mr-2" />
                  <Link to="/professionalfilter" className=" rounded text-black font-roboto">Electricista</Link>
                </div>
                <div className="flex items-center p-2 mb-4 bg-[#EFEFF4] rounded-sm">
                  <img src={air} alt="Téc. En aire acondicionado" className="w-8 h-8 mr-2" />
                  <Link to="/professionalfilter" className="rounded text-black font-roboto text-left">Téc. En aire acondicionado</Link>
                </div>
                <div className="flex items-center p-2 bg-[#EFEFF4] rounded-sm">
                  <img src={car} alt="Mecánico general" className="w-8 h-8 mr-2" />
                  <Link to="/professionalfilter" className=" rounded text-black font-roboto">Mecánico general</Link>
                </div>
              </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default SearchPage;
