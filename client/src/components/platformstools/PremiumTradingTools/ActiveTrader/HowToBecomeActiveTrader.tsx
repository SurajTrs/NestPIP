'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HowToBecomeActiveTrader: React.FC = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#000000' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{color:'#f24521'}}>How to Become an Active Trader</h2>
        <Row>
          {/* New Clients */}
          <Col md={6} className="mb-4" >
            <Card className="h-100 shadow-sm text-white" style={{background:'#f24521'} } >
              <Card.Body>
                <Card.Title className="fw-bold mb-3" >New Clients</Card.Title>
                <ul className="ps-3">
                  <li>Open an account using our online form.</li>
                  <li>Fund with an initial deposit of at least <strong>$10,000</strong> or trade the minimum for each asset class in a calendar month.</li>
                  <li>Automatically qualify for Active Trader status and enjoy the benefits.</li>
                </ul>
                <Button variant="dark" className="mt-3">Open an Account</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Existing Clients */}
          <Col md={6}>
            <Card className="h-100 shadow-sm  text-white" style={{background:'#f24521'}}>
              <Card.Body>
                <Card.Title className="fw-bold mb-3 ">Existing Clients</Card.Title>
                <ul className="ps-3">
                  <li>Continued eligibility is contingent on total quarterly trade volume maintained at Tier 1 or an average account balance of at least <strong>$25,000</strong>.</li>
                  <li>Continue enjoying your Active Trader status.</li>
                </ul>
                <Button variant="outline-dark" className="mt-3">Log into MyAccount</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowToBecomeActiveTrader;
