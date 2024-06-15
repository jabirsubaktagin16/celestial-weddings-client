import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../../components/Shared/NotFound";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { Main } from "../../layouts/Main";
import { AboutUs } from "../../pages/AboutUs";
import { AddVendor } from "../../pages/AddVendor";
import { Home } from "../../pages/Home";
import { AddNewEvent } from "../../pages/Planner/MyEvents/AddNewEvent";
import { ViewAllEvents } from "../../pages/Planner/MyEvents/ViewAllEvents";
import { Services } from "../../pages/Services";
import { SignIn } from "../../pages/SignIn/SignIn";
import { SignUp } from "../../pages/SignUp.jsx/SignUp";
import { SingleService } from "../../pages/SingleService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
      {
        path: "sign-up",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "add-vendor",
        element: (
          <PrivateRoute>
            <AddVendor />
          </PrivateRoute>
        ),
      },
      {
        path: "view-all-events",
        element: (
          <PrivateRoute>
            <ViewAllEvents />
          </PrivateRoute>
        ),
      },
      {
        path: "add-new-event",
        element: (
          <PrivateRoute>
            <AddNewEvent />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
