import React from "react";
import styled from "styled-components";
import imgHeader1 from "../../assets/images/Header/img-header-01.webp";
import imgHeader2 from "../../assets/images/Header/img-header-02.webp";
import imgHeader3 from "../../assets/images/Header/img-header-03.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useInView } from "react-intersection-observer";
import ContenidoHeader from "./ContenidoHeader";

const Wrapper = styled.header`
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

const sliderStyles = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Header = () => {
  //CADA CONTENEDOR NECESITA SU PROPIO REF E INVIEW
  const [ref, inView] = useInView({
    rootMargin: "0px",
  });
  const [ref2, inView2] = useInView({
    rootMargin: "0px",
  });
  const [ref3, inView3] = useInView({
    rootMargin: "0px",
  });

  return (
    <Wrapper>
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
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={sliderStyles}>
          <HeaderImg data-swiper-parallax="75%" img={imgHeader1}></HeaderImg>
          <ContenidoHeader
            refObs={ref}
            inView={inView}
            miniTexto={"agencia"}
            titulo={"diseño interior"}
          />
        </SwiperSlide>
        <SwiperSlide style={sliderStyles}>
          <HeaderImg data-swiper-parallax="75%" img={imgHeader2}></HeaderImg>
          <ContenidoHeader
            refObs={ref2}
            inView={inView2}
            miniTexto={"diseño"}
            titulo={"interior innovador"}
          />
        </SwiperSlide>
        <SwiperSlide style={sliderStyles}>
          <HeaderImg data-swiper-parallax="75%" img={imgHeader3}></HeaderImg>
          <ContenidoHeader
            refObs={ref3}
            inView={inView3}
            miniTexto={"únicos &"}
            titulo={"elegantes diseños"}
          />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Header;
