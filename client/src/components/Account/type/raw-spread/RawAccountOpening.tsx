'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const RawAccountOpening: React.FC = () => {
  const steps = [
    'Sign Up: Create an account on the Nestpip site',
    'Check: Upload your KYC documents to confirm your account',
    'Choose the type of account: Pick "Raw Spread Account"',
    'Put money into your account: Use bank transfer, wallets, crypto, and more',
    'Start Trading: Get instant access to global markets',
  ];

  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '4rem 0' }}>
      <Container>
        <Row>
          {/* Left Text Content */}
          <Col md={6} className="text-center mx-auto">
            <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
              Getting Started with Nestpip’s Raw Spread Account
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
              It’s easy to get started with your raw spread account. Follow these simple steps and you’ll be ready to trade in less than ten minutes.
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
            <Col key={idx} md={2} className="text-center px-3">
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

export default RawAccountOpening;
