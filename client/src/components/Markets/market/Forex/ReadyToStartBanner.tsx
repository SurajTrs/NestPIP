'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ReadyToStartBanner: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#f24521',
        backgroundImage: 'url("/images/readytostart.png")', // Replace with your actual background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '6rem 0',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h2 className="fw-bold mb-3">Ready to Start?</h2>
            <p style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
              Sign up today and begin your journey with NestPip – Trade with the Best.
            </p>
          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <Button
              href="/register"
              size="lg"
              style={{
                backgroundColor: 'white',
                color: '#f24521',
                border: 'none',
                borderRadius: '30px',
                fontWeight: '600',
                padding: '0.75rem 2rem',
              }}
            >
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReadyToStartBanner;
