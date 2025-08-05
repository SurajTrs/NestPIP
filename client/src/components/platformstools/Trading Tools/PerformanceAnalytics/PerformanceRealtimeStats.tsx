'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PerformanceRealtimeStats: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column (Text Content) */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="fw-bold text-danger">
              Real-time statistics on your trading performance
            </h2>
            <p className="text-muted">
              When it comes to trading, it’s just as important to assess your own behaviors as well as the market’s.
            </p>
            <p className="text-muted">
              More than a modern-day trading journal, simply log into our trading platform and select the Performance Analytics tab for in-depth insights on your strengths and weaknesses.
            </p>
            <Button variant="primary" size="lg">
              Launch Performance Analytics
            </Button>
          </Col>

          {/* Right Column (Optional Image or Illustration) */}
          <Col md={6} className="text-center">
            <img
              src="/images/performance-analytics-dashboard.png"
              alt="Performance Analytics Dashboard"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PerformanceRealtimeStats;
