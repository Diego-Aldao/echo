import React from "react";
import styled from "styled-components";
import imgPeque from "../assets/images/img-peque.jpg";
import imgGrande from "../assets/images/img-grande.jpg";

const Wrapper = styled.section`
  width: 100%;
  padding-bottom: 140px;
  color: white;
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
const Titulo = styled.h3`
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: capitalize;
  margin: 0px 0px 60px;
  @media (min-width: 480px) {
    font-size: 40px;
  }
  @media (min-width: 768px) {
    font-size: 60px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, auto-fill);
  grid-row-gap: 45px;
  @media (min-width: 768px) {
    grid-column-gap: 45px;
    grid-template-columns: 1fr 1fr;
  }
`;

const Imagen = styled.img`
  width: 100%;
  display: block;
  object-fit: fill;
  padding: 0px;
  margin: 0px;
`;

const Trabajos = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Titulo>trabajos</Titulo>
        <Grid>
          <Imagen src={imgGrande} />
          <Imagen src={imgPeque} />
          <Imagen src={imgGrande} />
          <Imagen src={imgPeque} />
          <Imagen src={imgPeque} />
          <Imagen src={imgGrande} />
        </Grid>
      </Contenedor>
    </Wrapper>
  );
};

export default Trabajos;
