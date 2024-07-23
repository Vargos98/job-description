import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import { Form, Button, Row, Col } from 'react-bootstrap';
import JoditEditor from 'jodit-react';
// function JobForm() {
//   const [job, setJob] = useState({
//     title: '',
//     skills: '',
//     description: '',
//     location: '',
//     employType: '',
//     appDeadline: '',
//     salRange: '',
//     Experience: '',
//     education: '',

//   });

//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);





//   const generateDescription = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('https://End-point', {
//         title: job.title,
//         skills: job.skills,
//       });
//       setJob({
//         ...job,
//         description: response.data.description,
//       });
//     } catch (error) {
//       console.error('Error fetching job description:', error);
//     }
//     setLoading(false);
//   };




//         <div>
//           <label>Description:</label>
//           <textarea name="description" value={job.description} onChange={handleChange} required />
//           <button type="button" onClick={generateDescription} disabled={loading}>
//             {loading ? 'Generating...' : 'Generate Description'}
//           </button>
//         </div>
//         <div>

const JobForm = () => {


  const editor = useRef(null)
  const navigate = useNavigate();
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <div className='container mx-auto p-4 '>


      <h1 className='blue-400 fs-1 mb-4 font'>Post A New Job </h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formJobTitle">

              <Form.Control
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
                className='$blue-200' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="JobType">

              <Form.Control
                as="select"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}>
                <option value="Freelancer">Freelancer</option>
                <option value="Remote">Remote</option>
                <option value="On-Site">On-Site</option>
                <option value="Hybrid">Hybrid</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formExperience">

              <Form.Control
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Enter Experience"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formApplicationDeadline">

              <Form.Control
                type="date"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <div>
        <JoditEditor 
          className='mb-4 mt-4'
          ref={editor}
          value={formData.jobDescription}
          onChange={handleChange}
        />
          {/* <Form.Group controlId="formJobDescription" className="mb-3 ">

            <Form.Control
              as="textarea"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              placeholder="Enter Job Description"
              rows={3}
            />
          </Form.Group> */}
        </div>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formMinSalary">

              <Form.Control
                type="number"
                name="minSalary"
                value={formData.minSalary}
                onChange={handleChange}
                placeholder="Enter Min Salary"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formMaxSalary">

              <Form.Control
                type="number"
                name="maxSalary"
                value={formData.maxSalary}
                onChange={handleChange}
                placeholder="Enter Max Salary"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formJobTags" className="mb-3">

          <Form.Control
            type="text"
            name="jobTags"
            value={formData.jobTags}
            onChange={handleChange}
            placeholder="e.g. PHP, Developer, CSS"
          />
        </Form.Group>

        <Form.Group controlId="formLocation" className="mb-3">

          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter Location"
          />
        </Form.Group>

        <Form.Group controlId="formQualifications" className="mb-3">

          <Form.Control
            type="text"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            placeholder="Enter Qualifications"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save & Preview
        </Button>
      </Form>
    </div>
  );
};

export default JobForm;