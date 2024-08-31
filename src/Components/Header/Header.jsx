import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="images.jpeg" // replace with your logo image path
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            <div className="flex items-center">
              <span className="text-black text-2xl font-bold mr-2">Kishan</span>
              <span className="text-red-600 text-2xl font-bold">Samadhan</span>
            </div>
          </Link>


          <div className="flex items-center lg:order-2">
            
            <Link
              to="login"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Login
            </Link>
            
          </div>

          <div className="flex items-center lg:order-2">
            
            <Link
              to="issues"

            >
              <div class="w-6 h-6 rounded-full bg-red-300 flex justify-center items-center">
                <i class="fa-solid fa-question"></i>
                {/* <i class="fa-solid fa-cloud text-3xl text-gray-900"></i> */}
              </div>
            </Link>
            
          </div>



          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-red-600" : "text-gray-950"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="buyandsell"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-red-600" : "text-gray-950"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Buy and Sell
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="aboutus"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-red-600" : "text-gray-950"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  aboutUs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contactus"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-red-600" : "text-gray-950"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  ContactUs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}