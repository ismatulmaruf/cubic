import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import About from "./screens/About.jsx";
import Contact from "./screens/Contact.jsx";
import Umrah from "./screens/Umrah.jsx";
import Hajj from "./screens/Hajj.jsx";
import WorkVisa from "./screens/WorkVisa.jsx";
import Tour from "./screens/Tour.jsx";
import StudentVisa from "./screens/StudentVisa.jsx";
import NotFound from "./screens/NotFound.jsx";
import AdminPackage from "./screens/AdminPackage.jsx";
import Started from "./screens/Started.jsx";
// import RegisterScreen from "./screens/RegisterScreen.jsx";
// import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Bloglist from "./screens/Bloglist.jsx";
import CreateBlog from "./screens/CreateBlog.jsx";
import EditBlog from "./screens/EditBlog.jsx";
import AllBlog from "./screens/Allblog.jsx";
import SingleBlog from "./screens/SingleBlog.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/packages/umrah" element={<Umrah />} />
      <Route path="/packages/hajj" element={<Hajj />} />
      <Route path="/packages/tours" element={<Tour />} />
      <Route path="/student-visa" element={<StudentVisa />} />
      <Route path="/get-started" element={<Started />} />
      {/* <Route path="/register" element={<RegisterScreen />} /> */}
      <Route path="/work-visa" element={<WorkVisa />} />
      <Route path="/blog" element={<AllBlog />} />
      <Route path="/blog/:id" element={<SingleBlog />} />
      <Route path="" element={<PrivateRoute />}>
        {/* <Route path="/profile" element={<ProfileScreen />} /> */}
        <Route path="/admin/package" element={<AdminPackage />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/admin/blog" element={<Bloglist />} />
        <Route path="/admin/blog/create" element={<CreateBlog />} />
        <Route path="/admin/blog/edit/:id" element={<EditBlog />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
