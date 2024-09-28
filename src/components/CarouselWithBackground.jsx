import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import modules
import { Link } from "react-router-dom";

const CarouselWithBackground = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      content: "Welcome To Cubic Overseas, A Trusted Travel Agency",
      subcontent:
        "Cubic Overseas is a Professional Travel Agency Platform. Here we will provide you only interesting services, which you will like very much. We’re dedicated to providing you the best of Travel facilities, with a focus on dependability and Visa processing, air ticket, tour packages, itinerary, hotel booking, work permit, student visa etc.",
      bgImage: "https://cubicoverseas.com/wp-content/uploads/2023/10/NY.jpeg",
      link: "about",
    },
  ]);

  // Fetch slides from backend
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/home`
        );
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module here
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
      className=""
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-[100vh]"
          style={{
            backgroundImage: `url(${slide.bgImage})`, // Ensure proper URL syntax
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
          }}
        >
          <Link
            to={slide.link}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="absolute inset-0 bg-black opacity-50" />{" "}
            {/* Optional overlay for better text visibility */}
            <div className="relative z-10 text-center px-4 md:px-12 py-8">
              {" "}
              {/* Relative z-index for stacking context */}
              <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
                {slide.content}
              </h2>
              <p className="text-white text-base md:text-lg hidden md:block">
                {slide.subcontent}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselWithBackground;
