import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Settings2 } from 'lucide-react';

const MT4ToolsSection = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', color: '#333', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={7}>
            <h2 className="fw-bold mb-3" style={{ color: '#f24521' }}>
              MT4 Tools
            </h2>
            <h5 className="fw-semibold mb-3">Get more from MetaTrader</h5>
            <p style={{ fontSize: '1.1rem' }} className="mb-4">
              Optimize your strategy with a suite of over 20 expert advisors and custom indicators to give you 
              professional-grade control and flexibility over your trading strategy. All apps are provided by 
              <strong> FX Blue </strong> and included with a <strong>FOREX.com MetaTrader</strong> account.
            </p>
            <Button
              variant="primary"
              style={{
                backgroundColor: '#f24521',
                border: 'none',
                padding: '0.75rem 1.5rem',
                fontWeight: 600,
              }}
            >
              OPEN AN MT5 ACCOUNT
            </Button>
          </Col>

          {/* Right Icon */}
          <Col md={5} className="text-center mt-4 mt-md-0">
            <Settings2 size={80} color="#f24521" strokeWidth={1.5} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MT4ToolsSection;
