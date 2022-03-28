import React from "react";
import styled from "styled-components";
import imgAutor from "../../../assets/images/Equipo/equipo-01.webp";
import { FaFacebookF, FaTwitter, FaBehance } from "react-icons/fa";

const Contenido = styled.div`
  margin-top: 30px;
  padding: 30px 15px;
  text-align: center;
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  h6 {
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  p {
    margin: 0px;
  }
`;
const Redes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  svg {
    margin: 10px 20px;
  }
`;

const Autor = () => {
  return (
    <Contenido>
      <img src={imgAutor} alt="" />
      <h6> jorden griffith</h6>
      <p>
        the main component of a healthy environment for self esteem is that it
        needs be nurturing. The main compont of a healthy environment.
      </p>
      <Redes>
        <FaFacebookF />
        <FaTwitter />
        <FaBehance />
      </Redes>
    </Contenido>
  );
};

export default Autor;
