import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const FlexibleAccountTypes = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{ color: '#f24521' }}>
          Flexible Account Types to Suit Your Trading Style
        </h2>
        <Row className="g-4">
          {/* Standard Account Card */}
          <Col md={6}>
            <Card className="h-100 shadow border-0 rounded-4" style={{ backgroundColor: '#ffffff' }}>
              <Card.Body className="p-4">
                <div className="mb-3">
                  <img src="/assets/api-account.svg" alt="Standard Account" style={{ height: 40 }} />
                </div>
                <h5 className="fw-bold text-dark">Standard Account</h5>
                <h1 className="display-4 fw-bold" style={{ color: '#f24521' }}>1.0</h1>
                <p className="text-muted">EUR/USD AS LOW AS</p>
                <p className="text-secondary">
                  Variable spreads with no commissions. Ideal for beginners or casual traders.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-4">
                  <Button variant="outline-dark" href="#standard-info" style={{ borderRadius: '12px' }}>
                    Discover Standard Accounts
                  </Button>
                  <Button style={{ backgroundColor: '#f24521', border: 'none', borderRadius: '12px' }} href="#open-standard">
                    Open a Standard Account
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* RAW Pricing Account Card */}
          <Col md={6}>
            <Card className="h-100 shadow border-0 rounded-4" style={{ backgroundColor: '#ffffff' }}>
              <Card.Body className="p-4">
                <div className="mb-3">
                  <img src="/assets/joined-account.svg" alt="RAW Account" style={{ height: 40 }} />
                </div>
                <h5 className="fw-bold text-dark">RAW Pricing Account</h5>
                <h1 className="display-4 fw-bold" style={{ color: '#006400' }}>0.0</h1>
                <p className="text-muted">EUR/USD AS LOW AS</p>
                <p className="text-secondary">
                  Ultra-tight variable spreads + <strong>$5 commission</strong> per $100k USD traded. Great for pros and scalpers.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-4">
                  <Button variant="outline-success" href="#raw-info" style={{ borderRadius: '12px' }}>
                    Discover RAW Pricing
                  </Button>
                  <Button style={{ backgroundColor: '#006400', border: 'none', borderRadius: '12px' }} href="#open-raw">
                    Open a RAW Pricing Account
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-5 small text-secondary">
          ‘As low as’ pricing is based on the most recently completed calendar month.<br />
          During high volatility or low liquidity, spreads may be higher than the typical values listed above.
        </div>
      </Container>
    </section>
  );
};

export default FlexibleAccountTypes;
