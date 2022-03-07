import React from "react";
import styled from "styled-components";

const Item = styled.div`
  padding: 50px 30px;
  margin-bottom: 50px;
  color: #fff;
`;
const Fecha = styled.span`
  font-size: 11px;
  padding: 5px 10px;
  border: 1px solid #ffffff88;
  display: inline-block;
  text-transform: capitalize;
  margin-bottom: 50px;
  font-weight: 500;
`;

const Tags = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-weight: 500;
  span {
    font-size: 12px;
    margin-right: 15px;
    text-transform: capitalize;
  }
`;

const Titulo = styled.h6`
  line-height: 1.4;
  font-size: 16px;
  font-weight: 600px;
  margin: 0px 0px 40px;

  &::first-letter {
    text-transform: capitalize;
  }
`;

const Boton = styled.a`
  font-size: 12px;
  letter-spacing: 2px;
  background: none;
  text-transform: capitalize;
  border: none;
  color: white;
  font-family: var(--fuente-poppins);
  font-weight: 500;
  line-height: 1.4;
`;

const ItemNoticia = () => {
  return (
    <Item>
      <Fecha>agosto 06</Fecha>
      <Tags>
        <span>admin</span>
        <span>WordPress</span>
      </Tags>
      <Titulo>double rectangle houses from old containers.</Titulo>
      <Boton>leer mas</Boton>
    </Item>
  );
};

export default ItemNoticia;
