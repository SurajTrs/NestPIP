import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CommodityTrading = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src="/assets/commodity-trading-banner.png"
              alt="Commodity Trading Visual"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>

          {/* Right Content */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color:'#f24521' }}>What is Commodity Trading?</h2>
            <p className="text-secondary mb-3" style={{ fontSize: '1rem' }}>
              Commodity trading involves buying and selling raw materials like metals, energy, and agricultural products.
              These physical goods are traded on global exchanges, and their prices are influenced by supply and demand,
              geopolitical factors, and economic trends.
            </p>
            <p className="text-secondary mb-4" style={{ fontSize: '1rem' }}>
              With <strong>NestPip</strong>, you can speculate on the price movements of popular commodities without
              owning the physical assets. Our platform simplifies commodity trading and provides you with access to:
            </p>
            <ul className=" mb-4" style={{ fontSize: '1rem', paddingLeft: '1.2rem', color:'#f24521' }}>
              <li>📈 Real-time market data</li>
              <li>📊 Advanced charting tools</li>
              <li>⚡ Instant order execution</li>
            </ul>
            <p className="text-secondary" style={{ fontSize: '1rem' }}>
              Whether you’re an experienced trader or just starting out, NestPip helps you understand market dynamics and trade with confidence.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommodityTrading;
