import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice"; // Make sure this path is correct
import { logout } from "../slices/authSlice"; // Adjust this import if necessary

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="px-10">
      <div className="flex justify-center">
        <div className="bg-light rounded-lg  flex  items-center">
          <div className="flex">
            {userInfo ? (
              <>
                {/* <Link to="/profile">
                  <button className="bg-green-500 text-white px-6 py-2 rounded-md mr-3 hover:bg-green-600">
                    Profile
                  </button>
                </Link> */}
                <Link to="/admin">
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-md mr-3 hover:bg-orange-600">
                    Home
                  </button>
                </Link>
                <Link to="/admin/package">
                  <button className="bg-green-500 text-white px-6 py-2 rounded-md mr-3 hover:bg-green-600">
                    Package
                  </button>
                </Link>
                <Link to="/admin/blog">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-md mr-3 hover:bg-blue-600">
                    Blog
                  </button>
                </Link>
                <button
                  onClick={logoutHandler}
                  className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-md mr-3 hover:bg-blue-600">
                    Sign In
                  </button>
                </Link>
                <Link to="/register">
                  <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
