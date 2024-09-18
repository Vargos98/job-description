import React, { useState } from 'react';
import JobCard from './JobCard';

const JobFilter = () => {
  // Single state object to store filter values
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    jobRole: '',
    monthlySalary: '',
  });

  // Update state for specific filter field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value, // Dynamically update the field based on input name
    });
  };

  // Handler for applying filters
  const handleApply = () => {
    console.log('Selected Filters:', filters);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-white shadow-md gap-4">
      {/* Location Input */}
      <div className="w-1/5">
        <label className="text-sm font-semibold" htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location" // Ensure the name matches the state field
          placeholder="Search location"
          className="mt-1 w-full p-2 border border-gray-300 rounded"
          value={filters.location}
          onChange={handleChange}
        />
      </div>

      {/* Job Type Dropdown */}
      <div className="w-1/5">
        <label className="text-sm font-semibold" htmlFor="jobType">Job type</label>
        <select
          id="jobType"
          name="jobType" // Ensure the name matches the state field
          className="mt-1 w-full p-2 border border-gray-300 rounded"
          value={filters.jobType}
          onChange={handleChange}
        >
          <option value="">Select job type</option>
          <option value="fullTime">Full Time</option>
          <option value="partTime">Part Time</option>
          <option value="contract">Contract</option>
        </select>
      </div>

      {/* Job Role Dropdown */}
      <div className="w-1/5">
        <label className="text-sm font-semibold" htmlFor="jobRole">Job role</label>
        <select
          id="jobRole"
          name="jobRole" // Ensure the name matches the state field
          className="mt-1 w-full p-2 border border-gray-300 rounded"
          value={filters.jobRole}
          onChange={handleChange}
        >
          <option value="">Select job role</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </select>
      </div>

      {/* Monthly Salary Dropdown */}
      <div className="w-1/5">
        <label className="text-sm font-semibold" htmlFor="monthlySalary">Monthly Salary</label>
        <select
          id="monthlySalary"
          name="monthlySalary" // Ensure the name matches the state field
          className="mt-1 w-full p-2 border border-gray-300 rounded"
          value={filters.monthlySalary}
          onChange={handleChange}
        >
          <option value="">Select monthly salary</option>
          <option value="1000">Less than $1000</option>
          <option value="2000">$1000 - $2000</option>
          <option value="3000">More than $2000</option>
        </select>
      </div>

      {/* More Filter */}
      <div className="w-1/5 flex items-center">
        <button className="ml-10 text-sm text-gray-900 flex items-center font-bold">
          More Filter
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1 ml-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 6a1 1 0 011-1h12a1 1 0 011 1v1.586a1 1 0 01-.293.707L13 10.414V14a1 1 0 01-.293.707l-3 3A1 1 0 018 17V10.414L3.293 8.293A1 1 0 013 7.586V6z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Apply Button */}
      <div className="w-auto">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
    <JobCard/>
    </>
  );
};

export default JobFilter;
