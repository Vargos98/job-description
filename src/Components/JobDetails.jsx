import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function JobDetails() {
  const navigate = useNavigate();
  const located = useLocation();
  const { formData } = located.state;
  const {
    jobTitle,
    jobType,
    experience,
    applicationDeadline,
    jobDescription,
    minSalary,
    maxSalary,
    jobTags,
    location,
    qualifications,} = formData;
    function handleClick(){
      navigate(-1);
    }
    return (
   
    <div>
      <h2>Job Details</h2>
      <p><strong>Job Title:</strong> {jobTitle}</p>
      <p><strong>Job Type:</strong> {jobType}</p>
      <p><strong>Skills:</strong> {jobTags}</p>
      <p><strong>Description:</strong> {jobDescription}</p>
      <p><strong>Job Location:</strong> {location}</p>
      <p><strong>Job Type:</strong>{jobType}</p>
      <p><strong>Experience Level:</strong> {experience}</p>
      <p><strong>Min Salary :</strong> {minSalary}</p>
      <p><strong>Max Salary :</strong> {maxSalary}</p>
      <p><strong>Application Deadline:</strong> {applicationDeadline}</p>
      <p><strong>Qualification:</strong> {qualifications}</p>

      <button onClick={handleClick}
      >Edit</button>
    </div>
  );
}

export default JobDetails;
