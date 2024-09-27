import React from "react";
import { PhoneIcon } from "@heroicons/react/solid"; // Import PhoneIcon

const WhyChooseUs = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('https://cubicoverseas.com/wp-content/uploads/2023/10/Air-ticket.jpg')`,
        backgroundSize: "cover", // Ensure the background covers the entire area
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="relative z-10 text-white text-center p-6">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us!</h2>
        <p className="mb-4">
          We’re working to turn our passion for Travel into a booming earner in
          abroad. We hope you enjoy our Travel Agency as much as we enjoy
          offering them to you.
        </p>
        <p className="mb-6 text-lg">BOOK YOUR Consultancy NOW</p>

        <div className="flex justify-center items-center py-6">
          {/* Phone number section */}
          <a
            href={`tel:01965989192`}
            className="flex items-center text-white text-3xl"
          >
            <PhoneIcon className="h-8 w-8 mr-3 text-white" /> {/* Phone icon */}
            <span className="text-4xl font-semibold  pb-1">01965989192</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
