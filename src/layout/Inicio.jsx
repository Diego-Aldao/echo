import React from "react";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Servicios from "../components/Servicios/Servicios";
import Trabajos from "../components/Trabajos/Trabajos";
import Media from "../components/Media/Media";
import Equipo from "../components/Equipo/Equipo";
import Testimonios from "../components/Testimonios/Testimonios";
import Noticias from "../components/Noticias/Noticias";
import Footer from "./Footer/Footer";
import BotonScroll from "../components/BotonScroll";
import Navbar from "./Navbar/Navbar";

const Inicio = ({ mostrarNav, setMostrarNav }) => {
  return (
    <>
      <Navbar mostrarNav={mostrarNav} />
      <Header mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
      <About />
      <Servicios />
      <Trabajos />
      <Media />
      <Equipo />
      <Testimonios />
      <Noticias />
      <Footer />
      <BotonScroll />
    </>
  );
};

export default Inicio;
