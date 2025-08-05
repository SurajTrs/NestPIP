'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Mt5SetupSteps: React.FC = () => {
  const steps = [
    {
      title: 'Join',
      desc: 'Use your name, email address, and a secure password to sign up.',
    },
    {
      title: 'Check',
      desc: 'Upload your KYC papers and finish ID verification, which usually takes only a few minutes.',
    },
    {
      title: 'Add Money to Your Account',
      desc: 'You can do this with UPI, a bank transfer, a card, or an e-wallet.',
    },
    {
      title: 'Begin Trading',
      desc: 'You can start trading live markets right away by downloading MT5 or using the WebTrader.',
    },
  ];

  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '4rem 0' }}>
      <Container>
        <h2 className="fw-bold mb-4 text-center" style={{ fontSize: '1.8rem' }}>
          How to Set Up a NestPip MT5 Account
        </h2>
        <Row className="justify-content-center">
          {steps.map((step, idx) => (
            <Col
              key={idx}
              md={3}
              sm={6}
              xs={12}
              className="text-center mb-4"
              style={{ padding: '0 1rem' }}
            >
              <div
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  lineHeight: '60px',
                  margin: '0 auto 1rem',
                  backgroundColor: 'white',
                  color: '#f24521',
                  userSelect: 'none',
                  cursor: 'default',
                }}
                aria-label={`Step ${idx + 1}`}
              >
                {idx + 1}
              </div>
              <h5 style={{ fontWeight: 700 }}>{step.title}</h5>
              <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>{step.desc}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Mt5SetupSteps;
