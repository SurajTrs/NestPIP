import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowsAltV, FaBalanceScale, FaLayerGroup } from 'react-icons/fa';

const IndicesExplained = () => {
  return (
    <section style={{ backgroundColor: '#FF7A00', color: 'white', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold mb-4">Indices explained</h2>

            {/* Feature 1: Go long or short */}
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
                <FaArrowsAltV />
              </div>
              <div>
                <strong>Go long or short</strong>
                <p className="mb-0 small">
                  When you trade indices with us, you can profit from both rising and falling markets.
                </p>
              </div>
            </div>

            {/* Feature 2: Take advantage of leverage */}
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
                <strong>Take advantage of leverage</strong>
                <p className="mb-0 small">
                  You only have to put up a fraction of the index price to start trading. Leverage can magnify your profits and your losses.
                </p>
              </div>
            </div>

            {/* Feature 3: Diversify portfolio */}
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
                <FaLayerGroup />
              </div>
              <div>
                <strong>Diversify your portfolio</strong>
                <p className="mb-0 small">
                  Get exposure to a broad section of the market at once rather than relying on a single stock.
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

          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/assets/indices-explained-banner.png"
              alt="Indices Market Visual"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndicesExplained;
