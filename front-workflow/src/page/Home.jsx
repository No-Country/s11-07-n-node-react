import React from "react";
import Carousel from "../components/homeCarousel/Carousel";

const Home = () => {
  // Usuario logeado? Se queda en /
  // Usuario no logeado y entró al sitio alguna vez? Redirecciona a /login
  // Usuario no logeado y no entró al sitio alguna vez? Redirecciona a /intro
  return <Login />;
};

export default Home;
