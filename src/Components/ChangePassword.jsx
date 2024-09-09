import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ChangePassword = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <Button variant="primary" onClick={handleShow}>
        Change Password
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Re confirm password</Form.Label>
              <Form.Control type="password" placeholder="Re enter password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
         
          <Button style={{width:"100%", backgroundColor:"#ec9b0b", border:"none",fontSize:"20px"}} variant="primary" onClick={() => alert("Password Changed!")}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ChangePassword;
