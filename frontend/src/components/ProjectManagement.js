import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ProjectManagement = () => {
  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addProject = () => {
    console.log('New project added:', projectName);
    handleClose();
  };

  return (
    <div>
      <h2>Manage Your Projects</h2>
      <Button variant="primary" onClick={handleShow}>
        Add New Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Project Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter project name" 
                value={projectName} 
                onChange={(e) => setProjectName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProject}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectManagement;
