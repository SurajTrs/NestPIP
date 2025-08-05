import React from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';

const platforms = [
  {
    title: 'Web trading',
    description:
      'Our most popular desktop option. Take advantage of our award-winning platform with TradingView charts.',
    buttonText: 'Web Trader',
    image: '/images/web-trading.png', // Replace with actual image path
  },
  {
    title: 'MetaTrader',
    description:
      'For more advanced traders, get the best out of the world’s most popular trading platform.',
    buttonText: 'MetaTrader 5',
    image: '/images/metatrader.png', // Replace with actual image path
  },
  {
    title: 'TradingView',
    description:
      "Trade your standard account on TradingView's web, mobile, or downloadable platforms.",
    buttonText: 'TradingView',
    image: '/images/tradingview.png', // Replace with actual image path
  },
];

const SeizeMarketsSection = () => {
  return (
    <section style={{ backgroundColor: '#fff4e5', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521', fontWeight: 'bold' }}>
          It’s time to seize the markets
        </h2>
        {platforms.map((platform, index) => (
          <Row
            key={platform.title}
            className="align-items-center mb-5"
            style={{
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            }}
          >
            <Col md={6}>
              <img
                src={platform.image}
                alt={platform.title}
                className="img-fluid rounded shadow-sm"
              />
            </Col>
            <Col md={6}>
              <h3 style={{ color: '#f24521', fontWeight: '600' }}>{platform.title}</h3>
              <p style={{ color: '#000', fontSize: '1.1rem' }}>{platform.description}</p>
              <Button
                variant="dark"
                style={{
                  backgroundColor: '#f24521',
                  borderColor: '#f24521',
                  padding: '0.6rem 1.5rem',
                  fontWeight: 'bold',
                }}
              >
                {platform.buttonText}
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default SeizeMarketsSection;
