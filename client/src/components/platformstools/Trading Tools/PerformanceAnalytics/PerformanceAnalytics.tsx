'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PerformanceAnalytics: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="fw-bold text-danger">
              Explore Your Potential with Performance Analytics
            </h2>
            <p className="text-muted">
              Emotions and biases are powerful influences on trading, but most traders are unaware
              of how much it impacts their performance.
            </p>
            <p className="text-muted">
              With realistic goal setting, live discipline tracking, and psychological insights into
              what makes you tick, <strong>NESTPIP.com Performance Analytics</strong> is your
              revolutionary digital mentor.
            </p>
            <p className="text-muted">
              Performance Analytics arms you with the right tools to trade with discipline,
              knowledge, and skill.
            </p>
            <Button variant="danger" size="lg">
              Explore GamePlan
            </Button>
          </Col>

          {/* Right Side - Image */}
          <Col md={6}>
            <img
              src="/images/performance-analytics.png"
              alt="Performance Analytics GamePlan"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PerformanceAnalytics;
