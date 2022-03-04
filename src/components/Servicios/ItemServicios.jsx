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
  font-weight: 500;
  line-height: 1.4;
  font-family: var(--fuente-poppins);
`;

const TextoItem = styled.p`
  color: var(--color-parrafos);
  font-size: 15px;
  font-weight: 400;
  line-height: 2;
  margin: 0;
`;

const ItemServicios = ({ imgIcono, titulo }) => {
  return (
    <Contenedor>
      <Icono src={imgIcono} />
      <TituloItem>{titulo}</TituloItem>
      <TextoItem>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        dicta, neque aut repellat culpa eaque aliquid.
      </TextoItem>
    </Contenedor>
  );
};

export default ItemServicios;
