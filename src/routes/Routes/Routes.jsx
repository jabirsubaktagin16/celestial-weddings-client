import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../../components/Shared/NotFound";
import { Main } from "../../layouts/Main";
import { AboutUs } from "../../pages/AboutUs";
import { Home } from "../../pages/Home";
import { Services } from "../../pages/Services";
import { SignIn } from "../../pages/SignIn";
import { SingleService } from "../../pages/SingleService";
import { PublicRoute } from "../PublicRoute/PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "services/:shortForm",
        element: <SingleService />,
      },
      {
        path: "sign-in",
        element: (
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        ),
      },
    ],
  },
]);
