import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SpreadsExecution = () => {
  const data = [
    { label: 'EUR/USD spreads as low as', value: '1.0 pips' },
    { label: 'GBP/USD spreads as low as', value: '1.1 pips' },
    { label: 'UK 100 spreads as low as', value: '1.0 pips' },
  ];

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '4rem 0' }}>
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-center" style={{ color: '#f24521' }}>
              Spreads and Trade Execution
            </h2>
            <p className="text-center text-secondary small">
              Enjoy fast order execution and competitive pricing during key market sessions.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {data.map((item, index) => (
            <Col key={index} md={4} className="text-center mb-4">
              <div
                className="p-4 rounded shadow-sm"
                style={{
                  backgroundColor: '#FFF7F0',
                  borderLeft: '6px solid #006400',
                  minHeight: '150px',
                }}
              >
                <p className="text-secondary small mb-2">{item.label}</p>
                <h3 className="fw-bold" style={{ color: '#f24521' }}>
                  {item.value}
                </h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SpreadsExecution;
