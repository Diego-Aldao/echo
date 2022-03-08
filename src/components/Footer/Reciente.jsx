import React from "react";
import styled from "styled-components";
import ImgPrueba from "../../assets/images/p-1.jpg";
import { RiSendPlaneFill } from "react-icons/ri";

const Contenido = styled.div`
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
  font-weight: 500;
  line-height: 1.4;
  font-size: 18px;
  text-transform: capitalize;
  font-family: var(--fuente-jost);
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;
const Info = styled.ul`
  margin-bottom: 40px;
  padding: 0px;
  li {
    display: flex;
    margin-bottom: 25px;
  }
`;

const Icono = styled.div`
  color: white;
  margin-right: 25px;
  width: 30vw;
  max-width: 150px;
  height: 18vw;
  max-height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 992px) {
    max-width: 82px;
    max-height: 55px;
  }
`;

const TextoInfo = styled.p`
  color: #9f9f9f;
  font-size: 13px;
  font-weight: 400;
  line-height: 2;
  margin: 0;
`;
const FechaInfo = styled.span`
  font-size: 12px;
  color: #c5a47e;
  display: inline-block;
  font-family: var(--fuente-poppins);
  line-height: 1.5;
  font-weight: 400;
  margin-top: 5px;
`;

const Newsletter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  input {
    width: 75%;
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.247);
    background: transparent;
    color: #fff;
    font-size: 13px;
    font-family: var(--fuente-poppins);
    text-transform: capitalize;
    &::placeholder {
      color: #bdbdbd;
    }
  }
  span {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #c5a47e;
    color: #000;
  }
`;

const Reciente = () => {
  return (
    <Contenido>
      <Titulo>noticias recientes</Titulo>
      <Info>
        <li>
          <Icono>
            <img src={ImgPrueba} alt="" />
          </Icono>
          <div>
            <TextoInfo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </TextoInfo>
            <FechaInfo>14 feb 2020</FechaInfo>
          </div>
        </li>
        <li>
          <Icono>
            <img src={ImgPrueba} alt="" />
          </Icono>
          <div>
            <TextoInfo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </TextoInfo>
            <FechaInfo>14 feb 2020</FechaInfo>
          </div>
        </li>
      </Info>
      <Newsletter>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ingresa tu email"
        />
        <span>
          <RiSendPlaneFill />
        </span>
      </Newsletter>
    </Contenido>
  );
};

export default Reciente;