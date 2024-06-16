import React, { useContext } from "react";
import { CiViewTable } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  IoMdAddCircleOutline,
  IoMdHome,
  IoMdList,
  IoMdPersonAdd,
} from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { VscSignOut } from "react-icons/vsc";
import { Outlet, useNavigate } from "react-router-dom";
import { DashboardListComponent } from "../components/DashboardListComponent/DashboardListComponent";
import { DashboardListHeader } from "../components/DashboardListComponent/DashboardListHeader";
import { Loading } from "../components/Shared/Loading";
import useAdmin from "../hooks/useAdmin";
import useVendor from "../hooks/useVendor";
import { AuthContext } from "../providers/AuthProvider";

export const DashboardLayout = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isVendor, isVendorLoading] = useVendor();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  if (isAdminLoading || isVendorLoading) return <Loading />;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn border-none text-primary drawer-button lg:hidden"
        >
          <GiHamburgerMenu />
        </label>
        <Outlet />
      </div>
      <div className=" bg-primary drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="min-h-full text-white">
          <div className="flex items-center justify-center h-48 border-b">
            <div>
              <div className="text-center">
                <div className="avatar">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/S5DKJdp/avatar.png" />
                  </div>
                </div>
                <h2 className="text-xl mt-3 barlow-font text-center uppercase font-bold text-white">
                  {user?.displayName}
                </h2>
                <p>
                  Signed In as:{" "}
                  {isAdmin ? (
                    <span className="font-bold">Admin</span>
                  ) : isVendor ? (
                    <span className="font-bold">Vendor</span>
                  ) : (
                    <span className="font-bold">User</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="border-b py-5">
            {isAdmin && (
              <ul className="w-80">
                <DashboardListHeader title={"Analytics"} />
                <DashboardListHeader title={"User Management"} />
                <DashboardListComponent
                  path={"addVendor"}
                  icon={<IoMdPersonAdd />}
                  title={"Assign User Roles"}
                />
                <DashboardListHeader title={"Vendor Management"} />
                <DashboardListComponent
                  path={"add-vendor"}
                  icon={<IoMdAddCircleOutline />}
                  title={"Add New Vendor"}
                />
                <DashboardListComponent
                  path={"addVendor"}
                  icon={<IoMdList />}
                  title={"View Vendor List"}
                />
                <DashboardListHeader title={"Service Management"} />
                <DashboardListComponent
                  path={"addService"}
                  icon={<IoMdAddCircleOutline />}
                  title={"Add New Service"}
                />
                <DashboardListComponent
                  path={"serviceList"}
                  icon={<IoMdList />}
                  title={"View Service List"}
                />
              </ul>
            )}
            {isVendor && (
              <ul className="w-80">
                <DashboardListHeader title={"My Packages"} />
                <DashboardListComponent
                  path={"view-all-events"}
                  icon={<CiViewTable />}
                  title={"View All Packages"}
                />
                <DashboardListComponent
                  path={"add-new-event"}
                  icon={<IoMdAddCircleOutline />}
                  title={"Add New Package"}
                />
                <DashboardListHeader title={"Bookings"} />
                <DashboardListComponent
                  path={"addVendor"}
                  icon={<TbBrandBooking />}
                  title={"View All Bookings"}
                />
              </ul>
            )}
          </div>
          <ul className="w-80 my-5">
            <DashboardListComponent
              path={"/dashboard/my-profile"}
              icon={<FaUserCircle />}
              title={"My Profile"}
            />
            <DashboardListComponent
              path={"/"}
              icon={<IoMdHome />}
              title={"Celestial Weddings Home"}
            />
            <li>
              <a
                role="button"
                onClick={handleLogOut}
                className="relative text-sm rounded-none flex flex-row items-center h-11 focus:outline-none hover:bg-secondary text-white hover:text-primary border-l-4 border-transparent hover:border-accent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <VscSignOut />
                </span>
                <span className="ml-2 tracking-wide truncate">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
