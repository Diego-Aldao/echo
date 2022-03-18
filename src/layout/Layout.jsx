import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import BotonScroll from "../components/BotonScroll";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import HeaderSecundario from "./HeaderSecundario";

const Layout = ({ mostrarNav, setMostrarNav }) => {
  return (
    <>
      <CustomCursor
        targets={["a, button, .dropdown"]}
        dimensions={30}
        fill={"#c5a47e"}
        smoothness={{
          movement: 0.5,
          scale: 1,
          opacity: 0.9,
        }}
        targetOpacity={0.5}
      />
      <Navbar mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
      <HeaderSecundario />
      <Outlet />
      <Footer />
      <BotonScroll />
    </>
  );
};

export default Layout;
