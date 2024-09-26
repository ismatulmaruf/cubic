import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

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
          {" "}
          {/* Added more vertical padding */}
          <a
            href={`tel:01965989192`}
            className="text-white text-3xl flex items-center"
          >
            <h3 className="text-2xl font-semibold mr-3">01965989192</h3>
            <ArrowRightIcon className="h-6 w-6 ml-2" />{" "}
            {/* Using ArrowRightIcon */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
