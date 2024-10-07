import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { GetStoredJobApplication } from "../../Utiliy/Utility";
import AppJob from "./AppJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJob] = useState([]);
  const [DisplayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJob = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"

      );
      setDisplayJobs(remoteJob);
    } else if (filter === "onsite") {
      const onsiteJob = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJob);
    }
  };

  useEffect(() => {
    const storedJobIds = GetStoredJobApplication();
    if (jobs.length > 0) {
      /* const appliedJob=jobs.filter(job=>storedJobIds.includes(job.id))
            console.log(appliedJob,storedJobIds,jobs) */

      const AppliedJob = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          AppliedJob.push(job);
        }
      }
      setAppliedJob(AppliedJob);
      setDisplayJobs(AppliedJob);
    }
  }, []);
  /*   console.log(appliedJobs); */

  return (
    <div>
      <h2 className="w-80 mx-auto text-center rounded-md font-semibold text-white p-2 text-3xl bg-sky-300">
        This is AppliedJobs- {appliedJobs.length}
      </h2>
      <div className=" flex justify-end mr-32 py-9">
        <details className="dropdown ">
          <summary className="py-1 rounded-full px-3 text-lg text-amber-100 font-medium bg-sky-500 m-1">
            {" "}
            Option
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-24 p-2 shadow">
            <li>
              <a onClick={() => handleJobsFilter("all")}>All</a>
            </li>
            <li>
              <a onClick={() => handleJobsFilter("remote")}>Remote</a>
            </li>
            <li>
              <a onClick={() => handleJobsFilter("onsite")}>Onsite</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="mx-24">
        {DisplayJobs.map((appliedJob) => (
          <AppJob key={appliedJob.id} appliedJob={appliedJob}></AppJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
