'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RiskManagementBanner: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '4rem 0' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h2 className="fw-bold mb-4">Risk Management Tools</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.95)' }}>
              At NestPip, we equip you with powerful tools to help you manage your trades with confidence and control.
            </p>

            <ul className="list-unstyled mt-4" style={{ fontSize: '1rem' }}>
              <li className="mb-3">
                <strong>✔ Stop Loss & Take Profit</strong> – Protect gains and limit downside risk.
              </li>
              <li className="mb-3">
                <strong>✔ Margin Calculators</strong> – Understand how much capital is required.
              </li>
              <li className="mb-3">
                <strong>✔ Risk/Reward Ratio Indicators</strong> – Assess potential outcomes smartly.
              </li>
              <li className="mb-3">
                <strong>✔ Position Size Calculators</strong> – Determine optimal trade size for your account.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RiskManagementBanner;
