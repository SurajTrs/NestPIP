'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
  {
    name: 'Daniel M.',
    location: 'Nigeria',
    quote: `"The tight spreads and instant execution change the game." My main broker is now Nestpip.`,
  },
  {
    name: 'Elena K.',
    location: 'Australia',
    quote: `"I signed up for their raw spread funded account and now I trade with $50,000." Great help and payment system.`,
  },
  {
    name: 'Rajeev S.',
    location: 'India',
    quote: `"Great for my scalping plan." During the London and New York sessions, spreads go down to zero.`,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#fdece2ff', color: 'white', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{ color: '#f24521' }}>
          What Traders Are Saying
        </h2>
        <Row className="g-4 justify-content-center">
          {testimonials.map((testimonial, idx) => (
            <Col md={4} key={idx}>
              <Card
                style={{
                  backgroundColor: '#f24521',
                  border: 'none',
                  color: 'white',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  minHeight: '250px',
                }}
              >
                <Card.Body>
                  <Card.Text style={{ fontStyle: 'italic', fontSize: '1.05rem' }}>
                    {testimonial.quote}
                  </Card.Text>
                  <Card.Footer className="mt-3" style={{ backgroundColor: 'transparent', border: 'none' }}>
                    <strong>{testimonial.name}</strong> from {testimonial.location}
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
