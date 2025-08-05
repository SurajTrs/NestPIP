import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PivotPointsSection = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center mb-4">
          <Col md={6}>
            <h2 style={{ color: '#f24521', fontWeight: 'bold' }}>Understanding Pivot Points</h2>
            <p style={{ color: '#555' }}>
              Pivot points are used by traders as a <strong>predictive indicator</strong> and denote levels of technical significance. 
              When used with other tools like <strong>support/resistance</strong> or <strong>Fibonacci levels</strong>, they become a powerful guide for entry and exit points in the market.
            </p>
            <Button
              variant="outline-dark"
              style={{ color: '#f24521', borderColor: '#f24521' }}
              className="mt-2"
            >
              Learn More About Pivot Points
            </Button>
          </Col>

          <Col md={6} className="mt-4 mt-md-0">
            <Card style={{ boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Row>
                  <Col xs={6}>
                    <p><strong>Daily</strong></p>
                    <p><strong>Weekly</strong></p>
                    <p><strong>Monthly</strong></p>
                    <p><strong>Pivot Point</strong></p>
                  </Col>
                  <Col xs={6} className="text-end">
                    <p>—</p>
                    <p>—</p>
                    <p>—</p>
                    <p><strong>1.16758</strong></p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col xs={6}>
                    <p><strong>Bid</strong></p>
                    <p><strong>Offer</strong></p>
                    <p><strong>Distance</strong></p>
                  </Col>
                  <Col xs={6} className="text-end">
                    <p>1.16886</p>
                    <p>1.16900</p>
                    <p>-0.00128</p>
                  </Col>
                </Row>
                <small className="text-muted">Last Updated: 7/21/2025 11:59:59 PM</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA & Latest Research */}
        <Row className="mt-5">
          <Col md={6}>
            <Card style={{ backgroundColor: '#f24521', color: '#fff', border: 'none' }}>
              <Card.Body>
                <h5>Try a Demo Account Risk Free</h5>
                <p>Trade market events under live conditions for 30 days.</p>
                <Button variant="light">Try a Demo Account</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mt-4 mt-md-0">
            <h5 style={{ color: '#f24521' }}>Latest Research</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#555' }}>
              <li>
                <strong>U.S. Dollar Slips Below Trend Support</strong><br />
                <small>Today 6:40 AM • EUR/USD Eyes Fresh Highs</small>
              </li>
              <li className="mt-3">
                <strong>ASX 200 Eyes 9,000</strong><br />
                <small>Today 2:02 AM • Bulls Defend Dips Ahead</small>
              </li>
              <li className="mt-3">
                <strong>Japanese Yen Technical Analysis</strong><br />
                <small>Today 1:32 AM • USD/JPY, EUR/JPY, GBP/JPY</small>
              </li>
            </ul>
            <Button variant="link" style={{ color: '#f24521' }}>Read Latest Research</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PivotPointsSection;
