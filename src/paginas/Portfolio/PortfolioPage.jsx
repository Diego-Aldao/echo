import React from "react";
import HeaderSecundario from "../../layout/HeaderSecundario";
import Intro from "./Intro";
import Media from "./Media";

const PortfolioPage = () => {
  return (
    <>
      <HeaderSecundario nombre={"muebles de lujo"} link={"portfolio"} />
      <Intro />
      <Media />
    </>
  );
};

export default PortfolioPage;
