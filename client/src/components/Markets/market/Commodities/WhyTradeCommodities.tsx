import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WhyTradeCommodities = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center flex-column-reverse flex-md-row">
          {/* Left Content */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{color:'#f24521'}}>Why Trade Commodities with NestPip?</h2>

            <ul className="text" style={{ fontSize: '1rem', paddingLeft: '1rem', }}>
              <li className="mb-3">
                <strong style={{color:'#f24521'}}>🌍 Access to Global Markets:</strong> Trade top global commodities including gold, silver, oil, and more — all in one platform. NestPip connects you to real-time international exchanges, so you never miss an opportunity.
              </li>
              <li className="mb-3">
                <strong style={{color:'#f24521'}}>⚡ Low Spreads & Fast Execution:</strong> Enjoy competitive spreads and lightning-fast trade execution powered by our cutting-edge technology.
              </li>
              <li className="mb-3">
                <strong style={{color:'#f24521'}}>📊 Advanced Trading Tools:</strong> Use real-time charts, risk management tools, calendars, and technical indicators to master your strategy.
              </li>
              <li className="mb-3">
                <strong style={{color:'#f24521'}}>🔒 Trusted & Transparent:</strong> We offer live pricing, real-time data, and 24/5 support with full transparency and fair trading policies.
              </li>
              <li>
                <strong style={{color:'#f24521'}}>🎯 Flexible Leverage Options:</strong> Choose leverage that suits your risk appetite — whether you a re a cautious trader or an aggressive scalper.
              </li>
            </ul>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src="/assets/why-commodities-nestpip.png"
              alt="Why Trade Commodities"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyTradeCommodities;
