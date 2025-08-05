import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaDesktop, FaApple, FaGooglePlay, FaGlobe } from 'react-icons/fa';

const connectOptions = [
  {
    title: 'Web',
    description: "Click on 'trade' to log in",
    icon: <FaGlobe size={32} />,
    btnText: 'Go to Web',
    link: '#',
  },
  {
    title: 'Desktop',
    description: 'Download',
    icon: <FaDesktop size={32} />,
    btnText: 'Download',
    link: '#',
  },
  {
    title: 'iPhone',
    description: 'Get the app',
    icon: <FaApple size={32} />,
    btnText: 'App Store',
    link: '#',
  },
  {
    title: 'Android',
    description: 'Get the app',
    icon: <FaGooglePlay size={32} />,
    btnText: 'Play Store',
    link: '#',
  },
];

const ConnectOptions: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#fff3e6', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521' }}>
          Choose how you connect to TradingView
        </h2>
        <Row className="g-4">
          {connectOptions.map((option, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div
                    className="mb-3"
                    style={{ color: '#f24521' }}
                  >
                    {option.icon}
                  </div>
                  <Card.Title className="mb-2" style={{ color: '#f24521' }}>
                    {option.title}
                  </Card.Title>
                  <Card.Text className="text-secondary mb-3">
                    {option.description}
                  </Card.Text>
                  <Button
                    variant="danger"
                    href={option.link}
                    style={{
                      backgroundColor: '#f24521',
                      border: 'none',
                    }}
                  >
                    {option.btnText}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ConnectOptions;
