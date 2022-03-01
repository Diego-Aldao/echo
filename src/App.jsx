import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const Wrapper = styled.main`
  padding: 0px 15px;
`;

const App = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};

export default App;
