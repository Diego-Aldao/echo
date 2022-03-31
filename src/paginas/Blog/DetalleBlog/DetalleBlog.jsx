import React from "react";
import HeaderSecundario from "../../../layout/HeaderSecundario";
import Info from "./Info";

const DetalleBlog = () => {
  return (
    <>
      <HeaderSecundario
        nombre={"posteo blog"}
        link={"posteo blog"}
        link2={"blog"}
      />
      <Info />
    </>
  );
};

export default DetalleBlog;
