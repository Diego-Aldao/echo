import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import MainHeader from "./components/Header/Header";
import About from "./components/About/About";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import Servicios from "./components/Servicios/Servicios";
import Trabajos from "./components/Trabajos/Trabajos";
import Media from "./components/Media/Media";
import Equipo from "./components/Equipo/Equipo";
import Testimonios from "./components/Testimonios/Testimonios";

const Wrapper = styled.main``;

const App = () => {
  return (
    <Wrapper>
      <CustomCursor
        targets={["a, h1"]}
        dimensions={30}
        fill={"#c5a47e"}
        smoothness={{
          movement: 0.5,
          scale: 1,
          opacity: 0.9,
        }}
        targetOpacity={0.5}
      />
      <Navbar />
      <MainHeader />
      <About />
      <Servicios />
      <Trabajos />
      <Media />
      <Equipo />
      <Testimonios />
    </Wrapper>
  );
};

export default App;
