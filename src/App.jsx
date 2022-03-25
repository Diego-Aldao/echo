import React, { lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./layout/Inicio";
import ScrollTop from "./components/ScrollTop";
const PaginaAbout = lazy(() => import("./paginas/About/AboutPage"));
const PaginaPortfolio = lazy(() => import("./paginas/Portfolio/PortfolioPage"));
const PaginaBlog = lazy(() => import("./paginas/Blog/BlogPage"));
const PaginaContacto = lazy(() => import("./paginas/Contacto/ContactoPage"));
import Loader from "./components/Loader";

const App = () => {
  const [mostrarNav, setMostrarNav] = useState(false);
  const [suspended, setSuspended] = useState(false);
  useEffect(() => {
    setTimeout(() => setSuspended(true), 2000);
    setSuspended(false);
  }, []);

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
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                {suspended ? <PaginaAbout /> : <Loader />}
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/proyecto"
          element={
            <Layout mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                {suspended ? <PaginaPortfolio /> : <Loader />}
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/blog"
          element={
            <Layout mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                {suspended ? <PaginaBlog /> : <Loader />}
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/contacto"
          element={
            <Layout mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                {suspended ? <PaginaContacto /> : <Loader />}
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
