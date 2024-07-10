import React from 'react';
import { useLocation } from 'react-router-dom';

function JobDetails() {
  const location = useLocation();
  const { job } = location.state;

  return (
    <div>
      <h2>Job Details</h2>
      <p><strong>Job Title:</strong> {job.title}</p>
      <p><strong>Skills:</strong> {job.skills}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Job Location:</strong> {job.location}</p>
    </div>
  );
}

export default JobDetails;
