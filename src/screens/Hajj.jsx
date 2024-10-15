import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Hajj = () => {
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch package data from API
  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/package/670e35aeb3732633d4010dd0`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPackageData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackageData();
  }, []);

  // Setting dynamic title
  useEffect(() => {
    document.title = "Hajj Package | Cubic Overseas – Travel and Tour Agent";
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!packageData) {
    return <div>No package data available.</div>;
  }

  return (
    <div className="bg-gray-100 text-gray-800 py-8">
      {/* Main Container with Padding */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section with Full Width and Overlay */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center rounded-lg overflow-hidden w-full"
          style={{
            backgroundImage: `url(${packageData.bannerimageUrl})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text over Banner */}
          <h1 className="relative text-5xl font-bold text-white px-6 py-3 rounded">
            {packageData.title}
          </h1>
        </div>

        {/* Introduction Paragraph */}
        <p className="mt-8 text-lg leading-relaxed">
          {packageData.description}
        </p>

        {/* Highlighted Heading */}
        <h3 className="mt-8 text-2xl font-semibold text-blue-600">
          Hajj packages typically include the following services:
        </h3>

        {/* List of Services */}
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          {packageData.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>

        {/* Background Picture with Text and Overlay */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center my-12 rounded-lg overflow-hidden w-full"
          style={{
            backgroundImage: `url(${packageData.secondimageUrl})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text over Image */}
          <span className="relative text-3xl font-bold text-white px-6 py-3 rounded">
            {packageData.secondtitle}
          </span>
        </div>

        {/* Additional Information Paragraph */}
        <p className="text-lg leading-relaxed">{packageData.middleparagraph}</p>

        {/* Highlighted Background Section */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mt-8 rounded-lg">
          <h4 className="text-xl font-semibold">
            {packageData.servicesdescriptiontitle}
          </h4>
        </div>

        {/* Factors to Consider */}
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          {packageData.servicesdescription.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>

        {/* Final Paragraph */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 my-8 rounded-lg">
          <p className="text-lg leading-relaxed">
            {packageData.finalparagraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hajj;
