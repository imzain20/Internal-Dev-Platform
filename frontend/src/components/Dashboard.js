import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Dashboard.css';
import PipelineStatus from './PipelineStatus'; // Importing PipelineStatus
import ProjectManagement from './ProjectManagement'; // Importing ProjectManagement

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper"> {/* Added Wrapper */}
      <Container fluid className="dashboard-container">
        <h1 className="mb-4 dashboard-title">Developer Platform Dashboard</h1>
        
        <Row>
          <Col md={6}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title className="dashboard-card-title">CI/CD Pipelines</Card.Title>
                <PipelineStatus /> {/* Integrate PipelineStatus here */}
                <Button className="dashboard-button">View Pipelines</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title className="dashboard-card-title">Manage Projects</Card.Title>
                <Card.Text className="dashboard-card-text">
                  Manage your projects effectively.
                </Card.Text>
                <ProjectManagement /> {/* Integrate ProjectManagement here */}
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
    </div>
  );
};

export default Dashboard;
