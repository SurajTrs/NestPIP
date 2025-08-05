import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBalanceScale, FaExchangeAlt, FaChartLine } from 'react-icons/fa';

const GoldSilverExplained = () => {
  return (
    <section style={{ backgroundColor: '#FF7A00', color: 'white', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          
          {/* Left Column: Text */}
          <Col md={6}>
            <h2 className="fw-bold mb-4">Gold and Silver Explained</h2>

            {/* Feature 1: Diversify */}
            <div className="d-flex align-items-center mb-3">
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
                <strong>Diversify your investment</strong>
                <p className="mb-0 small">
                  Gold and silver can help diversify your investments and hedge against inflation as safe haven assets.
                </p>
              </div>
            </div>

            {/* Feature 2: Go long or short */}
            <div className="d-flex align-items-center mb-3">
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
                <FaExchangeAlt />
              </div>
              <div>
                <strong>Go long or short</strong>
                <p className="mb-0 small">
                  Profit from both rising and falling markets when trading precious metals with us.
                </p>
              </div>
            </div>

            {/* Feature 3: Leverage */}
            <div className="d-flex align-items-center mb-4">
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
                <strong>Take advantage of leverage</strong>
                <p className="mb-0 small">
                  Start with just a fraction of the trade value. Leverage can magnify both profits and losses.
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

          {/* Right Column: Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/assets/gold-silver-explained-banner.png" // ✅ Replace with actual path
              alt="Gold and Silver Market Visual"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GoldSilverExplained;
