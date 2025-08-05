import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaRobot, FaNewspaper, FaServer } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImpressiveFeatures = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521', fontWeight: 'bold' }}>
          Impressive Features
        </h2>
        <Row className="g-4">
          {/* Expert Advisors */}
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <FaRobot size={32} color="#f24521" className="mb-3" />
                <Card.Title style={{ fontWeight: '600' }}>Expert Advisors</Card.Title>
                <Card.Text>
                  Take advantage of our EA-optimized environment with no third-party bridge or
                  auto-sync, plus micro-lot availability.
                </Card.Text>
                <div className="mt-2" style={{ color: '#f24521', fontWeight: 'bold' }}>
                  EXPERT ADVISORS
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Reuters News */}
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <FaNewspaper size={32} color="#f24521" className="mb-3" />
                <Card.Title style={{ fontWeight: '600' }}>Integrated Reuters News</Card.Title>
                <Card.Text>
                  Enjoy a seamless experience so you can react swiftly to market-moving news without
                  ever having to leave the platform.
                </Card.Text>
                <div className="mt-2" style={{ color: '#007bff', fontWeight: 'bold' }}>
                  <FaNewspaper className="me-1" /> BLUE TRANSPARENT
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* VPS Hosting */}
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <FaServer size={32} color="#f24521" className="mb-3" />
                <Card.Title style={{ fontWeight: '600' }}>Free VPS Hosting</Card.Title>
                <Card.Text>
                  Move beyond traditional trading with customizable trading systems hosted on a
                  secure professional server at no cost for customers who qualify.
                </Card.Text>
                <div className="mt-2" style={{ color: '#f24521', fontWeight: 'bold' }}>
                  VPS HOSTING
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA Buttons */}
        <div className="text-center mt-5">
          <Button
            variant="primary"
            className="me-3"
            style={{
              backgroundColor: '#f24521',
              borderColor: '#f24521',
              padding: '0.75rem 1.5rem',
              fontWeight: 'bold',
            }}
          >
            OPEN AN MT5 ACCOUNT
          </Button>
          <Button
            variant="outline-primary"
            style={{
              color: '#f24521',
              borderColor: '#f24521',
              padding: '0.75rem 1.5rem',
              fontWeight: 'bold',
            }}
          >
            OPEN AN MT5 DEMO ACCOUNT
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ImpressiveFeatures;
