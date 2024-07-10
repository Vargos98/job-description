import React from 'react';
import { useLocation } from 'react-router-dom';

function JobDetails() {
  const located = useLocation();
  const { job } = located.state;
  const {title, description, skills, location } = job;
  return (
    <div>
      <h2>Job Details</h2>
      <p><strong>Job Title:</strong> {title}</p>
      <p><strong>Skills:</strong> {skills}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Job Location:</strong> {location}</p>
    </div>
  );
}

export default JobDetails;
