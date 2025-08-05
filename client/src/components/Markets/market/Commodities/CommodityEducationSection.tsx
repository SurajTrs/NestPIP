'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CommodityEducationSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Educational Resources at NestPip
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              We believe informed traders are successful traders. That’s why NestPip provides comprehensive educational tools to help you master commodity trading:
            </p>
            <ul className="ps-3" style={{ fontSize: '0.95rem', color: '#555' }}>
              <li>
                <strong style={{ color: '#f24521' }}>Step-by-step tutorials</strong> on commodity trading basics and platforms
              </li>
              <li>
                <strong style={{ color: '#f24521' }}>Live webinars</strong> hosted by seasoned market experts
              </li>
              <li>
                <strong style={{ color: '#f24521' }}>Educational articles</strong> covering fundamentals, technicals, and risk management
              </li>
              <li>
                <strong style={{ color: '#f24521' }}>Market insights</strong> and daily trading signals to guide your decisions
              </li>
            </ul>
            <p className="mt-3 fw-medium" style={{ color: '#185234' }}>
              With our expert knowledge base, you’ll be empowered to trade commodities with confidence and clarity.
            </p>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/images/commodity-education.png" // update with your actual image
              alt="Educational Resources"
              className="img-fluid rounded-3 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommodityEducationSection;
