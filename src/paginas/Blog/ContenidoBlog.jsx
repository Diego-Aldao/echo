import React from "react";
import styled from "styled-components";
import ItemBlog from "./ItemBlog";

const Wrapper = styled.section`
  width: 100%;
  padding: 140px 0px;
  color: #fff;
  cursor: default;
`;
const Contenedor = styled.div`
  padding: 0px 15px;
  max-width: 540px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1400px) {
    max-width: 1140px;
  }
`;

const ContenidoBlog = () => {
  return (
    <Wrapper>
      <Contenedor>
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
      </Contenedor>
    </Wrapper>
  );
};

export default ContenidoBlog;
