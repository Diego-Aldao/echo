import React from "react";
import Caracteristicas from "./Caracteristicas/Caracteristicas";
import Info from "./Info";
import Testimonios from "../../components/Testimonios/Testimonios";
import Equipo from "../../components/Equipo/Equipo";

const AboutPage = () => {
  return (
    <>
      <Info />
      <Caracteristicas />
      <Testimonios />
      <Equipo />
    </>
  );
};

export default AboutPage;
