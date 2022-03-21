import React from "react";
import HeaderSecundario from "../../layout/HeaderSecundario";
import Datos from "./Datos/Datos";

const ContactoPage = () => {
  return (
    <>
      <HeaderSecundario nombre={"contactanos"} link={"contacto"} />
      <Datos />
    </>
  );
};

export default ContactoPage;
