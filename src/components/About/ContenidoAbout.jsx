import React from "react";
import styled from "styled-components";

const Contenido = styled.div`
  width: 100%;
  margin-bottom: 80px;
  position: relative;
  z-index: 4;
  @media (min-width: 992px) {
    flex: 0 0 41.666667%;
  }
`;
const MiniTexto = styled.h6`
  margin: 0px 0px 10px 0px;
  font-size: 16px;
  letter-spacing: 10px;
  font-weight: 100;
  text-transform: uppercase;
  color: var(--color-principal);
`;

const Titulo = styled.h3`
  font-size: 24px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0px 0px 50px;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`;

const CajaAbout = styled.div`
  width: 90%;
  padding: 60px 40px;
  background: #272727;
  margin-left: auto;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 25px;
    left: -30px;
    width: 100%;
    height: 100%;
    border: 5px solid var(--color-principal);
    z-index: -1;
  }
  @media (min-width: 992px) {
    padding: 60px 50px;
  }
`;

const TituloCaja = styled.h2`
  font-size: 25px;
  margin: 0px 0px 20px;
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: capitalize;
  @media (min-width: 480px) {
    font-size: 40px;
  }
`;
const BotonCaja = styled.a`
  padding: 10px 15px;
  display: block;
  width: 100px;
  margin-top: 30px;
  font-size: 16px;
  border: 1px solid var(--color-principal);
  text-align: center;
  margin-left: auto;
  text-transform: capitalize;
  font-family: var(--fuente-jost);
`;

const ContenidoAbout = () => {
  return (
    <Contenido>
      <MiniTexto>nosotros</MiniTexto>
      <Titulo>nuestra empresa</Titulo>
      <CajaAbout>
        <TituloCaja>
          25 años <br /> de experiencia
        </TituloCaja>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam
        </p>
        <BotonCaja>ver mas</BotonCaja>
      </CajaAbout>
    </Contenido>
  );
};

export default ContenidoAbout;
