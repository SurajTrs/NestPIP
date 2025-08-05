import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MobileAtAGlance = () => {
  return (
    <section style={{ backgroundColor: '#fff3e6', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left - Text */}
          <Col md={6}>
            <h2 style={{ color: '#f24521' }}>Mobile at a glance</h2>
            <p className="text-dark">
              Trade to your full capability with our mobile app, as powerful as the web version but available to use whenever you want to trade.
            </p>
            <ul className="text-dark" style={{ paddingLeft: '1rem' }}>
              <li>Quality execution with one-swipe trading</li>
              <li>Advanced TradingView charting and analysis tools</li>
              <li>Real-time trade & order alerts</li>
              <li>Full account management features</li>
            </ul>
          </Col>

          {/* Right - Image */}
          <Col md={6}>
            <img
              src="/images/mobile-glance.png"
              alt="Mobile Trading App"
              className="img-fluid rounded shadow-sm"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MobileAtAGlance;
