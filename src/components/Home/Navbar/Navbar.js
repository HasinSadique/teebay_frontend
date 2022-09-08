import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogoutBtn = (event) => {
    localStorage.removeItem("user");
    localStorage.removeItem("currentUserID");
    navigate(from, { replace: true });
  };
  return (
    // <div className="py-5 px-7 flex justify-end">
    //   <button onClick={handleLogoutBtn} className="btn bg-red-700 text-white ">
    //     Logout
    //   </button>
    // </div>
    <div class="navbar bg-base-100 shadow-2xl">
      <div class="navbar-start">
        {location.pathname != "/" ? (
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
                <a className="hover:bg-red-700 hover:text-white" href="/home">
                  Home
                </a>
              </li>

              <li tabindex="0">
                <a
                  className="hover:bg-red-700 hover:text-white"
                  href={`/my-products`}
                >
                  My products
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
        <a
          href="/home"
          class="btn btn-ghost normal-case text-3xl font-bold text-red-600"
        >
          teeBay
        </a>
      </div>

      {location.pathname != "/" ? (
        <div className="w-full">
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
              <li>
                <a className="hover:bg-red-700 hover:text-white" href="/home">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/my-products"
                  className="hover:bg-red-700 hover:text-white"
                >
                  My products
                </a>
              </li>
            </ul>
          </div>
          <div class=" grid ml-auto mr-5">
            {!localStorage.getItem("user") ? (
              <a href="/" class="btn hover:bg-red-700">
                Sign In
              </a>
            ) : (
              <a onClick={handleLogoutBtn} class="btn hover:bg-red-700">
                LOGOUT
              </a>
            )}
            <small>{localStorage.getItem("user")}</small>
            {localStorage.getItem("currentUserID") ? (
              <small>User ID: {localStorage.getItem("currentUserID")}</small>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
