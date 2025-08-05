import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CapitaliseAiSection = () => {
  const themeColor = '#f24521';

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="/images/capitalise-ai-demo.png"
              alt="Capitalise.ai platform demo"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold mb-3" style={{ color: themeColor }}>
              What is Capitalise.ai?
            </h3>
            <p style={{ fontSize: '1.05rem' }}>
              Capitalise.ai is a simple-to-use, plain-English strategy creator, enabling you to develop automated trading
              strategies, backtest and trade, without needing advanced programming knowledge.
            </p>

            <h5 className="fw-semibold mt-4 mb-2">An easy way to backtest</h5>
            <p>
              With Capitalise.ai, you can backtest your strategy against historical data. This means you can find out
              what would have happened had you gone live with your strategy months ago – giving you a feel for your edge
              in a market.
            </p>

            <p className="text-muted small mt-3">
              <strong>Disclaimer:</strong> Backtest results may differ from actual results due to limitations like use of
              composite feed, exclusion of commissions, and other trading conditions.{' '}
              <a href="#" style={{ color: themeColor }}>Click here</a> for more info.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CapitaliseAiSection;
