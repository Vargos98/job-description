import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobFormTwo from './Components/JobFormTwo';
import JobDetails from './Components/JobDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobFormTwo />} />
        <Route path="/job-details" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
