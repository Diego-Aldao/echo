import React from "react";
import styled from "styled-components";

const Imagen = styled.img`
  width: 100%;
  display: block;
  object-fit: fill;
  padding: 0px;
  margin: 0px;
  @media (min-width: 768px) {
    grid-row: ${(props) => props.row};
    grid-column: ${(props) => props.column};
  }
`;

const ImagenTrabajos = ({ img, column, row }) => {
  return <Imagen src={img} column={column} row={row} />;
};

export default ImagenTrabajos;
