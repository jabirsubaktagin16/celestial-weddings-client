import React, { useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import avatar from "../assets/user_avatar.png";
import { DashboardListComponent } from "../components/DashboardListComponent/DashboardListComponent";
import { Loading } from "../components/Shared/Loading";
import useRoleCheck from "../hooks/useRoleCheck";
import useUser from "../hooks/useUser";
import { AuthContext } from "../providers/AuthProvider";
import pathList from "../utils/pathLists";

export const DashboardLayout = () => {
  const [isAdmin, isAdminLoading] = useRoleCheck.useAdmin();
  const [isVendor, isVendorLoading] = useRoleCheck.useVendor();
  const { user, logOut } = useContext(AuthContext);
  const [userInfo, userLoading, userRefetch] = useUser.userDetails(user?.email);
  const navigate = useNavigate();
  let location = useLocation();
  let getCurrentLocation = location.pathname.split("/");

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  if (isAdminLoading || isVendorLoading || userLoading) return <Loading />;

  const checkActivePath = (st) =>
    `block rounded-none px-4 py-2 text-sm font-medium ${
      getCurrentLocation[2] === st
        ? "bg-primary text-base-100"
        : "text-gray-500 hover:bg-primary hover:text-base-100"
    }`;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
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
      <div className="drawer-content">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex h-screen flex-col justify-between border-e w-64 bg-base-100">
          <div className="px-4 py-6">
            <div className="flex justify-center items-center">
              <img src={logo} className="w-32" alt="" />
            </div>

            <ul className="mt-6 space-y-1">
              <li>
                <Link
                  to={"/dashboard/my-profile"}
                  className={checkActivePath("my-profile")}
                >
                  My Profile
                </Link>
              </li>
              {isAdmin && (
                <>
                  <li>
                    <Link
                      to={"/dashboard/assign-user-role"}
                      className={checkActivePath("assign-user-role")}
                    >
                      Assign User Roles
                    </Link>
                  </li>

                  <DashboardListComponent
                    elements={pathList.vendorManagementList}
                    title={"Vendor Management"}
                  />
                  <DashboardListComponent
                    elements={pathList.galleryManagementList}
                    title={"Gallery Management"}
                  />
                </>
              )}
              {isVendor && (
                <>
                  <DashboardListComponent
                    elements={pathList.packagePathList}
                    title={"Packages"}
                  />
                  <li>
                    <Link
                      to={"/dashboard/view-all-bookings"}
                      className={checkActivePath("view-all-bookings")}
                    >
                      View All Bookings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/vendor-profile"}
                      className={checkActivePath("vendor-profile")}
                    >
                      Vendor Profile
                    </Link>
                  </li>
                </>
              )}
              {!isVendor && !isAdmin && (
                <>
                  <li>
                    <Link
                      to={"previous-orders"}
                      className={checkActivePath("previous-orders")}
                    >
                      Previous Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"my-reviews"}
                      className={checkActivePath("my-reviews")}
                    >
                      My Reviews
                    </Link>
                  </li>
                  {/* <DashboardListComponent
                    elements={pathList?.blogPathList}
                    title={"Blog"}
                  /> */}
                </>
              )}
              <li>
                <Link
                  to={"/"}
                  className="block rounded-none px-4 py-2 text-sm font-medium text-gray-500 hover:bg-primary hover:text-base-100"
                >
                  Celestial Weddings Home
                </Link>
              </li>
              <li>
                <a
                  role="button"
                  onClick={handleLogOut}
                  className="block rounded-none px-4 py-2 text-sm font-medium text-gray-500 hover:bg-primary hover:text-base-100"
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a
              href="#"
              className="flex items-center gap-2 bg-base-200 p-4 text-white"
            >
              <div className="relative w-10 h-10 overflow-hidden rounded-full ring-primary ring-offset-base-100  ring ring-offset-2">
                <img
                  alt=""
                  src={userInfo?.image || avatar}
                  className="size-10 rounded-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs">
                  <strong className="block font-medium">
                    {userInfo?.name}
                  </strong>

                  <span> {userInfo?.email} </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
