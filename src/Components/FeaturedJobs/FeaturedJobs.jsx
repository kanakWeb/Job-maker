import React, { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
   const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data=>setJobs(data));
  }, []);
  //const[id,logo,company_name]=jobs
  //const {id,company_name}=jobs */

  //small case use ..................

  const [dataLength, setDataLength] = useState(4);

  return (
    <div className="min-h-max py-24 mx-auto max-w-6xl  ">
      <h2 className="text-4xl  text-center font-bold pb-3">Featured Jobs</h2>
      <p className="text-center">
        Explore Thousand {jobs.length} of job opportunity with all information
        we need.Its Your Future
      </p>
      <div className="grid mx-2  md:grid-cols-2 md:gap-9 py-24">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length? "hidden":'flex items-center justify-center'}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-wide  btn-info "
        >
          Show all
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
