import React from "react";
import styled, { keyframes } from "styled-components";
import { Triangle } from "react-loader-spinner";

const fade = keyframes`
0%{
  opacity: 1
}
50%{
  opacity:1
}
100%{
  opacity: 0
}`;

const Contenedor = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9999999;
  animation: ${fade} 0.3s forwards;
  animation-delay: 1.8s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Contenedor>
      <Triangle ariaLabel="loading-indicator" />
    </Contenedor>
  );
};

export default Loader;
