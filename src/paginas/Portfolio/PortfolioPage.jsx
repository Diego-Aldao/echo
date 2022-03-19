import React from "react";
import HeaderSecundario from "../../layout/HeaderSecundario";
import Intro from "./Intro";

const PortfolioPage = () => {
  return (
    <>
      <HeaderSecundario nombre={"muebles de lujo"} link={"portfolio"} />
      <Intro />
    </>
  );
};

export default PortfolioPage;
