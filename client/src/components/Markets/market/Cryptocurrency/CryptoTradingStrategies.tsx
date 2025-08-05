'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChartLine,  FaArrowDown, FaShieldAlt } from 'react-icons/fa';
import { FaArrowTrendUp, FaRepeat } from 'react-icons/fa6';

const strategies = [
  {
    icon: <FaChartLine />,
    title: 'Day Trading',
    description: 'Take advantage of intraday volatility by buying low and selling high within a single trading day.',
  },
  {
    icon: <FaArrowTrendUp />,
    title: 'Swing Trading',
    description: 'Hold positions for days or weeks, capturing larger market movements.',
  },
  {
    icon: <FaArrowDown />,
    title: 'Short Selling',
    description: 'Predict a price drop and profit from it — possible only on CFD-based platforms like Nestpip.',
  },
  {
    icon: <FaRepeat />,
    title: 'Scalping',
    description: 'Make multiple quick trades per day, profiting from small price changes with tight spreads.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Security & Support',
    description: 'High-level encryption, segregated funds, and 24/5 expert support via chat, phone, and email.',
  },
];

const CryptoTradingStrategies: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0' }} className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Text Column */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Crypto Trading Strategies You Can Apply
            </h2>
            {strategies.slice(0, 4).map((strategy, index) => (
              <div key={index} className="d-flex mb-3 align-items-start">
                <div
                  className="me-3 p-2 rounded-circle bg-white text-dark d-flex justify-content-center align-items-center"
                  style={{ width: '40px', height: '40px', color: '#f24521' }}
                >
                  {strategy.icon}
                </div>
                <div>
                  <strong>{strategy.title}</strong>
                  <p className="mb-1 small text-muted">{strategy.description}</p>
                </div>
              </div>
            ))}
          </Col>

          {/* Right Security Box */}
          <Col md={6}>
            <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#ffffff' }}>
              <div className="d-flex align-items-start">
                <div
                  className="me-3 p-2 rounded-circle bg-light text-dark d-flex justify-content-center align-items-center"
                  style={{ width: '40px', height: '40px', color: '#f24521' }}
                >
                  {strategies[4].icon}
                </div>
                <div>
                  <strong>{strategies[4].title}</strong>
                  <p className="mb-0 small text-muted">
                    {strategies[4].description}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CryptoTradingStrategies;
