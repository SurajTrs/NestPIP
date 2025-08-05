'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WhyForexMatters: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Text */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Why Forex Trading Matters
            </h2>
            <p style={{ color: '#333', lineHeight: 1.6, fontSize: '1rem' }}>
              Forex, or foreign currency, is the largest and most liquid financial market in the world. The
              foreign exchange market offers equally unmatched opportunities for individuals and institutions,
              with over <strong>$6 trillion</strong> traded daily.
            </p>
            <p style={{ color: '#333', lineHeight: 1.6, fontSize: '1rem' }}>
              Unlike traditional markets, Forex is open 24 hours a day, 5 days a week — giving traders the
              flexibility to capitalize on price movements across different time zones and global economies.
            </p>
            <p style={{ color: '#333', lineHeight: 1.6, fontSize: '1rem' }}>
              At <strong>Nestpip</strong>, we simplify the complexities of the forex market and make this dynamic
              trading environment accessible to everyone. From analysis to strategy to execution — we help you
              trade smarter with the most reliable forex platform available today.
            </p>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/images/forex-trading-platform.png"
              alt="Forex Trading on Nestpip"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyForexMatters;
