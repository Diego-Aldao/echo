import React from "react";
import styled from "styled-components";
import imgPrueba from "../../assets/images/Header/img-header-01.webp";

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
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Imagen = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: auto;
  @media (min-width: 768px) {
    min-height: 335px;
    grid-column: ${(props) => (props.column ? props.column : "")};
  }
  @media (min-width: 992px) {
    max-height: 500px;
    grid-column: ${(props) => (props.columnLg ? props.columnLg : "")};
  }
  @media (min-width: 1200px) {
    max-height: 600px;
    grid-column: ${(props) => (props.columnXl ? props.columnXl : "")};
  }
`;

const Media = () => {
  return (
    <Wrapper>
      <Contenido>
        <Imagen
          src={imgPrueba}
          column={"1 / 3"}
          columnLg={"1 / 2"}
          columnXl={"1 / 5"}
        />
        <Imagen src={imgPrueba} />
        <Imagen src={imgPrueba} />
        <Imagen
          src={imgPrueba}
          column={"1 / 3"}
          columnLg={"1 / 4"}
          columnXl={"3 / 4"}
        />
        <Imagen
          src={imgPrueba}
          column={"1 / 3"}
          columnLg={"1 / 2"}
          columnXl={"4 / 5"}
        />
        <Imagen src={imgPrueba} columnXl={"1 / 3"} />
        <Imagen src={imgPrueba} columnXl={"3 / 5"} />
      </Contenido>
    </Wrapper>
  );
};

export default Media;
