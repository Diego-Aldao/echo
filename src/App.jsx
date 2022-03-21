import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./layout/Inicio";
import AboutPage from "./paginas/About/AboutPage";
import PortfolioPage from "./paginas/Portfolio/PortfolioPage";
import ScrollTop from "./components/ScrollTop";
import BlogPage from "./paginas/Blog/BlogPage";
import ContactoPage from "./paginas/Contacto/ContactoPage";

const App = () => {
  const [mostrarNav, setMostrarNav] = useState(false);
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route
          path="/"
          element={
            <Inicio mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        ></Route>
        <Route
          path="/about"
          element={
            <Layout mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        >
          <Route index element={<AboutPage />} />
        </Route>
        <Route
          path="/proyecto"
          element={
            <Layout mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        >
          <Route index element={<PortfolioPage />} />
        </Route>
        <Route
          path="/blog"
          element={
            <Layout mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        >
          <Route index element={<BlogPage />} />
        </Route>
        <Route
          path="/contacto"
          element={
            <Layout mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        >
          <Route index element={<ContactoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
