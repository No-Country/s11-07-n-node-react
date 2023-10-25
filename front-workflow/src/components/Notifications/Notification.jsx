import React from 'react';
import imagenTop from '../../assets/imagenTop.png'
import { IoIosArrowBack, IoIosNotifications } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import CartNotification from './CartNotification';
const Notification = () => {
    const navigate = useNavigate();
    

    const noti=[
        {image:"https://www.luismaram.com/wp-content/uploads/2017/05/bancos-de-imagenes-gratis-para-descargar.jpg",title:"workflow" ,description:"te han calificado"},
        {image:"https://josefacchin.com/wp-content/uploads/2020/01/banco-de-imagenes-gratis-para-descargar.png.webp",title:"!promo!" ,description:"invita a tus amigos y obten 15% off"},
        {image:"https://st4.depositphotos.com/2274151/30566/v/450/depositphotos_305662596-stock-illustration-gratis-ribbon-gratis-round-red.jpg",title:"!promo!" ,description:"invita a tus amigos"},
        {image:"https://kiwimbi.com/wp-content/uploads/2016/05/bancos-de-imagenes-gratis.png",title:"alea luca" ,description:"te ha realizado una transferencia"},
    ]

    return (
        <>
        <section className='bg-white min-h-screen h-auto w-full '>
        <div className="relative  ">
        <div className="w-full absolute -top-2 z-10">
          <img className="w-full" src={imagenTop} alt="" />
        </div>
        <header className=" relative z-20 p-2 text-white ">
          <div className="flex text-white text-2xl justify-between ">
            <div onClick={() => navigate(-1)}>
              <IoIosArrowBack />
            </div>
            <IoIosNotifications />
          </div>
          <div className='flex items-center pt-3'>
          <h2 className='font-medium text-xl'>Notificaciones</h2>
          <RiDeleteBin6Line className='ml-auto text-2xl'/>
          </div>
        </header>
        </div>
        <div className='relative z-20 px-2 my-3'>
          {noti.map((notification)=>(
            <CartNotification key={notification.image} image={notification.image}  title={notification.title} description={notification.description} />
          ))}
        </div>
        </section>
        </>
    );
};

export default Notification;