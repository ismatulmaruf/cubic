import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const AfterCoursel = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12 xl:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center">
        {/* First Column */}
        <div className="flex flex-col items-start lg:space-y-6 xl:space-y-8">
          <img
            src="https://i0.wp.com/cubicoverseas.com/wp-content/uploads/2023/10/Saudi-Arabia.jpg?resize=100%2C70&ssl=1"
            alt="Sample Image"
            className="mb-4 w-full"
          />
          <p className="mb-4">
            The first step is to research the visa requirements of the country
            you are visiting. This information can usually be found on the
            country’s embassy or consulate website. Once you know the
            requirements, you can start the application process. You can seek
            help in Cubic Overseas.
          </p>
          <Link
            to="visa-processing"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center"
          >
            Know More <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-start lg:space-y-6 xl:space-y-8">
          <h2 className="text-4xl font-bold">Visa Processing Service​</h2>
          <p className="mb-4 ">
            Visa processing is the process of applying for and obtaining a visa,
            which is permission to enter a foreign country. The visa process can
            vary depending on the country you are visiting and the type of visa
            you are applying for, but there are some general steps that are
            common to most visa applications. Cubic Overseas will do visa
            processing tasks for you.
          </p>
          <img
            src="https://cubicoverseas.com/wp-content/uploads/2023/10/Iran-1024x683.jpeg"
            alt="Sample Image"
            className="w-full"
          />
        </div>
      </div>

      <div className="border-b-2 border-blue-500 w-1/2 my-8 mx-auto"></div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center">
        {/* First Column */}
        <div className="flex flex-col items-end">
          <h2 className="text-3xl font-bold mb-4">Tour Packages</h2>
          <p className="mb-4 text-end">
            Tour packages of Cubic Overseas are a convenient and affordable way
            to travel. They typically include round-trip transportation,
            accommodation, and activities, all for one price. This can save you
            a lot of time and hassle planning your trip, and it can also be more
            cost-effective than booking everything separately.
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow"></div>{" "}
          {/* This makes the button stick to the bottom */}
          <Link
            to="/tour-packages"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all self-start"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AfterCoursel;
