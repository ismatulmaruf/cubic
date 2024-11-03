import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthBtn from "../components/AuthBtn";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const deleteBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`, {
          method: "DELETE",
        });
        setBlogs(blogs.filter((blog) => blog._id !== id));
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };

  return (
    <>
      <AuthBtn />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Blog List</h1>
        <div className="mb-6 text-center">
          <Link
            to="/admin/blog/create"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create New Blog
          </Link>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {blog.content.slice(0, 100)}...
                </p>
                <small className="text-gray-500"> {blog.type}</small>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/admin/blog/edit/${blog._id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteBlog(blog._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
