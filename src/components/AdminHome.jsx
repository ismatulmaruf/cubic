import React, { useState, useEffect } from "react";

const SlideManager = () => {
  const [slides, setSlides] = useState([]);
  const [formData, setFormData] = useState({
    content: "",
    subcontent: "",
    bgImage: "",
    link: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch slides from backend
  useEffect(() => {
    const fetchSlides = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/home`
        );
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching slides:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchSlides();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission to update a slide
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}//home/${editingId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          const updatedSlide = await response.json();
          setSlides(
            slides.map((slide) =>
              slide._id === editingId ? updatedSlide : slide
            )
          );
          resetForm();
        } else {
          console.error("Error updating slide:", response.statusText);
        }
      } catch (error) {
        console.error("Error updating slide:", error);
      }
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({ content: "", subcontent: "", bgImage: "", link: "" });
    setEditingId(null);
  };

  // Handle edit button click
  const handleEditClick = (slide) => {
    setFormData({
      content: slide.content,
      subcontent: slide.subcontent,
      bgImage: slide.bgImage,
      link: slide.link,
    });
    setEditingId(slide._id);
  };

  return (
    <div className="max-w-full p-4">
      {" "}
      {/* Remove max-width for full width */}
      <h1 className="text-3xl font-bold mb-4">Slide Management</h1>
      {/* Display loading indicator if loading */}
      {/* Form to edit slide */}
      <h2 className="text-2xl font-semibold mb-2">
        {editingId ? "Edit Slide" : "Select a slide to edit"}
      </h2>
      {editingId && (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-4 rounded shadow"
        >
          <input
            type="text"
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleInputChange}
            required
            className="block w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="subcontent"
            placeholder="Subcontent"
            value={formData.subcontent}
            onChange={handleInputChange}
            required
            className="block w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="bgImage"
            placeholder="Background Image URL"
            value={formData.bgImage}
            onChange={handleInputChange}
            required
            className="block w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="link"
            placeholder="Link"
            value={formData.link}
            disabled
            onChange={handleInputChange}
            required
            className="block w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Update Slide
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="w-full mt-2 bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </form>
      )}
      {loading ? (
        <div className="text-center">Loading slides...</div>
      ) : (
        <>
          {/* Display the slides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {slides.map((slide) => (
              <div
                key={slide._id}
                className="bg-white p-4 border rounded shadow"
              >
                <h3 className="text-xl font-semibold">{slide.content}</h3>
                {/* <p className="text-gray-700">{slide.subcontent}</p> */}
                <img
                  src={slide.bgImage}
                  alt={slide.content}
                  className="w-full mt-2 rounded h-40"
                />
                <button
                  onClick={() => handleEditClick(slide)}
                  className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SlideManager;
