import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ShieldCheck, Coins } from 'lucide-react';

const FinancialStrengthSection = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', color: '#333', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Text Content Left */}
          <Col md={6}>
            <h2 className="fw-bold mb-3" style={{ color: '#f24521' }}>
              Backed by industry-leading performance and standards
            </h2>
            <p style={{ fontSize: '1.1rem' }} className="mb-4">
              When you are ready to seize opportunity, you can count on our track record of reliability
              and substantial capital resources to get the job done.
            </p>

            {/* Feature 1 */}
            <div className="d-flex align-items-start mb-4">
              <ShieldCheck size={28} className="me-3 text-primary" />
              <div>
                <h6 className="fw-semibold mb-1">Financial Strength and Security</h6>
                <p className="text-muted mb-0">
                  With our substantial capital resources from being part of the StoneX Group,
                  we have the power to innovate and push the industry forward.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="d-flex align-items-start">
              <Coins size={28} className="me-3 text-info" />
              <div>
                <h6 className="fw-semibold mb-1">Full Pricing Information</h6>
                <p className="text-muted mb-0">
                  Learn about our price improvement technology that can help you save more.
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <ShieldCheck size={80} color="#f24521" strokeWidth={1.5} />
            <h5 className="mt-3 fw-bold text-uppercase" style={{ color: '#f24521' }}>
              Financial Strength & Security
            </h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FinancialStrengthSection;
