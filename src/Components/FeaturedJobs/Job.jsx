import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    job_title,
    location,
    remote_or_onsite,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  const { phone, email, address } = contact_information;

  return (
    <div className="card py-3 card-compact pt-3 bg-base-100  shadow-xl">
      <figure>
        <img className="mx-0" src={logo} alt="logo" />
      </figure>
      <div className="px-4 py-2">
        <h2 className="card-title">{job_title}</h2>
        <p className="py-3">{company_name}</p>
        <div>
          <button className="px-5 border-2 border-black py-1 rounded-md font-semibold hover:bg-slate-700 hover:text-white">
            {remote_or_onsite}
          </button>
     
          <button className="px-5 mx-2 border-2 border-black py-1 rounded-md font-semibold hover:bg-slate-700 hover:text-white">{job_type}</button>
        </div>
        <div className=" flex item-center gap-x-5 my-4">
        <HiOutlineLocationMarker className="flex items-center text-sky-600 -mr-4 text-xl"></HiOutlineLocationMarker>
            <p>{location}</p>
            <AiOutlineDollarCircle className="flex items-center text-xl text-sky-600 -mr-4"></AiOutlineDollarCircle>
            <p>{salary}</p>
        </div>
        
        <Link  to={`/job/${id}`}  className=" px-4 rounded-md my-1  bg-sky-500 py-2 hover:bg-sky-600  text-white font-semibold ">View Details</Link>
       
      </div>
    </div>
  );
};

export default Job;
