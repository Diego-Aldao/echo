import React from "react";
import styled from "styled-components";
import Contacto from "./Contacto";
import Extra from "./Extra";
import Reciente from "./Reciente";

const Wrapper = styled.section`
  width: 100%;
  padding: 0px;
  color: #fff;
`;
const Contenedor = styled.div`
  padding: 0px 15px;
  max-width: 540px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1340px;
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Contacto />
        <Reciente />
        <Extra />
      </Contenedor>
    </Wrapper>
  );
};

export default Footer;
