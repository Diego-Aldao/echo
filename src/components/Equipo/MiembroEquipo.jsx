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

const MiembroEquipo = ({ imgMiembro }) => {
  return (
    <ItemEquipo>
      <InfoEquipo>
        <TituloEquipo>ryan hicks</TituloEquipo>
        <SubEquipo>client manager</SubEquipo>
      </InfoEquipo>
      <ImagenEquipo src={imgMiembro} />
    </ItemEquipo>
  );
};

export default MiembroEquipo;
