import React from "react";
import myImage from "../../assets/Portrait_Placeholder.png";
import {
  FaUserCircle,
  FaMapMarkerAlt,
  FaCreditCard,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdBuildCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import Title from "../title/Title";

const Profile = ({ setShowFooter, setShowNavbar }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    localStorage.removeItem("user");
    setShowFooter(false);
    setShowNavbar(false);
  };

  return (
    <>
      <section className="h-screen px-4 m-auto  max-w-xs  bg-white">
        <Title textColor="text-black" text="Perfil" />
        <div className="relative">
          <div className="w-[125px] m-auto">
            <img src={myImage} alt="perfil" className="rounded-full" />
          </div>
          <div className="absolute bottom-0 right-20 m-[3px] text-[#41BCAC] text-3xl cursor-pointer rounded-full">
            <MdBuildCircle />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-black text-center">
            {user?.user?.email}
          </h2>
          <hr className="border-t-2 border-gray-400 m-4" />
        </div>
        <ul className=" ">
          <li className=" bg-[#f6f6f6] rounded-[24px] flex justify-between items-center py-2 m-3 p-4 shadow-bottom-black">
            <span className="mr-5 text-xl text-[#41BCAC]">
              <FaUserCircle />
            </span>
            <button
              onClick={() => navigate("/editprofile")}
              className="text-gray-700 bg-transparent outline-none "
            >
              Editar Perfil
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-[#41BCAC]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </li>
          <li className=" bg-[#f6f6f6] rounded-[24px] flex justify-between items-center py-2 m-3 p-4 shadow-bottom-black">
            <span className="mr-5 text-xl text-[#41BCAC]">
              <FaMapMarkerAlt />
            </span>
            <button
              onClick={() => navigate("/address")}
              className="text-gray-700 bg-transparent outline-none "
            >
              Dirección
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-[#41BCAC]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </li>
          <li className=" bg-[#f6f6f6] rounded-[24px] cursor-pointer flex justify-between items-center py-2 m-3 p-4 shadow-bottom-black">
            <span className=" text-xl text-[#41BCAC]">
              <FaCreditCard />
            </span>
            <button
              onClick={() => navigate("/paymentmethods")}
              className="text-gray-700 bg-transparent outline-none "
            >
              Medios de pago
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-[#41BCAC]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </li>
          <li className=" bg-[#f6f6f6] rounded-[24px] cursor-pointer flex justify-between items-center py-2 m-3 p-4 shadow-bottom-black">
            <span className="mr-5 text-xl text-[#41BCAC]">
              <FaSignOutAlt />
            </span>
            <button onClick={handleLogout} className="text-[#E10000]">
              Salir
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Profile;
