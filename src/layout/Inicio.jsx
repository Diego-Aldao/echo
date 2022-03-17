import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Servicios from "../components/Servicios/Servicios";
import Trabajos from "../components/Trabajos/Trabajos";
import Media from "../components/Media/Media";
import Equipo from "../components/Equipo/Equipo";
import Testimonios from "../components/Testimonios/Testimonios";
import Noticias from "../components/Noticias/Noticias";
import Footer from "../components/Footer/Footer";
import BotonScroll from "../components/BotonScroll";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

const Inicio = ({ mostrarNav, setMostrarNav }) => {
  return (
    <>
      <CustomCursor
        targets={["a, button, .dropdown"]}
        dimensions={30}
        fill={"#c5a47e"}
        smoothness={{
          movement: 0.5,
          scale: 1,
          opacity: 0.9,
        }}
        targetOpacity={0.5}
      />
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
