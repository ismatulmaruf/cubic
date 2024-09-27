// import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
