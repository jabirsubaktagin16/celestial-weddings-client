import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../../components/Shared/NotFound";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { Main } from "../../layouts/Main";
import { AboutUs } from "../../pages/AboutUs";
import { AddImage } from "../../pages/Admin/GalleryManagement/AddImage";
import { ViewImageList } from "../../pages/Admin/GalleryManagement/ViewImageList";
import { ViewUsers } from "../../pages/Admin/UserRole/ViewUsers";
import { AddVendor } from "../../pages/Admin/VendorManagement/AddVendor";
import { ViewVendors } from "../../pages/Admin/VendorManagement/ViewVendors";
import { Gallery } from "../../pages/Gallery";
import { Home } from "../../pages/Home";
import { Profile } from "../../pages/Profile/Profile";
import { Services } from "../../pages/Services";
import { SignIn } from "../../pages/SignIn/SignIn";
import { SignUp } from "../../pages/SignUp.jsx/SignUp";
import { SingleService } from "../../pages/SingleService";
import { SingleVendor } from "../../pages/SingleVendor";
import { MyReviews } from "../../pages/User/MyReviews/MyReviews";
import { PreviousOrders } from "../../pages/User/PreviousOrders/PreviousOrders";
import { ViewAllBookings } from "../../pages/Vendor/Bookings/ViewAllBookings";
import { AddNewPackage } from "../../pages/Vendor/Packages/AddNewPackage";
import { UpdatePackage } from "../../pages/Vendor/Packages/UpdatePackage";
import { ViewAllPackages } from "../../pages/Vendor/Packages/ViewAllPackages";
import { VendorProfile } from "../../pages/Vendor/Profile/VendorProfile";
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
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "services/:shortForm",
        element: <SingleService />,
      },
      {
        path: "vendors/:id",
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
        path: "previous-orders",
        element: (
          <PrivateRoute>
            <PreviousOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
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
        path: "vendor/add",
        element: (
          <AdminRoute>
            <AddVendor />
          </AdminRoute>
        ),
      },

      {
        path: "vendor/list",
        element: (
          <AdminRoute>
            <ViewVendors />
          </AdminRoute>
        ),
      },
      {
        path: "gallery/add",
        element: (
          <AdminRoute>
            <AddImage />
          </AdminRoute>
        ),
      },

      {
        path: "gallery/list",
        element: (
          <AdminRoute>
            <ViewImageList />
          </AdminRoute>
        ),
      },
      {
        path: "package/add",
        element: (
          <VendorRoute>
            <AddNewPackage />
          </VendorRoute>
        ),
      },
      {
        path: "package/update/:id",
        element: (
          <VendorRoute>
            <UpdatePackage />
          </VendorRoute>
        ),
      },
      {
        path: "package/view",
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
      {
        path: "vendor-profile",
        element: (
          <VendorRoute>
            <VendorProfile />
          </VendorRoute>
        ),
      },
    ],
  },
]);
