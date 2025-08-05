'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const GBPUSDStartBanner: React.FC = () => {
  const steps = [
    'Sign up for NestPip – Start with your email and quick onboarding.',
    'Verify Your Account – Upload your KYC documents securely.',
    'Fund Your Wallet – Use bank transfer, UPI, cards, or crypto.',
    'Select GBP/USD – Choose it from the list of forex instruments.',
    'Analyze the Market – Use NestPip’s charts and signals.',
    'Place Your Trade – Go Long (Buy) or Short (Sell) based on your view.',
    'Manage Risk – Set take-profit and stop-loss levels to control your trade.',
  ];

  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '4rem 0' }}>
      <Container>
        <Row>
          {/* Header and CTA */}
          <Col md={10} className="text-center mx-auto">
            <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
              How to Start Trading GBP/USD with NestPip
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
              Ready to trade one of the most popular forex pairs in the world? Follow these easy steps to start trading GBP/USD confidently on NestPip.
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
                Get Started
              </Button>
              <Button
                href="/markets/forex"
                variant="outline-light"
                style={{
                  borderRadius: '30px',
                  padding: '0.75rem 2rem',
                  fontWeight: 600,
                  color: 'white',
                  borderColor: 'white',
                }}
              >
                View Forex Markets
              </Button>
            </div>
          </Col>
        </Row>

        {/* Steps Row */}
        <Row
          className="mt-5 py-4 rounded"
          style={{
            backgroundColor: 'white',
            color: '#f24521',
            maxWidth: '1150px',
            margin: '3rem auto 0',
          }}
        >
          {steps.map((step, idx) => (
            <Col key={idx} md={2} sm={4} xs={6} className="text-center px-3 mb-4 mb-md-0">
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
              <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>{step}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GBPUSDStartBanner;
