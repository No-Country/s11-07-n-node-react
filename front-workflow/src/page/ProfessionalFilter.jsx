import React, { useEffect, useState } from "react";
import imagenTop from "../assets/imagenTop.png";
import { useParams } from "react-router-dom";
import CartUser from "../components/CartUser/CartUser";
import axios from "axios";

const ProfessionalFilter = () => {



  const users = [
    {
      name: "luisa koko",
      ubication: "19 de abril 667",
      distance: "Cerca de tu ubicación",
      price: "2500",
      photo: "https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg",
      category: "Veterinario",
    },
    {
      name: "juancito perez",
      ubication: "19 de abril 667",
      distance: "Cerca de tu ubicación",
      price: "2500",
      photo: "https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg",
      category: "Veterinario",
    },
    {
      name: "pancho villa",
      ubication: "19 de abril 667",
      distance: "Cerca de tu ubicación",
      price: "2500",
      photo: "https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg",
      category: "Veterinario",
    },
    {
      name: "Pablo Villafañes",
      ubication: "19 de abril 667",
      distance: "Cerca de tu ubicación",
      price: "2500",
      photo: "https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg",
      category: "Plomero",
    },
    {
      name: "favian de la coste",
      ubication: "19 de abril 667",
      distance: "Cerca de tu ubicación",
      price: "2500",
      photo: "https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg",
      category: "Plomero",
    },
    {
      name: "hernan hernandez",
      ubication: "19 de abril 667",
      distance: "Cerca de tu ubicación",
      price: "2500",
      photo: "https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg",
      category: "Plomero",
    },
    {
      name: "pedrito pedrin",
      ubication: "19 de abril 667",
      distance: "Cerca de tu ubicación",
      price: "2500",
      photo: "https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg",
      category: "Plomero",
    },
    {
      name: "Micaela Aranda",
      ubication: "the giga mall",
      distance: "a 2km",
      price: "3000",
      photo: "https://etinor.com/wp-content/uploads/2023/02/76o-Imagen-01-scaled.jpg",
      category: "plomero",
    },
    {
      name: "Fatima Alvarez",
      ubication: "Facio 530",
      distance: "a 5km",
      price: "2800",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Dentista",
    },
    {
      name: "Luis García",
      ubication: "Main Street",
      distance: "a 3km",
      price: "2600",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Dentista",
    },
    {
      name: "Ana Martínez",
      ubication: "City Center",
      distance: "a 6km",
      price: "3100",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Electricista",
    },
    {
      name: "Carlos Rodríguez",
      ubication: "Park Avenue",
      distance: "a 4km",
      price: "2900",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Dentista",
    },
    // Nuevos usuarios
    {
      name: "Alejandra Ramírez",
      ubication: "Plaza del Sol",
      distance: "a 8km",
      price: "2200",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Electricista",
    },
    {
      name: "choque heran",
      ubication: "Avenida Central",
      distance: "a 1km",
      price: "3500",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Abogado",
    },
    {
      name: "tania suarez",
      ubication: "Avenida Central",
      distance: "a 1km",
      price: "3500",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Abogado",
    },
    {
      name: "karla ",
      ubication: "Avenida Central",
      distance: "a 1km",
      price: "3500",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Abogado",
    },
    {
      name: "Sofía salvador",
      ubication: "Avenida Central",
      distance: "a 1km",
      price: "3500",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Abogado",
    },
    {
      name: "Eduardo Pérez",
      ubication: "Paseo de la Reforma",
      distance: "a 12km",
      price: "2700",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Dentista",
    },
    {
      name: "Laura González",
      ubication: "Parque de la Ciudad",
      distance: "a 7km",
      price: "2900",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Dentista",
    },
    // Más nuevos usuarios
    {
      name: "Carlos Martínez",
      ubication: "Avenida Insurgentes",
      distance: "a 4km",
      price: "2600",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Plomero",
    },
    {
      name: "María López",
      ubication: "Calle 5 de Mayo",
      distance: "a 2km",
      price: "2800",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Programador",
    },
    {
      name: "José Ramón",
      ubication: "Plaza de la Constitución",
      distance: "a 1km",
      price: "3200",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Programador",
    },
    {
      name: "Isabel Morales",
      ubication: "Boulevard Reforma",
      distance: "a 10km",
      price: "3000",
      photo: "https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
      category: "Programador",
    },
    // Continuar con más usuarios...
  ];

  const storedValue = localStorage.getItem("category");
  const filteredUsers = users.filter((user) => user.category === storedValue);
  const existUsers = filteredUsers == 0 ? `No se encontro profesionales en el area de ${storedValue}` : null

  return (
    <>
      <section className="relative ">
        <div className="w-full absolute -top-2 z-5 ">
          <img className="w-full" src={imagenTop} alt="" />
        </div>

        <header className="relative z-20 p-2 pt-[60px] ">
          <h2 className="text-white font-semibold font-roboto tracking-widest">
            {storedValue}
          </h2>
        </header>
        <div className="relative w-full p-2 pb-16 h-auto min-h-screen  ">
          {filteredUsers?.map((user) => (
            <CartUser
              key={user.name}
              name={user.name}
              ubication={user.ubication}
              distance={user.distance}
              price={user.price}
              photo={user.photo}
            />
          ))}
        </div>

        <p className="absolute top-0 right-0 left-0 bottom-0 w-[90%] text-center h-min  text-black  m-auto z-20">
          {existUsers}
        </p>



      </section>
    </>
  );
};

export default ProfessionalFilter;