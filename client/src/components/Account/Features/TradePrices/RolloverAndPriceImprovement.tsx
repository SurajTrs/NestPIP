import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const RolloverAndPriceImprovement = () => {
  return (
    <section style={{ backgroundColor: '#FFF4E6', padding: '4rem 0' }}>
      <Container>
         {/* Second Row: Image Left, Text Right */}
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0 order-md-1 text-center">
            <img
              src="/assets/price-improvement-chart.png"
              alt="Positive trend line chart combined with histogram"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
          <Col md={6} className="order-md-2">
            <h2 style={{ color: '#f24521', fontWeight: '700' }}>
              Price Improvement
            </h2>
            <p style={{ color: '#6b4a00', fontSize: '1.1rem' }}>
              Our quoted prices are executable most of the time. If the market reaches a better price after you place your trade, our price improvement technology automatically ensures you get the improved price.
            </p>
            <p style={{ color: '#6b4a00', fontSize: '1.1rem' }}>
              However, in fast-moving markets, orders may be executed at a price which has ceased to be the best market price. This is known as slippage.
            </p>
            <Button
              href="#learn-more"
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
              Learn More
            </Button>
          </Col>
        </Row>
        {/* First Row: Text Left, Image Right */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0 order-md-1">
            <h2 style={{ color: '#f24521', fontWeight: '700' }}>
              Forex Rollover Rates & Overnight Financing
            </h2>
            <p style={{ color: '#6b4a00', fontSize: '1.1rem' }}>
              We don’t apply rollover interest to intraday trades. Instead, we source institutional rollover rates and pass them to you at a competitive price.
            </p>
            <p style={{ color: '#6b4a00', fontSize: '1.1rem' }}>
              That means, if you are a short-term trader, you can trade as much as you want, and not have to worry about earning or paying any rollover interest as long as you have no open trades at 5 PM ET.
            </p>
            <p style={{ color: '#6b4a00', fontSize: '1.1rem' }}>
              Other brokers may calculate financing charges continuously and second by second, which could raise your trading costs when you trade intraday.
            </p>

            <h5 style={{ color: '#f24521', marginTop: '1.5rem' }}>
              The benefits to you:
            </h5>
            <ul style={{ color: '#6b4a00', fontSize: '1.05rem' }}>
              <li>You receive some of the most competitive rollover rates in the industry</li>
              <li>You don’t incur rollover at all on intraday trades</li>
              <li>You always know how much you’ll earn or pay; our rollover rates are posted daily and available in the trading platform</li>
            </ul>
            <p style={{ color: '#6b4a00', fontSize: '1.1rem' }}>
              To find the rollover rate for a particular market, log into our Web Trading platform and select your product’s “Market 360” for pricing info.
            </p>
          </Col>
          <Col md={6} className="order-md-2 text-center">
            <img
              src="/assets/coins-line-chart.png"
              alt="Coins on a table with line chart overlay"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>

       
      </Container>
    </section>
  );
};

export default RolloverAndPriceImprovement;
