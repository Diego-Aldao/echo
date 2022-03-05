import React from "react";
import styled from "styled-components";
import imgEquipo from "../../assets/images/img-grande.jpg";
import MiembroEquipo from "./MiembroEquipo";

const Wrapper = styled.section`
  width: 100%;
  padding: 140px 0px;
  color: #fff;
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
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: capitalize;
  margin: 0px 0px 50px;
  @media (min-width: 480px) {
    font-size: 60px;
  }
`;
const ContenedorEquipo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Equipo = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Titulo>nuestro equipo</Titulo>
        <ContenedorEquipo>
          <MiembroEquipo imgMiembro={imgEquipo} />
          <MiembroEquipo imgMiembro={imgEquipo} />
          <MiembroEquipo imgMiembro={imgEquipo} />
          <MiembroEquipo imgMiembro={imgEquipo} />
        </ContenedorEquipo>
      </Contenedor>
    </Wrapper>
  );
};

export default Equipo;
