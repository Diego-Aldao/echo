import React from "react";
import styled from "styled-components";
import { GrFacebookOption } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { Link } from "react-router-dom";

const Contenido = styled.div`
  padding: 0px;
  margin-bottom: 50px;
  @media (min-width: 992px) {
    padding: 0px 15px;
    flex: 0 0 33.3333333%;
  }
`;

const Logo = styled(Link)`
  color: white;
  text-transform: uppercase;
  margin: 0px;
  width: 60px;
  font-family: "Iceland", cursive;
  font-size: 2.8rem;
`;

const Redes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0px;
  a {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 18px;
    margin-right: 10px;
  }
`;
const Copy = styled.p`
  font-size: 13px;
  padding: 0px 15px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 3px;
  a {
    color: var(--color-principal);
    cursor: pointer;
    display: inline-block;
  }
`;

const Extra = () => {
  return (
    <Contenido>
      <Logo to="/">echo</Logo>
      <Redes>
        <a href="#">
          <GrFacebookOption />
        </a>
        <a href="#">
          <GrTwitter />
        </a>
        <a href="#">
          <GrInstagram />
        </a>
        <a href="#">
          <GrYoutube />
        </a>
      </Redes>
      <Copy>
        © 2022, template echo.
      </Copy>
    </Contenido>
  );
};

export default Extra;
