import React from "react";
import styled from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";

const Contenedor = styled.div`
  padding: 10px 15px;
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  top: ${(props) => (props.navegacion ? "45px" : "55px")};
  left: ${(props) => (props.navegacion ? "0px" : "-20px")};
  background: black;
  transition: all 0.4s;
  visibility: ${(props) => (props.navegacion ? "visible" : "hidden")};
  opacity: ${(props) => (props.navegacion ? "1" : "0")};
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  a {
    text-transform: capitalize;
    font-family: var(--fuente-jost);
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 1px;
    width: 100%;
    padding: 15px;
    text-align: center;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const NavMovil = ({ navegacion }) => {
  return (
    <Contenedor navegacion={navegacion}>
      <ul>
        <li>
          <a href="">inicio</a>
        </li>
        <li>
          <a href="">about</a>
        </li>
        <li>
          <a href="">
            portfolio
            <RiArrowDownSFill />
          </a>
        </li>
        <li>
          <a href="">blog</a>
        </li>
        <li>
          <a href="">contacto</a>
        </li>
      </ul>
    </Contenedor>
  );
};

export default NavMovil;
