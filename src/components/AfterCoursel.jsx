import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const AfterCoursel = ({
  secondSecimg1,
  secondSecimg2,
  secondSecPara1,
  secondSecPara2,
  thirdSecPara,
  thirdSecheading,
  secondSecheading,
}) => {
  return (
    <div className="container mx-auto p-6 lg:p-12 xl:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center">
        {/* First Column */}
        <div className="flex flex-col items-start lg:space-y-6 xl:space-y-8">
          <img
            src={secondSecimg1}
            alt="Visa processing"
            className="mb-4 w-full"
          />
          <p className="mb-4">{secondSecPara1}</p>
          <Link
            to="visa-processing"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center"
          >
            Know More <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-start lg:space-y-6 xl:space-y-8">
          <h2 className="text-4xl font-bold">{secondSecheading}​</h2>
          <p className="mb-4">{secondSecPara2}</p>
          <img src={secondSecimg2} alt="Sample Image" className="w-full" />
        </div>
      </div>

      <div className="border-b-2 border-blue-500 w-1/2 my-8 mx-auto"></div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center">
        {/* First Column */}
        <div className="flex flex-col items-end">
          <h2 className="text-3xl font-bold mb-4">{thirdSecheading}</h2>
          <p className="mb-4 text-end">{thirdSecPara}</p>
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
