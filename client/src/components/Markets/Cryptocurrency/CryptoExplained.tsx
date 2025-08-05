import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChartLine, FaCoins, FaShieldAlt, FaLock } from 'react-icons/fa';

const CryptoExplained = () => {
  return (
    <section style={{ backgroundColor: '#FF7A00', color: 'white', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold mb-4">Why trade crypto CFDs with FOREX.com?</h2>

            {/* Feature 1 */}
            <div className="d-flex align-items-start mb-3">
              <div
                className="me-3 p-2 rounded-circle"
                style={{
                  backgroundColor: 'white',
                  color: '#00365A',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaChartLine />
              </div>
              <div>
                <strong>Leverage your trading</strong>
                <p className="mb-0 small">
                  Gain full market exposure with just a percentage of the trade value.<br />
                  <em>* With increased leverage comes increased risk</em>
                </p>
                <a href="/learn/leverage" className="text-white text-decoration-underline small">
                  LEARN ABOUT CFD MARGIN AND LEVERAGE
                </a>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="d-flex align-items-start mb-3">
              <div
                className="me-3 p-2 rounded-circle"
                style={{
                  backgroundColor: 'white',
                  color: '#00365A',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaCoins />
              </div>
              <div>
                <strong>Range of cryptocurrencies</strong>
                <p className="mb-0 small">
                  Trade popular cryptos or choose from thousands of other markets.
                </p>
                <a href="/markets/crypto" className="text-white text-decoration-underline small">
                  DISCOVER OUR MARKETS TO TRADE
                </a>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="d-flex align-items-start mb-3">
              <div
                className="me-3 p-2 rounded-circle"
                style={{
                  backgroundColor: 'white',
                  color: '#00365A',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaShieldAlt />
              </div>
              <div>
                <strong>A regulated global CFD broker</strong>
                <p className="mb-0 small">
                  Authorized and regulated by the Cayman Islands Monetary Authority (CIMA).
                </p>
                <a href="/about/regulation" className="text-white text-decoration-underline small">
                  LEARN MORE ABOUT WHY YOU SHOULD CHOOSE FOREX.COM
                </a>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="d-flex align-items-start mb-4">
              <div
                className="me-3 p-2 rounded-circle"
                style={{
                  backgroundColor: 'white',
                  color: '#00365A',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaLock />
              </div>
              <div>
                <strong>Strength and security</strong>
                <p className="mb-0 small">
                  Part of NASDAQ-listed StoneX Group Inc. with over a century in the financial markets.
                </p>
                <a href="/about/stonex" className="text-white text-decoration-underline small">
                  LEARN MORE ABOUT STONEX
                </a>
              </div>
            </div>

            <Button
              href="/compare-accounts"
              style={{
                backgroundColor: '#006400',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '12px',
                fontWeight: 600,
              }}
            >
              Compare Accounts
            </Button>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/assets/crypto-explained-banner.png"
              alt="Crypto Trading Explained"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CryptoExplained;
