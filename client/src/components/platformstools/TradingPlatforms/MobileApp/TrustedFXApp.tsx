import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  Zap,
  Wrench,
  Users,
} from 'lucide-react';

const TrustedFXApp = () => {
  return (
    <section style={{ backgroundColor: '#fff3e6', padding: '4rem 0' }}>
      <Container>
        {/* Heading and Description */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 style={{ color: '#f24521' }}>An FX app from a trusted provider</h2>
            <p className="text-dark fs-5">
              Trade with confidence and benefit from the reliability of a trusted broker with a proven record of stability, security and strength.
            </p>
            <Button
              variant="danger"
              style={{ backgroundColor: '#f24521', border: 'none', marginTop: '1rem' }}
            >
              Open an Account
            </Button>
          </Col>
          <Col md={6}>
            {/* Optional image or illustration */}
            <img
              src="/images/fx-trusted-app.png"
              alt="Trusted FX App"
              className="img-fluid"
            />
          </Col>
        </Row>

        {/* Feature Cards */}
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0 text-center p-4">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{ backgroundColor: '#f24521', width: 60, height: 60 }}
              >
                <Zap color="#fff" size={30} />
              </div>
              <h5 className="text-dark">Reliable, consistent trade execution</h5>
              <p className="text-secondary">
                Peace of mind that your trades are executed swiftly, with a 100%* execution rate of less than a second.
              </p>
              <a href="#" className="text-decoration-none" style={{ color: '#f24521' }}>
                EXECUTION SCORECARDS
              </a>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm border-0 text-center p-4">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{ backgroundColor: '#f24521', width: 60, height: 60 }}
              >
                <Wrench color="#fff" size={30} />
              </div>
              <h5 className="text-dark">Sophisticated trader tools</h5>
              <p className="text-secondary">
                Take your trading to the next level with state-of-the-art tools to assist your command of the markets.
              </p>
              <a href="#" className="text-decoration-none" style={{ color: '#f24521' }}>
                TRADING TOOLS
              </a>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm border-0 text-center p-4">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{ backgroundColor: '#f24521', width: 60, height: 60 }}
              >
                <Users color="#fff" size={30} />
              </div>
              <h5 className="text-dark">Professional guidance & support</h5>
              <p className="text-secondary">
                Our experienced staff are on hand to assist you 24 hours a day, 5 days a week.
              </p>
              <a href="#" className="text-decoration-none" style={{ color: '#f24521' }}>
                HELP AND SUPPORT
              </a>
            </Card>
          </Col>
        </Row>

        {/* Disclaimer */}
        <div className="mt-5 text-muted small">
          <p>
            *Refers to trade executions for GAIN Global Markets Inc. Please note that multiple factors may impact execution speed...
          </p>
          <p>
            Market volatility, volume, and system availability may delay trade executions. Price can change quickly in fast market conditions...
          </p>
        </div>
      </Container>
    </section>
  );
};

export default TrustedFXApp;
