import React, { useEffect } from "react";

const Hajj = () => {
  // Setting dynamic title
  useEffect(() => {
    document.title = "Hajj Package | Cubic Overseas – Travel and Tour Agent";
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 py-8">
      {/* Main Container with Padding */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section with Full Width and Overlay */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center rounded-lg overflow-hidden w-full"
          style={{
            backgroundImage: "url('https://i.imgur.com/6V2ZNST.jpeg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text over Banner */}
          <h1 className="relative text-5xl font-bold text-white px-6 py-3 rounded">
            Umrah Package
          </h1>
        </div>

        {/* Introduction Paragraph */}
        <p className="mt-8 text-lg leading-relaxed">
          Umrah packages are travel packages that are specifically designed for
          Muslims who wish to perform the Umrah pilgrimage. Umrah is a minor
          pilgrimage to Mecca and Medina that can be performed at any time of
          the year.
        </p>

        {/* Highlighted Heading */}
        <h3 className="mt-8 text-2xl font-semibold text-blue-600">
          Umrah packages typically include the following services:
        </h3>

        {/* List of Services */}
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>Round-trip airfare from your home city to Mecca and Medina</li>
          <li>Visa processing</li>
          <li>Accommodation in Mecca and Medina</li>
          <li>Transportation between Mecca and Medina</li>
          <li>Ground transportation in Mecca and Medina</li>
          <li>
            Ziyarah (religious visits) to important Islamic sites in Mecca and
            Medina
          </li>
          <li>Assistance from a knowledgeable and experienced Umrah guide</li>
        </ul>

        {/* Background Picture with Text and Overlay */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center my-12 rounded-lg overflow-hidden w-full"
          style={{
            backgroundImage: "url('https://i.imgur.com/acKwyJt.jpeg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text over Image */}
          <span className="relative text-3xl font-bold text-white px-6 py-3 rounded">
            Saudi Arabia
          </span>
        </div>

        {/* Additional Information Paragraph */}
        <p className="text-lg leading-relaxed">
          Umrah packages can vary in price depending on the length of the trip,
          the quality of the accommodation, and the level of service provided.
          However, most Umrah packages are relatively affordable, making it
          possible for Muslims from all walks of life to perform the Umrah
          pilgrimage.
        </p>

        {/* Highlighted Background Section */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mt-8 rounded-lg">
          <h4 className="text-xl font-semibold">
            When choosing an Umrah package, it is important to consider the
            following factors:
          </h4>
        </div>

        {/* Factors to Consider */}
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>
            The duration of the trip: Umrah packages can range in length from 7
            to 14 days.
          </li>
          <li>
            The quality of the accommodation: Choose a package with clean,
            comfortable, and convenient accommodation.
          </li>
          <li>
            The level of service provided: Some packages include meals, airport
            transfers, and assistance with Umrah rituals.
          </li>
        </ul>

        {/* Final Paragraph */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 my-8 rounded-lg">
          <p className="text-lg leading-relaxed">
            Performing the Umrah is a truly rewarding experience for Muslims. It
            is an opportunity to cleanse your soul and connect with Allah on a
            deeper level. If you are considering performing the Umrah
            pilgrimage, Cubic Overseas encourages you to research Umrah packages
            and choose one that is right for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hajj;
