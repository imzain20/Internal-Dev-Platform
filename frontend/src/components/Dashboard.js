import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Dashboard.css';  // Assuming you already have a CSS file for custom styles

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container">
      <h1 className="mb-4 dashboard-title">Developer Platform Dashboard</h1>
      
      <Row>
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="dashboard-card-title">CI/CD Pipelines</Card.Title>
              <Card.Text className="dashboard-card-text">
                Monitor the status of ongoing and completed pipelines.
              </Card.Text>
              <Button className="dashboard-button">View Pipelines</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="dashboard-card-title">Manage Projects</Card.Title>
              <Card.Text className="dashboard-card-text">
                Add, update, or delete your projects.
              </Card.Text>
              <Button className="dashboard-button">Manage Projects</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="dashboard-card-title">Actions</Card.Title>
              <Card.Text className="dashboard-card-text">
                Trigger builds, deploy services, and more.
              </Card.Text>
              <Button className="dashboard-button">Trigger Build</Button>
              <Button className="dashboard-button ml-2">View Logs</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
