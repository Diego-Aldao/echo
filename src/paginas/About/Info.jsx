import React from "react";
import styled from "styled-components";

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ContenedorNumeros = styled.div`
  @media (min-width: 580px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 992px) {
    flex: 0 0 50%;
  }
`;

const Numeros = styled.div`
  margin-bottom: 50px;
  h3 {
    font-size: 42px;
    font-weight: 500;
    color: var(--color-principal);
    margin: 0px 0px 10px;
    span {
      font-weight: 100;
      font-size: 20px;
      text-transform: uppercase;
    }
  }
  h6 {
    font-size: 11px;
    margin: 0px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  @media (min-width: 580px) {
    flex: 0 0 50%;
  }
`;
const Descripcion = styled.div`
  p {
    color: var(--color-parrafos);
    font-size: 15px;
    font-weight: 400;
    line-height: 2;
    margin: 0 0px 20px;
  }
  @media (min-width: 992px) {
    flex: 0 0 50%;
  }
`;

const Info = () => {
  return (
    <Contenido>
      <ContenedorNumeros>
        <Numeros>
          <h3>352</h3>
          <h6>projectos completados</h6>
        </Numeros>
        <Numeros>
          <h3>567</h3>
          <h6>clientes satisfechos</h6>
        </Numeros>
        <Numeros>
          <h3>
            651 <span>mil</span>
          </h3>
          <h6>ganancia mensual</h6>
        </Numeros>
        <Numeros>
          <h3>17</h3>
          <h6>premios ganados</h6>
        </Numeros>
      </ContenedorNumeros>
      <Descripcion>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          reiciendis omnis? Sit dignissimos omnis labore aliquam error molestias
          unde eum.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore porro
          doloremque et impedit ea illo, nihil quo maxime inventore ratione, sed
          accusantium minima ab numquam perferendis omnis recusandae fuga?
          Nostrum doloribus illo rerum eaque sequi.
        </p>
      </Descripcion>
    </Contenido>
  );
};

export default Info;
