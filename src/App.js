import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobFormTwo from './Components/JobFormTwo';
import JobDetails from './Components/JobDetails';
import ProfileSummary from './Components/ProfileSummary';
import AwardCertification from './Components/AwardCertification';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AwardCertification />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/ProfileSummary" element={<ProfileSummary />} />
        <Route path="/JobFormTwo" element={<JobFormTwo />} />
    
      </Routes>
    </Router>
  );
}

export default App;
