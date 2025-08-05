'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCogs, FaChartBar, FaSlidersH, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaCogs />,
    title: 'Robust Trading Infrastructure',
    desc: 'Built for high-frequency, institutional-grade trading performance.',
  },
  {
    icon: <FaChartBar />,
    title: 'Advanced Charting & Technical Tools',
    desc: 'Integrated with TradingView and over 80 indicators.',
  },
  {
    icon: <FaSlidersH />,
    title: 'Customizable Dashboards',
    desc: 'Tailor the interface to fit your trading style and strategy.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Risk Management Tools',
    desc: 'Set stop-loss, take-profit, and limit orders to control risk.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App',
    desc: 'Trade anywhere, anytime with our fully functional mobile app.',
  },
];

const WhyNestpipBestCrypto: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left: Text Content */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 style={{ color: '#f24521', fontWeight: 700, fontSize: '2.2rem' }}>
              What Makes Nestpip.com the Best Crypto Trading Platform?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#444' }} className="mb-4">
              Here’s why traders around the world consider Nestpip.com as the best crypto trading platform:
            </p>

            <ul className="list-unstyled">
              {features.map((item, idx) => (
                <li key={idx} className="d-flex align-items-start mb-3">
                  <div
                    className="me-3 p-2 rounded-circle bg-white text-dark d-flex justify-content-center align-items-center"
                    style={{ width: '40px', height: '40px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <p className="mb-0 small text-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-4" style={{ fontSize: '1.05rem', color: '#222' }}>
              Whether you’re a beginner or an experienced trader, Nestpip.com provides the right blend of features,
              flexibility, and security for successful cryptocurrency forex trading.
            </p>
          </Col>

          {/* Right: Image */}
          <Col md={6} className="text-center">
            <img
              src="/assets/nestpip-best-crypto-platform.png"
              alt="Nestpip crypto trading platform"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyNestpipBestCrypto;
