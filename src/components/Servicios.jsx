import React from "react";
import styled from "styled-components";
import iconoSketch from "../assets/images/Iconos/sketch.png";
import iconoFurniture from "../assets/images/Iconos/furniture.png";
import iconoHome from "../assets/images/Iconos/home.png";
/* import { MdDesignServices } from "react-icons/md"; */
/* import { GiBedLamp } from "react-icons/gi";
import { RiPlantFill } from "react-icons/gi"; */

const Wrapper = styled.section`
  width: 100%;
  padding: 0px 15px 140px;
  color: white;
`;

const Titulo = styled.h3`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: capitalize;
  margin: 0px;
`;

const ContenidoServicios = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ItemServicios = styled.div`
  margin-top: 80px;
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
      <Titulo>servicios</Titulo>
      <ContenidoServicios>
        <ItemServicios>
          <Icono src={iconoSketch} />
          <TituloItem>diseño & planificación</TituloItem>
          <TextoItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            dicta, neque aut repellat culpa eaque aliquid.
          </TextoItem>
        </ItemServicios>
        <ItemServicios>
          <Icono src={iconoFurniture} />
          <TituloItem>muebles & deco</TituloItem>
          <TextoItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            dicta, neque aut repellat culpa eaque aliquid.
          </TextoItem>
        </ItemServicios>
        <ItemServicios>
          <Icono src={iconoHome} />
          <TituloItem>diseño exterior</TituloItem>
          <TextoItem>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            dicta, neque aut repellat culpa eaque aliquid.
          </TextoItem>
        </ItemServicios>
      </ContenidoServicios>
    </Wrapper>
  );
};

export default Servicios;
