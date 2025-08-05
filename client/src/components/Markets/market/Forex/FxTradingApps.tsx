'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TradingPlatformsSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <Container>
        <Row className="align-items-center flex-column-reverse flex-md-row">
          {/* Left Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/images/trading-platforms.png" // Replace with actual path
              alt="NestPip Trading Platforms"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>

          {/* Right Text */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Powerful Trading Platforms – Access the Best Forex Platform
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              We offer a suite of powerful, easy-to-use trading platforms tailored to meet the needs of all
              traders. No matter your device or location, <strong>NestPip</strong> keeps you connected.
            </p>

            <div className="mb-4">
              <h5 className="fw-semibold" style={{ color: '#f24521' }}>Web Platform</h5>
              <ul className="ps-3" style={{ color: '#555', fontSize: '0.95rem' }}>
                <li>Trade directly through your browser</li>
                <li>No software download required</li>
                <li>One-click order execution and intuitive interface</li>
              </ul>
            </div>

            <div className="mb-4">
              <h5 className="fw-semibold" style={{ color: '#f24521' }}>Mobile App (Android & iOS)</h5>
              <ul className="ps-3" style={{ color: '#555', fontSize: '0.95rem' }}>
                <li>Trade on-the-go with our secure, responsive app</li>
                <li>Push notifications for market alerts</li>
                <li>Instant deposit/withdrawal options</li>
              </ul>
            </div>

            <div>
              <h5 className="fw-semibold" style={{ color: '#f24521' }}>Desktop (MT4/MT5 Support)</h5>
              <ul className="ps-3" style={{ color: '#555', fontSize: '0.95rem' }}>
                <li>Access advanced charting tools and technical indicators</li>
                <li>Automate strategies with Expert Advisors (EAs)</li>
                <li>Backtesting and custom scripts for professionals</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TradingPlatformsSection;
