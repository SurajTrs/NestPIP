'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChartLine, FaMobileAlt, FaBolt, FaShieldAlt } from 'react-icons/fa';

const BestWallStreetPlatform = () => {
  return (
    <div className="best-platform-section py-5" style={{ backgroundColor: '#fff3e6', color: '#000' }}>
      <Container>
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#f24521' }}>
          What to Look for in the Best Wall Street Index Platform
        </h2>

        <Row className="align-items-center mb-5">
          <Col lg={6} className="order-lg-1 order-2">
            <h4 style={{ color: '#f24521' }}>
              <FaChartLine className="me-2" />Charts and Analysis in Real Time
            </h4>
            <ul>
              <li>Interactive candlestick and line charts</li>
              <li>Technical indicators like RSI, MACD, and Bollinger Bands</li>
              <li>AI-powered chart pattern recognition</li>
            </ul>
          </Col>
          <Col lg={6} className="order-lg-2 order-1 mb-4 mb-lg-0">
            <img
              src="/images/wallstreet-charts.png"
              alt="Real-time charts"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img
              src="/images/fast-execution.png"
              alt="Fast execution"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={6}>
            <h4 style={{ color: '#f24521' }}>
              <FaBolt className="me-2" />Very Fast Action
            </h4>
            <ul>
              <li>Instant order execution with no re-quotes</li>
              <li>Ultra-low latency for scalpers and day traders</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col lg={6} className="order-lg-1 order-2">
            <h4 style={{ color: '#f24521' }}>
              <FaShieldAlt className="me-2" />Better Risk Management
            </h4>
            <ul>
              <li>Trailing stop, stop-loss & take-profit settings</li>
              <li>Real-time position size & margin calculations</li>
            </ul>
          </Col>
          <Col lg={6} className="order-lg-2 order-1 mb-4 mb-lg-0">
            <img
              src="/images/risk-management.png"
              alt="Risk management tools"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img
              src="/images/mobile-trading.png"
              alt="Mobile trading"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={6}>
            <h4 style={{ color: '#f24521' }}>
              <FaMobileAlt className="me-2" />Mobile Trading That is Fully Integrated
            </h4>
            <ul>
              <li>Trade directly from your mobile device</li>
              <li>Push notifications for price alerts and market news</li>
              <li>Real-time portfolio updates and one-tap trading</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BestWallStreetPlatform;
