import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const NestPipMt5Markets: React.FC = () => {
  const markets = [
    {
      title: 'Forex',
      description:
        'Trade more than 50 major, minor, and exotic currency pairs with very small spreads.',
      icon: '💱',
    },
    {
      title: 'Indices',
      description:
        'Think about the most popular stock market indexes, such as the S&P 500, NASDAQ, FTSE 100, DAX 40, and others.',
      icon: '📈',
    },
    {
      title: 'Commodities',
      description:
        'Trade gold, silver, oil, and agricultural assets with institutional-grade execution.',
      icon: '⛏️',
    },
    {
      title: 'Stocks',
      description:
        'You can get global stock CFDs directly on MT5 from US, UK, and European exchanges.',
      icon: '🏦',
    },
    {
      title: '₿ Cryptocurrencies',
      description:
        'You can buy and sell Bitcoin, Ethereum, Litecoin, and other cryptocurrencies using CFD trading.',
      icon: '₿',
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{ color: '#f24521' }}>
          What Can You Buy and Sell on NestPip MT5?
        </h2>
        <Row className="g-4 justify-content-center">
          {markets.map(({ title, description, icon }, idx) => (
            <Col key={idx} md={6} lg={4}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  borderColor: '#f24521',
                  borderWidth: '2px',
                  borderRadius: '15px',
                }}
              >
                <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                  <div
                    style={{
                      fontSize: '3rem',
                      marginBottom: '1rem',
                      color: '#f24521',
                    }}
                    aria-label={`${title} icon`}
                    role="img"
                  >
                    {icon}
                  </div>
                  <Card.Title
                    style={{ color: '#f24521', fontWeight: '700', fontSize: '1.25rem' }}
                  >
                    {title}
                  </Card.Title>
                  <Card.Text style={{ color: '#333', marginTop: '0.5rem' }}>
                    {description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NestPipMt5Markets;
