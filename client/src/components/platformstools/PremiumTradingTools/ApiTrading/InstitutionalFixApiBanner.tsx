import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BriefcaseBusiness } from 'lucide-react';

const InstitutionalFixApiBanner = () => {
  const themeColor = '#f24521';

  return (
    <section
      style={{
        backgroundColor: themeColor,
        color: '#fff',
        padding: '3rem 0',
        textAlign: 'center',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={2} className="mb-3 mb-md-0">
            <BriefcaseBusiness size={48} color="#fff" />
          </Col>
          <Col md={7}>
            <h4 className="fw-bold mb-2">Institutional FIX API</h4>
            <p style={{ fontSize: '1.05rem' }}>
              We offer a FIX API for institutions looking to offer our markets and liquidity to their customers.
            </p>
          </Col>
          <Col md={3}>
            <Button
              variant="light"
              style={{
                color: themeColor,
                fontWeight: '600',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
              }}
            >
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InstitutionalFixApiBanner;
