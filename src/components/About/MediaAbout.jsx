import React from "react";
import styled from "styled-components";
import imgAbout from "../../assets/images/About/img-about-01.webp";
import LazyLoad from "react-lazyload";

const Media = styled.div`
  width: 100%;
  position: relative;
  min-height: 1px;
  @media (min-width: 992px) {
    flex: 0 0 58.33333333333%;
  }
`;
const MediaImg = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
  @media (min-width: 992px) {
    width: calc(100% + 50px);
    margin-left: -50px;
  }
`;
const MediaContenido = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  margin-top: 20px;
  @media (min-width: 480px) {
    flex-direction: row;
  }
`;
const ItemMediaContenido = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  h5,
  h6 {
    margin: 0px;
  }
  h5 {
    font-family: var(--fuente-jost);
    font-size: 18px;
    color: var(--color-principal);
    line-height: 1.4;
    font-weight: 500;
  }
  h6 {
    font-size: 15px;
    text-transform: capitalize;
    font-weight: 400;
  }
  @media (min-width: 480px) {
    margin-bottom: 0px;
  }
  @media (min-width: 768px) {
    h5 {
      font-size: 25px;
    }
  }
`;
const MediaAbout = () => {
  return (
    <Media>
      <LazyLoad height={"100%"} offset={150}>
        <MediaImg src={imgAbout}></MediaImg>
      </LazyLoad>
      <MediaContenido>
        <ItemMediaContenido>
          <h5>01</h5>
          <h6>arquitectura</h6>
        </ItemMediaContenido>
        <ItemMediaContenido>
          <h5>02</h5>
          <h6>diseño interior</h6>
        </ItemMediaContenido>
        <ItemMediaContenido>
          <h5>03</h5>
          <h6>modelado 3D</h6>
        </ItemMediaContenido>
      </MediaContenido>
    </Media>
  );
};

export default MediaAbout;
