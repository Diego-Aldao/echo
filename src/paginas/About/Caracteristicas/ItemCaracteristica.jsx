import React from "react";
import styled from "styled-components";
import IconoCasa from "../../../assets/images/Iconos/sketch.webp";

const Item = styled.div`
  padding: 60px 40px;
  margin-bottom: 50px;
  color: #fff;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 992px) {
    margin: 0px 15px 0px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    &:after {
      background: #00000028;
    }
  }
`;

const Info = styled.div`
  position: relative;
  z-index: 4;
`;
const Icono = styled.img`
  width: 60px;
  height: 60px;
  object-fit: fill;
  margin-bottom: 40px;
`;

const Caracteristica = styled.h6`
  margin: 0px 0px 20px;
  font-size: 16px;
  text-transform: capitalize;
`;

const Texto = styled.p`
  margin: 0px 0px 20px;

  &::first-letter {
    text-transform: capitalize;
  }
`;

const Boton = styled.a`
  font-size: 13px;
  letter-spacing: 2px;
  background: none;
  text-transform: capitalize;
  border: none;
  color: white;
  font-family: var(--fuente-poppins);
  font-weight: 500;
  line-height: 1.4;
`;

const ItemCaracteristica = () => {
  return (
    <Item>
      <Info>
        <Icono src={IconoCasa} />
        <Caracteristica>3d modeling</Caracteristica>
        <Texto>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, earum!
        </Texto>
        <Boton>leer mas</Boton>
      </Info>
    </Item>
  );
};

export default ItemCaracteristica;
