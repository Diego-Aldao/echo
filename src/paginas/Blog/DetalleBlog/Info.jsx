import React from "react";
import styled from "styled-components";
import imgPrueba from "../../../assets/images/Header/img-header-01.webp";
import Autor from "./Autor";
import { RiLayoutGridFill } from "react-icons/ri";

const Wrapper = styled.section`
  width: 100%;
  padding: 140px 0px;
  color: #fff;
  cursor: default;
`;
const Contenedor = styled.div`
  padding: 0px 15px;
  max-width: 540px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 880px;
  }
  @media (min-width: 1200px) {
    max-width: 1045px;
  }
  @media (min-width: 1400px) {
    max-width: 1140px;
  }
`;

const Titulo = styled.div`
  margin-bottom: 50px;
  width: 100%;
  h2 {
    font-size: 28px;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 10px;
  }
  p {
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    padding: 0px 22px;
    span {
      margin: 8px;
      font-family: var(--fuente-poppins);
    }
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 15px;
    }
  }
`;
const ImgPrincipal = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;
const Contenido = styled.div`
  max-width: 705px;
  margin: 0px auto;
  h5,
  h6 {
    font-family: var(--fuente-poppins);
    font-size: 18px;
    line-height: 2;
  }
  p,
  h5 {
    margin: 30px 0px;
  }
  p,
  h6 {
    font-size: 16px;
  }
  li {
    font-family: var(--fuente-poppins);
    margin: 10px 0px;
    line-height: 1.5;
    span {
      margin-right: 15px;
      font-size: 13px;
    }
  }
  @media (min-width: 1200px) {
    max-width: 840px;
  }
  @media (min-width: 1400px) {
    max-width: 960px;
  }
`;
const Quote = styled.div`
  margin: 30px 0px;
  padding: 30px;
  p {
    font-size: 18px;
    font-style: italic;
    text-align: center;
    margin: 0px;
  }
`;
const MiniImagenes = styled.div`
  width: 100%;
  img {
    height: 50vw;
    min-height: 170px;
    margin-bottom: 10px;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    img {
      width: 330px;
      height: 195px;
    }
  }
  @media (min-width: 1200px) {
    img {
      width: 405px;
      height: 238px;
    }
  }
  @media (min-width: 1400px) {
    img {
      width: 445px;
      height: 268px;
    }
  }
`;

const Tags = styled.div`
  padding: 10px 15px 0px;
  margin: 30px 0px;
  text-align: right;
  border-top: 1px solid #333;
  a {
    font-size: 12px;
    font-family: var(--fuente-poppins);
    margin: 8px;
    text-transform: capitalize;
  }
`;

const Paginacion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  a {
    width: 100%;
    padding: 20px;
    border-right: 1px solid #333;
    border-left: 1px solid #333;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1px;
    font-family: var(--fuente-poppins);
  }
  a:not(:first-child):not(:last-child) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 60px;
  }
  a:last-child {
    text-align: right;
  }
`;

const Info = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Titulo>
          <h2>construye un simple blog con facilidad</h2>
          <p>
            <span>juan bautista</span> /<span> 06 febrero, 2022</span>/
            <span>diseño</span>
          </p>
        </Titulo>
        <ImgPrincipal src={imgPrueba} alt="img-blog" />
        <Contenido>
          <h5>
            Nunca jamás pienses en rendirte. Los ganadores nunca se dan por
            vencidos y los que se dan por vencidos nunca ganan. Saca todas las
            palabras negativas de tu diccionario mental y concéntrate en las
            soluciones con la máxima convicción y paciencia. La batalla nunca se
            pierde hasta que abandonas tu visión.
          </h5>
          <p>
            the main component of a healthy environment for self esteem is that
            it needs be nurturing. The main compont of a healthy environment for
            self esteem is that it needs be nurturing. The main component of a
            healthy env for self esteem The main compont be nurturing It should
            provide unconditional warmth. The main component of a healthy env
            for self esteem The main compont be nurturing It should provide
            unconditional
          </p>
          <h6>- Todos tenemos la intención de planificar el futuro</h6>
          <p>
            Todos tenemos la intención de planificar con anticipación, pero con
            demasiada frecuencia dejamos que las minucias del día a día se
            interpongan en el camino de hacer una planifiación. Claro, no se
            puede saber cada detalle para anticipar. No puedes saber la mitad de
            las prioridades que aparecerán en un mes en particular, pero puedes
            planificar el panorama general, los tiempos difíciles y los eventos.
          </p>
          <ul>
            <li>
              <span>01</span>Integer in volutpat libero.
            </li>
            <li>
              <span>02</span>Vivamus maximus ultricies pulvinar.
            </li>
            <li>
              <span>03</span>priorities that will pop up in any particular
              month.
            </li>
            <li>
              <span>04</span>We all intend to plan ahead.
            </li>
            <li>
              <span>05</span>The main component of a healthy env for self
              esteem.
            </li>
          </ul>
          <Quote>
            <p>
              Nunca jamás pienses en rendirte. Los ganadores nunca se rinden y
              los que se rinden nunca ganan. Saca todas las palabras negativas
              de tu diccionario mental y concéntrate en las soluciones con la
              mayor convicción y paciencia. La batalla nunca se pierde hasta que
              abandonas tu visión.
            </p>
          </Quote>
          <MiniImagenes>
            <img src={imgPrueba} alt="imagen blog" />
            <img src={imgPrueba} alt="imagen blog" />
          </MiniImagenes>
          <p>
            We all intend to plan ahead, but too often let the day-to-day
            minutia get in the way of making a calendar for the year. Sure, you
            can't know every detail to anticipate. Heck, you can't know half the
            priorities that will pop up in any particular month. But you can
            plan for big picture seasonality, busy-times, and events.
          </p>
          <Tags>
            <a href="#">diseño</a>,<a href="#">arquitectura</a>,
            <a href="#">interior</a>
          </Tags>
        </Contenido>
        <Autor />
        <Paginacion>
          <a href="#">post anterior</a>
          <a href="#">
            <RiLayoutGridFill />
          </a>
          <a href="#">post siguiente</a>
        </Paginacion>
      </Contenedor>
    </Wrapper>
  );
};

export default Info;
