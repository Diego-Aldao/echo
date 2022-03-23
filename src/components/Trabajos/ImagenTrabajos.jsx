import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const Contenedor = styled.div`
  width: 100%;
  padding: 0px;
  margin: 0px;
  position: relative;
  @media (min-width: 768px) {
    grid-row: ${(props) => props.row};
    grid-column: ${(props) => props.column};
  }
  img {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.a`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #0000005e;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 90%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 35px;
  opacity: 1;
  transition: all 0.4s;
  @media (min-width: 992px) {
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
  h5 {
    font-size: 17px;
    text-transform: capitalize;
    margin: 10px 0px 0px;
  }
`;
const Tags = styled.div`
  display: flex;
  span {
    margin-right: 15px;
    font-size: 13px;
    color: #c5a47e;
    font-family: var(--fuente-poppins);
    text-transform: capitalize;
    line-height: 1.4;
    font-weight: 400;
  }
`;
const ImagenTrabajos = ({ img, column, row }) => {
  return (
    <Contenedor column={column} row={row}>
      <LazyLoad height={"100%"} offset={200}>
        <img src={img} />
      </LazyLoad>
      <Info href="#">
        <Tags>
          <span>arquitectura</span>
          <span>moderno</span>
        </Tags>
        <h5>casa moderna</h5>
      </Info>
    </Contenedor>
  );
};

export default ImagenTrabajos;
