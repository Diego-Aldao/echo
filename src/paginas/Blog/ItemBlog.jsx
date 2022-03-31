import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

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
    text-align: left;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
  }
  @media (min-width: 768px) {
    min-width: 90px;
    margin-right: 40px;
    h5 {
      font-size: 60px;
    }
    span {
      font-size: 16px;
    }
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
    top: 45%;
  }
  a:last-of-type:after {
    display: none;
  }
`;
const Info = styled.div`
  h4 {
    font-weight: 700;
    line-height: 1.6;
    margin: 0px 0px 5px;
    font-size: 20px;
    text-transform: capitalize;
  }
  span {
    margin-top: 20px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-left: 60px;
    position: relative;
    font-family: var(--fuente-poppins);
    display: inline-block;
    text-align: right;
  }
  span:after {
    content: "";
    width: 50px;
    height: 1px;
    background: #fff;
    position: absolute;
    left: 0px;
    top: 50%;
  }
  @media (min-width: 768px) {
    h4 {
      font-size: 30px;
    }
  }
`;

const ItemBlog = ({ img }) => {
  return (
    <Contenedor>
      <LazyLoad heigth={"100%"} offset={150}>
        <Imagen src={img} />
      </LazyLoad>
      <Contenido>
        <Fecha>
          <h5>06</h5>
          <span>feb 2022</span>
        </Fecha>
        <Descripcion>
          <Tags>
            <a href="">clásico</a>
            <a href="">interior</a>
            <a href="">diseño</a>
          </Tags>
          <Info>
            <h4>construye un simple blog con facilidad</h4>
            <p>
              Lorem ipsum dolor sit ameteses eres adipisicing elit. Maiores
              recusandae vel alias dolore eaque illo voluptatem deleniti,
            </p>
            <span>
              <Link to={"/detalle-blog"}>leer más</Link>
            </span>
          </Info>
        </Descripcion>
      </Contenido>
    </Contenedor>
  );
};

export default ItemBlog;
