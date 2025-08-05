import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CurrencyDollar, GraphUp, FileText, BarChart } from 'react-bootstrap-icons';

const data = [
  {
    icon: <CurrencyDollar size={40} color="#f24521" />,
    title: 'Pricing and charges',
    description: "Rest assured that we're always clear and transparent about our costs.",
    cta: 'OUR TRADE PRICES',
  },
  {
    icon: <GraphUp size={40} color="#f24521" />,
    title: 'Range of Markets',
    description: 'Trade 80+ FX pairs, stock CFDs, indices, commodities, and more.',
    cta: 'MARKETS TO TRADE',
  },
  {
    icon: <BarChart size={40} color="#f24521" />,
    title: 'Performance Analytics',
    description: 'Optimize strengths and limit weaknesses based on your trading behavior.',
    cta: 'PERFORMANCE ANALYTICS',
  },
  {
    icon: <FileText size={40} color="#f24521" />,
    title: 'Market analysis',
    description: 'Educate your trading decisions with our analysis of the latest market news.',
    cta: 'MARKET NEWS & ANALYSIS',
  },
];

const InterestedSection = () => {
  return (
    <section style={{ padding: '4rem 0', background: '#fff' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521' }}>
          You might also be interested in
        </h2>
        <Row>
          {data.map((item, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm border-0 text-center">
                <Card.Body>
                  <div className="mb-3">{item.icon}</div>
                  <Card.Title style={{ color: '#333', fontWeight: '600' }}>{item.title}</Card.Title>
                  <Card.Text style={{ fontSize: '0.95rem' }}>{item.description}</Card.Text>
                  <a href="#" style={{ color: '#f24521', fontWeight: '500' }}>
                    {item.cta}
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default InterestedSection;
