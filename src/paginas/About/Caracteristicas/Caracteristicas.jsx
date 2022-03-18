import React from "react";
import styled from "styled-components";
import ItemCaracteristica from "./ItemCaracteristica";

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
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1340px;
  }
`;
const Titulo = styled.h3`
  font-weight: 700;
  font-size: 35px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: capitalize;
`;

const Descripcion = styled.div`
  display: flex;
  flex-direction: column;
`;

const Caracteristicas = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Titulo>mejores características</Titulo>
        <Descripcion>
          <ItemCaracteristica />
          <ItemCaracteristica />
          <ItemCaracteristica />
        </Descripcion>
      </Contenedor>
    </Wrapper>
  );
};

export default Caracteristicas;
