import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Know your order',
    description:
      'Know your pip value and margin requirement at a glance and set orders based on P&L, price or pips.',
    icon: <BarChart3 size={32} color="#f24521" />,
    image: '/images/know-your-order.png', // Replace with real image
  },
  {
    title: 'TradingView',
    description:
      'Get advanced charting and drawing tools with our TradingView integration for technical analysis and clarity.',
    icon: <BarChart3 size={32} color="#f24521" />,
    image: '/images/tradingview.png',
  },
  {
    title: 'Performance Analytics',
    description:
      'Analyze your trading habits and behaviors to improve decision-making with detailed trade performance insights.',
    icon: <BarChart3 size={32} color="#f24521" />,
    image: '/images/performance-analytics.png',
  },
  {
    title: 'FXCA Platform Comparison',
    description:
      'Compare our proprietary FXCA platform with other trading tools to choose what works best for you.',
    icon: <BarChart3 size={32} color="#f24521" />,
    image: '/images/fxca-comparison.png',
  },
];

const FullyEquippedTrading = () => {
  return (
    <section style={{ backgroundColor: '#fff4e5', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521', fontWeight: 700 }}>
          Fully Equipped Trading
        </h2>

        {features.map((item, idx) => (
          <Row
            key={idx}
            className="align-items-center mb-5"
            style={{ flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}
          >
            <Col md={6}>
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid rounded shadow-sm"
              />
            </Col>
            <Col md={6}>
              <Card className="border-0" style={{ backgroundColor: 'transparent' }}>
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    {item.icon}
                    <h5 className="mb-0 ms-3" style={{ color: '#f24521', fontWeight: 600 }}>
                      {item.title}
                    </h5>
                  </div>
                  <Card.Text style={{ fontSize: '1.05rem', color: '#333' }}>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default FullyEquippedTrading;
