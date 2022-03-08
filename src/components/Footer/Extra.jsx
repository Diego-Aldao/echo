import React from "react";
import styled from "styled-components";
import { GrFacebookOption } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";

const Contenido = styled.div`
  padding: 0px;
  margin-bottom: 50px;
`;

const Logo = styled.span`
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
  justify-content: space-between;
  margin: 50px 0px 30px;
  span {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 18px;
  }
`;
const Copy = styled.p`
  font-size: 13px;
  padding: 0px 15px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #9f9f9f;
  line-height: 2;
  margin: 0;
  span {
    color: var(--color-principal);
    cursor: pointer;
    display: inline-block;
  }
`;

const Extra = () => {
  return (
    <Contenido>
      <Logo>echo</Logo>
      <Redes>
        <span>
          <GrFacebookOption />
        </span>
        <span>
          <GrTwitter />
        </span>
        <span>
          <GrInstagram />
        </span>
        <span>
          <GrYoutube />
        </span>
      </Redes>
      <Copy>
        © 2022, echo template. hecho con pasion por <span>diegodev.</span>
      </Copy>
    </Contenido>
  );
};

export default Extra;
