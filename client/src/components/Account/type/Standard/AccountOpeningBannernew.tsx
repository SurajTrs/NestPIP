'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AccountOpeningBanner: React.FC = () => {
  const steps = [
    {
      title: 'Sign Up Online',
      description: 'Complete your account registration with just a few clicks.',
    },
    {
      title: 'Verify Your Profile',
      description: 'Upload a government-issued ID and proof of address.',
    },
    {
      title: 'Fund Your Account',
      description: 'Deposit a minimum of $100 via bank transfer, credit/debit card, or e-wallet.',
    },
    {
      title: 'Start Trading',
      description: 'Log in to MT4, MT5, or WebTrader and begin executing your strategy.',
    },
  ];

  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '4rem 0' }}>
      <Container>
        <Row>
          {/* Left Text Content */}
          <Col md={8} className="text-center mx-auto">
            <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
              HOW TO START
            </h2>
            <h4 className="mb-3 fw-semibold">
              How to Open a Standard Forex Trading Account
            </h4>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
              Getting started with NestPip is quick and simple.
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
                Start Trading Now
              </Button>
              <Button
                href="/demo"
                variant="outline-light"
                style={{
                  borderRadius: '30px',
                  padding: '0.75rem 2rem',
                  fontWeight: 600,
                  color: 'white',
                  borderColor: 'white',
                }}
              >
                Try Demo
              </Button>
            </div>
          </Col>
        </Row>

        {/* Steps Stripe */}
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
              <p className="fw-bold mb-1">{step.title}</p>
              <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>{step.description}</p>
            </Col>
          ))}
        </Row>

        {/* Final Note */}
        <p className="text-center mt-4" style={{ fontSize: '1rem', color: 'white' }}>
          Open your standard forex trading account and start trading in under 10 minutes.
        </p>
      </Container>
    </section>
  );
};

export default AccountOpeningBanner;
