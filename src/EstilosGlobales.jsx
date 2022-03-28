import { createGlobalStyle } from "styled-components";

const EstilosGlobales = createGlobalStyle`
:root {
  --color-background: #000000;
  --color-principal: #c5a47e;
  --color-subtitulos: #eeeeee;
  --color-parrafos: #9f9f9f;
  --fuente-jost: "Jost", sans-serif;
  --fuente-poppins: "Poppins", sans-serif;
}
* {
  box-sizing: border-box;
}
html {
  background-color: var(--color-background);
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
    font-family:var(--fuente-jost);
}
p{
  color: var(--color-parrafos);
  font-size: 15px;
  font-weight: 400;
  line-height: 2;
  margin: 0;
  font-family: var(--fuente-poppins);
}

span{
  font-family: var(--fuente-jost);
}

a {
  text-decoration: none;
  color: inherit;
  padding: 0px;
  margin: 0px;
  display: inline-block;
}

ul{
  list-style: none;
  margin: 0px;
  padding: 0px;
}

@keyframes fadeInUp {
  from {
    position: relative;
    top: 10px;
    opacity: 0;
  }
  to {
    position: relative;
    top: 0px;
    opacity: 1;
  }
}
.char {
  animation: fadeInUp 0.3s cubic-bezier(0.3, 0, 0.7, 1) both;
  animation-delay: calc(60ms * var(--char-index));
}
.whitespace {
  width: 12px;
}

.swiper-pagination-current,
.swiper-pagination-total {
  font-size: 60px;
  font-weight: 500;
  color: transparent;
  -webkit-text-stroke: 0.5px #fff;
  transition: all 0.5s ease-in-out !important;
}
.swiper-pagination {
  color: #fff;
  width: 90px;
  position: absolute;
  bottom: 20px;
  left: 10px;
}
.swiper-pagination-total {
  color: white;
  font-size: 48px;
}

@media (min-width: 768px) {
  .swiper-pagination {
    top: 22%;
    left: 80%;
  }
}

.swiper-button-prev,
.swiper-button-next {
  top: 85%;
  transform: rotate(90deg);
  left: 80%;
  margin: 0px;
  padding: 0px;
  border: 1px solid white;
  border-radius: 50%;
  height: 45px;
  width: 45px;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 1rem;
  color: #fff;
}
.swiper-button-next {
  top: 93%;
}
@media (min-width: 768px) {
  .swiper-button-prev,
  .swiper-button-next {
    top: 81%;
    left: 88%;
  }
  .swiper-button-next {
    top: 90%;
  }
}
@media (min-width: 992px) {
  .swiper-button-prev,
  .swiper-button-next {
    height: 55px;
    width: 55px;
    left: 90%;
  }
}

`;
export default EstilosGlobales;
