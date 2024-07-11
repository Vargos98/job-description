import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function JobForm() {
  const [job, setJob] = useState({
    title: '',
    skills: '',
    description: '',
    location: '',
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setJob({
      ...job,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/job-details', { state: { job } });
  };
  const generateDescription = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/generate-description', {
        title: job.title,
        skills: job.skills,
      });
      setJob({
        ...job,
        description: response.data.description,
      });
    } catch (error) {
      console.error('Error fetching job description:', error);
    }
    setLoading(false);
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
          <button type="button" onClick={generateDescription} disabled={loading}>
            {loading ? 'Generating...' : 'Generate Description'}
          </button>
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
