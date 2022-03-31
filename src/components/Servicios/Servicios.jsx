import React from "react";
import styled from "styled-components";
import iconoSketch from "../../assets/images/Iconos/sketch.webp";
import iconoFurniture from "../../assets/images/Iconos/mueble.webp";
import iconoHome from "../../assets/images/Iconos/casa.webp";
import ItemServicios from "./ItemServicios";

const Wrapper = styled.section`
  width: 100%;
  padding-bottom: 140px;
  color: white;
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
  letter-spacing: 4px;
  text-transform: capitalize;
  @media (min-width: 480px) {
    font-size: 60px;
  }
`;

const ContenidoServicios = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Servicios = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Titulo>servicios</Titulo>
        <ContenidoServicios>
          <ItemServicios
            imgIcono={iconoSketch}
            titulo={"diseño & planificación"}
          />
          <ItemServicios imgIcono={iconoFurniture} titulo={"muebles & deco"} />
          <ItemServicios imgIcono={iconoHome} titulo={"diseño exterior"} />
        </ContenidoServicios>
      </Contenedor>
    </Wrapper>
  );
};

export default Servicios;
