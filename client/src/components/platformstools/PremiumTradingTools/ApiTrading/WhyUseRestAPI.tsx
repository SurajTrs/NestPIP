import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import {
  ShieldCheck,
  RefreshCw,
  ServerCog,
  ArrowRightCircle,
} from 'lucide-react';

const WhyUseRestAPI = () => {
  const themeColor = '#f24521';

  const features = [
    {
      icon: <ServerCog color={themeColor} size={32} />,
      title: 'Know the acronym',
      description:
        'REST stands for "Representational State Transfer" and utilizes HTTP interactions to communicate between client and server in a user-friendly way.',
    },
    {
      icon: <ArrowRightCircle color={themeColor} size={32} />,
      title: 'Wide range of utility',
      description:
        'REST API’s use of HTTP means it can work with any standard programming language to retrieve, send, update, and delete data.',
    },
    {
      icon: <RefreshCw color={themeColor} size={32} />,
      title: 'Constantly learning',
      description:
        'REST is cacheable, meaning the API can cache resources to improve future performance.',
    },
    {
      icon: <ShieldCheck color={themeColor} size={32} />,
      title: 'Secure communication channels',
      description:
        'REST features stateless client-server communications that ensure no information is being stored between interactions.',
    },
  ];

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={10} className="text-center">
            <h2 style={{ color: themeColor, fontWeight: 'bold' }}>
              Why Use REST API?
            </h2>
            <p className="mt-3" style={{ fontSize: '1.1rem', color: '#444' }}>
              REST API enables you to automate your trading by connecting your algo strategies with our deep liquidity.
            </p>
            <Button
              variant="outline-light"
              style={{
                backgroundColor: themeColor,
                borderColor: themeColor,
                marginTop: '1.5rem',
                color: '#fff',
              }}
            >
              Open an account
            </Button>
          </Col>
        </Row>

        <Row>
          {features.map((item, idx) => (
            <Col md={6} className="mb-4" key={idx}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex">
                  <div className="me-3">{item.icon}</div>
                  <div>
                    <h5 style={{ color: '#222', fontWeight: 600 }}>{item.title}</h5>
                    <p style={{ fontSize: '0.95rem', color: '#555' }}>{item.description}</p>
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

export default WhyUseRestAPI;
