import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PipsExplanation = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6}>
            <h2 style={{ color: '#f24521', fontWeight: 'bold' }}>What are pips and how do they work?</h2>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              Pips are how you measure movement in a currency pair, standing for <strong>‘point in percentage’</strong>.
              Sometimes, you might hear pips referred to as ‘points’. The value of a pip changes depending on the pair you are trading.
            </p>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              In most forex pairs, one pip is equal to a single-digit move in the fourth decimal place (0.0001). So it’s equivalent to 1/100 of 1%.
              For example, if EUR/USD moves from <strong>1.1732</strong> to <strong>1.1737</strong>, it has gone up five pips.
            </p>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              In pairs including the Japanese yen (JPY), the second digit after the decimal is the pip.
              Here, a pip equals <strong>1/10 of 1%</strong>.
            </p>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              Using these small units enables traders to profit from relatively small price movements.
            </p>
            <Button variant="outline-dark" style={{ color: '#f24521', borderColor: '#f24521' }}>
              Learn more in our Trading Academy
            </Button>
          </Col>

      
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/images/pips-graphic.png" 
              alt="Pip movement illustration"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PipsExplanation;
