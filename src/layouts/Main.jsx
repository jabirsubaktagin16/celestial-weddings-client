import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Shared/Navbar";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
