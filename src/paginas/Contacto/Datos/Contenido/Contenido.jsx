import React from "react";
import styled from "styled-components";
import Formulario from "./Formulario";

const Wrapper = styled.section`
  width: 100%;
  padding: 0px 0px 140px;
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

const Contenido = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Formulario />
      </Contenedor>
    </Wrapper>
  );
};

export default Contenido;
