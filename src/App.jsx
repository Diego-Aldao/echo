import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const Wrapper = styled.main`
  background-color: var(--color-background);
`;

const App = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};

export default App;
