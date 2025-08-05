'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SecurityMobile: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '4rem 0' }}>
      <Container>
        {/* First Row: Mobile Trading Left, Security Right */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="fw-bold mb-3">Mobile Trading with NestPip</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>
              Trade on the go with our feature-rich mobile app. Whether you’re commuting or traveling, you can monitor markets, place trades, and manage your portfolio from anywhere in the world.
            </p>
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3">Your Security is Our Priority</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>
              NestPip uses bank-level encryption and two-factor authentication to protect your data and funds. Our secure wallets and reliable transaction processing systems ensure peace of mind.
            </p>
          </Col>
        </Row>

        {/* Final Statement */}
        <Row>
          <Col className="text-center">
            <p className="lead mt-4" style={{ fontSize: '1.05rem' }}>
              These features help protect your capital while optimizing potential returns.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SecurityMobile;
