import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { QuillEditorToolbar } from "../components/QuillEditorToolbar";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // useNavigate instead of useHistory
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
        navigate("/"); // useNavigate to redirect
      } else {
        alert("Error updating blog post.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Edit Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <QuillEditorToolbar />
        <ReactQuill
          value={content}
          onChange={setContent}
          placeholder="Edit your blog content here..."
          modules={{ toolbar: "#toolbar" }}
          formats={["header", "bold", "italic", "underline", "link"]}
        />
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
