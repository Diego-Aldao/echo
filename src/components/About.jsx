import React from "react";
import styled from "styled-components";
import imgAbout from "../assets/images/p-1.jpg";

const Wrapper = styled.section`
  width: 100%;
  padding: 140px 0px;
  color: #fff;
`;
const Contenedor = styled.div`
  padding: 0px 15px;
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
`;

const ContenidoAbout = styled.div`
  width: 90%;
  padding: 60px 40px;
  background: #272727;
  margin-left: auto;
  position: relative;
  margin-bottom: 80px;
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
`;

const TituloContenido = styled.h2`
  font-size: 25px;
  margin: 0px 0px 20px;
  letter-spacing: 1px;
  line-height: 1.4;
  font-weight: 600;
  text-transform: capitalize;
`;

const TextoContenido = styled.p`
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
`;
const MediaImg = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
`;
const MediaContenido = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  margin-top: 20px;
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
  }
  h6 {
    font-size: 15px;
    text-transform: capitalize;
    font-weight: 400;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Contenedor>
        <MiniTexto>nosotros</MiniTexto>
        <Titulo>nuestra empresa</Titulo>
        <ContenidoAbout>
          <TituloContenido>25 años de experiencia</TituloContenido>
          <TextoContenido>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </TextoContenido>
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
