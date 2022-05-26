import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/Firebase.int";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar bg-black sticky z-20 top-0 left-0 right-0 px-4 md:px-12 lg:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className=" text-2xl lg:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className=" text-2xl lg:text-white">
                My Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blogs" className=" text-2xl lg:text-white">
                Blogs
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/dashboard" className=" text-2xl lg:text-white">
                  Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link to="/registar" className=" text-2xl lg:text-white">
                Registar
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <span
                    className=" text-2xl lg:text-white"
                    onClick={() => signOut(auth)}
                  >
                    Log Out
                  </span>
                </li>
                <li>
                  <span className=" text-2xl lg:text-white">
                    {user?.displayName}
                  </span>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className=" text-2xl lg:text-white">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <img src="images/woodstore.png" alt="" className="w-[10rem]" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/" className="text-2xl lg:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className=" text-2xl lg:text-white">
              My Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blogs" className=" text-2xl lg:text-white">
              Blogs
            </Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard" className=" text-2xl lg:text-white">
                Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link to="/registar" className=" text-2xl lg:text-white">
              Registar
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <span
                  className=" text-2xl lg:text-white"
                  onClick={() => signOut(auth)}
                >
                  Log Out
                </span>
              </li>
              <li>
                <span className=" text-2xl lg:text-white">
                  {user?.displayName}
                </span>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className=" text-2xl lg:text-white">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="0"
          className="btn btn-ghost lg:hidden"
          htmlFor="dashboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
