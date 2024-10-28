import React, { useEffect, useState } from "react";
import CarouselWithBackground from "../components/CarouselWithBackground";
import AfterCoursel from "../components/AfterCoursel";
import LatestHome from "../components/LatestHome";
import WhyChocesUs from "../components/WhyChocesUs";
import Loading from "../components/Loading";

const Home = () => {
  const [data, setData] = useState(null); // State to hold the fetched data
  console.log(data);

  useEffect(() => {
    document.title = "Home | Cubic Overseas – Travel and Tour Agent";

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/home`
        );
        const result = await response.json();
        setData(result[0]); // Assuming the API returns an array and we're interested in the first item
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <Loading />; // Display loading state

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
      <CarouselWithBackground slides={data.Slide} />
      <AfterCoursel
        secondSecimg1={data.secondSecimg1}
        secondSecimg2={data.secondSecimg2}
        secondSecPara1={data.secondSecPara1}
        secondSecPara2={data.secondSecPara2}
        thirdSecPara={data.thirdSecPara}
        thirdSecheading={data.thirdSecheading}
        secondSecheading={data.secondSecheading}
      />
      <LatestHome />
      <WhyChocesUs />
    </>
  );
};

export default Home;
