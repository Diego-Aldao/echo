import React from "react";
import styled from "styled-components";
import { GiSmartphone } from "react-icons/gi";

const Contenido = styled.div`
  display: flex;
  padding: 40px 20px;
  @media (min-width: 992px) {
    flex: 0 0 33.3333333%;
  }
`;
const Icono = styled.span`
  padding-right: 30px;
  width: 60px;
  font-size: 35px;
  color: var(--color-parrafos);
`;
const Descripcion = styled.div``;
const Titulo = styled.h6`
  margin: 0px 0px 10px;
  font-size: 18px;
  text-transform: capitalize;
  color: var(--color-principal);
  font-weight: 500;
  font-family: var(--fuente-jost);
`;
const Info = styled.p`
  color: var(--color-parrafos);
  font-size: 13px;
  font-weight: 400;
  line-height: 2;
  margin: 0;
`;

const ItemDatos = () => {
  return (
    <Contenido>
      <Icono>
        <GiSmartphone />
      </Icono>
      <Descripcion>
        <Titulo>email</Titulo>
        <Info>lorem@info.com</Info>
        <Info>lorem@info.com</Info>
      </Descripcion>
    </Contenido>
  );
};

export default ItemDatos;
