import React from "react";
import imagenTop from "../assets/imagenTop.png";
import { useParams } from "react-router-dom";
import CartUser from "../components/CartUser/CartUser";
import Title from "../components/title/Title";

const ProfessionalFilter = () => {
  const { category } = useParams();

  const users = [
    {
      name: "Pablo villafañes",
      ubication: "19 de abril 667",
      distance: "Cerca de tu ubicacion",
      price: "2500",
      photo:
        "https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg",
    },
    {
      name: "Micaela Aranda",
      ubication: "the giga mall",
      distance: "a 2km",
      price: "3000",
      photo:
        "https://etinor.com/wp-content/uploads/2023/02/76o-Imagen-01-scaled.jpg",
    },
    {
      name: "Fatima Alvarez",
      ubication: "Facio 530",
      distance: "a 5km",
      price: "2800",
      photo:
        "	https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
    },
    {
      name: "Pablo villafañe",
      ubication: "19 de abril 667",
      distance: "Cerca de tu ubicacion",
      price: "2500",
      photo:
        "https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg",
    },
    {
      name: "Micaela Arandas",
      ubication: "the giga mall",
      distance: "a 2km",
      price: "3000",
      photo:
        "https://etinor.com/wp-content/uploads/2023/02/76o-Imagen-01-scaled.jpg",
    },
    {
      name: "Fatima Alvarezs",
      ubication: "Facio 530",
      distance: "a 5km",
      price: "2800",
      photo:
        "	https://www.enter.co/wp-content/uploads/2018/07/john-schnobrich-520023-unsplash-1024x768.jpg",
    },
  ];

  return (
    <>
      <section className="relative ">
        <div className="w-full absolute -top-2 z-5 ">
          <img className="w-full" src={imagenTop} alt="" />
        </div>

        <header className=" p-4 ">
          <Title textColor="text-white" text="Electricista" />
        </header>

        <div className="relative w-full p-2 pb-16  ">
          {users?.map((user) => (
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
      </section>
    </>
  );
};

export default ProfessionalFilter;
