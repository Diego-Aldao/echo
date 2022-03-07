import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/images/p-1.jpg";
import "swiper/css";
import { Autoplay } from "swiper";
import Autor from "./Autor";

const Wrapper = styled.section`
  width: 100%;
`;
const Contenedor = styled(Swiper)`
  padding: 0px 15px;
  max-width: 540px;
  width: 100%;
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

const Testimonios = () => {
  return (
    <Wrapper>
      <Contenedor
        speed={1000}
        slidesPerView={1}
        spaceBetween={40}
        style={{
          width: "100%",
          height: "100%",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Autor img={img} nombre="mitchl jhon" cargo="envato customer" />
        </SwiperSlide>
        <SwiperSlide>
          <Autor img={img} nombre="mitchl jhon" cargo="envato customer" />
        </SwiperSlide>
        <SwiperSlide>
          <Autor img={img} nombre="mitchl jhon" cargo="envato customer" />
        </SwiperSlide>
        <SwiperSlide>
          <Autor img={img} nombre="mitchl jhon" cargo="envato customer" />
        </SwiperSlide>
      </Contenedor>
    </Wrapper>
  );
};

export default Testimonios;
