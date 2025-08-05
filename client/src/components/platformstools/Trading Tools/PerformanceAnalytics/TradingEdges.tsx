'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const edgeData = [
  {
    title: 'Strategy Edges',
    description: 'Analyze your P&L, Performance, Win Ratio and more.',
    icon: '/icons/strategy-edges.png',
  },
  {
    title: 'Timing Edges',
    description: 'Break down your trading performance by timeframes.',
    icon: '/icons/timing-edges.png',
  },
  {
    title: 'Psychology Edges',
    description: 'Discover how psychology affects your trading habits.',
    icon: '/icons/psychology-edges.png',
  },
];

const TradingEdges: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-4" style={{ color: '#f24521' }}>
          Discover your trading edges
        </h2>
        <p className="text-center text-muted mb-5">
          Analyze your performance, timing, and psychology with these quick step-by-step videos.
        </p>
        <Row>
          {edgeData.map((edge, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="text-center h-100 shadow-sm border-0">
                <Card.Body>
                  <img
                    src={edge.icon}
                    alt={edge.title}
                    width={64}
                    height={64}
                    className="mb-3"
                  />
                  <h5 style={{ color: '#f24521' }}>{edge.title}</h5>
                  <p className="text-muted">{edge.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TradingEdges;
