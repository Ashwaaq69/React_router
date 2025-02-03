import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const jobDetails = useLoaderData()
  return (
    <div className='jobdetails'>

    
    <p><b>job title:</b>{jobDetails.title}</p>
    <p><b>job location:</b>{jobDetails.location}</p>
    <p><b>job salary:</b>{jobDetails.salary}</p>
    <p><b>job description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti doloremque temporibus enim recusandae neque eius dolorum earum quo repellat, odio tempora maxime, nulla cum esse pariatur perferendis cumque at. </p>
    <button>Apply now </button>


    </div>
  )
}

export default JobDetails

// export const JobDetailsLoader = async (params) => {
//     const {id} = params;
//     const res = await fetch("http://localhost:5000/jobs/" + id);
//     return res.json();
// }

export const JobDetailsLoader = async ({ params }) => {
    const id = params.id; // Keep it as a string
    const res = await fetch(`http://localhost:5000/jobs/${id}`);

    if (!res.ok) {
        throw  Error('could not found jobdetails.');
    }

    return res.json();
};
