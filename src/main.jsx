import { createRoot } from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Blogs from "./Components/Blogs/Blogs";
import Jobs from "./Components/Jobs/Jobs";
import Statistics from "./Components/Statistics/Statistics";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import JobDetails from "./Components/JobDetails/JobDetails";
import SignIn from "./Components/Authentication/SignIn";
import HeroRegister from "./Components/Authentication/HeroRegiester";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
     
      {
        path: "/job/:Id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json'),
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader:()=>fetch('../jobs.json'),
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/HeroRegister",
        element: <HeroRegister></HeroRegister>,
      },
      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
