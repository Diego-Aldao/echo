import React from "react";
import styled from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";

const Contenedor = styled.div`
  padding: 10px 15px;
  width: 100%;
  max-height: ${(props) => (props.navegacion ? "500px" : "0px")};
  overflow: hidden;
  display: block;
  position: absolute;
  top: 45px;
  left: 0px;
  background: black;
  transition: all 0.4s;
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

const Dropdown = styled.div`
  max-height: ${(props) => (props.toggle ? "500px" : "0px")};
  overflow: hidden;
  padding: ${(props) => (props.toggle ? "10px 0px" : "0px")};
  border-top: 2px solid #c5a47e;
  transition: all 0.4s;
  opacity: ${(props) => (props.toggle ? "1" : "0")};
`;
const ItemDropdown = styled.a`
  width: 100%;
  display: block;
  color: #fff;
  padding: 10px 25px;
  position: relative;
  font-size: 13px;
  opacity: 0.9;
  font-weight: 400;
  transition: all 0.4s;
  &:hover {
    color: var(--color-principal);
  }
`;

const NavMovil = ({ navegacion }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Contenedor navegacion={navegacion}>
      <ul>
        <li>
          <a href="">inicio</a>
        </li>
        <li>
          <a href="">about</a>
        </li>
        <li onClick={() => setToggle(!toggle)}>
          <a href="#">
            portfolio
            <RiArrowDownSFill />
          </a>
          <Dropdown toggle={toggle}>
            <ItemDropdown>item uno</ItemDropdown>
            <ItemDropdown>item uno</ItemDropdown>
            <ItemDropdown>item uno</ItemDropdown>
            <ItemDropdown>item uno</ItemDropdown>
          </Dropdown>
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
