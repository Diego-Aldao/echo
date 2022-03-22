import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 0px 0px 140px;
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
    display: flex;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1340px;
  }
`;

const Contenido = styled.div`
  margin-bottom: 40px;
  min-width: 50%;
`;

const Habilidad = styled.h6`
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
  position: relative;
  padding: 20px 0px;
  margin: 0px 0px 30px;
  &:after {
    content: "";
    position: absolute;
    background: var(--color-principal);
    width: ${(props) => props.width};
    height: 10px;
    bottom: -10px;
    left: 0px;
  }
  span {
    position: absolute;
    left: ${(props) => props.left};
    top: 10px;
    padding: 8px 12px;
    background: var(--color-principal);
    border-radius: 5px;
    color: #111;
    font-size: 10px;
    font-weight: 600;
    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: calc(50% - 5px);
      background: var(--color-principal);
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
      z-index: -1;
    }
  }
`;

const Titulo = styled.h4`
  font-size: 20px;
  line-height: 1.7;
  margin: 0px 0px 20px;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const Texto = styled.p`
  margin: 0px 0px 10px;
`;

const Skills = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Contenido>
          <Habilidad left={"60%"} width={"75%"}>
            arquitectura <span>75%</span>
          </Habilidad>
          <Habilidad left={"75%"} width={"90%"}>
            diseño interior<span>90%</span>
          </Habilidad>
          <Habilidad left={"65%"} width={"80%"}>
            modelado 3d<span>80%</span>
          </Habilidad>
        </Contenido>
        <Contenido>
          <Titulo>
            brindando soluciones de diseños personalizados que se adaptan a cada
            espacio
          </Titulo>
          <Texto>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            excepturi assumenda debitis dolore veniam sed.
          </Texto>
          <Texto>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
            distinctio quas odio fugit officiis dolores pariatur id facere
            provident autem.
          </Texto>
        </Contenido>
      </Contenedor>
    </Wrapper>
  );
};

export default Skills;
