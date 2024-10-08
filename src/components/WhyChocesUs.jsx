import React, { useEffect, useState } from "react";
import { PhoneIcon } from "@heroicons/react/solid"; // Import PhoneIcon

const WhyChooseUs = () => {
  const [slides, setSlides] = useState([]);

  // Fetch the data when the component mounts
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/home`
        );
        const data = await response.json();

        // Filter the data to only include objects where the category is 'contact'
        const slidesData = data.filter((item) => item.category === "contact");
        setSlides(slidesData);
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };

    fetchSlides();
  }, []);

  // Get the first slide that matches the 'contact' category
  const slide = slides[0];

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center px-4 lg:px-16 py-12"
      style={{
        backgroundImage: `url(${slide?.bgImage})`,
        backgroundSize: "cover", // Ensure the background covers the entire area
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-3xl p-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          {slide?.content || "Why Choose Us!"}
        </h2>
        {/* <p className="mb-6 text-lg lg:text-xl leading-relaxed">
          {||
            "We’re working to turn our passion for travel into a booming earner abroad. We hope you enjoy our Travel Agency as much as we enjoy offering services to you."}
        </p> */}
        <p className="mb-8 text-lg lg:text-2xl font-semibold">
          BOOK YOUR Consultancy NOW
        </p>

        {/* Phone number section */}
        <div className="flex justify-center items-center space-x-4 py-6">
          <a
            href="tel:01965989192"
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            <PhoneIcon className="h-8 w-8 mr-3 text-white" />
            <span className="text-2xl lg:text-4xl font-semibold">
              {slide?.subcontent}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
