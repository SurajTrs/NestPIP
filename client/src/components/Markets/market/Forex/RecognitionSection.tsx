'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RecognitionSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Text Content */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Recognition as the Best Forex Broker
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '1.5rem' }}>
              Over time, NestPip has gained recognition as one of the best forex brokers in the market due to our transparency, performance, and client-first approach.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#333' }}>
              Thousands of traders globally choose NestPip because we deliver:
            </p>
            <ul style={{ color: '#555', fontSize: '1rem', paddingLeft: '1.25rem', marginTop: '1rem' }}>
              <li>Real-time accuracy</li>
              <li>User-friendly experience</li>
              <li>Competitive pricing</li>
              <li>Consistent growth tools</li>
              <li>24/7 customer assistance</li>
            </ul>
          </Col>

          {/* Right side can be an image or illustration */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/images/forex-recognition.png" // Update with your actual image path
              alt="Recognition as Best Forex Broker"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RecognitionSection;
