import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JobForm() {
  const [job, setJob] = useState({
    title: '',
    skills: '',
    description: '',
    location: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({
      ...job,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/job-details', { state: { job } });
  };

  return (
    <div>
      <h2>Create a Job Listing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title:</label>
          <input type="text" name="title" value={job.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Skills:</label>
          <input type="text" name="skills" value={job.skills} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={job.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Job Location:</label>
          <input type="text" name="location" value={job.location} onChange={handleChange} required />
        </div>
        <button type="submit">Create Job</button>
      </form>
    </div>
  );
}

export default JobForm;
