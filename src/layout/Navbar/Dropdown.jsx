import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Contenido = styled.div`
  padding: ${(props) => (props.modal ? "10px 0px" : "0px")};
  transition: all 0.4s;
  background: #212121;
  min-width: 11rem;
  max-height: ${(props) => (props.modal ? "200px" : "0px")};
  overflow: hidden;
  border-top: ${(props) => (props.modal ? "2px solid #c5a47e" : "0px")};
  position: absolute;
  top: 60px;
  left: -10px;
  opacity: ${(props) => (props.modal ? "1" : "0")};
`;
const ItemContenido = styled.span`
  width: 100%;
  display: block;
  color: #fff;
  padding: 10px 25px;
  position: relative;
  font-size: 13px;
  opacity: 0.9;
  font-weight: 400;
  transition: all 0.4s;
  cursor: pointer;
  &:after {
    content: "";
    width: 0px;
    height: 1px;
    background: #c5a47e;
    position: absolute;
    left: 10px;
    top: 50%;
    transition: all 0.4s;
  }
  &:hover {
    padding-left: 30px;
    color: var(--color-principal);
    &:after {
      width: 10px;
    }
  }
`;

const Dropdown = ({ modal }) => {
  return (
    <Contenido modal={modal}>
      <ItemContenido>
        <Link to={"/proyecto"}>proyecto 1</Link>
      </ItemContenido>
      <ItemContenido>
        <Link to={"/proyecto"}>proyecto 2</Link>
      </ItemContenido>
      <ItemContenido>
        <Link to={"/proyecto"}>proyecto 3</Link>
      </ItemContenido>
      <ItemContenido>
        <Link to={"/proyecto"}>proyecto 4</Link>
      </ItemContenido>
    </Contenido>
  );
};

export default Dropdown;
