import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const Item = styled.div`
  padding: 50px 30px;
  margin-bottom: 50px;
  color: #fff;
  position: relative;
  background: url(${(props) => props.img});
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
    background: ${(props) => (props.bgOpacity ? props.bgOpacity : "#00000028")};
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
const Fecha = styled.span`
  font-size: 11px;
  padding: 5px 10px;
  border: 1px solid #ffffff88;
  display: inline-block;
  text-transform: capitalize;
  margin-bottom: 50px;
  font-weight: 500;
`;

const Tags = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-weight: 500;
  span {
    font-size: 12px;
    margin-right: 15px;
    text-transform: capitalize;
  }
`;

const Titulo = styled.h6`
  font-size: 17px;
  font-weight: 600px;
  margin: 0px 0px 40px;
  font-family: var(--fuente-poppins);
  &::first-letter {
    text-transform: capitalize;
  }
`;

const Boton = styled.a`
  font-size: 12px;
  letter-spacing: 2px;
  background: none;
  text-transform: capitalize;
  border: none;
  color: white;
  font-family: var(--fuente-poppins);
  font-weight: 500;
  line-height: 1.4;
`;

const ItemNoticia = ({ img, bgOpacity }) => {
  return (
    <LazyLoad heigth={"100%"} offset={150}>
      <Item bgOpacity={bgOpacity} img={img}>
        <Info>
          <Fecha>agosto 06</Fecha>
          <Tags>
            <span>admin</span>
            <span>WordPress</span>
          </Tags>
          <Titulo>casas de doble rectángulo de contenedores viejos.</Titulo>
          <Boton>leer mas</Boton>
        </Info>
      </Item>
    </LazyLoad>
  );
};

export default ItemNoticia;
