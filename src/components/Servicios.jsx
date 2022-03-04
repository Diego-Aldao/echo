import React from "react";
import styled from "styled-components";
import iconoSketch from "../assets/images/Iconos/sketch.png";
import iconoFurniture from "../assets/images/Iconos/furniture.png";
import iconoHome from "../assets/images/Iconos/home.png";

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
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: capitalize;
  margin: 0px;
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

const ItemServicios = styled.div`
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

const Servicios = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Titulo>servicios</Titulo>
        <ContenidoServicios>
          <ItemServicios>
            <Icono src={iconoSketch} />
            <TituloItem>diseño & planificación</TituloItem>
            <TextoItem>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio dicta, neque aut repellat culpa eaque aliquid.
            </TextoItem>
          </ItemServicios>
          <ItemServicios>
            <Icono src={iconoFurniture} />
            <TituloItem>muebles & deco</TituloItem>
            <TextoItem>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio dicta, neque aut repellat culpa eaque aliquid.
            </TextoItem>
          </ItemServicios>
          <ItemServicios>
            <Icono src={iconoHome} />
            <TituloItem>diseño exterior</TituloItem>
            <TextoItem>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio dicta, neque aut repellat culpa eaque aliquid.
            </TextoItem>
          </ItemServicios>
        </ContenidoServicios>
      </Contenedor>
    </Wrapper>
  );
};

export default Servicios;
