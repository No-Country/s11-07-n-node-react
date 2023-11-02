import React, { useEffect, useState } from "react";
import imagenTop from "../../assets/imagenTop.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosNotifications } from "react-icons/io";
import CartNotification from "./CartNotification";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../title/Title";
const Notification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showItem, setShowItem] = useState(true);
  const [showItem2, setShowItem2] = useState(true);
  const [notification, setNotification] = useState(true);
  const [backButton, setBackButton] = useState(false);
  const path = location.pathname;

  useEffect(() => {
    if (path === "/home" || path === "/message" || path === "/profile") {
      // setNotification(!notification);
      setBackButton(false);
    } else {
      setBackButton(true);
    }
  }, [path]);

  const noti = [
    {
      image:
        "https://www.luismaram.com/wp-content/uploads/2017/05/bancos-de-imagenes-gratis-para-descargar.jpg",
      title: "workflow",
      description: "te han calificado",
    },
    {
      image:
        "https://josefacchin.com/wp-content/uploads/2020/01/banco-de-imagenes-gratis-para-descargar.png.webp",
      title: "!promo!",
      description: "invita a tus amigos y obten 15% off",
    },
    {
      image:
        "https://st4.depositphotos.com/2274151/30566/v/450/depositphotos_305662596-stock-illustration-gratis-ribbon-gratis-round-red.jpg",
      title: "!promo!",
      description: "invita a tus amigos",
    },
    {
      image:
        "https://kiwimbi.com/wp-content/uploads/2016/05/bancos-de-imagenes-gratis.png",
      title: "alea luca",
      description: "te ha realizado una transferencia",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {notification && (
        <section
          className={`flex ${backButton ? "justify-between" : "justify-end"
            } p-3 absolute z-50 w-full text-2xl`}
        >
          {backButton && (
            <button
              onClick={() => {
                navigate(-1),
                  isOpen == false ? setIsOpen(false) : setIsOpen(!isOpen);
              }}
            >
              <IoIosArrowBack style={{color:isOpen?"#fff":path=='/professionalfilter'||"/editprofile"?"#fff":path=="/profile"?"#31D2DC":""}} />
            </button>
          )}
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoIosNotifications style={{color:isOpen?"#fff":path=='/professionalfilter'?"#fff":path=="/profile"||"/home"?"gray":""}} />
          </button>
        </section>
      )}

      {isOpen && (
        <section className="bg-white min-h-screen h-auto w-full absolute top-0  z-40 ">
          <div className="relative  ">
            <div className="w-full absolute -top-2 z-10">
              <img className="w-full" src={imagenTop} alt="" />
            </div>
            <header className=" relative z-20 p-2 text-white mt-1">
              <div className="flex items-center">
                  <Title textColor="text-white" text="Notificaciones" />
                <button className="ml-auto text-2xl" type="button">
                  <RiDeleteBin6Line  />
                </button>
              </div>
            </header>
          </div>
          <div className="relative z-20 px-2 my-3">
            {noti.map((notification) => (
              <CartNotification
                key={notification.image}
                image={notification.image}
                title={notification.title}
                description={notification.description}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Notification;
