import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import "./assets/css/main.css";
import EstilosGlobales from "./EstilosGlobales.jsx";

ReactDOM.render(
  <React.StrictMode>
    <EstilosGlobales />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
