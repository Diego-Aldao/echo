import React from "react";
import styled from "styled-components";
import ItemBlog from "./ItemBlog";
import { GoChevronRight } from "react-icons/go";

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
const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemNav = styled.span`
  width: 50px;
  height: 50px;
  line-height: 50px;
  border: 1px solid ${(props) => (props.current ? "#c5a47e" : "#fff")};
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;

const ContenidoBlog = () => {
  return (
    <Wrapper>
      <Contenedor>
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <Nav>
          <ItemNav current={true}>1</ItemNav>
          <ItemNav>2</ItemNav>
          <ItemNav>
            <GoChevronRight />
          </ItemNav>
        </Nav>
      </Contenedor>
    </Wrapper>
  );
};

export default ContenidoBlog;
