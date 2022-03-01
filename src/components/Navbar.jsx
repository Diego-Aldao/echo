import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  z-index: 99;
  width: 100%;
  @media (min-width: 992px) {
    height: 80px;
  }
`;
const Contenedor = styled.div`
  width: 100%;
  height: 31px;
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  @media (min-width: 992px) {
    max-width: 960px;
    height: 72px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1340px;
  }
`;
const Logo = styled.span`
  color: white;
  text-transform: uppercase;
  margin: 0px;
  width: 60px;
  @media (min-width: 992px) {
    width: 120px;
    font-size: 2rem;
  }
`;
const Hamburguesa = styled.span`
  width: 25px;
  height: 25px;
  background: white;
  @media (min-width: 992px) {
    display: none;
  }
`;
const LinksNav = styled.ul`
  width: calc(100% - 120px);
  height: 100%;
  display: none;
  list-style: none;
  margin: 0px;
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
const LinkNav = styled.li`
  color: white;
  padding: 15px 7px;
  margin: 10px;
  font-family: "Jost", sans-serif;
  text-transform: capitalize;
  font-size: 0.938rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Contenedor>
        <Logo>echo</Logo>
        <Hamburguesa></Hamburguesa>
        <LinksNav>
          <LinkNav>
            <span>inicio i</span>
          </LinkNav>
          <LinkNav>
            <a href="">about</a>
          </LinkNav>
          <LinkNav>
            <span>portfolio i</span>
          </LinkNav>
          <LinkNav>
            <span>blog i</span>
          </LinkNav>
          <LinkNav>
            <a href="">contacto</a>
          </LinkNav>
        </LinksNav>
      </Contenedor>
    </Nav>
  );
};

export default Navbar;
