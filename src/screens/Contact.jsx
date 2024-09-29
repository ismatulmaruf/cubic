import React, { useEffect } from "react";
import WhyChocesUs from "../components/WhyChocesUs"; // Adjust the import path as necessary

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Cubic Overseas – Travel and Tour Agent";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/iuURYnL.jpeg')", // Hero background image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-lg mt-2">
            We’re here to assist you with your tours and travels!
          </p>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-12 bg-gray-50 lg:py-16">
        <div className="container mx-auto px-4 max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          {" "}
          {/* Extra padding on large screens */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Important Information
            </h2>
            <p className="text-gray-600">
              It is highly recommended that you talk to us about your tours and
              travels. We have experienced tour experts who will guide you with
              all the valid information you need to know. Accommodations, food,
              visas, pricing of packages—all information should be discussed
              beforehand to avoid any misunderstandings.
            </p>
            <p className="text-gray-600 mt-4">
              You can reach us through email, call us, or visit us in person.
              Let’s talk over a cup of tea and book your package right away!
            </p>
            <p className="text-gray-600 mt-4 font-bold">
              At Cubic Overseas Travel & Tour
            </p>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Your Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <WhyChocesUs />
      {/* Full-Width Map Section */}
      <section className="container mx-auto px-4 lg:px-8 mt-8">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Our Location
          </h2>
          <p className="text-gray-600 mt-2">
            Find us on the map and visit our office for more information!
          </p>
        </div>

        {/* Map Section */}
        <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435.9040644247883!2d90.41162707979629!3d23.731669337545753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f61bd9218f%3A0xc554749cbcfafe44!2sMajumder%20House%2C%2039%20Purana%20Paltan%2C%20Dhaka%201000!5e1!3m2!1sen!2sbd!4v1727597242461!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="map"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
