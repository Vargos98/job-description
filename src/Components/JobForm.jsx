import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
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
    <div className='container mx-auto p-4' style={{ width: '70%' }}>
      <h1 className='blue-400 fs-1 mb-4 font' style={{fontFamily:'serif', fontWeight:'700', color:'#3b82f6'}}>Post A New Job</h1>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Col>
            <Form.Group controlId='formJobTitle'>
              <Form.Control
                type='text'
                name='jobTitle'
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder='Job Title'
                style={{ backgroundColor: '#eff6ff' }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='JobType'>
              <Form.Control
                as='select'
                name='jobType'
                style={{ backgroundColor: '#eff6ff' }}
                value={formData.jobType}
                onChange={handleChange}
              >
                <option value='Freelancer'>Freelancer</option>
                <option value='Remote'>Remote</option>
                <option value='On-Site'>On-Site</option>
                <option value='Hybrid'>Hybrid</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className='mb-3'>
          <Col>
            <Form.Group controlId='formExperience'>
              <Form.Control
                type='text'
                name='experience'
                style={{ backgroundColor: '#eff6ff' }}
                value={formData.experience}
                onChange={handleChange}
                placeholder='Enter Experience'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='formApplicationDeadline'>
              <Form.Control
                type='date'
                name='applicationDeadline'
                style={{ backgroundColor: '#eff6ff' }}
                value={formData.applicationDeadline}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <div style={{ position: 'relative' }}>
          <button
            type='button'
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              border: 'none',
              background: 'transparent',
              color: '#3b82f6',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
            onClick={generateDescription}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Write with AI'}
          </button>
          <ReactQuill
            theme='snow'
            value={formData.jobDescription}
            onChange={handleQuillChange}
            style={{ height: '200px', marginBottom: '80px' }}
          />
        </div>

        <Row className='mb-3'>
          <Col>
            <Form.Group controlId='formMinSalary'>
              <Form.Control
                type='number'
                name='minSalary'
                style={{ backgroundColor: '#eff6ff' }}
                value={formData.minSalary}
                onChange={handleChange}
                placeholder='Enter Min Salary'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='formMaxSalary'>
              <Form.Control
                type='number'
                name='maxSalary'
                style={{ backgroundColor: '#eff6ff' }}
                value={formData.maxSalary}
                onChange={handleChange}
                placeholder='Enter Max Salary'
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId='formJobTags' className='mb-3' >
          <Form.Control
            type='text'
            name='jobTags'
            style={{ backgroundColor: '#eff6ff',height:'150px'  }}
            value={formData.jobTags}
            onChange={handleChange}
            placeholder='e.g. PHP, Developer, CSS'
          />
        </Form.Group>
        <Row className='mb-3'>
        <Col>
        <Form.Group controlId='formLocation' className='mb-3'>
          <Form.Control
            type='text'
            name='location'
            style={{ backgroundColor: '#eff6ff' }}
            value={formData.location}
            onChange={handleChange}
            placeholder='Enter Location'
          />
        </Form.Group>
        </Col>

        <Col>
        <Form.Group controlId='formQualifications' className='mb-3'>
          <Form.Control
            type='text'
            name='qualifications'
            style={{ backgroundColor: '#eff6ff' }}
            value={formData.qualifications}
            onChange={handleChange}
            placeholder='Enter Qualifications'
          />
        </Form.Group>
        </Col>
        </Row>
        <Button variant='primary' type='submit' style={{backgroundColor:'#3b82f6'}}>
          Save & Preview
        </Button>
      </Form>
    </div>
  );
};

export default JobForm;
