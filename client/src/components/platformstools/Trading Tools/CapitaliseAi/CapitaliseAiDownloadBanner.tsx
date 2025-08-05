import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CapitaliseAiDownloadBanner = () => {
  const themeColor = '#f24521';

  return (
    <section style={{ backgroundColor: themeColor, color: '#fff', padding: '3rem 0' }}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6}>
            <h3 className="fw-bold mb-3">Download Capitalise.ai on Your Mobile Device</h3>
            <p className="lead mb-4">
              Scan the QR code to get started with automated Forex trading via Capitalise.ai, or follow the simple
              instructions below to install the app on your smartphone.
            </p>
            <Button
              variant="light"
              style={{
                color: themeColor,
                fontWeight: 'bold',
                borderRadius: '50px',
                padding: '0.6rem 1.5rem',
              }}
            >
              See Setup Instructions
            </Button>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/images/capitalise-qr-code.png" // Replace with actual QR image
              alt="Capitalise.ai QR Code"
              style={{ maxWidth: '220px', border: '8px solid white', borderRadius: '10px' }}
            />
            <p className="mt-3 fw-semibold">Scan with your phone camera</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CapitaliseAiDownloadBanner;
