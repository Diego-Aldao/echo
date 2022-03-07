import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/images/p-1.jpg";
import "swiper/css";
import { Autoplay } from "swiper";

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

const Contenido = styled.div`
  width: 100%;
  line-height: 2;
`;
const Texto = styled.p`
  font-size: 18px;
  padding: 80px 50px;
  margin: 0px;
  border: 6px solid #ffffff47;
  font-weight: 400;
  color: #fff;
`;
const Autor = styled.div`
  display: flex;
  margin-top: 20px;
  padding-left: 30px;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    width: 0;
    height: 0;
    border-top: 25px solid #ffffff47;
    border-right: 30px solid transparent;
    position: absolute;
    left: 100px;
    top: -20px;
    z-index: 24;
  }
`;
const ImgAutor = styled.div`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const NombreAutor = styled.h6`
  display: table-cell;
  vertical-align: middle;
  padding-left: 20px;
  font-size: 16px;
  margin: 0px;
  color: #fff;
  line-height: 1.4;
  font-weight: 500;
  text-transform: capitalize;
  span {
    color: var(--color-principal);
    font-size: 13px;
    margin-top: 5px;
    font-weight: 400;
    display: block;
    font-family: var(--fuente-poppins);
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
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Contenido>
            <Texto>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium, et esse. Cum nihil ipsa quae voluptate suscipit
              aliquid cupiditate quas quam quidem vitae impedit earum.
            </Texto>
            <Autor>
              <ImgAutor>
                <img src={img} alt="" />
              </ImgAutor>
              <NombreAutor>
                mitchl jhon <span>envato customer</span>
              </NombreAutor>
            </Autor>
          </Contenido>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Contenido>
            <Texto>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium, et esse. Cum nihil ipsa quae voluptate suscipit
              aliquid cupiditate quas quam quidem vitae impedit earum
            </Texto>
            <Autor>
              <ImgAutor>
                <img src={img} alt="" />
              </ImgAutor>
              <NombreAutor>
                mitchl jhon <span>envato customer</span>
              </NombreAutor>
            </Autor>
          </Contenido>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Contenido>
            <Texto>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium, et esse. Cum nihil ipsa quae voluptate suscipit
              aliquid cupiditate quas quam quidem vitae impedit earum
            </Texto>
            <Autor>
              <ImgAutor>
                <img src={img} alt="" />
              </ImgAutor>
              <NombreAutor>
                mitchl jhon <span>envato customer</span>
              </NombreAutor>
            </Autor>
          </Contenido>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Contenido>
            <Texto>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium, et esse. Cum nihil ipsa quae voluptate suscipit
              aliquid cupiditate quas quam quidem vitae impedit earum
            </Texto>
            <Autor>
              <ImgAutor>
                <img src={img} alt="" />
              </ImgAutor>
              <NombreAutor>
                mitchl jhon <span>envato customer</span>
              </NombreAutor>
            </Autor>
          </Contenido>
        </SwiperSlide>
      </Contenedor>
    </Wrapper>
  );
};

export default Testimonios;
