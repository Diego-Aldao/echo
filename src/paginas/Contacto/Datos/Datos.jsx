import React from "react";
import styled from "styled-components";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { ImMap2 } from "react-icons/im";
import ItemDatos from "./ItemDatos";

const Wrapper = styled.section`
  width: 100%;
  padding: 140px 0px;
  color: #fff;
  cursor: default;
`;
const Contenedor = styled.div`
  padding: 0px 15px;
  max-width: 540px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
    display: flex;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1340px;
  }
`;

const Datos = () => {
  return (
    <Wrapper>
      <Contenedor>
        <ItemDatos
          titulo="teléfono"
          icono={<MdOutlineSmartphone />}
          dato1="+7 (111) 1234 56789"
          dato2="+1 (000) 9876 54321"
        />
        <ItemDatos
          titulo="email"
          icono={<FaRegEnvelopeOpen />}
          dato1="contacto@echo.com"
          dato2="usuario@echo.com"
        />
        <ItemDatos
          titulo="dirección"
          icono={<ImMap2 />}
          dato1="Primitivo de la reta 1007"
          dato2="Maipú, Mendoza"
        />
      </Contenedor>
    </Wrapper>
  );
};

export default Datos;
