import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imgProyecto01 from "../../assets/images/PaginasSec/Proyecto/img-proyecto-01.webp";
import imgProyecto02 from "../../assets/images/PaginasSec/Proyecto/img-proyecto-02.webp";
import imgProyecto03 from "../../assets/images/PaginasSec/Proyecto/img-proyecto-03.webp";
import imgProyecto04 from "../../assets/images/PaginasSec/Proyecto/img-proyecto-04.webp";
import imgProyecto05 from "../../assets/images/PaginasSec/Proyecto/img-proyecto-05.webp";
import imgProyecto06 from "../../assets/images/PaginasSec/Proyecto/img-proyecto-06.webp";
import imgProyecto07 from "../../assets/images/PaginasSec/Proyecto/img-proyecto-07.webp";
import Siguiente from "./Siguiente";

const Wrapper = styled.section`
  width: 100%;
  padding: 0px;
  color: #fff;
  cursor: default;
`;

const Contenido = styled.div`
  padding: 0px 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, auto);
  grid-row-gap: 15px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-template-rows: repeat(5, auto);
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, auto);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
  }
`;

const ContenedorImg = styled(Link)`
  width: 100%;
  height: 100%;
  max-height: auto;
  @media (min-width: 768px) {
    min-height: 335px;
    grid-column: ${(props) => (props.column ? props.column : "")};
  }
  @media (min-width: 992px) {
    max-height: 500px;
    grid-column: ${(props) => (props.columnlg ? props.columnlg : "")};
  }
  @media (min-width: 1200px) {
    max-height: 600px;
    grid-column: ${(props) => (props.columnxl ? props.columnxl : "")};
  }
`;
const Imagen = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Media = () => {
  return (
    <Wrapper>
      <Contenido>
        <ContenedorImg
          to="/proyectos"
          column={"1 / 3"}
          columnlg={"1 / 2"}
          columnxl={"1 / 5"}
        >
          <Imagen src={imgProyecto01} alt="imagen proyecto" />
        </ContenedorImg>
        <ContenedorImg to="/proyectos">
          <Imagen src={imgProyecto02} alt="imagen proyecto" />
        </ContenedorImg>
        <ContenedorImg to="/proyectos">
          <Imagen src={imgProyecto03} alt="imagen proyecto" />
        </ContenedorImg>
        <ContenedorImg
          to="/proyectos"
          column={"1 / 3"}
          columnlg={"1 / 4"}
          columnxl={"3 / 4"}
        >
          <Imagen src={imgProyecto04} alt="imagen proyecto" />
        </ContenedorImg>
        <ContenedorImg
          to="/proyectos"
          column={"1 / 3"}
          columnlg={"1 / 2"}
          columnxl={"4 / 5"}
        >
          <Imagen src={imgProyecto05} alt="imagen proyecto" />
        </ContenedorImg>
        <ContenedorImg to="/proyectos" columnxl={"1 / 3"}>
          <Imagen src={imgProyecto06} alt="imagen proyecto" />
        </ContenedorImg>
        <ContenedorImg to="/proyectos" columnxl={"3 / 5"}>
          <Imagen src={imgProyecto07} alt="imagen proyecto" />
        </ContenedorImg>
      </Contenido>
      <Siguiente />
    </Wrapper>
  );
};

export default Media;
