import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AccountSolutions = () => {
  return (
    <section style={{ backgroundColor: '#fff4ef', padding: '4rem 0', color: '#212529' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#f24521' }}>Flexible Account Solutions</h2>
        <p className="text-center mb-4">When you open an account with us, you are in control of your pricing.</p>
        <Row>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <h4 style={{ color: '#f24521' }}>Standard</h4>
                <p>For traditional traders, costs to trade is bid/ask spread.</p>
                <p><strong>FX Spreads:</strong> Variable spreads, EUR/USD as low as 1.0. <a href="#" style={{ color: '#f24521' }}>View spreads</a></p>
                <p><strong>Commissions:</strong> Only for equities</p>
                <p><strong>Volume Discounts:</strong> Multi-asset rebates on FX, Indices, Commodities, Metals, cryptocurrencies and Equities, up to $50 per million traded. <a href="#" style={{ color: '#f24521' }}>View cash rebates</a></p>
                <p><strong>Trading Platforms:</strong> NESTPIP.com & MetaTrader</p>
                <Button variant="outline-dark" style={{ borderColor: '#f24521', color: '#f24521' }}>Open a Standard Account</Button>
                <div className="mt-3">
                  <a href="#" style={{ color: '#f24521' }}>Learn more about standard accounts</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <h4 style={{ color: '#f24521' }}>RAW Spread Account</h4>
                <p>Major FX pairs as low as 0.0 with low commissions.</p>
                <p><strong>FX Spreads:</strong> Our tightest spreads, majors as low as 0.0. <a href="#" style={{ color: '#f24521' }}>View spreads</a></p>
                <p><strong>Commissions:</strong> Fixed $5 per $100k USD traded on FX</p>
                <p><strong>Volume Discounts:</strong> Multi-asset rebates on FX, Indices, Commodities, Metals, cryptocurrencies and Equities, up to $50 per million traded. <a href="#" style={{ color: '#f24521' }}>View cash rebates</a></p>
                <p><strong>Trading Platforms:</strong> FOREX.com & MetaTrader</p>
                <Button variant="outline-dark" style={{ borderColor: '#f24521', color: '#f24521' }}>Open a RAW Spread Account</Button>
                <div className="mt-3">
                  <a href="#" style={{ color: '#f24521' }}>Learn more about RAW Spread accounts</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AccountSolutions;
