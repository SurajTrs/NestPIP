import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const WebTradingTutorial = () => {
  return (
    <section style={{ backgroundColor: '#fff4e5', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6}>
            <h2 style={{ color: '#f24521', fontWeight: 700 }}>
              Get the most out of web trading
            </h2>
            <p className="text-muted" style={{ fontSize: '1rem' }}>
              Let us guide you through our newest addition to the FOREX.com platform suite with a series of video guides.
            </p>
            <Button
              variant="light"
              style={{
                backgroundColor: '#f24521',
                color: 'white',
                border: 'none',
                fontWeight: '600',
              }}
            >
              Platform tutorials
            </Button>
          </Col>

          {/* Right Content - Image or Video Placeholder */}
          <Col md={6}>
            <div
              style={{
                width: '100%',
                height: '300px',
                backgroundColor: '#f24521',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.25rem',
              }}
            >
              Video / Image
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WebTradingTutorial;
