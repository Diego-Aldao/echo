import React from "react";
import styled from "styled-components";
import imgBg from "../assets/images/header-especial.webp";

const Header = styled.header`
  width: 100%;
  color: white;
  padding: 80px 15px 0px;
  text-align: center;
  min-height: 530px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${imgBg});
  h2 {
    font-size: 28px;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }
  h2,
  p {
    max-width: 510px;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 40px;
    }
    h2,
    p {
      max-width: 690px;
    }
  }
  @media (min-width: 1200px) {
    h2,
    p {
      max-width: 825px;
    }
  }
  @media (min-width: 1800px) {
    min-height: 1000px;
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
