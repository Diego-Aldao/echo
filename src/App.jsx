import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import MainHeader from "./components/MainHeader";

const Wrapper = styled.main``;

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <MainHeader />
    </Wrapper>
  );
};

export default App;
