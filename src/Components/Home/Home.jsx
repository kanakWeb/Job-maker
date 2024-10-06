import React from "react";
import HomeData from "./HomeData";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobs=useLoaderData([])
  return (
    <>
    <HomeData></HomeData>
    <CategoryList></CategoryList>
    <FeaturedJobs jobs={jobs}></FeaturedJobs>
    
    </>
  );
};

export default Home;
