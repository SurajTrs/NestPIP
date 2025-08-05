import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowsAltV, FaBalanceScale, FaSearch } from 'react-icons/fa';

const StockCFDsExplained = () => {
  return (
    <section style={{ backgroundColor: '#f24521', color: 'white', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Text and Features */}
          <Col md={6}>
            <h2 className="fw-bold mb-4">Stock CFDs explained</h2>

            {/* Go long or short */}
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
                <FaArrowsAltV />
              </div>
              <div>
                <strong>Go long or short</strong>
                <p className="mb-0 small">
                  When you trade stock CFDs with us, you can profit from both rising and falling markets.
                </p>
              </div>
            </div>

            {/* Leverage */}
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
                <FaBalanceScale />
              </div>
              <div>
                <strong>Take advantage of leverage</strong>
                <p className="mb-0 small">
                  You only have to put up a fraction of the stock price to start trading. Leverage can magnify your profits and your losses.
                </p>
              </div>
            </div>

            {/* Market analysis / clarification */}
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
                <FaSearch />
              </div>
              <div>
                <strong>Analyse the market</strong>
                <p className="mb-0 small">
                  Is there a difference between stocks and shares? Not really they are different names for the same thing, also known as equities.
                </p>
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

          {/* Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/assets/stock-cfds-banner.png"
              alt="Stock CFDs Visual"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StockCFDsExplained;
