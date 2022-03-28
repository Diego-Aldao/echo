import React from "react";
import styled from "styled-components";
import imgPrueba from "../../../assets/images/Header/img-header-01.webp";

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
    max-width: 960px;
    display: flex;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1340px;
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
`;
const Contenido = styled.div`
  img {
    height: 600px;
    width: 100%;
    object-fit: cover;
  }
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
    span {
      margin-right: 15px;
      font-size: 13px;
    }
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
  img {
    height: 50vw;
    min-height: 170px;
    margin-bottom: 10px;
  }
`;

const Tags = styled.div`
  padding: 0px 15px;
  margin: 30px 0px;
  text-align: center;
  span {
    font-size: 12px;
    font-family: var(--fuente-poppins);
    margin: 8px;
    text-transform: capitalize;
  }
`;

const Info = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Titulo>
          <h2>construye un hermoso blog con facilidad</h2>
          <p>
            <span>alex smith</span> /<span> august 6, 2022</span>/
            <span>web design</span>
          </p>
        </Titulo>
        <Contenido>
          <img src={imgPrueba} />
          <h5>
            Never ever think of giving up. Winners never quit and quitters never
            win. Take all negative words out of your mental dictionary and focus
            on the solutions with utmost conviction and patience. The battle is
            never lost until you've abandon your vision.
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
          <h6>- We all intend to plan ahead</h6>
          <p>
            We all intend to plan ahead, but too often let the day-to-day
            minutia get in the way of making a calendar for the year. Sure, you
            can't know every detail to anticipate. Heck, you can't know half the
            priorities that will pop up in any particular month. But you can
            plan for big picture seasonality, busy-times, and events.
          </p>
          <ul>
            <li>
              <span>01</span>Lorem ipsum dolor sit.
            </li>
            <li>
              <span>02</span>Lorem ipsum dolor sit.
            </li>
            <li>
              <span>03</span>Lorem ipsum dolor sit.
            </li>
            <li>
              <span>04</span>Lorem ipsum dolor sit.
            </li>
            <li>
              <span>05</span>Lorem ipsum dolor sit.
            </li>
          </ul>
          <Quote>
            <p>
              Never ever think of giving up. Winners never quit and quitters
              never win. Take all negative words out of your mental dictionary
              and focus on the solutions with utmost conviction and patience.
              The battle is never lost until you've abandon your vision.
            </p>
          </Quote>
          <MiniImagenes>
            <img src={imgPrueba} alt="" />
            <img src={imgPrueba} alt="" />
          </MiniImagenes>
          <p>
            We all intend to plan ahead, but too often let the day-to-day
            minutia get in the way of making a calendar for the year. Sure, you
            can't know every detail to anticipate. Heck, you can't know half the
            priorities that will pop up in any particular month. But you can
            plan for big picture seasonality, busy-times, and events.
          </p>
          <Tags>
            <span>diseño</span>,<span>arquitectura</span>,<span>interior</span>
          </Tags>
        </Contenido>
      </Contenedor>
    </Wrapper>
  );
};

export default Info;
