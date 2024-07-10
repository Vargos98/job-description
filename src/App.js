import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobForm from './Components/JobForm';
import JobDetails from './Components/JobDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobForm />} />
        <Route path="/job-details" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
