import React from "react";
import styled from "styled-components";
import { ImQuotesLeft } from "react-icons/im";
import LazyLoad from "react-lazyload";

const Contenido = styled.div`
  width: 100%;
`;
const Texto = styled.p`
  font-size: 18px;
  padding: 80px 50px;
  border: 3px solid #ffffff47;
  color: #fff;
  position: relative;
`;
const Icono = styled(ImQuotesLeft)`
  color: #ffffff5a;
  position: absolute;
  top: -10px;
  right: 30px;
  padding: 0px 5px;
  font-size: 42px;
  background: #000;
  z-index: 22;
`;
const Info = styled.div`
  display: flex;
  margin-top: 20px;
  padding-left: 30px;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    width: 0;
    height: 0;
    border-top: 25px solid #ffffff47;
    border-right: 30px solid transparent;
    position: absolute;
    left: 100px;
    top: -20px;
  }
`;
const ImgAutor = styled.div`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const NombreAutor = styled.h6`
  display: table-cell;
  vertical-align: middle;
  padding-left: 20px;
  font-size: 16px;
  color: #fff;
  text-transform: capitalize;
  span {
    color: var(--color-principal);
    font-size: 13px;
    margin-top: 5px;
    font-weight: 400;
    display: block;
    font-family: var(--fuente-poppins);
  }
`;

const Autor = ({ imgTestimonio, nombre, cargo }) => {
  return (
    <Contenido>
      <Icono />
      <Texto>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium,
        et esse. Cum nihil ipsa quae voluptate suscipit aliquid cupiditate quas
        quam quidem vitae impedit earum.
      </Texto>
      <Info>
        <ImgAutor>
          <LazyLoad heigth={"100%"} offset={150}>
            <img src={imgTestimonio} alt="" />
          </LazyLoad>
        </ImgAutor>
        <NombreAutor>
          {nombre}
          <span>{cargo}</span>
        </NombreAutor>
      </Info>
    </Contenido>
  );
};

export default Autor;
