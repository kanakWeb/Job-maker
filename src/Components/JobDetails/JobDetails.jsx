import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { PiAddressBookTabs } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { Id } = useParams();
  const idInt = parseInt(Id);
  const job = jobs.find((job) => job.id == idInt);

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
    <div>
      <div className="grid grid-cols-4 mx-24">
        <div className="card card-compact col-span-3 pt-3 bg-base-100 my-24  mx-3  shadow-xl">
          <figure>
            <img className="mx-0" src={logo} alt="logo" />
          </figure>
          <div className="px-4 py-2">
            <p className="py-4 text-orange-300 font-bold mx-2 text-xl">
              Jobs : {id}
            </p>
            <h2 className="card-title">{job_title}</h2>
            <p className="py-2 font-semibold">{company_name}</p>
            <p className="py-2 font-semibold">{job_description}</p>
            <p className="py-2 font-semibold">{job_responsibility}</p>
            <div className="w-full flex text-sm text-ellipsis italic items-center gap-4">
              <div className="flex items-center gap-2  rounded-md font-semibold ">
                <MdOutlinePermPhoneMsg></MdOutlinePermPhoneMsg>
                <span> {phone}</span>
              </div>

              <div className=" flex items-center gap-2 py-1 rounded-md font-semibold ">
                <TfiEmail></TfiEmail>
                <span> {email}</span>
              </div>
              <div className=" py-1 flex items-center gap-2 rounded-md font-semibold ">
                <PiAddressBookTabs></PiAddressBookTabs>
                <span>{address}</span>
              </div>
            </div>
            <div className=" flex item-center gap-x-5 my-4">
              <HiOutlineLocationMarker className="flex items-center text-sky-600 -mr-4 text-xl"></HiOutlineLocationMarker>
              <p>{location}</p>
              <AiOutlineDollarCircle className="flex items-center text-xl text-sky-600 -mr-4"></AiOutlineDollarCircle>
              <p>{salary}</p>
            </div>
          </div>
          <div className="w-1/2 mx-auto py-5">
            <Link
              className="btn btn-wide btn-info text-yellow-50 text-md"
              to="/"
            >
              Back to Home
            </Link>
          </div>
        </div>
        {/* //............................................................... */}
        <div className="border py-2 text-md p-4 my-24">
         <div className="py-5">
         <h2 className="text-xl font-semibold">Apply job Details</h2>
          <p className="pt-7 font-semibold">{job_title}</p>
          <p className="py-5 font-semibold">Salary : {salary}</p>
         </div>
          <hr />
         <div className="py-5">
          <h2 className="text-xl font-semibold py-6">Contact Information</h2>
         
         <div className="flex items-center gap-2 py-3  rounded-md font-semibold ">
            <MdOutlinePermPhoneMsg></MdOutlinePermPhoneMsg>
            <span> {phone}</span>
          </div>

          <div className=" flex items-center gap-2 py-3 rounded-md font-semibold ">
            <TfiEmail></TfiEmail>
            <span> {email}</span>
          </div>
          <div className=" py-4 flex items-center gap-2 rounded-md font-semibold ">
            <PiAddressBookTabs className="text-3xl"></PiAddressBookTabs>
            <span>{address}</span>
          </div>
         </div>
         <button className="btn btn-wide btn-accent text-md text-white">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
