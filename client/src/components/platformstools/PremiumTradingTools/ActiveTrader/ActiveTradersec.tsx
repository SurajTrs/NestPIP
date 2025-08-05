'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ActiveTradersec: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#000000', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="fw-bold mb-3" style={{ color: '#f24521' }}>
              Active Trader
            </h1>
            <h4 className="mb-4" style={{ color: '#ffffff' }}>Realize your full trading potential</h4>
            <p className="mb-3" style={{ color: '#ffffff' }}>
              Designed for high-volume traders, you’ll enjoy exceptional customer experiences tailored to your unique needs:
            </p>
            <ul className="mb-4"style={{ color: '#ffffff' }} >
              <li>✅ Reduced trading costs by up to 15% with cash rebates†</li>
              <li>✅ One-on-one support from a dedicated Relationship Manager</li>
              <li>✅ VIP access for events and new product previews</li>
              <li>✅ Reimbursement on bank fees for wire transfers</li>
            </ul>
            <p className="mb-4" style={{ color: '#ffffff' }}>
              <strong >You’ll automatically qualify</strong> for Active Trader when you open an account with a minimum of <strong >$10,000</strong> or trade <strong>$50M of volume</strong> in a calendar month.
            </p>
            <Button
              variant="outline-danger"
              size="lg"
              style={{ borderColor: '#f24521', color: '#f24521' }}
              className="mt-3"
            >
              Join Active Trader
            </Button>
          </Col>
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <img
              src="/images/activetrader-hero.svg"
              alt="Active Trader"
              className="img-fluid"
              style={{ maxHeight: '400px' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ActiveTradersec;
