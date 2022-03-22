import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Contenedor = styled.div`
  padding: 40px 0px 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Subtitulo = styled.h6`
  color: #b19777;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin: 0px 0px 10px;
  text-align: center;
`;
const Titulo = styled.h2`
  font-size: clamp(3vw, 16px, 5vw);
  font-weight: 700;
  text-transform: capitalize;
`;

const Siguiente = () => {
  return (
    <Contenedor>
      <Link to={"/proyecto"}>
        <Subtitulo>siguiente</Subtitulo>
        <Titulo>muebles de lujo</Titulo>
      </Link>
    </Contenedor>
  );
};

export default Siguiente;
