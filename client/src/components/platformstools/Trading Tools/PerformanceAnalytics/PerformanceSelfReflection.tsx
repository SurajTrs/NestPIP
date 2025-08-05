'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const steps = [
  {
    icon: '/icons/fx1-color.png',
    title: 'Set up for success from day one',
    description: 'Your personal blueprint for your own success.',
  },
  {
    icon: '/icons/fx2-color.png',
    title: 'Stay disciplined in real time',
    description: 'Simple traffic lights – stay green and be in control.',
  },
  {
    icon: '/icons/fx3-color.png',
    title: 'Learn from your past behaviour',
    description: 'Poor discipline happens. Knowing the cost can help you recover more quickly.',
  },
  {
    icon: '/icons/fx4-color.png',
    title: 'Manage your emotions and biases',
    description:
      "Whether it's speed, volatility, or even time of day – know your best opportunities for trading.",
  },
];

const PerformanceSelfReflection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#f9f9f9', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="fw-bold text-danger">
              Teach Yourself About Yourself, Step by Step
            </h2>
            <p className="text-muted">
              In life, self-reflection and understanding is vital. The same applies to trading.
            </p>
            <p className="text-muted">
              With our exclusive Performance Analytics technology, we can help you better comprehend your trading psychology. Our systematic approach comes in four steps, designed to enhance your trading.
            </p>
          </Col>

          {/* Right Side - Steps */}
          <Col md={6}>
            {steps.map((step, index) => (
              <Card key={index} className="mb-3 border-0 shadow-sm">
                <Card.Body className="d-flex align-items-start">
                  <img
                    src={step.icon}
                    alt={`FX ${index + 1}`}
                    style={{ width: '40px', height: '40px', marginRight: '1rem' }}
                  />
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">{step.title}</h6>
                    <p className="text-muted mb-0">{step.description}</p>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PerformanceSelfReflection;
