import React from "react";
import styled from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";

const Contenedor = styled.div`
  padding: 10px 15px;
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  top: 45px;
  left: 0px;
  background: black;
  visibility: visible;
  opacity: 1;
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

const NavMovil = () => {
  return (
    <Contenedor>
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
