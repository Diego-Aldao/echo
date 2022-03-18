import React from "react";
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
  a {
    line-height: 1.5;
    font-weight: 400;
    font-family: var(--fuente-poppins);
    text-transform: capitalize;
    font-size: 15px;
  }
  span {
    margin: 0px 10px;
  }
  .current {
    color: var(--color-principal);
  }
  @media (min-width: 480px) {
    a {
      font-size: 17px;
    }
    span {
      margin: 0px 20px;
    }
  }
`;

const HeaderSecundario = () => {
  return (
    <Contenedor>
      <Descripcion>
        <h1>nosotros</h1>
        <Path>
          <a href="">inicio</a> <span>/</span>{" "}
          <a href="" className="current">
            about
          </a>
        </Path>
      </Descripcion>
    </Contenedor>
  );
};

export default HeaderSecundario;
