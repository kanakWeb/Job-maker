import React from "react";

const AppJob = ({ appliedJob }) => {
  const {
    id,
    logo,
    company_name,
    job_title,
    location,
    remote_or_onsite,
 

    contact_information,
  } = appliedJob;

  const { phone, email, address } = contact_information;
  return (
    <div className="card card-side bg-base-100 m-9 p-5 shadow-xl">
      <figure>
        <img src={logo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{company_name}</h2>
        <p>{job_title}</p>
        <p>{location}</p>
        <p>{remote_or_onsite}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default AppJob;
