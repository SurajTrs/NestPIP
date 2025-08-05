import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowsAltV, FaBalanceScale, FaLayerGroup } from 'react-icons/fa';

const IndicesExplained = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', color: '#333', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Indices Explained
            </h2>

            {/* Feature 1: Go long or short */}
            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  backgroundColor: '#f24521',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                }}
              >
                <FaArrowsAltV />
              </div>
              <div>
                <strong style={{ color: '#333' }}>Go long or short</strong>
                <p className="mb-0 small" style={{ color: '#555' }}>
                  When you trade indices with us, you can profit from both rising and falling markets.
                </p>
              </div>
            </div>

            {/* Feature 2: Take advantage of leverage */}
            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  backgroundColor: '#f24521',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                }}
              >
                <FaBalanceScale />
              </div>
              <div>
                <strong style={{ color: '#333' }}>Take advantage of leverage</strong>
                <p className="mb-0 small" style={{ color: '#555' }}>
                  You only have to put up a fraction of the index price to start trading. Leverage can magnify your profits and your losses.
                </p>
              </div>
            </div>

            {/* Feature 3: Diversify portfolio */}
            <div className="d-flex align-items-center mb-4">
              <div
                className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  backgroundColor: '#f24521',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                }}
              >
                <FaLayerGroup />
              </div>
              <div>
                <strong style={{ color: '#333' }}>Diversify your portfolio</strong>
                <p className="mb-0 small" style={{ color: '#555' }}>
                  Get exposure to a broad section of the market at once rather than relying on a single stock.
                </p>
              </div>
            </div>

            <Button
              href="/compare-accounts"
              style={{
                backgroundColor: '#f24521',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '12px',
                fontWeight: 600,
                color: 'white',
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
