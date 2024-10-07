import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <h1 className="mb-4">Internal Developer Platform Dashboard</h1>
      
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>CI/CD Pipelines</Card.Title>
              <Card.Text>
                Monitor the status of ongoing and completed pipelines.
              </Card.Text>
              <Button variant="primary">View Pipelines</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Manage Projects</Card.Title>
              <Card.Text>
                Add, update, or delete your projects.
              </Card.Text>
              <Button variant="secondary">Manage Projects</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Actions</Card.Title>
              <Card.Text>
                Trigger builds, deploy services, and more.
              </Card.Text>
              <Button variant="success">Trigger Build</Button>
              <Button variant="info" className="ml-2">View Logs</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
