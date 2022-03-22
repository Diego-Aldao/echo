import React from "react";
import styled from "styled-components";
import ItemBlog from "./ItemBlog";
import { GoChevronRight } from "react-icons/go";
import ImagenBlog01 from "../../assets/images/PaginasSec/Blog/img-blog-01.webp";
import ImagenBlog02 from "../../assets/images/PaginasSec/Blog/img-blog-02.webp";
import ImagenBlog03 from "../../assets/images/PaginasSec/Blog/img-blog-03.webp";

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
        <ItemBlog img={ImagenBlog01} />
        <ItemBlog img={ImagenBlog02} />
        <ItemBlog img={ImagenBlog03} />
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
