import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDollarSign, FaPoundSign, FaClock } from 'react-icons/fa';

const ForexExplained = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Text Section */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{color:'#f24521'}}>Forex Explained</h2>

            {/* Snapshot */}
            <div className="d-flex align-items-start mb-4">
              <div
                className="me-3 p-2 rounded-circle"
                style={{
                  backgroundColor: '#006400',
                  color: '#ffffff',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaDollarSign />
                <FaPoundSign style={{ marginLeft: '3px' }} />
              </div>
              <div>
                <h6 className="fw-semibold mb-1"style={{color:'#f24521'}}>A Quick Snapshot of FX</h6>
                <p className="mb-0 small text-secondary">
                  Forex trading involves speculating on the movement of exchange rates by buying one currency while selling another simultaneously.
                </p>
              </div>
            </div>

            {/* Largest Market */}
            <div className="d-flex align-items-start mb-4">
              <div
                className="me-3 p-2 rounded-circle"
                style={{
                  backgroundColor: '#006400',
                  color: '#ffffff',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                }}
              >
                FX
              </div>
              <div>
                <h6 className="fw-semibold mb-1 "style={{color:'#f24521'}}>The World’s Largest Market</h6>
                <p className="mb-0 small text-secondary">
                  With a daily trading volume exceeding <strong>$7.5 trillion</strong>*, forex is the most liquid and active market globally — offering unlimited opportunities for traders. 
                  <br />
                  <small className="text-muted">Based on BIS data</small>
                </p>
              </div>
            </div>

            {/* 24/5 Market */}
            <div className="d-flex align-items-start mb-4">
              <div
                className="me-3 p-2 rounded-circle"
                style={{
                  backgroundColor: '#006400',
                  color: '#ffffff',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FaClock />
              </div>
              <div>
                <h6 className="fw-semibold mb-1 "style={{color:'#f24521'}}>Forex Never Sleeps</h6>
                <p className="mb-0 small text-secondary">
                  The global forex market runs 24 hours a day, five days a week — opening Sunday 5 PM and closing Friday 5 PM (EST), so you can trade whenever it suits you.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <Button
              href="#open-account"
              style={{
                backgroundColor: '#006400',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '12px',
                fontWeight: 600,
              }}
            >
              Open an Account
            </Button>
          </Col>

          {/* Right Image Section */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/assets/forex-explained-banner.png"
              alt="Forex Market Visual"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ForexExplained;
