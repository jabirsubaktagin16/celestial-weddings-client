import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../providers/AuthProvider";

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
          >
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
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img src={logo} className="w-1/6" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase">
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
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.ibb.co/S5DKJdp/avatar.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 text-text rounded-none w-52"
            >
              <li>
                <Link to="/dashboard" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <button role="button" className="btn" onClick={handleLogOut}>
                  Logout
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
