import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleBlog.module.css";

const SingleBlog = () => {
  const { id } = useParams(); // Get blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/blogs/${id}`
        );
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="text-center text-lg text-gray-600">Loading...</div>;
  }

  if (!blog) {
    return (
      <div className="text-center text-lg text-gray-600">Blog not found</div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500 mb-4">{blog.type}</p>
          <div
            className="text-lg text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
          <p className="text-sm text-gray-400 mt-4">
            Published on: {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
