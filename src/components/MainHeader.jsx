import React, { useEffect } from "react";
import styled from "styled-components";
import imgHeader from "../assets/images/img-header-1.jpg";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const Header = styled.header`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderImg = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${imgHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: #02050b;
    opacity: 0.5;
  }
  @media (min-width: 992px) {
    width: 70%;
  }
`;
const HeaderContenido = styled.div`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  padding: 0px 15px;
  position: relative;
  z-index: 4;
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
const MiniTexto = styled.h5`
  font-size: 20px;
  padding: 0px;
  margin: 0px 0px 10px;
  text-transform: uppercase;
  font-weight: 300;
  color: var(--color-principal);
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
  @media (min-width: 480px) {
    letter-spacing: 22px;
  }
`;
const Titulo = styled.h2`
  font-size: 28px;
  padding: 0px;
  margin: 0px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-align: left;
  position: relative;
  @media (min-width: 480px) {
    font-size: 40px;
  }
  @media (min-width: 768px) {
    font-size: 75px;
  }
`;
const Info = styled.p`
  font-size: 14px;
  padding: 0px;
  margin: 10px 0px 0px;
  font-weight: 300;
  line-height: 2;
  color: var(--color-subtitulos);
`;
const Botton = styled.a`
  position: relative;
  width: 170px;
  height: 50px;
  background: var(--color-principal);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  margin-top: 30px;
  font-family: var(--fuente-jost);
  letter-spacing: 0.5px;
  &:after {
    content: "";
    width: 99.5%;
    height: 130%;
    position: absolute;
    top: -7px;
    left: 0;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    opacity: 0.6;
    transition: all 0.3s;
  }
  &:before {
    content: "";
    width: 107%;
    height: 99.5%;
    position: absolute;
    left: -5px;
    top: 0;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    opacity: 0.6;
    transition: all 0.3s;
  }
`;

const MainHeader = () => {
  useEffect(() => {
    Splitting({
      target: "[data-splitting]",
      by: "chars",
      key: null,
    });
  }, []);
  return (
    <Header>
      <HeaderImg></HeaderImg>
      <HeaderContenido>
        <MiniTexto>agencia</MiniTexto>
        <Titulo data-splitting>diseño interior</Titulo>
        <Info>
          El diseño correcto y las ideas correctas importan mucho en el diseño
          de interiores. <br /> Un estilo que hace marca tendencia.
        </Info>
        <Botton>Descrubir trabajo</Botton>
      </HeaderContenido>
    </Header>
  );
};

export default MainHeader;
