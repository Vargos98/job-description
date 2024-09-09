import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ChooseUsername = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <Button variant="primary" onClick={handleShow}>
        Choose Username
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
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
}

export default ChooseUsername