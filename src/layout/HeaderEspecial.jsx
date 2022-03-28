import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  color: white;
  padding: 80px 15px 0px;
  text-align: center;
  min-height: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 28px;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }
  h2,
  p {
    max-width: 510px;
  }
`;

const HeaderEspecial = () => {
  return (
    <Header>
      <h2>
        Architecture is a visual art, and the building speak for themeselves
      </h2>
      <p>
        Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus,
        sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec
        condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum
        mi.
      </p>
    </Header>
  );
};

export default HeaderEspecial;
