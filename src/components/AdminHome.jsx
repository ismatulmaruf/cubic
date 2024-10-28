import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";

const UpdateHome = () => {
  const [homeData, setHomeData] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const homeId = "671a00b17b327d8897d0a8a0"; // Use the correct ID or make it dynamic if needed

  console.log(homeData);

  // console.log(homeData);

  // Fetch existing home data on mount
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/home`
        );
        if (response.ok) {
          const data = await response.json();
          setHomeData(data[0]);
        } else {
          console.error("Failed to fetch home data");
        }
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };

    fetchHomeData();
  }, []);

  // Handle form submission to update the home data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/home/${homeId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(homeData),
        }
      );

      if (response.ok) {
        const updatedData = await response.json();
        setResponseMessage("Home updated successfully!");
        setHomeData(updatedData); // Update state with new data
      } else {
        setResponseMessage("Failed to update home.");
      }
    } catch (error) {
      console.error("Error updating home:", error);
      setResponseMessage("An error occurred.");
    }
  };

  // Handle input changes for all fields
  const handleInputChange = (e, slideIndex = null) => {
    const { name, value } = e.target;

    if (slideIndex !== null) {
      // Update Slide content
      const updatedSlides = [...homeData.Slide];
      updatedSlides[slideIndex][name] = value;
      setHomeData((prevData) => ({
        ...prevData,
        Slide: updatedSlides,
      }));
    } else {
      // Update other home fields
      setHomeData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  if (!homeData) {
    return <Loading />;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Update Home Details
      </h2>

      <form onSubmit={handleSubmit}>
        {/* SECOND SECTION */}
        <h3 className="text-xl font-semibold text-gray-600 mb-4">
          Second Section
        </h3>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Second Sec Image 1
          </label>
          <input
            type="text"
            name="secondSecimg1"
            value={homeData.secondSecimg1}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Second Sec Image 2
          </label>
          <input
            type="text"
            name="secondSecimg2"
            value={homeData?.secondSecimg2}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Second Sec Para 1
          </label>
          <input
            type="text"
            name="secondSecPara1"
            value={homeData.secondSecPara1}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Second Sec Para 2
          </label>
          <input
            type="text"
            name="secondSecPara2"
            value={homeData.secondSecPara2}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Second Sec Heading
          </label>
          <input
            type="text"
            name="secondSecheading"
            value={homeData.secondSecheading}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* THIRD SECTION */}
        <h3 className="text-xl font-semibold text-gray-600 mb-4">
          Third Section
        </h3>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Third Sec Heading
          </label>
          <input
            type="text"
            name="thirdSecheading"
            value={homeData.thirdSecheading}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Third Sec Para
          </label>
          <input
            type="text"
            name="thirdSecPara"
            value={homeData.thirdSecPara}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* CONTACT SECTION */}
        <h3 className="text-xl font-semibold text-gray-600 mb-4">
          Contact Section
        </h3>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Contact Sec Heading
          </label>
          <input
            type="text"
            name="ContactSecHeading"
            value={homeData.ContactSecHeading}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Contact Sec Para
          </label>
          <input
            type="text"
            name="ContactSecPara"
            value={homeData.ContactSecPara}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Contact Sec Number
          </label>
          <input
            type="text"
            name="ContactSecNumber"
            value={homeData.ContactSecNumber}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Contact Sec Image
          </label>
          <input
            type="text"
            name="ContactSecImage"
            value={homeData.ContactSecImage}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        {/* SLIDE SECTION */}
        <h3 className="text-xl font-semibold text-gray-600 mb-4">
          Slide Section
        </h3>
        {homeData?.Slide?.map((slide, index) => (
          <div key={slide._id} className="mb-6 border-b pb-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Slide Content
              </label>
              <input
                type="text"
                name="content"
                value={slide.content}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Slide Subcontent
              </label>
              <input
                type="text"
                name="subcontent"
                value={slide.subcontent}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Slide Background Image
              </label>
              <input
                type="text"
                name="bgImage"
                value={slide.bgImage}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Slide Link
              </label>
              <input
                type="text"
                name="link"
                value={slide.link}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Update Home
        </button>
      </form>

      {responseMessage && (
        <div
          className={`mt-4 p-2 text-center ${
            responseMessage.includes("successfully")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default UpdateHome;
