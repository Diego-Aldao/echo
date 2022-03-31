import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 140px 0px;
  color: #fff;
  cursor: default;
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
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1340px;
  }
`;

const Info = styled.div`
  margin-bottom: 50px;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Titulo = styled.h4`
  font-size: 20px;
  margin: 0px 0px 20px;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 30px;
    flex: 0 0 35%;
  }
`;

const Texto = styled.p`
  text-transform: capitalize;
`;

const ContenedorDatos = styled.div`
  @media (min-width: 992px) {
    display: flex;
  }
`;

const Dato = styled.div`
  margin-bottom: 30px;
  h6 {
    font-size: 16px;
    text-transform: capitalize;
    font-family: var(--fuente-poppins);
  }
  p {
    text-transform: capitalize;
  }
  @media (min-width: 768px) {
    h6 {
      font-size: 18px;
    }
  }
  @media (min-width: 992px) {
    flex: 0 0 25%;
  }
`;

const Intro = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Info>
          <Titulo>introducción</Titulo>
          <Texto>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            omnis magni consectetur veniam ullam sint ab placeat exercitationem
            odit, aliquam beatae, voluptate sequi praesentium consequuntur et
            maxime amet distinctio iure!
          </Texto>
        </Info>
        <ContenedorDatos>
          <Dato>
            <h6>cliente</h6>
            <p>envato.com</p>
          </Dato>
          <Dato>
            <h6>fecha</h6>
            <p>6 agosto 2022</p>
          </Dato>
          <Dato>
            <h6>categorías</h6>
            <p>diseño interior, muebles</p>
          </Dato>
          <Dato>
            <h6>tags</h6>
            <p>moderno, diseño, minimalista</p>
          </Dato>
        </ContenedorDatos>
      </Contenedor>
    </Wrapper>
  );
};

export default Intro;
