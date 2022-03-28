import React from "react";
import styled from "styled-components";
import imagenPrueba from "../../../assets/images/PaginasSec/Proyecto/img-proyecto-01.webp";
import imagenPrueba2 from "../../../assets/images/Trabajos/trabajo-grande-03.webp";
import ImagenTrabajos from "../../../components/Trabajos/ImagenTrabajos";

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
    max-width: 100%;
  }
  @media (min-width: 1240px) {
    padding: 0px 30px;
  }
`;

const Filtro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  span {
    margin-right: 15px;
    text-transform: capitalize;
  }
`;

const Contenido = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  row-gap: 25px;
  grid-template-rows: repeat(6, auto);
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(5, auto);
    column-gap: 25px;
  }
`;

const Media = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Filtro>
          <span>todos</span>
          <span>interior</span>
          <span>exterior</span>
          <span>otro</span>
        </Filtro>
        <Contenido>
          <ImagenTrabajos img={imagenPrueba} />
          <ImagenTrabajos img={imagenPrueba2} column={"2 / 3"} row={" 1 / 3"} />
          <ImagenTrabajos img={imagenPrueba} />
          <ImagenTrabajos img={imagenPrueba2} row={" 2 / 4"} />
          <ImagenTrabajos img={imagenPrueba} column={"2 / 3"} />
          <ImagenTrabajos img={imagenPrueba2} column={"3 / 4"} row={"2 / 4"} />
        </Contenido>
      </Contenedor>
    </Wrapper>
  );
};

export default Media;
