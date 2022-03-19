import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imgPrueba from "../assets/images/Header/img-header-01.webp";

const Contenedor = styled.div`
  margin: 100px 0px 0px;
  margin-left: 5%;
  color: white;
  padding: 0px 15px;
  width: 90%;
  min-height: 500px;
  height: 60vh;
  display: flex;
  align-items: center;
  background: url(${imgPrueba});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    background: #00000087;
    width: 100%;
    height: 100%;
  }
`;
const Descripcion = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  h1 {
    text-align: center;
    font-family: var(--fuente-jost);
    text-transform: capitalize;
    margin: 0px 0px 20px;
    font-weight: 500;
    line-height: 1.4;
    font-size: 40px;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 75px;
    }
  }
`;
const Path = styled.div`
  display: flex;
  justify-content: center;
  span {
    line-height: 1.5;
    font-weight: 400;
    font-family: var(--fuente-poppins);
    text-transform: capitalize;
    font-size: 15px;
  }
  .current {
    color: var(--color-principal);
  }
  @media (min-width: 480px) {
    span {
      font-size: 17px;
    }
  }
`;

const Barra = styled.span`
  margin: 0px 20px;
`;

const Current = styled.span`
  color: var(--color-principal);
`;

const HeaderSecundario = ({ nombre, link }) => {
  return (
    <Contenedor>
      <Descripcion>
        <h1>{nombre}</h1>
        <Path>
          <span>
            <Link to={"/"}>inicio</Link>
          </span>
          <Barra>/</Barra>
          <Current>
            <Link to={"/about"}>{link}</Link>
          </Current>
        </Path>
      </Descripcion>
    </Contenedor>
  );
};

export default HeaderSecundario;
