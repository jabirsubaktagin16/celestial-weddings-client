import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../layouts/Main";
import { Home } from "../../pages/Home";
import { Services } from "../../pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);
