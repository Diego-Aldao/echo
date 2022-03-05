import React from "react";
import styled from "styled-components";
import imgEquipo from "../../assets/images/img-grande.jpg";

const Wrapper = styled.section`
  width: 100%;
  padding: 140px 0px;
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

const Titulo = styled.h3`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: capitalize;
  margin: 0px 0px 50px;
  @media (min-width: 480px) {
    font-size: 60px;
  }
`;
const ContenedorEquipo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const ItemEquipo = styled.div`
  width: 90%;
  height: 95vw;
  margin: 0px auto 50px;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: var(--color-principal);
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    &:after {
      transform: rotate(5deg);
    }
  }
  @media (min-width: 768px) {
    flex: 0 0 45%;
    margin: 0px 0px 70px;
    height: 55vw;
    max-height: 450px;
  }
  @media (min-width: 992px) {
    flex: 0 0 20%;
    max-height: 250px;
  }
  @media (min-width: 1200px) {
    max-height: 300px;
  }
`;
const ImagenEquipo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: relative;
`;
const InfoEquipo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #00000052;
  opacity: 0;
  z-index: 22;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const TituloEquipo = styled.h6`
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  margin: 0px 0px 5px;
  text-transform: capitalize;
`;
const SubEquipo = styled.span`
  display: inline-block;
  font-size: 13px;
  color: var(--color-principal);
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--fuente-poppins);
`;

const Equipo = () => {
  return (
    <Wrapper>
      <Contenedor>
        <Titulo>nuestro equipo</Titulo>
        <ContenedorEquipo>
          <ItemEquipo>
            <InfoEquipo>
              <TituloEquipo>ryan hicks</TituloEquipo>
              <SubEquipo>client manager</SubEquipo>
            </InfoEquipo>
            <ImagenEquipo src={imgEquipo} />
          </ItemEquipo>
          <ItemEquipo>
            <InfoEquipo>
              <TituloEquipo>ryan hicks</TituloEquipo>
              <SubEquipo>client manager</SubEquipo>
            </InfoEquipo>
            <ImagenEquipo src={imgEquipo} />
          </ItemEquipo>
          <ItemEquipo>
            <InfoEquipo>
              <TituloEquipo>ryan hicks</TituloEquipo>
              <SubEquipo>client manager</SubEquipo>
            </InfoEquipo>
            <ImagenEquipo src={imgEquipo} />
          </ItemEquipo>
          <ItemEquipo>
            <InfoEquipo>
              <TituloEquipo>ryan hicks</TituloEquipo>
              <SubEquipo>client manager</SubEquipo>
            </InfoEquipo>
            <ImagenEquipo src={imgEquipo} />
          </ItemEquipo>
        </ContenedorEquipo>
      </Contenedor>
    </Wrapper>
  );
};

export default Equipo;
