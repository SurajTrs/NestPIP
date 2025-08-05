import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Mt5AccessSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <Container>
        <Row className="align-items-center g-5">
          {/* LEFT – TEXT */}
          <Col lg={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              MT5 Access: Trade Whenever and Wherever You Want
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              You can trade anywhere life takes you. You can use MetaTrader 5 on all of your devices with NestPip.
            </p>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              <li className="mb-2">
                <strong>MT5 for Windows</strong> – Full desktop functionality and the best performance.
              </li>
              <li className="mb-2">
                <strong>MT5 for Mac</strong> – Works well with Apple products.
              </li>
              <li className="mb-2">
                <strong>MT5 for Android and iOS</strong> – Lets you trade on your phone with live charts, indicators, and fast order execution.
              </li>
              <li>
                <strong>MT5 WebTrader</strong> – You can access MT5 right from your browser without having to download anything.
              </li>
            </ul>
          </Col>

          {/* RIGHT – IMAGE */}
          <Col lg={6} className="text-center">
            <img
              src="/images/mt5-devices.png" // Replace with your actual image path
              alt="MT5 on Multiple Devices"
              className="img-fluid rounded shadow"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mt5AccessSection;
