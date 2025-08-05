import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const WebTradingApps = () => {
  return (
    <section style={{ backgroundColor: '#fff4e5', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Text */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 style={{ color: '#f24521', fontWeight: '700' }}>
              Trade on the go with our award-winning app
            </h2>
            <p className="text-muted">
              <strong style={{ color: '#f24521' }}>Mobile trading apps</strong><br />
              Trade without compromise. Buy and sell with a single swipe, access our exclusive Performance Analytics, build multiple personalized watchlists, and customize your layouts to suit your trading style.
            </p>
            <ul className="text-muted ps-3">
              <li>
                <strong style={{ color: '#f24521' }}>TradingView charts:</strong> Use over 80 technical indicators and drawing tools to create your own templates.
              </li>
              <li>
                <strong style={{ color: '#f24521' }}>Integrated news and analysis:</strong> Take advantage of Reuters news, market analysis, and our economic calendar.
              </li>
              <li>
                <strong style={{ color: '#f24521' }}>Make the app your own:</strong> Personalize your experience with alerts, custom watchlists, and light/dark mode.
              </li>
            </ul>
            <Button variant="outline-danger" style={{ borderColor: '#f24521', color: '#f24521' }}>
              MOBILE TRADING APPS
            </Button>
          </Col>

          <Col md={6}>
            <img
              src="/images/mobile-trading.png"
              alt="Mobile trading app"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WebTradingApps;
