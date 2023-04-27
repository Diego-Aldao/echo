import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import BotonScroll from "../components/BotonScroll";

const Layout = ({ mostrarNav, setMostrarNav }) => {
  return (
    <>
      <Navbar mostrarNav={mostrarNav} setMostrarNav={setMostrarNav} />
      <Outlet />
      <Footer />
      <BotonScroll />
    </>
  );
};

export default Layout;
