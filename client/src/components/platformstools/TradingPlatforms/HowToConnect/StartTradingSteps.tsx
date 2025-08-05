import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const steps = [
  {
    number: 1,
    text: "If you haven’t done so already, open a FOREX.com account. You will not be able to log into TradingView with a MetaTrader account.",
  },
  {
    number: 2,
    text: "Visit TradingView.com and create a TradingView login with the service level that best suits your needs. A free version is available.",
  },
  {
    number: 3,
    text: "After you have logged into TradingView, go to Products, Supercharts, Trading Panel, and select Connect under FOREX.com.",
  },
  {
    number: 4,
    text: "Enter your FOREX.com username and password to connect.",
  },
];

const StartTradingSteps = () => {
  return (
    <section style={{ backgroundColor: '#fff3e6', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521' }}>
          How to Start Trading Your FOREX.com Account on TradingView
        </h2>
        <Row className="g-4">
          {steps.map((step, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="d-flex">
                  <div
                    style={{
                      minWidth: '40px',
                      height: '40px',
                      backgroundColor: '#f24521',
                      borderRadius: '50%',
                      color: 'white',
                      textAlign: 'center',
                      lineHeight: '40px',
                      fontWeight: 'bold',
                      marginRight: '1rem',
                    }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <p className="text-secondary mb-0">{step.text}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StartTradingSteps;
