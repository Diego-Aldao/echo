import React from "react";
import styled from "styled-components";
import imgAbout from "../../assets/images/p-2.jpg";

const Wrapper = styled.section`
  width: 100%;
  padding: 140px 0px;
  color: #fff;
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
    display: flex;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1340px;
  }
`;
const ContenidoAbout = styled.div`
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
  line-height: 1.4;
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
  line-height: 1.4;
  font-weight: 600;
  text-transform: capitalize;
  @media (min-width: 480px) {
    font-size: 40px;
  }
`;

const TextoCaja = styled.p`
  font-size: 15px;
  margin: 0;
  font-weight: 400;
  line-height: 2;
  color: var(--color-parrafos);
  line-height: 2;
`;

const MediaAbout = styled.div`
  width: 100%;
  position: relative;
  min-height: 1px;
  @media (min-width: 992px) {
    flex: 0 0 58.33333333333%;
  }
`;
const MediaImg = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
  @media (min-width: 992px) {
    width: calc(100% + 50px);
    margin-left: -50px;
  }
`;
const MediaContenido = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  margin-top: 20px;
  @media (min-width: 480px) {
    flex-direction: row;
  }
`;
const ItemMediaContenido = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  h5,
  h6 {
    margin: 0px;
  }
  h5 {
    font-family: var(--fuente-jost);
    font-size: 18px;
    color: var(--color-principal);
    line-height: 1.4;
    font-weight: 500;
  }
  h6 {
    font-size: 15px;
    text-transform: capitalize;
    font-weight: 400;
  }
  @media (min-width: 480px) {
    margin-bottom: 0px;
  }
  @media (min-width: 768px) {
    h5 {
      font-size: 25px;
    }
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Contenedor>
        <ContenidoAbout>
          <MiniTexto>nosotros</MiniTexto>
          <Titulo>nuestra empresa</Titulo>
          <CajaAbout>
            <TituloCaja>
              25 años <br /> de experiencia
            </TituloCaja>
            <TextoCaja>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam
            </TextoCaja>
          </CajaAbout>
        </ContenidoAbout>
        <MediaAbout>
          <MediaImg src={imgAbout}></MediaImg>
          <MediaContenido>
            <ItemMediaContenido>
              <h5>01</h5>
              <h6>arquitectura</h6>
            </ItemMediaContenido>
            <ItemMediaContenido>
              <h5>02</h5>
              <h6>diseño interior</h6>
            </ItemMediaContenido>
            <ItemMediaContenido>
              <h5>03</h5>
              <h6>modelado 3D</h6>
            </ItemMediaContenido>
          </MediaContenido>
        </MediaAbout>
      </Contenedor>
    </Wrapper>
  );
};

export default About;
