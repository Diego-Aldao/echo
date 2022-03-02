import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import MainHeader from "./components/MainHeader";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

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
    </Wrapper>
  );
};

export default App;
