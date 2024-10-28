import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { QuillEditorToolbar } from "../components/QuillEditorToolbar";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = { title, content, type };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/blogs`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBlog),
        }
      );
      if (response.ok) {
        alert("Blog post created!");
        setTitle("");
        setContent("");
        setType("");
      } else {
        alert("Error creating blog post.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto space-y-6"
      >
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="title">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter the blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="type">
            Blog Type
          </label>
          <input
            type="text"
            id="type"
            placeholder="Enter blog type (e.g., Tech, Lifestyle)"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Content</label>
          <QuillEditorToolbar />
          <ReactQuill
            value={content}
            onChange={setContent}
            placeholder="Write your blog content here..."
            modules={{ toolbar: "#toolbar" }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "link",
              "blockquote",
              "list",
              "bullet",
              "image",
            ]}
            className="h-64 bg-white p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
