import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MetaTraderPricing = () => {
  return (
    <section style={{ backgroundColor: '#FFF4E6', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Text */}
          <Col md={6}>
            <h2 style={{ color: '#f24521', fontWeight: '700' }}>
              MetaTrader Pricing & Trade Execution
            </h2>
            <p style={{ color: '#6b4a00', fontSize: '1.1rem' }}>
              If you’re using the MetaTrader trading platform, different spreads and rollover rates may apply. To see the most accurate and up-to-date pricing for a specific market, please log into your MetaTrader platform.
            </p>
            <Button
              href="#metatrader5"
              style={{
                backgroundColor: '#f24521',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '12px',
                fontWeight: 600,
                color: 'white',
                marginTop: '1rem',
              }}
            >
              MetaTrader 5
            </Button>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/assets/metatrader-platform.png"
              alt="MetaTrader Trading Platform"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MetaTraderPricing;
