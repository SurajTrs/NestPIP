import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBook, FaChartLine, FaExchangeAlt, FaArrowsAltV } from 'react-icons/fa';

const Capitalise = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* LEFT TEXT BLOCK */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521' }}>
              Our partnership with Capitalise.ai empowers you to automate your trading with ease.
            </h2>
            <p className="text-muted mb-4">Ready to try Capitalise.ai?</p>
            <Button variant="danger" style={{ backgroundColor: '#f24521', border: 'none' }}>
              Automate Today
            </Button>
          </Col>

          {/* RIGHT FEATURES WITH BLUE ICONS */}
          <Col md={6}>
            <div className="mb-4 d-flex">
              <FaBook size={28} color="#0d6efd" className="me-3 mt-1" />
              <div>
                <h6 className="fw-semibold mb-1">Live Strategies Library</h6>
                <p className="mb-0 text-muted">
                  Get trade ideas from the Capitalise.ai Live Strategies Library.
                </p>
              </div>
            </div>

            <div className="mb-4 d-flex">
              <FaChartLine size={28} color="#0d6efd" className="me-3 mt-1" />
              <div>
                <h6 className="fw-semibold mb-1">Risk-Free Simulation</h6>
                <p className="mb-0 text-muted">
                  Simulate your strategy using real-time data without actual trades.
                </p>
              </div>
            </div>

            <div className="mb-4 d-flex">
              <FaExchangeAlt size={28} color="#0d6efd" className="me-3 mt-1" />
              <div>
                <h6 className="fw-semibold mb-1">Auto Execution</h6>
                <p className="mb-0 text-muted">
                  Send trading orders directly once your conditions are met.
                </p>
              </div>
            </div>

            <div className="d-flex">
              <FaArrowsAltV size={28} color="#0d6efd" className="me-3 mt-1" />
              <div>
                <h6 className="fw-semibold mb-1">Mobile Trading</h6>
                <p className="mb-0 text-muted">
                  Stay in control anytime, anywhere with the mobile app.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Capitalise;
