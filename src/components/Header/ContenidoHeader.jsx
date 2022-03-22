import React, { useEffect } from "react";
import styled from "styled-components";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

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
  position: relative;
  font-size: 20px;
  padding: 0px;
  margin: 0px 0px 10px;
  text-transform: uppercase;
  font-weight: 300;
  color: var(--color-principal);
  letter-spacing: 2px;
  transition: all 0.4s;
  transition-delay: 0.8s;
  opacity: 1;
  @media (min-width: 480px) {
    letter-spacing: 22px;
  }
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 28px;
  padding: 0px;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-align: left;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 480px) {
    font-size: 40px;
  }
  @media (min-width: 768px) {
    font-size: 75px;
  }
`;
const Info = styled.p`
  position: relative;
  font-size: 14px;
  padding: 0px;
  margin: 10px 0px 0px;
  font-weight: 300;
  color: var(--color-subtitulos);
  transition: all 0.4s;
  transition-delay: 0.8s;
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
  transition: all 0.4s, top 0.4s 1s, opacity 0.4s 1s;
  cursor: pointer;
  &:hover {
    background: none;
  }
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

const ContenidoHeader = ({ refObs, inView, miniTexto, titulo }) => {
  useEffect(() => {
    Splitting({
      target: "[data-splitting]",
      by: "chars",
      key: null,
    });
  }, []);

  const stylesObserverMini = {
    top: inView ? "0px" : "-20px",
    opacity: inView ? 1 : 0,
  };
  const stylesObserverTitulo = {
    display: inView ? "flex" : "none",
  };
  const stylesObserverInfoBtn = {
    top: inView ? "0px" : "20px",
    opacity: inView ? 1 : 0,
  };

  return (
    <HeaderContenido ref={refObs}>
      <MiniTexto style={stylesObserverMini}>{miniTexto}</MiniTexto>
      <Titulo data-splitting style={stylesObserverTitulo}>
        {titulo}
      </Titulo>
      <Info style={stylesObserverInfoBtn}>
        El diseño correcto y las ideas correctas importan mucho en el diseño de
        interiores. <br /> Un estilo que marca tendencia.
      </Info>
      <Botton style={stylesObserverInfoBtn}>Descrubir trabajo</Botton>
    </HeaderContenido>
  );
};

export default ContenidoHeader;
