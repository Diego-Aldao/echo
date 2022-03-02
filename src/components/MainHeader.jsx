import React, { useEffect } from "react";
import styled from "styled-components";
import imgHeader1 from "../assets/images/img-header-2.jpg";
import imgHeader2 from "../assets/images/p-2.jpg";
import imgHeader3 from "../assets/images/p-3.jpg";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Header = styled.header`
  width: 100%;
  height: 100vh;
  min-height: 800px;
  background: black;
  position: relative;
`;
const HeaderImg = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.img})`};
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.5);
  @media (min-width: 992px) {
    width: 70%;
  }
`;
const HeaderContenido = styled.div`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  padding: 0px 15px;
  position: relative;
  z-index: 4;
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
const MiniTexto = styled.h5`
  font-size: 20px;
  padding: 0px;
  margin: 0px 0px 10px;
  text-transform: uppercase;
  font-weight: 300;
  color: var(--color-principal);
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
  @media (min-width: 480px) {
    letter-spacing: 22px;
  }
`;
const Titulo = styled.h2`
  font-size: 28px;
  padding: 0px;
  margin: 0px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-align: left;
  position: relative;
  @media (min-width: 480px) {
    font-size: 40px;
  }
  @media (min-width: 768px) {
    font-size: 75px;
  }
`;
const Info = styled.p`
  font-size: 14px;
  padding: 0px;
  margin: 10px 0px 0px;
  font-weight: 300;
  line-height: 2;
  color: var(--color-subtitulos);
`;
const Botton = styled.a`
  position: relative;
  width: 170px;
  height: 50px;
  background: var(--color-principal);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  margin-top: 30px;
  font-family: var(--fuente-jost);
  letter-spacing: 0.5px;
  &:after {
    content: "";
    width: 99.5%;
    height: 130%;
    position: absolute;
    top: -7px;
    left: 0;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    opacity: 0.6;
    transition: all 0.3s;
  }
  &:before {
    content: "";
    width: 107%;
    height: 99.5%;
    position: absolute;
    left: -5px;
    top: 0;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    opacity: 0.6;
    transition: all 0.3s;
  }
`;

const sliderStyles = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const MainHeader = () => {
  useEffect(() => {
    Splitting({
      target: "[data-splitting]",
      by: "chars",
      key: null,
    });
  }, []);

  return (
    <Header>
      <Swiper
        style={{
          width: "100%",
          height: "100%",
        }}
        direction={"vertical"}
        speed={800}
        parallax={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={sliderStyles}>
          <HeaderImg data-swiper-parallax="75%" img={imgHeader1}></HeaderImg>
          <HeaderContenido>
            <MiniTexto>agencia</MiniTexto>
            <Titulo data-splitting>
              <a href="">diseño interior</a>
            </Titulo>
            <Info>
              El diseño correcto y las ideas correctas importan mucho en el
              diseño de interiores. <br /> Un estilo que marca tendencia.
            </Info>
            <Botton>Descrubir trabajo</Botton>
          </HeaderContenido>
        </SwiperSlide>
        <SwiperSlide style={sliderStyles}>
          <HeaderImg data-swiper-parallax="75%" img={imgHeader2}></HeaderImg>
          <HeaderContenido>
            <MiniTexto>diseño</MiniTexto>
            <Titulo data-splitting>
              <a href="">interior innovador</a>
            </Titulo>
            <Info>
              El diseño correcto y las ideas correctas importan mucho en el
              diseño de interiores. <br /> Un estilo que marca tendencia.
            </Info>
            <Botton>Descrubir trabajo</Botton>
          </HeaderContenido>
        </SwiperSlide>
        <SwiperSlide style={sliderStyles}>
          <HeaderImg data-swiper-parallax="75%" img={imgHeader3}></HeaderImg>
          <HeaderContenido>
            <MiniTexto>únicos &</MiniTexto>
            <Titulo data-splitting>
              <a href="">elegantes diseños</a>
            </Titulo>
            <Info>
              El diseño correcto y las ideas correctas importan mucho en el
              diseño de interiores. <br /> Un estilo que marca tendencia.
            </Info>
            <Botton>Descrubir trabajo</Botton>
          </HeaderContenido>
        </SwiperSlide>
      </Swiper>
    </Header>
  );
};

export default MainHeader;
