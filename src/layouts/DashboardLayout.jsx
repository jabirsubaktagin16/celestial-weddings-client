import React, { useContext } from "react";
import { CiViewTable } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import {
  IoMdAddCircleOutline,
  IoMdHome,
  IoMdList,
  IoMdPersonAdd,
} from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { VscSignOut } from "react-icons/vsc";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { DashboardListComponent } from "../components/DashboardListComponent/DashboardListComponent";
import { DashboardListHeader } from "../components/DashboardListComponent/DashboardListHeader";
import { Loading } from "../components/Shared/Loading";

import useRoleCheck from "../hooks/useRoleCheck";
import { AuthContext } from "../providers/AuthProvider";

export const DashboardLayout = () => {
  const [isAdmin, isAdminLoading] = useRoleCheck.useAdmin();
  const [isVendor, isVendorLoading] = useRoleCheck.useVendor();
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

        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <label
              htmlFor="my-drawer-2"
              className="text-primary border-none drawer-button shadow-none font-bold lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g id="style=bulk">
                  <g id="menu-fries">
                    <path
                      id="rectangle"
                      d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25H16.75C20.0637 1.25 22.75 3.93629 22.75 7.25V16.75C22.75 20.0637 20.0637 22.75 16.75 22.75H7.25C3.93629 22.75 1.25 20.0637 1.25 16.75V7.25Z"
                    />
                    <path
                      id="vector (Stroke)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.25 12.25C9.25 11.8358 9.58579 11.5 10 11.5L19 11.5C19.4142 11.5 19.75 11.8358 19.75 12.25C19.75 12.6642 19.4142 13 19 13L10 13C9.58579 13 9.25 12.6642 9.25 12.25Z"
                      fill="currentColor"
                    />
                    <path
                      id="vector (Stroke)_2"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.25 7.75C4.25 7.33579 4.51691 7 4.84615 7H19.1538C19.4831 7 19.75 7.33579 19.75 7.75C19.75 8.16421 19.4831 8.5 19.1538 8.5H4.84615C4.51691 8.5 4.25 8.16421 4.25 7.75Z"
                      fill="currentColor"
                    />
                    <path
                      id="vector (Stroke)_3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.25 16.75C4.25 16.3358 4.51691 16 4.84615 16H19.1538C19.4831 16 19.75 16.3358 19.75 16.75C19.75 17.1642 19.4831 17.5 19.1538 17.5H4.84615C4.51691 17.5 4.25 17.1642 4.25 16.75Z"
                      fill="currentColor"
                    />
                  </g>
                </g>
              </svg>
            </label>
          </div>
          <div className="navbar-center">
            <Link to="/">
              <img src={logo} className="w-24" alt="" />
            </Link>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full dashboard-bg text-white">
          <div className="w-full border-b py-5">
            {isAdmin && (
              <ul>
                <DashboardListHeader title={"Analytics"} />
                <DashboardListHeader title={"User Management"} />
                <DashboardListComponent
                  path={"assign-user-role"}
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
                  path={"view-vendors"}
                  icon={<IoMdList />}
                  title={"View Vendor List"}
                />
              </ul>
            )}
            {isVendor && (
              <ul>
                <DashboardListHeader title={"Analytics"} />
                <DashboardListHeader title={"Packages"} />
                <DashboardListComponent
                  path={"view-all-packages"}
                  icon={<CiViewTable />}
                  title={"View All Packages"}
                />
                <DashboardListComponent
                  path={"add-new-package"}
                  icon={<IoMdAddCircleOutline />}
                  title={"Add New Package"}
                />
                <DashboardListHeader title={"Bookings"} />
                <DashboardListComponent
                  path={"view-all-bookings"}
                  icon={<TbBrandBooking />}
                  title={"View All Bookings"}
                />
                <DashboardListHeader title={"Vendor Profile"} />
                <DashboardListComponent
                  path={"vendor-profile"}
                  icon={<ImProfile />}
                  title={"View Profile"}
                />
              </ul>
            )}
            {!isVendor && !isAdmin && (
              <ul>
                <DashboardListHeader title={"Order History"} />
                <DashboardListComponent
                  path={"previous-orders"}
                  icon={<CiViewTable />}
                  title={"Previous Orders"}
                />

                <DashboardListHeader title={"Reviews"} />
                <DashboardListComponent
                  path={"my-reviews"}
                  icon={<TbBrandBooking />}
                  title={"My Reviews"}
                />
                <DashboardListHeader title={"Blogs"} />
                <DashboardListComponent
                  path={"add-blog"}
                  icon={<ImProfile />}
                  title={"Add Blog"}
                />
                <DashboardListComponent
                  path={"my-blogs"}
                  icon={<ImProfile />}
                  title={"My Blogs"}
                />
              </ul>
            )}
          </div>
          <ul className="my-5">
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
