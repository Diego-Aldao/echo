import React from "react";
import HeaderSecundario from "../../layout/HeaderSecundario";
import ContenidoBlog from "./ContenidoBlog";

const BlogPage = () => {
  return (
    <>
      <HeaderSecundario nombre={"útlimos blogs"} link={"blog"} />
      <ContenidoBlog />
    </>
  );
};

export default BlogPage;
