import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contenido = styled.div`
  padding: 0px 25px;
  margin-bottom: 50px;
`;

const Titulo = styled.h5`
  margin: 0px 0px 30px;
  font-weight: 500;
  line-height: 1.4;
  font-size: 18px;
  text-transform: capitalize;
  font-family: var(--fuente-jost);
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
  line-height: 1.4;
  margin: 0px;
  font-size: 14px;
  text-transform: capitalize;
`;
const TextoInfo = styled.p`
  color: #9f9f9f;
  font-size: 15px;
  font-weight: 400;
  line-height: 2;
  margin: 0;
`;
const Icono = styled.span`
  color: white;
  font-size: 30px;
  margin-right: 25px;
  max-width: 30px;
`;

const Contacto = () => {
  return (
    <Contenido>
      <Titulo>contacto</Titulo>
      <Info>
        <li>
          <Icono>
            <GoLocation />
          </Icono>
          <div>
            <TituloInfo>office address</TituloInfo>
            <TextoInfo>
              504 White St . Dawsonville, GA 30534 , New York
            </TextoInfo>
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
