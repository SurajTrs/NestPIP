'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DemoBanner: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#f24521',
        backgroundImage: 'url("/candle-bg.png")', // Place a candle-style image in public/candle-bg.png
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '4rem 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(242, 69, 33, 0.8)',
          zIndex: 0,
        }}
      ></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={8}>
            <h2 className="display-5 fw-bold mb-3">
              Trade over 5,500 markets including 80+ FX pairs, stocks, ETFs, indices, commodities and more.
            </h2>
            <p className="lead mb-4">
              Open your free FOREX.com demo to try out trading on our full range of markets – without risking any capital.
            </p>
            <Button variant="light" size="lg" className="fw-semibold text-danger">
              TRY A DEMO
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DemoBanner;
