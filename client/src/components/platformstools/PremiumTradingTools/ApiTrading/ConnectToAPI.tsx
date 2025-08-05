import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BookOpen, PlayCircle, MessageCircle, Code2 } from 'lucide-react';

const ConnectToAPI = () => {
  const themeColor = '#f24521';

  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        {/* Header */}
        <Row className="mb-5 text-center">
          <Col md={12}>
            <h2 style={{ color: themeColor, fontWeight: 'bold' }}>
              Connect to FOREX.com’s API
            </h2>
          </Col>
        </Row>

        {/* Webinars + Tutorials */}
        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="d-flex">
                <div className="me-3">
                  <PlayCircle color={themeColor} size={36} />
                </div>
                <div>
                  <h5 className="fw-bold">Webinars</h5>
                  <p style={{ color: '#555' }}>
                    Attend live webinars to learn about API trading, integration, and automation best practices.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="d-flex">
                <div className="me-3">
                  <BookOpen color={themeColor} size={36} />
                </div>
                <div>
                  <h5 className="fw-bold">Tutorials</h5>
                  <p style={{ color: '#555' }}>
                    Explore step-by-step tutorials to guide you through REST API usage and integration.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Getting Started Steps */}
        <Row className="mb-5">
          <Col md={12}>
            <h4 style={{ color: themeColor, fontWeight: 600 }}>Getting Started</h4>
            <ol className="mt-3" style={{ fontSize: '1.05rem', color: '#444' }}>
              <li className="mb-2">Apply for an account</li>
              <li className="mb-2">
                Request access to the API from our customer service team
              </li>
              <li className="mb-2">
                Connect directly to our REST API and develop, test, and automate your trading strategies
              </li>
            </ol>
            <Button
              style={{
                backgroundColor: themeColor,
                borderColor: themeColor,
                marginTop: '1rem',
              }}
            >
              Open an account
            </Button>
          </Col>
        </Row>

        {/* API Support */}
        <Row>
          <Col md={12}>
            <h4 style={{ color: themeColor, fontWeight: 600 }}>API Support</h4>
          </Col>

          <Col md={6} className="mt-3">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="d-flex">
                <div className="me-3">
                  <Code2 color={themeColor} size={36} />
                </div>
                <div>
                  <p style={{ fontSize: '1rem', color: '#444' }}>
                    • Access our documentation portal for sample code, support tools, and more.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mt-3">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="d-flex">
                <div className="me-3">
                  <MessageCircle color={themeColor} size={36} />
                </div>
                <div>
                  <p style={{ fontSize: '1rem', color: '#444' }}>
                    • Connect with our dedicated API support specialists to get answers to your questions, account maintenance, and other help.
                  </p>
                  <Button
                    variant="outline-light"
                    style={{
                      backgroundColor: themeColor,
                      borderColor: themeColor,
                      color: '#fff',
                      marginTop: '0.5rem',
                    }}
                  >
                    Contact us
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ConnectToAPI;
