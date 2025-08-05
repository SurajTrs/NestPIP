'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const steps = [
  {
    title: 'Sign Up',
    desc: 'Create your account in minutes. Verify your identity and set your preferences.',
  },
  {
    title: 'Fund Your Wallet',
    desc: 'Use bank transfer, debit/credit card, or e-wallets to deposit funds into your trading account.',
  },
  {
    title: 'Choose Your Crypto',
    desc: 'Browse supported cryptocurrencies, compare spreads and volatility, and add to your watchlist.',
  },
  {
    title: 'Analyze the Market',
    desc: 'Use Nestpip’s built-in tools or TradingView integration for technical analysis.',
  },
  {
    title: 'Place Your Trade',
    desc: 'Set your position size, select leverage if desired, and open a long or short position.',
  },
  {
    title: 'Track and Manage',
    desc: 'Use risk management tools to protect capital and adjust positions as needed.',
  },
];

const StartCryptoSteps: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521', fontWeight: 700 }}>
          How to Start Crypto Trading on Nestpip
        </h2>

        <Row className="g-4">
          {steps.map((step, index) => (
            <Col key={index} md={6} lg={4}>
              <div
                className="h-100 p-4 bg-white rounded shadow-sm"
                style={{ borderLeft: '5px solid #f24521' }}
              >
                <div
                  className="mb-2 d-flex align-items-center justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#f24521',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  {index + 1}
                </div>
                <h5 className="fw-semibold mb-2">{step.title}</h5>
                <p className="small mb-0" style={{ color: '#555' }}>
                  {step.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StartCryptoSteps;
