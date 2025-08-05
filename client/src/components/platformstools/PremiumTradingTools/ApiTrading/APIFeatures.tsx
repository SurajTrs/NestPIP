import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BarChart2, LineChart, Wrench, Layers } from 'lucide-react'; // Using Lucide icons

const APIFeatures = () => {
  const features = [
    {
      title: 'Automated Trading Strategies',
      description:
        'Execute trades with a full range of orders for thousands of markets against live streaming prices using your own algorithms or trading systems.',
      icon: <BarChart2 color="#007bff" size={32} />,
    },
    {
      title: 'Charting and Analysis',
      description:
        'Strengthen your strategy with historical market data for deeper technical analysis.',
      icon: <LineChart color="#007bff" size={32} />,
    },
    {
      title: 'Easily Compatible Solution',
      description:
        'Code against the API using any network accessible programming language from Perlscript, C++, Python, or VB.NET.',
      icon: <Wrench color="#007bff" size={32} />,
    },
    {
      title: 'Integrated Account Management',
      description:
        'View your current active orders, account balance, available margin, open positions, and historical trades in real-time.',
      icon: <Layers color="#007bff" size={32} />,
    },
  ];

  return (
    <section style={{ backgroundColor: '#f8f9fa', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521', fontWeight: 600 }}>
          Range of REST API Functionality
        </h2>
        <Row>
          {features.map((feature, idx) => (
            <Col md={6} className="mb-4" key={idx}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex">
                  <div className="me-3">{feature.icon}</div>
                  <div>
                    <h5 style={{ color: '#333' }}>{feature.title}</h5>
                    <p style={{ fontSize: '0.95rem', color: '#555' }}>{feature.description}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Optional Platform Image */}
        <div className="text-center mt-5">
          <h4 className="mb-3" style={{ color: '#f24521' }}>Our Trading Platforms</h4>
          <img
            src="/images/api-platform.png"
            alt="API Trading Platform"
            className="img-fluid"
            style={{ maxHeight: 350, borderRadius: '8px', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}
          />
        </div>
      </Container>
    </section>
  );
};

export default APIFeatures;
