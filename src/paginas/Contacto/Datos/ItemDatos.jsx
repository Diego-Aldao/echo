import React from "react";
import styled from "styled-components";

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
  font-size: 30px;
  color: var(--color-parrafos);
`;
const Descripcion = styled.div``;
const Titulo = styled.h6`
  margin: 0px 0px 10px;
  font-size: 18px;
  text-transform: capitalize;
  color: var(--color-principal);
`;
const Info = styled.p`
  font-size: 13px;
`;

const ItemDatos = ({ icono, titulo, dato1, dato2 }) => {
  return (
    <Contenido>
      <Icono>{icono}</Icono>
      <Descripcion>
        <Titulo>{titulo}</Titulo>
        <Info>{dato1}</Info>
        <Info>{dato2}</Info>
      </Descripcion>
    </Contenido>
  );
};

export default ItemDatos;
