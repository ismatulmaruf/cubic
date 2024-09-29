import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-600 mb-8">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
