import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Headphones, Gift, Star } from 'lucide-react';

const ActiveTraderProgram = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', color: '#333', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold mb-3" style={{ color: '#f24521' }}>
              Lower your trading costs by up to 15%
            </h2>
            <p className="mb-4" style={{ fontSize: '1.1rem' }}>
              Earn cash rebates and access other exclusive benefits with the Active Trader program.
            </p>

            <div className="mb-4">
              <h5 className="fw-semibold" style={{ color: '#f24521' }}>Functional Benefits</h5>
              <p className="text-muted">
                Multi-asset rebates on FX, Indices, Commodities, Metals, cryptocurrencies, and Equities,
                up to <strong>$50 per million traded</strong> and get bank fees on wire transfers reimbursed.
              </p>
            </div>

            <div className="d-flex align-items-start mb-3">
              <Headphones className="me-3 text-primary" size={28} />
              <div>
                <h6 className="fw-semibold mb-1">White Glove Service</h6>
                <p className="mb-0 text-muted">
                  One-on-one guidance from relationship managers to help build and manage your trading strategy.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <Gift className="me-3 text-danger" size={28} />
              <div>
                <h6 className="fw-semibold mb-1">Red Carpet Rollout</h6>
                <p className="mb-0 text-muted">
                  Enjoy VIP access to exclusive events and previews of our upcoming products.
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <Star size={80} color="#f24521" strokeWidth={1.5} />
            <h5 className="mt-3 fw-bold text-uppercase" style={{ color: '#f24521' }}>Active Trader</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ActiveTraderProgram;
