import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/Firebase.int";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="navbar bg-black">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className=" text-2xl lg:text-white">
                Home
              </Link>
            </li>

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
        <img src="images/woodstore.png" alt="" />
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/" className="text-2xl lg:text-white">
              Home
            </Link>
          </li>

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
    </div>
  );
};

export default Header;
