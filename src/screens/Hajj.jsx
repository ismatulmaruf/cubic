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
            Hajj Package
          </h1>
        </div>

        {/* Introduction Paragraph */}
        <p className="mt-8 text-lg leading-relaxed">
          Hajj packages are travel packages that are specifically designed for
          Muslims who wish to perform the Hajj pilgrimage. Hajj is the fifth
          pillar of Islam and is a mandatory once-in-a-lifetime pilgrimage to
          Mecca and Medina that must be performed by all able-bodied Muslims who
          can afford it.
        </p>

        {/* Highlighted Heading */}
        <h3 className="mt-8 text-2xl font-semibold text-blue-600">
          Hajj packages typically include the following services:
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
          <li>Assistance from a knowledgeable and experienced Hajj guide</li>
          <li>Meals</li>
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
          Hajj packages can vary in price depending on the length of the trip,
          the quality of the accommodation, and the level of service provided.
          However, most Hajj packages are relatively affordable, making it
          possible for Muslims from all walks of life to perform the Hajj
          pilgrimage.
        </p>

        {/* Highlighted Background Section */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mt-8 rounded-lg">
          <h4 className="text-xl font-semibold">
            When choosing a Hajj package, it is important to consider the
            following factors:
          </h4>
        </div>

        {/* Factors to Consider */}
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>
            The duration of the trip: Hajj packages typically range in length
            from 20 to 30 days. Choose a package that fits your budget and
            schedule.
          </li>
          <li>
            The quality of the accommodation: Choose a package that offers
            clean, comfortable, and convenient accommodation.
          </li>
          <li>
            The level of service provided: Some packages include meals, airport
            transfers, and assistance with Hajj rituals.
          </li>
        </ul>

        {/* Final Paragraph */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 my-8 rounded-lg">
          <p className="text-lg leading-relaxed">
            Performing the Hajj is a truly life-changing experience for Muslims.
            It is an opportunity to cleanse your soul, forgive others, and seek
            Allah's forgiveness. If you are considering performing the Hajj
            pilgrimage, Cubic Overseas encourages you to research Hajj packages
            and choose one that is right for you.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Cubic Overseas would also like to add that it is important to choose
            a Hajj package from a reputable tour operator. There are many
            fraudulent tour operators that prey on pilgrims and offer packages
            that do not deliver on their promises. Be sure to do your research
            and read reviews before choosing a Hajj package.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hajj;
