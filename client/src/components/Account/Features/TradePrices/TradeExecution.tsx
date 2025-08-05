import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const TradeExecution = () => {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '4rem 0' }}>
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-bold" style={{ color: '#f24521' }}>
              Trade Execution Matters
            </h2>
            <p className="text-secondary small">
              Pricing means nothing without reliable, fast execution. We’re proud to be the only FX broker to share our record of success.*
            </p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col md={4} className="mb-4">
            <div
              className="p-4 shadow-sm rounded"
              style={{ backgroundColor: '#FFF7F0', borderLeft: '6px solid #006400' }}
            >
              <h3 className="fw-bold" style={{ color: '#f24521' }}>100%</h3>
              <p className="text-secondary small mb-2">
                Fast and accurate pricing – 100% of trades successfully executed.
              </p>
              <p className="small text-muted">
                Our hi-tech trading platforms deliver consistent and reliable performance, giving you full confidence in every trade.
              </p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div
              className="p-4 shadow-sm rounded"
              style={{ backgroundColor: '#FFF7F0', borderLeft: '6px solid #006400' }}
            >
              <h3 className="fw-bold" style={{ color: '#f24521' }}>100%</h3>
              <p className="text-secondary small mb-2">
                100% of trades executed in under 1 second.
              </p>
              <p className="small text-muted">
                We’ve automated every process so your trades execute at the price you expect — or better.
              </p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div
              className="p-4 shadow-sm rounded"
              style={{ backgroundColor: '#FFF7F0', borderLeft: '6px solid #006400' }}
            >
              <h3 className="fw-bold" style={{ color: '#f24521' }}>0.83 pips</h3>
              <p className="text-secondary small mb-2">
                Average price improvement per limit order.
              </p>
              <p className="small text-muted">
                When the market moves in your favor, we pass those savings on to you.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <Button
              variant="success"
              href="#execution-scorecard"
              style={{
                backgroundColor: '#006400',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '12px',
                fontWeight: 600,
              }}
            >
              View Full Execution Scorecard
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TradeExecution;
