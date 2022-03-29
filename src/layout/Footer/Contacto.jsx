import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contenido = styled(Link)`
  padding: 0px 25px;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    padding: 0px;
  }
  @media (min-width: 992px) {
    padding: 0px 15px;
    flex: 0 0 33.3333333%;
  }
`;

const Titulo = styled.h5`
  margin: 0px 0px 30px;
  font-size: 18px;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;
const Info = styled.ul`
  margin-bottom: 20px;
  padding: 0px;
  li {
    display: flex;
    margin-bottom: 25px;
  }
`;

const TituloInfo = styled.h6`
  font-weight: 600;
  font-size: 14px;
  text-transform: capitalize;
`;
const TextoInfo = styled.p`
  text-transform: capitalize;
`;
const Icono = styled.span`
  color: white;
  font-size: 30px;
  margin-right: 25px;
  max-width: 30px;
`;

const Contacto = () => {
  return (
    <Contenido to="/contacto">
      <Titulo>contacto</Titulo>
      <Info>
        <li>
          <Icono>
            <GoLocation />
          </Icono>
          <div>
            <TituloInfo>dirección de la oficina</TituloInfo>
            <TextoInfo>primitivo de la reta 1007, maipu, mendoza.</TextoInfo>
          </div>
        </li>
        <li>
          <Icono>
            <AiOutlineMail />
          </Icono>
          <div>
            <TituloInfo>email</TituloInfo>
            <TextoInfo>contacto@gmail.com</TextoInfo>
          </div>
        </li>
        <li>
          <Icono>
            <BsTelephone />
          </Icono>
          <div>
            <TituloInfo>telefono</TituloInfo>
            <TextoInfo>+54261218371</TextoInfo>
          </div>
        </li>
      </Info>
    </Contenido>
  );
};

export default Contacto;
