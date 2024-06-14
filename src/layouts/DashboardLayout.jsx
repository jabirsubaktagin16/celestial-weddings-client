import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  IoMdAddCircleOutline,
  IoMdHome,
  IoMdList,
  IoMdPersonAdd,
} from "react-icons/io";
import { VscSignOut } from "react-icons/vsc";
import { Outlet } from "react-router-dom";
import { DashboardListComponent } from "../components/DashboardListComponent/DashboardListComponent";
import { DashboardListHeader } from "../components/DashboardListComponent/DashboardListHeader";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../providers/AuthProvider";

export const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="min-h-full bg-primary text-white">
          <div className="flex items-center justify-center h-14 border-b">
            <div>Sidebar Navigation By iAmine</div>
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
          </div>
          <ul className="w-80 mt-5">
            <DashboardListComponent
              path={"/"}
              icon={<IoMdHome />}
              title={"User Home"}
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
