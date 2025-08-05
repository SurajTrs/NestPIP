'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ToolsEmpowerSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Text Content */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Tools That Empower You – Trade Smart with Advanced Analytics
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              Knowledge is power, and at NestPip, we equip you with cutting-edge tools to trade smarter:
            </p>

            <ul style={{ fontSize: '0.95rem', color: '#555' }} className="ps-3">
              <li><strong style={{ color: '#f24521' }}>Real-time Market News</strong></li>
              <li><strong style={{ color: '#f24521' }}>Economic Calendar</strong></li>
              <li><strong style={{ color: '#f24521' }}>AI-Powered Forex Signals</strong></li>
              <li><strong style={{ color: '#f24521' }}>Customizable Technical Indicators</strong></li>
              <li><strong style={{ color: '#f24521' }}>Risk Management Tools</strong></li>
            </ul>

            <p className="mt-3" style={{ color: '#185234', fontWeight: 500 }}>
              Plus, access our rich learning hub—featuring trading guides, video tutorials, and educational resources to sharpen your edge.
            </p>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/images/tools-analytics.png" // Update with actual image path
              alt="Advanced Trading Tools"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ToolsEmpowerSection;
