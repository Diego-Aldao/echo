import React, { lazy, Suspense } from "react";
import { useState } from "react";
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

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route
          path={import.meta.env.BASE_URL + "/"}
          element={
            <Inicio mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        ></Route>
        <Route
          path={import.meta.env.BASE_URL + "/about"}
          element={
            <Layout mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <PaginaAbout />
              </Suspense>
            }
          />
        </Route>
        <Route
          path={import.meta.env.BASE_URL + "/proyecto"}
          element={
            <Layout mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <PaginaPortfolio />
              </Suspense>
            }
          />
        </Route>
        <Route
          path={import.meta.env.BASE_URL + "/blog"}
          element={
            <Layout mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <PaginaBlog />
              </Suspense>
            }
          />
        </Route>
        <Route
          path={import.meta.env.BASE_URL + "/contacto"}
          element={
            <Layout mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <PaginaContacto />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
