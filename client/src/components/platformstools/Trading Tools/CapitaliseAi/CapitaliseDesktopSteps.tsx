'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const themeColor = '#f24521';
const lightOrange = '#fafafaff';

const stepsDesktop = [
  'Create a free Capitalise.ai account here.',
  'Connect your FOREX.com login details.',
  'By using Capitalise.ai you agree to the terms and conditions.',
  "You're ready to start creating automated strategies!",
];

const stepsMobile = [
  'Download Capitalise.ai for Apple or Android.',
  "Select FOREX.com under 'login via partners'.",
  "Select 'Free Sign Up' to create your Capitalise.ai account.",
  'Connect your FOREX.com trading account by adding your FOREX.com login details.',
  'By using Capitalise.ai you agree to the terms and conditions.',
  "You're ready to start creating automated strategies via the mobile app!",
];

const CapitaliseSteps = () => {
  return (
    <section style={{ backgroundColor: lightOrange, padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: themeColor }}>
          How to Get Started with Capitalise.ai
        </h2>
        <Row>
          <Col md={6}>
            <h4 style={{ color: themeColor }}>On Your Desktop</h4>
            {stepsDesktop.map((step, idx) => (
              <Card key={idx} className="mb-3 border-0 shadow-sm">
                <Card.Body style={{ backgroundColor: '#fff9f5' }}>
                  <strong style={{ color: themeColor }}>{idx + 1}.</strong> {step}
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col md={6}>
            <h4 style={{ color: themeColor }}>On Your Mobile</h4>
            {stepsMobile.map((step, idx) => (
              <Card key={idx} className="mb-3 border-0 shadow-sm">
                <Card.Body style={{ backgroundColor: '#fff9f5' }}>
                  <strong style={{ color: themeColor }}>{idx + 1}.</strong> {step}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CapitaliseSteps;
