import React from "react";
import HeaderSecundario from "../../layout/HeaderSecundario";
import Contenido from "./Contenido/Contenido";
import Datos from "./Datos/Datos";

const ContactoPage = () => {
  return (
    <>
      <HeaderSecundario nombre={"contáctanos"} link={"contacto"} />
      <Datos />
      <Contenido />
    </>
  );
};

export default ContactoPage;
