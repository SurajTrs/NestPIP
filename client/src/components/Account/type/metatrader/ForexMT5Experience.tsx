import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForexMT5Experience = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Text */}
          <Col md={6}>
            <h2 style={{ color: '#f24521', fontWeight: 'bold' }}>
              FOREX.com elevates your MT5 experience
            </h2>
            <p className="mt-3">
              Trade on a new, improved MetaTrader while maintaining your access to the unique
              advantages of FOREX.com.
            </p>
            <ul style={{ paddingLeft: '1rem' }}>
              <li className="mb-2">
                Explore 500+ markets including stocks via CFDs, FX, commodities, & indices
              </li>
              <li className="mb-2">
                Utilize enhanced charting with more timeframes, indicators, and tools
              </li>
              <li className="mb-2">
                Expand your portfolio with intuitive market search and groupings
              </li>
            </ul>
            <p className="mt-3">
              When you trade on your MT5 account with FOREX.com, you are getting the most out of your trading potential.
            </p>
            <Button style={{ backgroundColor: '#f24521', borderColor: '#f24521' }}>
              Start Trading on MT5
            </Button>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center">
            <img
              src="/images/mt5-dashboard-preview.png" // replace with your actual image path
              alt="MetaTrader 5 Preview"
              className="img-fluid"
              style={{ maxHeight: '400px', borderRadius: '12px', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ForexMT5Experience;
