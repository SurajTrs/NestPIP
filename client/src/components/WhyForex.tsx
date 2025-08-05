'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WhyChooseNestPip: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <Container>
        <Row className="align-items-center">
             <Col md={6} className="text-center">
            <img
              src="/assets/why-nestpip.png" // replace with your actual image
              alt="Why Choose NestPip"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
          {/* Left Text */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Why Choose NestPip? The Best Forex Broker You Can Trust
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              Nestpip is not just another trading platform. We’re a globally respected forex broker known for speed, security, education, and dedicated support. Here’s what sets us apart:
            </p>

            <ul style={{ color: '#555', fontSize: '0.95rem' }} className="ps-3">
              <li>
                <strong style={{ color: '#f24521' }}>Regulated & Transparent:</strong> Fully compliant with financial regulations. Client funds are held in secure, segregated accounts.
              </li>
              <li>
                <strong style={{ color: '#f24521' }}>Ultra-Fast Execution:</strong> Trades are executed in milliseconds using low-latency tech and deep liquidity.
              </li>
              <li>
                <strong style={{ color: '#f24521' }}>Tight Spreads & Low Fees:</strong> Trade major, minor, and exotic pairs with some of the lowest spreads in the market.
              </li>
              <li>
                <strong style={{ color: '#f24521' }}>No Hidden Charges:</strong> Transparent pricing with no hidden commissions or fees.
              </li>
              <li>
                <strong style={{ color: '#f24521' }}>24/7 Dedicated Support:</strong> Get expert help anytime via live chat, email, or phone—in multiple languages.
              </li>
            </ul>

            <p className="mt-4" style={{ fontWeight: 500, color: '#185234' }}>
              With NestPip, you trade on a platform that’s engineered for success, speed, and simplicity.
            </p>
          </Col>

          {/* Right Image */}
       
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseNestPip;
