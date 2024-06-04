import { Outlet } from "react-router-dom";
import { Footer } from "../components/Shared/Footer";
import { Navbar } from "../components/Shared/Navbar";

export const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};
