import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white  bg-opacity-70 backdrop-blur-md border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="logo.png" className="h-8" alt="Flowbite Logo" />
        </Link>

        {/* Mobile menu button (visible below 1024px width) */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0  items-center">
            <li>
              <Link
                to="/"
                className="block py-2 px-3   rounded lg:bg-transparent  lg:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
              >
                About
              </Link>
            </li>
            <li className="relative group">
              <button className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:w-auto">
                Packages{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown menu with hover (absolute) */}
              <div
                className="hidden group-hover:block absolute z-10 font-normal  divide-y divide-gray-100 rounded-lg shadow w-44"
                id="dropdownNavbar"
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link
                      to="/packages/umrah"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Umrah Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/packages/hajj"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Hajj Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/packages/tours"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Tour Packages
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/student-visa"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
              >
                Student Visa
              </Link>
            </li>
            <li>
              <Link
                to="/work-visa"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
              >
                Work Visa
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
              >
                Contact
              </Link>
            </li>
            <li className="ml-auto lg:ml-4">
              <Link to="/get-started" className="lg:p-0">
                <button className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-400">
                  Get Started
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
