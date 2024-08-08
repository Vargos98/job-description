import React, { useState } from "react";
import "./JobForm.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import JobFormTwo from './JobFormTwo';
import 'react-quill/dist/quill.snow.css';
const JobForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobType: '',
    experience: '',
    applicationDeadline: '',
    jobDescription: '',
    minSalary: '',
    maxSalary: '',
    jobTags: '',
    location: '',
    qualifications: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/job-details', { state: { formData } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleQuillChange = (value) => {
    setFormData({
      ...formData,
      jobDescription: value
    });
  };

  const generateDescription = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://End-point', {
        title: formData.jobTitle,
        skills: formData.jobTags,
      });
      setFormData({
        ...formData,
        jobDescription: response.data.description,
      });
    } catch (error) {
      console.error('Error fetching job description:', error);
    }
    setLoading(false);
  };

  return (
    <>
      <JobFormTwo />
    <div className="job-form-container">
      <h1>Post A New Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title *</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Job Title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobType">Job Type *</label>
            <input
              type="text"
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              placeholder="Freelancer"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="experience">Experience *</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Enter Experience *"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="applicationDeadline">Application Deadline</label>
            <input
              type="text"
              id="applicationDeadline"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleChange}
              placeholder="dd-mm-yyyy"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <ReactQuill
            theme='snow'
            value={formData.jobDescription}
            title='Enter Job Description'
            onChange={handleQuillChange}
            style={{ height: '200px', marginBottom: '80px' }}
          />
          
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="minSalary">Minimum Salary *</label>
            <input
              type="text"
              id="minSalary"
              name="minSalary"
              value={formData.minSalary}
              onChange={handleChange}
              placeholder="Enter Min Salary *"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxSalary">Max Salary *</label>
            <input
              type="text"
              id="maxSalary"
              name="maxSalary"
              value={formData.maxSalary}
              onChange={handleChange}
              placeholder="Enter Max Salary *"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="skills">Skills *</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g. PHP, Developer, CSS *"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Location *"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="qualifications">Qualifications</label>
            <input
              type="text"
              id="qualifications"
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              placeholder="Enter Qualifications"
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Save & Preview
        </button>
      </form>
    </div>
    </>
  );
};

export default JobForm;
