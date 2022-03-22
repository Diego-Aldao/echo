import React from "react";
import HeaderSecundario from "../../layout/HeaderSecundario";
import Contenido from "./Datos/Contenido/Contenido";
import Datos from "./Datos/Datos";

const ContactoPage = () => {
  return (
    <>
      <HeaderSecundario nombre={"contactanos"} link={"contacto"} />
      <Datos />
      <Contenido />
    </>
  );
};

export default ContactoPage;
