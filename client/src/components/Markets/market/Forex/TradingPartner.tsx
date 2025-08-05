'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TradingPartner: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side Text */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Your Trading Partner: Get to Know NestPip
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#333' }}>
              NestPip caters to all trader profiles:
            </p>
            <ul className="ps-3" style={{ color: '#555', fontSize: '1rem' }}>
              <li>
                <strong>Beginners:</strong> Access demo accounts, tutorials, and 24/7 support to learn the ropes.
              </li>
              <li>
                <strong>Intermediate Traders:</strong> Explore deeper technical analysis, use indicators, and develop strategies.
              </li>
              <li>
                <strong>Professional Traders:</strong> Utilize our MT4/MT5 integration, high-speed servers, and automation features for advanced trading.
              </li>
            </ul>
            <p style={{ color: '#185234', fontWeight: 500, marginTop: '1rem' }}>
              No matter your level, NestPip adapts to your needs, making us the best currency trading platform for every trader.
            </p>
          </Col>

          {/* Right Side Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/images/trading-partner.png" // Update with your image path
              alt="NestPip Trading Partner"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TradingPartner;
