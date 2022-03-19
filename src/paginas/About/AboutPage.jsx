import React from "react";
import Caracteristicas from "./Caracteristicas/Caracteristicas";
import Info from "./Info";
import Testimonios from "../../components/Testimonios/Testimonios";
import Equipo from "../../components/Equipo/Equipo";
import Skills from "./Skills";
import HeaderSecundario from "../../layout/HeaderSecundario";

const AboutPage = () => {
  return (
    <>
      <HeaderSecundario nombre={"nosotros"} link={"about"} />
      <Info />
      <Caracteristicas />
      <Testimonios />
      <Equipo />
      <Skills />
    </>
  );
};

export default AboutPage;
