'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForexEducation: React.FC = () => {
  const courses = [
    {
      title: 'How to create a forex trading plan',
      level: 'Intermediate',
      duration: '5.5-minute read',
      description: 'A comprehensive plan is crucial to successful trading – without one, you won’t have a strategy to guide you or the means to measure your success.',
    },
    {
      title: 'Buying and selling explained',
      level: 'Beginner',
      duration: '1.5-minute read',
      description: 'Buying and selling is trading at its most fundamental. It determines your profit, and the price of an asset at any given time.',
    },
    {
      title: 'Optimizing your trade entry',
      level: 'Intermediate',
      duration: '3-minute read',
      description: 'Getting your entries right is crucial to successful trading. In this lesson, we cover three techniques to improve your timing as you enter positions.',
    },
    {
      title: 'Trading forex',
      level: 'Beginner',
      duration: '7.5-minute read',
      description: 'When you trade forex, you’re buying or selling a currency pair – such as EUR/USD, GBP/USD or USD/JPY. Let’s take a closer look at the anatomy of forex pairs.',
    },
  ];

  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <Row className="mb-4">
          <Col lg={8}>
            <h2 className="fw-bold text-danger mb-3">How do currency rates work?</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              Currency rates work by telling you how much one currency is worth in another. When you trade forex, you’re always exchanging currencies – whether it is euros for dollars, pounds for Swiss francs or Hungarian forints for Polish złotys. Currency calculators tell you how much you’ll get at the end of the transaction.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              The exchange rates of currencies are always on the move. Forex traders try to take advantage of these changing rates to earn a profit. For example, you could buy euros by selling dollars, wait for the euro to increase in value against the dollar, then convert your EUR back into USD for a profit.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              If the euro fell against the dollar, though, you’d sustain a loss.
            </p>
            <p className="fw-semibold mt-3">
              Learn more about how forex trading works in the{' '}
              <a href="#" style={{ color: '#f24521', textDecoration: 'underline' }}>
                NESTPIP.com Academy
              </a>.
            </p>
          </Col>
        </Row>

        <h4 className="text-dark fw-bold mb-4">Develop your trading skillset</h4>
        <Row xs={1} md={2} lg={2} className="g-4">
          {courses.map((course, idx) => (
            <Col key={idx}>
              <Card style={{ height: '100%', borderLeft: `4px solid #f24521` }} className="shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold" style={{ color: '#f24521' }}>
                    {course.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {course.level} &nbsp; • &nbsp; {course.duration}
                  </Card.Subtitle>
                  <Card.Text>{course.description}</Card.Text>
                  <Button variant="outline-danger" size="sm">
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ForexEducation;
