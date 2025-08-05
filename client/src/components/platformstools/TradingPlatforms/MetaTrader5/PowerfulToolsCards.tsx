import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PowerfulToolsCards: React.FC = () => {
  const tools = [
    {
      title: 'Expert Advisors',
      description:
        'MT5 lets you use advanced automated strategies. You can build your EA using MQL5 or download it from a huge marketplace.',
      icon: '🤖',
    },
    {
      title: 'Tester of Strategies',
      description:
        "Use MT5's multi-threaded testing engine to backtest your custom strategies with data from the past.",
      icon: '🧪',
    },
    {
      title: 'Calendar of Economic Events',
      description:
        "With MT5's built-in calendar, you can keep an eye on world news and events from your terminal.",
      icon: '📅',
    },
    {
      title: 'Managing Risk',
      description:
        'Use stop-loss, trailing stop, and take-profit tools to control your exposure. Set up alerts to automatically check price triggers.',
      icon: '🛡️',
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{ color: '#f24521' }}>
          Powerful Tools for Smarter Trading
        </h2>
        <Row className="g-4 justify-content-center">
          {tools.map(({ title, description, icon }, idx) => (
            <Col key={idx} md={6} lg={3}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  borderColor: '#f24521',
                  borderWidth: '2px',
                  borderRadius: '15px',
                }}
              >
                <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                  <div
                    style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      color: '#f24521',
                    }}
                    aria-label={`${title} icon`}
                    role="img"
                  >
                    {icon}
                  </div>
                  <Card.Title
                    style={{ color: '#f24521', fontWeight: '700', fontSize: '1.25rem' }}
                  >
                    {title}
                  </Card.Title>
                  <Card.Text style={{ color: '#333', marginTop: '0.5rem' }}>
                    {description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PowerfulToolsCards;
