import React, { useEffect } from "react";

const TourPackages = () => {
  // Setting dynamic title
  useEffect(() => {
    document.title = "Tour Packages | Cubic Overseas – Travel and Tour Agent";
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 py-8">
      {/* Main Container with Padding */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section with Full Width and Overlay */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center rounded-lg overflow-hidden w-full"
          style={{
            backgroundImage: "url('https://i.imgur.com/KPXCGIv.jpeg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text over Banner */}
          <h1 className="relative text-5xl font-bold text-white px-6 py-3 rounded">
            Tour Packages
          </h1>
        </div>

        {/* Introduction Paragraph */}
        <p className="mt-8 text-lg leading-relaxed">
          Tour packages offer a convenient and affordable way to travel by
          bundling transportation, accommodation, and activities all in one
          price. These packages can save you time, reduce the hassle of
          planning, and often come at a better price than booking everything
          separately. Whether you're looking for a beach vacation, a city break,
          or an adventure tour, there are tour packages to suit every interest
          and budget.
        </p>

        {/* Highlighted Heading */}
        <h3 className="mt-8 text-2xl font-semibold text-blue-600">
          Popular types of tour packages include:
        </h3>

        {/* List of Tour Package Types */}
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>
            <strong>Beach vacations:</strong> These packages often include
            flights, accommodation, and transfers to and from the beach, as well
            as activities such as water sports, sunbathing, and sightseeing.
          </li>
          <li>
            <strong>City breaks:</strong> These packages include flights,
            accommodation, and transfers to city centers, with activities like
            sightseeing, museum visits, and dining.
          </li>
          <li>
            <strong>Adventure tours:</strong> Perfect for thrill-seekers, these
            packages typically include flights, accommodation, and transport to
            adventure destinations. Activities may include hiking, camping,
            rafting, or diving.
          </li>
          <li>
            <strong>Cultural tours:</strong> These packages focus on exploring
            historical and cultural landmarks. They often include visits to
            temples, mosques, or historical sites, with transportation and
            accommodation bundled in.
          </li>
        </ul>

        {/* Background Picture with Text and Overlay */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center my-12 rounded-lg overflow-hidden w-full"
          style={{
            backgroundImage: "url('https://i.imgur.com/aQrW0nH.jpeg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text over Image */}
          <span className="relative text-3xl font-bold text-white px-6 py-3 rounded">
            Explore the World
          </span>
        </div>

        {/* Additional Information Paragraph */}
        <p className="text-lg leading-relaxed">
          When choosing a tour package, it's important to consider several
          factors. Tour packages can range from budget-friendly to luxury, and
          the right choice will depend on your interests, travel length, and
          time of year. Taking the time to review different packages and options
          can help ensure that you get the most out of your vacation.
        </p>

        {/* Highlighted Background Section */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mt-8 rounded-lg">
          <h4 className="text-xl font-semibold">
            Key factors to consider when selecting a tour package:
          </h4>
        </div>

        {/* Factors to Consider */}
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>
            <strong>Budget:</strong> Tour packages vary widely in cost. Ensure
            the package fits your budget without sacrificing key experiences or
            comfort.
          </li>
          <li>
            <strong>Interests:</strong> Choose a package with activities you
            enjoy. If unsure, consult with the tour operator for recommendations
            based on your preferences.
          </li>
          <li>
            <strong>Trip length:</strong> Packages range from short weekend
            getaways to multi-week vacations. Select one that suits your
            available time.
          </li>
          <li>
            <strong>Time of year:</strong> Some destinations are seasonal. Make
            sure the package you choose fits your desired travel dates.
          </li>
        </ul>

        {/* Final Paragraph */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 my-8 rounded-lg">
          <p className="text-lg leading-relaxed">
            Booking a tour package can be an excellent way to explore the world
            conveniently and affordably. From beach getaways to cultural
            expeditions, there's a package for every type of traveler. Cubic
            Overseas recommends thoroughly researching your options and booking
            through a trusted operator to ensure a memorable and hassle-free
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
