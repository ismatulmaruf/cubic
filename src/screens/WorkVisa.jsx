// export default Umrah;
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";

const WorkVisa = () => {
  const [umrahPackages, setUmrahPackages] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    document.title = "Work Visa | Cubic Overseas – Travel and Tour Agent";

    // Fetch Umrah packages from the backend
    const fetchPackages = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/package/670eb5d639c372f8bafd5c41`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUmrahPackages(data);
      } catch (error) {
        console.error("Failed to fetch Umrah packages", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-100 text-gray-800 py-8">
      {/* Main Container with Padding */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section with Full Width and Overlay */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center rounded-lg overflow-hidden w-full"
          style={{
            backgroundImage: `url(${umrahPackages.bannerimageUrl})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text over Banner */}
          <h1 className="relative text-5xl font-bold text-white px-6 py-3 rounded">
            {umrahPackages.title}
          </h1>
        </div>

        {/* Introduction Paragraph */}
        <p className="mt-8 text-lg leading-relaxed">
          {umrahPackages.description}
        </p>

        {/* Highlighted Heading */}
        <h3 className="mt-8 text-2xl font-semibold text-blue-600">
          Some common types of work visas
        </h3>

        {/* List of Services */}
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          {umrahPackages.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>

        {/* Background Picture with Text and Overlay */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center my-12 rounded-lg overflow-hidden w-full"
          style={{
            backgroundImage: `url(${umrahPackages.secondimageUrl})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text over Image */}
          <span className="relative text-3xl font-bold text-white px-6 py-3 rounded">
            {umrahPackages.secondtitle}
          </span>
        </div>

        {/* Additional Information Paragraph */}
        <p className="text-lg leading-relaxed">
          {umrahPackages.middleparagraph}
        </p>

        {/* Highlighted Background Section */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mt-8 rounded-lg">
          <h4 className="text-xl font-semibold">
            {umrahPackages.servicesdescriptiontitle}
          </h4>
        </div>

        {/* Factors to Consider */}
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          {umrahPackages.servicesdescription.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>

        {/* Final Paragraph */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 my-8 rounded-lg">
          <p className="text-lg leading-relaxed">
            {umrahPackages.finalparagraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkVisa;
