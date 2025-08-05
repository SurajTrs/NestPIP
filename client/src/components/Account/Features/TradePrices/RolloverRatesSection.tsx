import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const RolloverRates = () => {
  return (
    <section style={{ backgroundColor: '#FFF4E6', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Text Content */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Forex Rollover Rates and Overnight Financing
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#6b4a00' }}>
              We don’t apply rollover interest to intraday trades. Instead, we source institutional rollover rates and pass them to you at a competitive price.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#6b4a00' }}>
              That means, if you are a short-term trader, you can trade as much as you want, and not have to worry about earning or paying any rollover interest as long as you have no open trades at 5 PM ET.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#6b4a00' }}>
              Other brokers may calculate financing charges continuously and second by second, which could raise your trading costs when you trade intraday.
            </p>

            <h5 className="mt-4" style={{ color: '#f24521' }}>
              The benefits to you:
            </h5>
            <ul style={{ color: '#6b4a00', fontSize: '1.05rem' }}>
              <li>You receive some of the most competitive rollover rates in the industry</li>
              <li>You don’t incur rollover at all on intraday trades</li>
              <li>
                You always know how much you’ll earn or pay; our rollover rates are posted every day and available within the trading platform
              </li>
            </ul>
            <p style={{ fontSize: '1.1rem', color: '#6b4a00' }}>
              To find the rollover rate for a particular market, just log into our Web Trading platform and select your product’s “Market 360” to bring up the relevant pricing information.
            </p>
            <Button
              href="#rollover-rates"
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
              View Rollover Rates
            </Button>
          </Col>

          {/* Right Image/Visual */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/assets/rollover-rates-illustration.png"
              alt="Forex rollover rates illustration"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RolloverRates;
