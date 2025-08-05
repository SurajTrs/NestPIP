'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMoneyBillWave, FaStar, FaUserTie } from 'react-icons/fa';

const WhyActiveTrader: React.FC = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#000000' }}>
      <Container>
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521' }}>
              Why Active Trader
            </h2>
            <p className="fs-5 text-white">
              Active Trader is a program delivering a range of premium benefits for high-volume traders. With features including lowered trading costs and the ability to earn interest on your available balance, this account recognizes and rewards your dedication to the markets.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <div className="mb-3" style={{ color: '#f24521', fontSize: '2rem' }}>
                  <FaMoneyBillWave />
                </div>
                <Card.Title className="fw-bold">Cash rebates</Card.Title>
                <Card.Text className="text-muted">
                  The more you trade, the more you earn.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <div className="mb-3" style={{ color: '#f24521', fontSize: '2rem' }}>
                  <FaStar />
                </div>
                <Card.Title className="fw-bold">VIP access</Card.Title>
                <Card.Text className="text-muted">
                  Get invited to exclusive events and previews of our products.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <div className="mb-3" style={{ color: '#f24521', fontSize: '2rem' }}>
                  <FaUserTie />
                </div>
                <Card.Title className="fw-bold">Professional guidance</Card.Title>
                <Card.Text className="text-muted">
                  Use personalized support from our expert strategists to bolster your trading education.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyActiveTrader;
