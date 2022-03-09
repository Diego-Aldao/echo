import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Circle } from "rc-progress";
import { IoIosArrowUp } from "react-icons/io";

const Caja = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: all 0.4s;
  z-index: ${(props) => (props.scrollTop < 5 ? "-99" : "99")};
  opacity: ${(props) => (props.scrollTop < 5 ? "0" : "1")};
`;

const Flecha = styled(IoIosArrowUp)`
  color: var(--color-principal);
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  margin: auto;
  font-size: 20px;
`;

const BotonScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const porcentajeScroll = () => {
      let posicion = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let valorScroll = Math.round((posicion * 100) / calcHeight);
      setScrollTop(valorScroll);
    };
    window.onscroll = porcentajeScroll;
  }, []);

  return (
    <Caja scrollTop={scrollTop}>
      <Flecha />
      <Circle percent={scrollTop} strokeWidth="7" strokeColor={"#c5a47e"} />;
    </Caja>
  );
};

export default BotonScroll;
