import React from "react";
import styled from "styled-components";
import imgPrueba from "../../assets/images/Header/img-header-02.webp";

const Contenedor = styled.div`
  width: 100%;
  margin-bottom: 80px;
`;

const Imagen = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const Contenido = styled.div`
  display: flex;
  padding-top: 20px;
`;

const Fecha = styled.div`
  min-width: 65px;
  margin-right: 30px;
  h5 {
    font-size: 48px;
    margin: 0px 0px 20px;
    font-family: var(--fuente-jost);
    text-align: center;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

const Descripcion = styled.div``;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  a {
    font-size: 13px;
    font-weight: 500;
    color: #c5a47e;
    padding-right: 20px;
    position: relative;
    font-family: var(--fuente-poppins);
    text-transform: capitalize;
  }
  a:after {
    content: "";
    width: 8px;
    height: 2px;
    background: #999;
    position: absolute;
    right: 4px;
    top: 35%;
  }
  a:last-of-type:after {
    display: none;
  }
`;
const Info = styled.div`
  h4 {
    font-weight: 700;
    line-height: 1.6;
    margin-bottom: 5px;
    font-size: 20px;
    text-transform: capitalize;
    margin: 0px;
  }
  p {
    color: var(--color-parrafos);
    font-size: 15px;
    font-weight: 400;
    line-height: 2;
    margin: 0;
  }
  a {
    margin-top: 20px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-left: 60px;
    position: relative;
    font-family: var(--fuente-poppins);
  }
  a:after {
    content: "";
    width: 50px;
    height: 1px;
    background: #fff;
    position: absolute;
    left: 0px;
    top: 50%;
  }
`;

const ItemBlog = () => {
  return (
    <Contenedor>
      <Imagen src={imgPrueba} />
      <Contenido>
        <Fecha>
          <h5>06</h5>
          <span>feb 2022</span>
        </Fecha>
        <Descripcion>
          <Tags>
            <a href="">clasico</a>
            <a href="">interior</a>
            <a href="">diseño</a>
          </Tags>
          <Info>
            <h4>construye un hermoso blog con facilidad</h4>
            <p>
              Lorem ipsum dolor sit ameteses eres adipisicing elit. Maiores
              recusandae vel alias dolore eaque illo voluptatem deleniti,
            </p>
            <a href="">leer mas</a>
          </Info>
        </Descripcion>
      </Contenido>
    </Contenedor>
  );
};

export default ItemBlog;
