import React, { useEffect } from "react";

const StudentVisa = () => {
  // Setting dynamic title
  useEffect(() => {
    document.title = "Student Visa | Cubic Overseas – Travel and Tour Agent";
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 py-8">
      {/* Main Container with Padding */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Section with Full Width and Overlay */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center rounded-lg overflow-hidden w-full"
          style={{
            backgroundImage: "url('https://i.imgur.com/bIYNgt3.jpeg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text over Banner */}
          <h1 className="relative text-5xl font-bold text-white px-6 py-3 rounded">
            Student Visa
          </h1>
        </div>

        {/* Introduction Paragraph */}
        <p className="mt-8 text-lg leading-relaxed">
          A student visa allows foreign nationals to enter and study in another
          country. These visas are typically granted for the duration of the
          student’s studies, plus additional time before and after the study
          period to allow for travel and settling in. Cubic Overseas assists
          students in processing their student visa applications, providing
          guidance every step of the way.
        </p>

        {/* Highlighted Heading */}
        <h3 className="mt-8 text-2xl font-semibold text-blue-600">
          To apply for a student visa, applicants typically need:
        </h3>

        {/* List of Required Documents */}
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>A completed student visa application form</li>
          <li>A valid passport</li>
          <li>
            A letter of acceptance from a recognized educational institution
          </li>
          <li>Proof of financial support for tuition and living expenses</li>
          <li>Proof of English language proficiency (if required)</li>
          <li>
            Additional documents like medical and police clearance certificates
            may be required depending on the country.
          </li>
        </ul>

        {/* Background Picture with Text and Overlay */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center my-12 rounded-lg overflow-hidden w-full"
          style={{
            backgroundImage: "url('https://i.imgur.com/oZIDc5o.jpeg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text over Image */}
          <span className="relative text-3xl font-bold text-white px-6 py-3 rounded">
            Study Abroad
          </span>
        </div>

        {/* Additional Information Paragraph */}
        <p className="text-lg leading-relaxed">
          The requirements for student visas vary by country, but in general,
          applicants must be accepted into a full-time program at a recognized
          institution, meet language proficiency standards, and prove financial
          stability. Starting the process early and ensuring all requirements
          are met is crucial for a successful application.
        </p>

        {/* Highlighted Background Section */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mt-8 rounded-lg">
          <h4 className="text-xl font-semibold">
            Key tips to improve your chances of getting a student visa:
          </h4>
        </div>

        {/* List of Tips */}
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>Have a strong academic record</li>
          <li>Be accepted into a reputable educational institution</li>
          <li>
            Meet English language proficiency requirements (if applicable)
          </li>
          <li>Provide proof of sufficient financial support</li>
          <li>Develop a clear and concise study plan</li>
        </ul>

        {/* Final Paragraph */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 my-8 rounded-lg">
          <p className="text-lg leading-relaxed">
            Studying abroad is an incredible opportunity for students to gain
            international experience, learn about new cultures, and improve
            language skills. Cubic Overseas is here to support you in navigating
            the student visa process, ensuring your application is as strong as
            possible.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Remember to choose a reputable educational institution and consult
            with the embassy or consulate of the country where you plan to study
            to ensure you meet all visa requirements. With careful planning and
            the right support, your dream of studying abroad can become a
            reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentVisa;
