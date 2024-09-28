import React from "react";

const AboutPage = () => {
  const leaders = [
    { name: "AL Faysal - Chairman", img: "https://i.imgur.com/d1d90os.jpeg" },
    {
      name: "Md. Mahamud Murshed - Director",
      img: "https://i.imgur.com/MZlA1Np.jpeg",
    },
    {
      name: "Md. Humayun Kobir - Director",
      img: "https://i.imgur.com/QGVoZYh.jpeg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] md:h-[100vh] flex items-center justify-center"
        style={{ backgroundImage: "url(https://i.imgur.com/XcYCC0f.jpeg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            About Cubic Overseas
          </h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 px-4 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Column */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Welcome To Cubic Overseas
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Cubic Overseas is a Professional Travel Agency Platform. Here we
              will provide you only interesting services, which you will like
              very much.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              We’re dedicated to providing you the best of Travel facilities,
              with a focus on dependability and Visa processing, air ticket,
              tour packages, itinerary, hotel booking, work permit, student visa
              etc.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              We’re working to turn our passion for Travel into a booming earner
              in abroad. We hope you enjoy our Travel Agency as much as we enjoy
              offering them to you.
            </p>
          </div>

          {/* Second Column */}
          <div className="space-y-6">
            <img
              src="https://i.imgur.com/17t8o69.jpeg"
              alt="Travel"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Our Leaders Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {leader.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-12 px-4 bg-white md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Message from Cubic Overseas
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
            “We will keep posting more important posts on our Website’s blog
            section for all of you as well. Please give your support and love.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
            Our aim is to give extraordinary service to the visa processing
            customers from Cubic Overseas.”
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
            “We invite you to give your files for processing, book tickets with
            us as a trusted travel agency.”
          </p>
          <p className="font-semibold text-lg">Thanks For Visiting Us</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
