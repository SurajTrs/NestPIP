import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const platforms = [
  {
    title: 'Mobile app',
    desc: 'Trade on-the-go with our award-winning app on iPhone and Android.',
    btn: 'MOBILE TRADING APP',
    image: '/images/mobile-app.png',
  },
  {
    title: 'MetaTrader',
    desc: 'Get the best out of the world’s most popular trading platform.',
    btn: 'METATRADER 5',
    image: '/images/metatrader.png',
  },
  {
    title: 'TradingView',
    desc: 'Trade your spread-only account on TradingView\'s web, mobile, or downloadable platforms.',
    btn: 'TRADINGVIEW',
    image: '/images/tradingview.png',
  },
];

const WebSeizeMarketsSection = () => {
  return (
    <section style={{ backgroundColor: '#fff4e5', padding: '4rem 0' }}>
      <Container>
        <h2 className="mb-5 text-center fw-bold" style={{ color: '#f24521' }}>
          It is time to seize the markets
        </h2>
        <Row>
          {platforms.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ x: -100 * (3 - index), opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 + index * 0.2 }}
              >
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold" style={{ color: '#f24521' }}>
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted">{item.desc}</Card.Text>
                    <Button
                      variant="outline-danger"
                      style={{ color: '#f24521', borderColor: '#f24521' }}
                    >
                      {item.btn}
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WebSeizeMarketsSection;
