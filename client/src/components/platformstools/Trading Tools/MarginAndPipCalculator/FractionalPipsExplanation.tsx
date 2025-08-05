import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const FractionalPipsExplanation = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6}>
            <h2 style={{ color: '#f24521', fontWeight: 'bold' }}>
              What are Fractional Pips?
            </h2>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              In addition to the standard pip, most forex brokers also offer{' '}
              <strong>fractional pip pricing</strong> by adding an extra fifth decimal place to their quotes.
            </p>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              This allows for <strong>tighter spreads</strong> and gives traders a more detailed view of currency price movements.
              For example, if EUR/USD moves from <strong>1.17321</strong> to <strong>1.17326</strong>, it has moved five fractional pips.
            </p>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              Fractional pips are especially helpful for high-frequency and scalping strategies, where precision is key.
            </p>
            <Button
              variant="outline-dark"
              style={{ color: '#f24521', borderColor: '#f24521' }}
            >
              Learn more about trading forex
            </Button>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/images/fractional-pips.png" // Use your updated illustration here
              alt="Fractional pip illustration"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 0 20px rgba(0,0,0,0.1)',
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FractionalPipsExplanation;
