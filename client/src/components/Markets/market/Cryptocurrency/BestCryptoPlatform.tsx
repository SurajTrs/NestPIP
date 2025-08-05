'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaServer,
  FaChartLine,
  FaSlidersH,
  FaShieldAlt,
  FaMobileAlt,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaServer />,
    title: 'Robust Trading Infrastructure',
    desc: 'Built for high-frequency, institutional-grade trading performance.',
  },
  {
    icon: <FaChartLine />,
    title: 'Advanced Charting & Technical Tools',
    desc: 'Integrated with TradingView and more than 80 indicators.',
  },
  {
    icon: <FaSlidersH />,
    title: 'Customizable Dashboards',
    desc: 'Easily tailor the platform to match your unique trading strategy.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Risk Management Tools',
    desc: 'Control risk using stop-loss, take-profit, and limit order settings.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App',
    desc: 'Trade crypto anywhere, anytime with full-featured mobile access.',
  },
];

const BestCryptoPlatform: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
            <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/assets/crypto-platform-showcase.png"
              alt="Nestpip Crypto Platform UI"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '420px', objectFit: 'contain' }}
            />
          </Col>
   
          <Col md={6}>
            <h2 className="mb-4" style={{ color: '#f24521', fontWeight: 700, fontSize: '2.4rem' }}>
              What Makes Nestpip.com the Best Crypto Trading Platform?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#333' }}>
              Here is why traders around the world choose Nestpip.com for crypto trading:
            </p>

            <ul className="list-unstyled">
              {features.map((feature, index) => (
                <li key={index} className="d-flex align-items-start mb-3">
                 <div
  className="me-3 p-2 rounded-circle d-flex justify-content-center align-items-center"
  style={{
    width: '40px',
    height: '40px',
    background: '#f24521',
    color: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  }}
>
  {feature.icon}
</div>


                  <div>
                    <strong>{feature.title}</strong>
                    <p className="mb-0 small text-muted">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-4" style={{ fontSize: '1.05rem', color: '#444' }}>
              Whether you are just starting out or already experienced, Nestpip.com gives you the
              performance, flexibility, and security needed to thrive in the crypto forex market.
            </p>
          </Col>


          
        </Row>
      </Container>
    </section>
  );
};

export default BestCryptoPlatform;
