'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HowToGetStarted: React.FC = () => {
  const steps = [
    'Open a NestPip.com account',
    'Create a TradingView login at TradingView.com',
    'Connect to NestPip.com',
  ];

  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '4rem 0' }}>
      <Container>
        {/* Heading and Text */}
        <Row>
          <Col md={8} className="text-center mx-auto">
            <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
              How to Get Started
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
              Begin your journey with NestPip in just a few simple steps. Seamless, secure, and connected with TradingView.
            </p>
          </Col>
        </Row>

        {/* Optional CTA Buttons */}
        <Row className="justify-content-center mt-4">
          <Col md="auto">
            <Button
              href="/register"
              style={{
                backgroundColor: 'white',
                color: '#f24521',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '30px',
                fontWeight: 600,
              }}
            >
              Get Started
            </Button>
          </Col>
          <Col md="auto">
            <Button
              href="/learn-more"
              variant="outline-light"
              style={{
                borderRadius: '30px',
                padding: '0.75rem 2rem',
                fontWeight: 600,
                color: 'white',
                borderColor: 'white',
              }}
            >
              Learn More
            </Button>
          </Col>
        </Row>

        {/* Step Strip */}
        <Row
          className="mt-5 py-4 rounded"
          style={{
            backgroundColor: 'white',
            color: '#f24521',
            maxWidth: '1000px',
            margin: '3rem auto 0',
          }}
        >
          {steps.map((step, idx) => (
            <Col key={idx} md={4} className="text-center px-3 mb-4 mb-md-0">
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  lineHeight: '50px',
                  margin: '0 auto 1rem',
                  backgroundColor: '#f24521',
                  color: 'white',
                }}
              >
                {idx + 1}
              </div>
              <p style={{ fontWeight: 600, fontSize: '1rem' }}>{step}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowToGetStarted;
