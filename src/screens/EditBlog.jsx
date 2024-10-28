import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { QuillEditorToolbar } from "../components/QuillEditorToolbar";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.error("Error fetching blog:", error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBlog = { title, content, author };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/blogs/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedBlog),
        }
      );
      if (response.ok) {
        alert("Blog post updated!");
        navigate("/");
      } else {
        alert("Error updating blog post.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Edit Blog Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <QuillEditorToolbar />
          <ReactQuill
            value={content}
            onChange={setContent}
            placeholder="Edit your blog content here..."
            modules={{ toolbar: "#toolbar" }}
            formats={["header", "bold", "italic", "underline", "link"]}
            className="bg-white border border-gray-300 rounded-lg p-3 h-60"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
