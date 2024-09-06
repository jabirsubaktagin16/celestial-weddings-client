import { useContext } from "react";
import { TiUser } from "react-icons/ti";
import { VscSignOut } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../providers/AuthProvider";

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navbarListComponents = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      <li>
        <Link to={"/gallery"}>Gallery</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 w-52 uppercase"
          >
            {navbarListComponents}
          </ul>
        </div>
        <Link to="/">
          <img
            src={logo}
            className="w-1/2 sm:w-1/4 md:w-1/6"
            alt="Project Logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase">
          {navbarListComponents}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-16">
                <img src={userIcon} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content p-2 bg-[#ecf8f7] text-text rounded-none w-52 z-10"
            >
              <li>
                <Link
                  to={"/dashboard/my-profile"}
                  className="flex items-center gap-2 rounded-none px-4 py-2 text-gray-500 hover:bg-primary hover:text-white"
                >
                  <TiUser />
                  <span className="text-sm font-medium"> Account </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="flex items-center gap-2 rounded-none px-4 py-2 text-gray-500 hover:bg-primary hover:text-white"
                >
                  <VscSignOut />

                  <span className="text-sm font-medium"> Sign Out </span>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="sign-in"
            className="btn btn-primary text-white border-none rounded-none"
          >
            Join Now
          </Link>
        )}
      </div>
    </div>
  );
};
