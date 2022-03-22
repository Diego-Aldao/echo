import React from "react";
import styled from "styled-components";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  span {
    text-transform: capitalize;
    font-family: var(--fuente-jost);
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 1px;
    width: 100%;
    padding: 15px;
    text-align: center;
    display: inline-block;
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
const ItemDropdown = styled.span`
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
          <span>
            <Link to={"/"}>inicio</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to={"/about"}>about</Link>
          </span>
        </li>
        <li onClick={() => setToggle(!toggle)}>
          <span>
            proyecto <RiArrowDownSFill />
          </span>
          <Dropdown toggle={toggle}>
            <ItemDropdown>
              <Link to={"/proyecto"}>proyecto 1</Link>
            </ItemDropdown>
            <ItemDropdown>
              <Link to={"/proyecto"}>proyecto 2</Link>
            </ItemDropdown>
            <ItemDropdown>
              <Link to={"/proyecto"}>proyecto 3</Link>
            </ItemDropdown>
            <ItemDropdown>
              <Link to={"/proyecto"}>proyecto 4</Link>
            </ItemDropdown>
          </Dropdown>
        </li>
        <li>
          <span>
            <Link to={"/blog"}>blog</Link>
          </span>
        </li>
        <li>
          <span>
            <Link to={"/contacto"}>contacto</Link>
          </span>
        </li>
      </ul>
    </Contenedor>
  );
};

export default NavMovil;
