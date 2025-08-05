import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutForex = () => {
  return (
    <div style={{ backgroundColor: '#fff3e9', color: '#000' }}>
      {/* Hero Section */}
      <section className="py-5 text-center">
        <Container>
          <h1 style={{ color: '#f24521' }}>FOREX.com Global Key Figures</h1>
          <p className="lead">Your trusted trading partner since 2001</p>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center">
            <Col md={3}><h2 style={{ color: '#f24521' }}>400k+</h2><p>Customers</p></Col>
            <Col md={3}><h2 style={{ color: '#f24521' }}>0.003s</h2><p>Avg Execution Speed*</p></Col>
            <Col md={3}><h2 style={{ color: '#f24521' }}>20+</h2><p>Countries Served</p></Col>
            <Col md={3}><h2 style={{ color: '#f24521' }}>4700+</h2><p>Staff</p></Col>
          </Row>
          <p className="text-center mt-3" style={{ fontSize: '0.9rem' }}>*Refers to FX executions for the FOREX.com group. Key figures as of May 2025</p>
        </Container>
      </section>

      {/* Timeline Intro */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 style={{ color: '#f24521' }}>On your side since 2001</h2>
              <p>
                A lot can happen in over two decades. We’ve seen booms and busts and presidents come and go, but
                throughout that time we’ve remained steadfast, providing traders with the stability and opportunities
                they need to make their mark on the financial markets.
              </p>
              <Button variant="outline-dark">Show Timeline</Button>
            </Col>
            <Col md={6}>
              <img src="/images/timeline-illustration.png" alt="Timeline" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Awards and StoneX Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src="/images/stonex-100.png" alt="StoneX Logo 100" className="img-fluid" />
            </Col>
            <Col md={6}>
              <h3 style={{ color: '#f24521' }}>StoneX Group Inc.</h3>
              <p>
                We are a wholly-owned subsidiary of StoneX Group Inc. – a NASDAQ-listed company with assets of
                $7.8 billion that provides an institutional-grade financial services network to connect people
                to the global markets.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Financial Strength */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center flex-md-row-reverse">
            <Col md={6}>
              <img src="/images/financial-strength.png" alt="Financial Strength" className="img-fluid" />
            </Col>
            <Col md={6}>
              <h4 style={{ color: '#f24521' }}>Financial Strength</h4>
              <ul>
                <li>Total equity capital: over $1.7 billion</li>
                <li>Total customer assets: over $7.8 billion</li>
              </ul>
              <Button variant="outline-dark">View StoneX Investor Relations</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Payment Options */}
      <section className="py-5 text-center">
        <Container>
          <h4 style={{ color: '#f24521' }}>Deposit and Withdrawal Options</h4>
          <img
            src="/images/payment-methods.png"
            alt="Payment Methods"
            className="img-fluid my-3"
          />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={4}>
              <h5 style={{ color: '#f24521' }}>Why Forex.com?</h5>
              <p>See why over 1,000,000† traders choose us as their trusted provider.</p>
            </Col>
            <Col md={4}>
              <h5 style={{ color: '#f24521' }}>Trading Platforms</h5>
              <p>Access thousands of markets via our mobile and web platforms.</p>
            </Col>
            <Col md={4}>
              <h5 style={{ color: '#f24521' }}>Help & Support</h5>
              <p>Got a question? Our support team is ready to help.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutForex;
