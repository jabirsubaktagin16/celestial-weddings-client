import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../../components/Shared/NotFound";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { Main } from "../../layouts/Main";
import { AboutUs } from "../../pages/AboutUs";
import { ViewUsers } from "../../pages/Admin/UserRole/ViewUsers";
import { AddVendor } from "../../pages/Admin/VendorManagement/AddVendor";
import { ViewVendors } from "../../pages/Admin/VendorManagement/ViewVendors";
import { Home } from "../../pages/Home";
import { Profile } from "../../pages/Profile/Profile";
import { Services } from "../../pages/Services";
import { SignIn } from "../../pages/SignIn/SignIn";
import { SignUp } from "../../pages/SignUp.jsx/SignUp";
import { SingleService } from "../../pages/SingleService";
import { SingleVendor } from "../../pages/SingleVendor";
import { ViewAllBookings } from "../../pages/Vendor/Bookings/ViewAllBookings";
import { AddNewPackage } from "../../pages/Vendor/Packages/AddNewPackage";
import { ViewAllPackages } from "../../pages/Vendor/Packages/ViewAllPackages";
import AdminRoute from "../AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import VendorRoute from "../VendorRoute";

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
        path: "vendor/:id",
        element: <SingleVendor />,
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
        path: "my-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "assign-user-role",
        element: (
          <AdminRoute>
            <ViewUsers />
          </AdminRoute>
        ),
      },
      {
        path: "add-vendor",
        element: (
          <AdminRoute>
            <AddVendor />
          </AdminRoute>
        ),
      },
      {
        path: "view-vendors",
        element: (
          <AdminRoute>
            <ViewVendors />
          </AdminRoute>
        ),
      },
      {
        path: "add-new-package",
        element: (
          <VendorRoute>
            <AddNewPackage />
          </VendorRoute>
        ),
      },
      {
        path: "view-all-packages",
        element: (
          <VendorRoute>
            <ViewAllPackages />
          </VendorRoute>
        ),
      },
      {
        path: "view-all-bookings",
        element: (
          <VendorRoute>
            <ViewAllBookings />
          </VendorRoute>
        ),
      },
    ],
  },
]);
