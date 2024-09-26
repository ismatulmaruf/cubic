// Home.js
import React from "react";
import CarouselWithBackground from "../components/CarouselWithBackground"; // Adjust the import path as necessary
import AfterCoursel from "../components/AfterCoursel"; // Adjust the import path as necessary
import LatestHome from "../components/LatestHome"; // Adjust the import path as necessary
import WhyChocesUs from "../components/WhyChocesUs"; // Adjust the import path as necessary

const Home = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Marquee Section */}
        <p>
          <marquee>
            Welcome to Cubic Overseas. Find our Visa processing services. See
            our latest blog posts.
          </marquee>
        </p>

        {/* Carousel Section */}
      </div>
      <CarouselWithBackground />
      <AfterCoursel />
      <LatestHome />
      <WhyChocesUs />
    </>
  );
};

export default Home;
