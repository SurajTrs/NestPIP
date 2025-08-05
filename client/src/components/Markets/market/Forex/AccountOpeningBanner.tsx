'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AccountOpeningBanner: React.FC = () => {
  const steps = [
    'Register on NestPip with your basic details',
    'Verify your identity with KYC compliance',
    'Fund your account securely via bank, UPI, card, or crypto',
    'Start Trading with access to live market tools and global currencies',
  ];

  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '4rem 0' }}>
      <Container>
        <Row>
          {/* Left Text Content */}
          <Col md={6} className="text-center mx-auto">
            <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
              Fast & Flexible Account Opening
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
              Opening an account with NestPip takes just minutes. We keep things simple, transparent, and accessible.
            </p>
            <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center">
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
                Register Now
              </Button>
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
            </div>
          </Col>
        </Row>

        {/* Steps Stripe */}
        <Row
          className="mt-5 py-4 rounded"
          style={{ backgroundColor: 'white', color: '#f24521', maxWidth: '1000px', margin: '3rem auto 0' }}
        >
          {steps.map((step, idx) => (
            <Col key={idx} md={3} className="text-center px-3">
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

export default AccountOpeningBanner;
