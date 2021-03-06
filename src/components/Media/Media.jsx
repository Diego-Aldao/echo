import React, { useState } from "react";
import styled from "styled-components";
import Background from "../../assets/images/Media/img-media.webp";
import { BsPlay } from "react-icons/bs";
import MediaModal from "./MediaModal";
import LazyLoad from "react-lazyload";

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  color: white;
  height: 80vh;
  min-height: 560px;
  max-height: 900px;
`;
const ImagenBg = styled.img`
  object-fit: cover;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: brightness(0.5);
`;
const Contenedor = styled.div`
  padding: 0px 15px;
  position: relative;
  z-index: 2;
  max-width: 540px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
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
const CajaClientes = styled.div`
  padding: 20px;
  max-width: 136px;
  margin-right: 20px;
  background: black;
  @media (min-width: 768px) {
    padding: 30px 40px;
    max-width: 200px;
  }
`;
const CajaProductos = styled.div`
  padding: 20px;
  background: #fff;
  color: black;
  max-width: 136px;
  @media (min-width: 768px) {
    padding: 30px 40px;
    max-width: 300px;
  }
`;
const TituloMedia = styled.h4`
  font-size: 20px;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
const SubtituloMedia = styled.h6`
  font-size: 15px;
  margin: 5px 0px 0px;
  text-transform: capitalize;
`;

const BtnPlay = styled.button`
  display: ${(props) => (props.miVideo ? "none" : "inline")};
  width: 120px;
  height: 120px;
  background: none;
  border: 1px solid #fff;
  border-radius: 50%;
  position: absolute;
  margin: auto;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  text-align: center;
  cursor: pointer;
`;

const IconoPlay = styled(BsPlay)`
  font-size: 45px;
  fill: #fff;
  stroke-width: 0.1;
`;

const Media = () => {
  const [miVideo, setMiVideo] = useState(false);

  const handleClick = () => {
    setMiVideo(!miVideo);
    console.log(miVideo);
  };

  return (
    <Wrapper>
      <LazyLoad height={"100%"} offset={150}>
        <ImagenBg src={Background} alt="imagen background" />
      </LazyLoad>
      <Contenedor>
        {miVideo && <MediaModal miVideo={miVideo} setMiVideo={setMiVideo} />}
        <BtnPlay onClick={handleClick} miVideo={miVideo} aria-label="play">
          <IconoPlay />
        </BtnPlay>
        <CajaClientes>
          <TituloMedia>3k +</TituloMedia>
          <SubtituloMedia>clientes felices</SubtituloMedia>
        </CajaClientes>
        <CajaProductos>
          <TituloMedia>14k +</TituloMedia>
          <SubtituloMedia>proyectos terminados</SubtituloMedia>
        </CajaProductos>
      </Contenedor>
    </Wrapper>
  );
};

export default Media;
