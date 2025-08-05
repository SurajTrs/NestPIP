'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const highlightData = [
  {
    icon: '/icons/fx-trading-plan.png',
    title: 'Trading Plan',
    description:
      'Take advantage of Trading Plan and the suite of tools from Performance Analytics to track, measure and monitor your trades according to your goals. You set the details of the plan, we let you know if you\'re sticking to it.',
    button: 'Discover our Trading Plan',
  },
  {
    icon: '/icons/fx-playmaker.png',
    title: 'PlayMaker',
    description:
      'Get real-time feedback to make sure you stay on track with your trading strategy. PlayMaker can help you to reduce costly mistakes and improve performance.',
    button: 'Be in control with PlayMaker',
  },
  {
    icon: '/icons/fx-review.png',
    title: 'Review',
    description:
      'Review is part of Performance Analytics, giving you a comprehensive look at your trading, and can help you develop a deeper understanding of how you could improve it.',
    button: 'Learn from your trading history with Review',
  },
  {
    icon: '/icons/fx-gameplan.png',
    title: 'GamePlan',
    description:
      'GamePlan is a feature of Performance Analytics. Discover unique insights that can reveal your trading strengths and weaknesses with our exclusive technology.',
    button: 'Reveal your edge with GamePlan',
  },
];

const PerformanceHighlights: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{ color: '#f24521' }}>
          Discover the highlights of Performance Analytics
        </h2>
        <Row>
          {highlightData.map((item, index) => (
            <Col md={6} lg={6} className="mb-4" key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="me-3"
                    />
                    <h5 className="mb-0 fw-semibold" style={{ color: '#f24521' }}>
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-muted">{item.description}</p>
                  <Button variant="outline" style={{ borderColor: '#f24521', color: '#f24521' }}>
                    {item.button}
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

export default PerformanceHighlights;
