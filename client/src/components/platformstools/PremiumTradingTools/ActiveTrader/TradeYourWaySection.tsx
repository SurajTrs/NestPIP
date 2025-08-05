'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const TradeYourWaySection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#000000', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
     

          <Col md={5} className="text-center mt-4 mt-md-0">
            <img 
              src="/images/trade-platforms.png" 
              alt="Trading Platforms" 
              className="img-fluid rounded" 
              style={{ maxHeight: '300px' }} 
            />
          </Col>
               <Col md={7}>
            <h2 className="fw-bold mb-3" style={{ color: '#f24521' }}>
              Trade your way
            </h2>
            <p className="fs-5 text-white">
              The balance between flexibility, performance, and speed in our trading platforms means you do not have to compromise. 
              Take advantage of innovative features, charting tools, and more.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Button variant="danger" style={{ backgroundColor: '#f24521', border: 'none' }}>
                Learn more about our platforms
              </Button>
              <Button variant="outline-danger" style={{ color: '#f24521', borderColor: '#f24521' }}>
                Test drive our platforms
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TradeYourWaySection;
