import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Search,
  LineChart,
  Smartphone,
  ShieldCheck,
} from 'lucide-react';

const sections = [
  {
    title: 'Trade the markets with precision',
    description: 'Find your margin requirement at a glance. Adapt your strategy by partially closing positions or placing market orders in advance.',
    icon: <Search color="white" size={40} />,
    img: '/images/trade-precision.png',
    link: '#trade-precision',
  },
  {
    title: 'Stay on top of price action',
    description: 'Monitor charts and react to changes quickly with real-time updates at your fingertips.',
    icon: <LineChart color="white" size={40} />,
    img: '/images/price-action.png',
    link: '#price-action',
  },
  {
    title: 'Make the app your own',
    description: 'Customize full-screen charts, layouts, and features to match your strategy.',
    icon: <Smartphone color="white" size={40} />,
    img: '/images/customize-app.png',
    link: '#make-own',
  },
  {
    title: 'Manage your account on the go',
    description: 'Track balances, fund your account, and manage settings securely anytime, anywhere.',
    icon: <ShieldCheck color="white" size={40} />, 
    img: '/images/manage-account.png',
    link: '#manage-account',
  },
];

const MobileTradingFeatures = () => {
  return (
    <section style={{ backgroundColor: '#fff3e6', padding: '4rem 0' }}>
      <Container>
        {sections.map((section, idx) => (
          <a
            href={section.link}
            key={idx}
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            <Row
              className="align-items-center my-5"
              style={{
                flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
              }}
            >
              <Col md={6}>
                <div
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    backgroundColor: '#f24521',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                  }}
                >
                  {section.icon}
                </div>
                <h3 style={{ color: '#f24521' }}>{section.title}</h3>
                <p className="text-dark">{section.description}</p>
              </Col>
              <Col md={6}>
                <img
                  src={section.img}
                  alt={section.title}
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
            </Row>
          </a>
        ))}
      </Container>
    </section>
  );
};

export default MobileTradingFeatures;
