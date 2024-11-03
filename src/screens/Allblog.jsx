import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/blogs`
        );
        const data = await response.json();
        setBlogs(data);

        const uniqueTypes = Array.from(new Set(data.map((blog) => blog.type)));
        setTypes(uniqueTypes);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const filterByType = () => {
    if (selectedType === "all") {
      return blogs;
    }
    return blogs.filter((blog) => blog.type === selectedType);
  };

  if (blogs.length == 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-gray-600">
        <svg
          width="60"
          height="60"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            strokeLinecap="round"
            strokeDasharray="31.416"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="360 6 6"
              to="0 6 6"
              dur="1s"
              additive="sum"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="stroke-dashoffset"
              attributeType="xml"
              from="31.416"
              to="12.566"
              dur="0.9s"
              fill="freeze"
            ></animate>
            <animate
              attributeName="stroke-width"
              attributeType="xml"
              from="0"
              to="1"
              dur="0.5s"
              fill="freeze"
            ></animate>
          </circle>
          <circle
            cx="6"
            cy="6"
            r="3"
            strokeLinecap="round"
            strokeDasharray="11.31"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 6 6"
              to="360 6 6"
              dur="1s"
              additive="sum"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="stroke-dashoffset"
              attributeType="xml"
              from="31.416"
              to="12.566"
              dur="0.9s"
              fill="freeze"
            ></animate>
            <animate
              attributeName="stroke-width"
              attributeType="xml"
              from="0"
              to="1"
              dur="0.5s"
              fill="freeze"
            ></animate>
          </circle>
        </svg>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>

          {/* Type Filter Buttons */}
          <div className="space-x-2">
            <button
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedType === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => setSelectedType("all")}
            >
              All
            </button>
            {types.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedType === type
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                }`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Display Filtered Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterByType().map((blog) => (
            <Link to={`/blog/${blog._id}`} key={blog._id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl h-[380px] flex flex-col">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-500 ">{blog.type}</p>
                  {/* <p className="text-gray-700 flex-grow">
                    {blog.content.slice(0, 100)}...
                  </p> */}
                  <div className="text-right mt-auto">
                    <span className="text-blue-500 hover:text-blue-600 font-semibold">
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
