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
        <Row className='mb-3 '>
          <Col>
          <label className='mb-1 '>Job Title *</label>
            <Form.Group controlId='formJobTitle'>
              <Form.Control
                type='text'
                name='jobTitle'
                value={formData.jobTitle}
                onChange={handleChange}
                title='Job Title'
                placeholder='Job Title '
                style={{ backgroundColor: '#eff6ff' }}
              />
            </Form.Group>
          </Col>
          <Col>
          <label className='mb-1 '>Job Type *</label>
            <Form.Group controlId='JobType'>
              <Form.Control
                as='select'
                name='jobType'
                title='Enter Job Type'
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
          <label className='mb-1 '>Experience *</label>
            <Form.Group controlId='formExperience'>
              <Form.Control
                type='text'
                name='experience'
                title='Enter level of experience'
                style={{ backgroundColor: '#eff6ff' }}
                value={formData.experience}
                onChange={handleChange}
                placeholder='Enter Experience *'
              />
            </Form.Group>
          </Col>
          <Col>
          <label className='mb-1 '>Application Deadline </label>
            <Form.Group controlId='formApplicationDeadline'>
              <Form.Control
                type='date'
                name='applicationDeadline'
                title='Enter Application Deadline'
                style={{ backgroundColor: '#eff6ff' }}
                value={formData.applicationDeadline}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <label className='mb-1'>Job Description</label>
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
            title='Enter Job Description'
            onChange={handleQuillChange}
            style={{ height: '200px', marginBottom: '80px' }}
          />
        </div>

        <Row className='mb-3'>
          <Col>
          <label className='mb-1'>Minimum Salary *</label>
            <Form.Group controlId='formMinSalary'>
              <Form.Control
                type='number'
                name='minSalary'
                title='Enter minSalary'
                style={{ backgroundColor: '#eff6ff' }}
                value={formData.minSalary}
                onChange={handleChange}
                placeholder='Enter Min Salary *'
              />
            </Form.Group>
          </Col>
          <Col>
          <label className='mb-1'>Max Salary *</label>
            <Form.Group controlId='formMaxSalary'>
              <Form.Control
                type='number'
                name='maxSalary'
                title='Enter maxSalary'
                style={{ backgroundColor: '#eff6ff' }}
                value={formData.maxSalary}
                onChange={handleChange}
                placeholder='Enter Max Salary *'
              />
            </Form.Group>
          </Col>
        </Row>
          <label className='mb-1'>Skills *</label>
        <Form.Group controlId='formJobTags' className='mb-3' >
          <Form.Control
            type='text'
            name='jobTags'
            title='Enter Job Tags'
            style={{ backgroundColor: '#eff6ff',height:'50px'  }}
            value={formData.jobTags}
            onChange={handleChange}
            placeholder='e.g. PHP, Developer, CSS *'
          />
        </Form.Group>
        <Row className='mb-3'>
        <Col>
        <label className='mb-1'>Location *</label>
        <Form.Group controlId='formLocation' className='mb-3'>
          <Form.Control
            type='text'
            name='location'
            title='Enter job Location'
            style={{ backgroundColor: '#eff6ff' }}
            value={formData.location}
            onChange={handleChange}
            placeholder='Enter Location *'
          />
        </Form.Group>
        </Col>

        <Col>
        <label className='mb-1'>Qualifications</label>
        <Form.Group controlId='formQualifications' className='mb-3'>
          <Form.Control
            type='text'
            name='qualifications'
            title='Enter job Qualifications'
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
