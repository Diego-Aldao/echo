import React from "react";
import styled from "styled-components";

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
    transform: rotate(1deg);
  }
  @media (min-width: 992px) {
    &:after {
      transform: rotate(1deg);
    }
    &:hover {
      &:after {
        transform: rotate(5deg);
      }
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
    height: 24vw;
    max-height: 750px;
  }
  @media (min-width: 1400px) {
    height: 28vw;
    max-height: 750px;
  }
`;
const ImagenEquipo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;
const InfoEquipo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #00000052;
  opacity: 1;
  z-index: 22;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  @media (min-width: 992px) {
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
`;

const TituloEquipo = styled.h6`
  font-size: 16px;
  margin: 0px 0px 5px;
  text-transform: capitalize;
  font-family: var(--fuente-poppins);
`;
const SubEquipo = styled.span`
  display: inline-block;
  font-size: 13px;
  color: var(--color-principal);
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--fuente-poppins);
`;

const MiembroEquipo = ({ imgEquipo }) => {
  return (
    <ItemEquipo>
      <InfoEquipo>
        <TituloEquipo>juan bautista</TituloEquipo>
        <SubEquipo>client manager</SubEquipo>
      </InfoEquipo>
      <ImagenEquipo src={imgEquipo} />
    </ItemEquipo>
  );
};

export default MiembroEquipo;
