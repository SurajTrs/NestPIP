'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Zap, ShieldCheck, Wrench, MessageSquareMore } from 'lucide-react';

const WhyForex = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#000', color: '#fff' }}>
      <Container>
        <h2 className="text-center fw-bold mb-4" style={{ color: '#f24521' }}>
          Why FOREX.com?
        </h2>
        <p className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
          A lot can happen in 20 years. But throughout that time we’ve remained steadfast, providing traders with the stability and opportunities they need to make their mark on the financial markets.
        </p>

        <div className="text-center mb-5">
          <Button variant="light">Open an Account</Button>
        </div>

        <Row className="g-4">
          <Col md={6} lg={3}>
            <Card className="h-100 text-center p-3" style={{ backgroundColor: '#111', color: '#fff' }}>
              <Zap size={40} style={{ color: '#f24521' }} className="mx-auto mb-3" />
              <Card.Title style={{ color: '#f24521' }}>Reliable, consistent trade execution</Card.Title>
              <Card.Text>
                Peace of mind that your trades are executed swiftly, with a <strong>100%*</strong> execution rate of less than a second.
              </Card.Text>
              <a href="#" className="text-decoration-none" style={{ color: '#f24521' }}>
                Execution Scorecards
              </a>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center p-3" style={{ backgroundColor: '#111', color: '#fff' }}>
              <ShieldCheck size={40} style={{ color: '#f24521' }} className="mx-auto mb-3" />
              <Card.Title style={{ color: '#f24521' }}>Strength and Security</Card.Title>
              <Card.Text>
                As part of <strong>StoneX Group Inc.</strong>, a NASDAQ-traded company, we bring financial stability and innovation.
              </Card.Text>
              <a href="#" className="text-decoration-none" style={{ color: '#f24521' }}>
                More About StoneX
              </a>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center p-3" style={{ backgroundColor: '#111', color: '#fff' }}>
              <Wrench size={40} style={{ color: '#f24521' }} className="mx-auto mb-3" />
              <Card.Title style={{ color: '#f24521' }}>Sophisticated Trader Tools</Card.Title>
              <Card.Text>
                Elevate your strategy with powerful, state-of-the-art tools designed to improve decision-making.
              </Card.Text>
              <a href="#" className="text-decoration-none" style={{ color: '#f24521' }}>
                Explore Tools
              </a>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 text-center p-3" style={{ backgroundColor: '#111', color: '#fff' }}>
              <MessageSquareMore size={40} style={{ color: '#f24521' }} className="mx-auto mb-3" />
              <Card.Title style={{ color: '#f24521' }}>24/5 Expert Support</Card.Title>
              <Card.Text>
                Our experienced team is here for you around the clock to support your trading journey.
              </Card.Text>
              <a href="#" className="text-decoration-none" style={{ color: '#f24521' }}>
                Help & Support
              </a>
            </Card>
          </Col>
        </Row>

        <p className="mt-5 small" style={{ fontSize: '0.85rem', color: '#aaa' }}>
          *Refers to trade executions for GAIN Global Markets Inc. Data excludes MetaTrader and non-standard orders. Multiple factors like market conditions, platform, and connectivity can affect speed.
        </p>
      </Container>
    </section>
  );
};

export default WhyForex;
