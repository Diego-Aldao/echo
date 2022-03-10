import React, { useState } from "react";
import styled from "styled-components";
import ItemNoticia from "./ItemNoticia";
import imgNoticiasUno from "../../assets/images/Noticias/noticias-01.webp";
import imgNoticiasDos from "../../assets/images/Noticias/noticias-02.webp";
import imgNoticiasTres from "../../assets/images/Noticias/noticias-03.webp";

const Wrapper = styled.section`
  width: 100%;
`;
const Contenedor = styled.div`
  padding: 140px 15px;
  max-width: 540px;
  width: 100%;
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
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: capitalize;
  margin: 0px 0px 50px;
  color: white;
  @media (min-width: 480px) {
    font-size: 60px;
  }
`;
const Contenido = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Noticias = () => {
  const [bgOpacity, setBgOpacity] = useState("#000000b0");
  return (
    <Wrapper>
      <Contenedor>
        <Titulo>noticias</Titulo>
        <Contenido>
          <ItemNoticia bgOpacity={bgOpacity} img={imgNoticiasUno} />
          <ItemNoticia img={imgNoticiasDos} />
          <ItemNoticia bgOpacity={bgOpacity} img={imgNoticiasTres} />
        </Contenido>
      </Contenedor>
    </Wrapper>
  );
};

export default Noticias;
