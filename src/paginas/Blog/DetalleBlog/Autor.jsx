import React from "react";
import styled from "styled-components";
import imgAutor from "../../../assets/images/Equipo/equipo-01.webp";
import { FaFacebookF, FaTwitter, FaBehance } from "react-icons/fa";

const Datos = styled.div`
  margin: 30px auto 0px;
  padding: 30px 15px;
  text-align: center;
  max-width: 705px;
  @media (min-width: 480px) {
    padding: 0px 40px;
    display: flex;
    align-items: center;
  }
  @media (min-width: 1200px) {
    max-width: 840px;
  }
  @media (min-width: 1400px) {
    max-width: 960px;
  }
`;

const ImagenAutor = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 20px;
  @media (min-width: 480px) {
    width: 140px;
    height: 140px;
  }
`;

const Info = styled.div`
  text-align: left;
  h6 {
    text-transform: capitalize;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: var(--fuente-poppins);
  }
  p {
    margin: 0px;
    text-transform: capitalize;
  }
  @media (min-width: 480px) {
    padding-left: 40px;
    width: calc(100% - 140px);
  }
`;
const Redes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  svg {
    margin: 10px 10px;
  }
  @media (min-width: 480px) {
    justify-content: flex-start;
  }
`;

const Autor = () => {
  return (
    <Datos>
      <ImagenAutor src={imgAutor} alt="imagen autor" />
      <Info>
        <h6>jorden griffith</h6>
        <p>
          el componente principal de un entorno saludable para la autoestima es
          que necesita ser nutritivo. El componente principal de un ambiente
          saludable.
        </p>
        <Redes>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaBehance />
          </a>
        </Redes>
      </Info>
    </Datos>
  );
};

export default Autor;
