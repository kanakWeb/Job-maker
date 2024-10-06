import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobs=useLoaderData()
    console.log(jobs)
    return (
        <div>
            <h2>Thi is AppliedJobs</h2>
        </div>
    );
};

export default AppliedJobs;