import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const TradeExecution = () => {
  return (
    <section style={{ backgroundColor: '#fff4ef', padding: '4rem 0' }}>
      <Container>
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h2 style={{ color: '#f24521', fontWeight: 700 }}>Trade Execution Matters</h2>
            <p className="mt-3" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              Pricing means nothing without reliable, fast execution. We are proud to be the only FX broker to share our record of success.*
            </p>
          </Col>
        </Row>

        <Row className="text-center mb-5">
          <Col md={4} className="mb-4">
            <h3 style={{ color: '#f24521', fontSize: '2.5rem', fontWeight: 700 }}>100%</h3>
            <p style={{ fontWeight: 'bold' }}>Fast and accurate pricing</p>
            <p>100% of trades successfully executed</p>
          </Col>
          <Col md={4} className="mb-4">
            <h3 style={{ color: '#f24521', fontSize: '2.5rem', fontWeight: 700 }}>100%</h3>
            <p style={{ fontWeight: 'bold' }}>Executed in under 1 second</p>
            <p>Speed you can rely on in every market condition</p>
          </Col>
          <Col md={4} className="mb-4">
            <h3 style={{ color: '#f24521', fontSize: '2.5rem', fontWeight: 700 }}>0.83 pips</h3>
            <p style={{ fontWeight: 'bold' }}>Average price improvement</p>
            <p>Benefit from our smart order routing technology</p>
          </Col>
        </Row>

        <Row className="text-center mb-4">
          <Col>
            <Button
              style={{
                backgroundColor: '#f24521',
                border: 'none',
                padding: '0.75rem 1.5rem',
                fontWeight: 'bold',
              }}
            >
              View Full Execution Scorecard
            </Button>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={10} className="mx-auto">
            <small style={{ fontSize: '0.9rem', color: '#6c757d' }}>
              *Includes all valid trade and orders requests, excluding those entered on the MetaTrader platform.
              <br /><br />
              Refers to trade executions for GAIN Global Markets Inc. Please note that multiple factors may impact execution speed,
              including but not limited to: market conditions, platform type, network connectivity, trading strategies, and account type.
              Forex.com’s execution statistics represent GAIN Global Markets Inc. orders executed on NESTPIP.com platforms during market
              hours between April 30, 2025, 5:00 pm ET, and May 31, 2025, 5:00 pm ET and excludes trades/orders entered on the MetaTrader platform.
              <br /><br />
              Market volatility, volume, and system availability may delay trade executions. Price can change quickly in fast market conditions,
              resulting in an execution price different from the price available at the time the order is submitted. Price improvement is not
              guaranteed and will not occur in all situations.
              <br /><br />
              Excludes trades that received non-standard order processing and orders that failed to trigger.
            </small>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TradeExecution;
