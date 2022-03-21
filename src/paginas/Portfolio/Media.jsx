import React from "react";
import styled from "styled-components";
import imgPrueba from "../../assets/images/Header/img-header-01.webp";

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

const Contenido = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr);
  grid-row-gap: 25px;
`;
const Imagen = styled.img`
  width: 100%;
  max-height: auto;
`;

const Media = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Contenido>
          <Imagen src={imgPrueba} />
          <Imagen src={imgPrueba} />
          <Imagen src={imgPrueba} />
          <Imagen src={imgPrueba} />
          <Imagen src={imgPrueba} />
          <Imagen src={imgPrueba} />
          <Imagen src={imgPrueba} />
        </Contenido>
      </Contenedor>
    </Wrapper>
  );
};

export default Media;
