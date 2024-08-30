import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Shared/Footer";
import { Loading } from "../components/Shared/Loading";
import { Navbar } from "../components/Shared/Navbar";
import { AuthContext } from "../providers/AuthProvider";

export const Main = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
