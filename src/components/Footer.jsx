import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* First Row: Logo, Navigation Links, and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img src={Logo} className="h-10 mr-4" alt="Cubic Overseas Logo" />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center space-x-4 text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/packages/umrah" className="hover:text-blue-700">
                Umrah Packages
              </Link>
            </li>
            <li>
              <Link to="/packages/hajj" className="hover:text-blue-700">
                Hajj Packages
              </Link>
            </li>
            <li>
              <Link to="/packages/tours" className="hover:text-blue-700">
                Tour Packages
              </Link>
            </li>
            <li>
              <Link to="/student-visa" className="hover:text-blue-700">
                Student Visa
              </Link>
            </li>
            <li>
              <Link to="/work-visa" className="hover:text-blue-700">
                Work Visa
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-700">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.073C22 6.486 17.514 2 12 2S2 6.486 2 12.073c0 5.054 3.656 9.254 8.438 9.927v-7.03h-2.54v-2.897h2.54V9.847c0-2.507 1.492-3.89 3.778-3.89 1.096 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.563v1.887h2.773l-.443 2.897h-2.33v7.03C18.344 21.327 22 17.127 22 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.57a9.97 9.97 0 0 1-2.825.775A4.92 4.92 0 0 0 23.337 3c-.935.555-1.973.959-3.076 1.17a4.907 4.907 0 0 0-8.36 4.466A13.93 13.93 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.555 4.903 4.903 0 0 1-2.228-.616v.06a4.92 4.92 0 0 0 3.946 4.827 4.904 4.904 0 0 1-2.217.084 4.922 4.922 0 0 0 4.6 3.417A9.862 9.862 0 0 1 .96 19.884a13.934 13.934 0 0 0 7.548 2.212c9.057 0 14.009-7.504 14.009-14.008 0-.213-.004-.425-.014-.637A10.025 10.025 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.259.058 2.122.268 2.617.57a5.007 5.007 0 0 1 1.844 1.844c.302.496.511 1.358.57 2.617.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.058 1.259-.268 2.122-.57 2.617a5.007 5.007 0 0 1-1.844 1.844c-.496.302-1.358.511-2.617.57-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.058-2.122-.268-2.617-.57a5.007 5.007 0 0 1-1.844-1.844c-.302-.496-.511-1.358-.57-2.617-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.058-1.259.268-2.122.57-2.617A5.007 5.007 0 0 1 4.534 2.8c.496-.302 1.358-.511 2.617-.57 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.667.012-4.947.072-1.303.061-2.209.27-2.978.58a7.007 7.007 0 0 0-2.548 2.548c-.31.769-.519 1.675-.58 2.978-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.061 1.303.27 2.209.58 2.978a7.007 7.007 0 0 0 2.548 2.548c.769.31 1.675.519 2.978.58 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.303-.061 2.209-.27 2.978-.58a7.007 7.007 0 0 0 2.548-2.548c.31-.769.519-1.675.58-2.978.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.061-1.303-.27-2.209-.58-2.978a7.007 7.007 0 0 0-2.548-2.548c-.769-.31-1.675-.519-2.978-.58-1.28-.06-1.688-.072-4.947-.072z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Second Row: Copyright and Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} · Cubic Overseas. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/privacy-policy"
              className="text-gray-600 hover:text-blue-700 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 hover:text-blue-700 text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
