'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CommodityStartBanner: React.FC = () => {
  const steps = [
    'Create Your Free Account – Sign up with just a few clicks and verify your identity securely.',
    'Fund Your Wallet – Use bank transfers, UPI, credit/debit cards, or e-wallets.',
    'Choose a Commodity – Pick from a wide range of tradeable assets listed on our platform.',
    'Place Your Trade – Use our intuitive interface to buy or sell in real time.',
    'Track & Optimize – Monitor trades through live charts, history, and analytics.',
  ];

  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '4rem 0' }}>
      <Container>
        <Row>
          {/* Left Text Content */}
          <Col md={8} className="text-center mx-auto">
            <h2 className="fw-bold mb-4" style={{ color: 'white' }}>
              How to Start Commodity Trading with NestPip
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
              Join thousands of traders accessing gold, oil, metals, and more. Start your commodity trading journey with ease.
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
                href="/commodities"
                variant="outline-light"
                style={{
                  borderRadius: '30px',
                  padding: '0.75rem 2rem',
                  fontWeight: 600,
                  color: 'white',
                  borderColor: 'white',
                }}
              >
                Explore Commodities
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
            maxWidth: '1100px',
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

export default CommodityStartBanner;
