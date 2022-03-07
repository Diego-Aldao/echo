import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
`;
const Contenedor = styled.div`
  padding: 140px 15px;
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

const Noticias = () => {
  return (
    <Wrapper>
      <Contenedor></Contenedor>
    </Wrapper>
  );
};

export default Noticias;
