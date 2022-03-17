import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./layout/Inicio";
import AboutPage from "./paginas/About/AboutPage";

const App = () => {
  const [mostrarNav, setMostrarNav] = useState(false);
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
