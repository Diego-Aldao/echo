import React from "react";
import styled from "styled-components";

const Contenedor = styled.div`
  margin-top: 80px;
  @media (min-width: 992px) {
    padding-right: 35px;
  }
`;

const Icono = styled.img`
  margin-bottom: 20px;
  width: 55px;
  height: 55px;
`;
const TituloItem = styled.h6`
  font-size: 16px;
  margin: 0px 0px 20px;
  text-transform: capitalize;
  font-family: var(--fuente-poppins);
`;

const ItemServicios = ({ imgIcono, titulo }) => {
  return (
    <Contenedor>
      <Icono src={imgIcono} alt="icono servicio" />
      <TituloItem>{titulo}</TituloItem>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        dicta, neque aut repellat culpa eaque aliquid.
      </p>
    </Contenedor>
  );
};

export default ItemServicios;
