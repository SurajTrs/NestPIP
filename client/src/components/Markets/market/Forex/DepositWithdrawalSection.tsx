'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DepositWithdrawalSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
             <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/images/payment-options.png" // Replace with your actual image path
              alt="Deposit and Withdrawal Options"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
          {/* Left Text Content */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Deposit & Withdrawal Options
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              We support multiple secure payment methods:
            </p>
            <ul style={{ fontSize: '1rem', color: '#555' }}>
              <li>Credit/Debit Cards</li>
              <li>Net Banking</li>
              <li>UPI / Paytm / Google Pay</li>
              <li>International Wire Transfers</li>
              <li>Crypto Wallets (USDT, BTC, ETH)</li>
            </ul>
            <p style={{ marginTop: '1rem', fontWeight: '500', color: '#185234' }}>
              Withdrawals are processed within 12–24 hours with no hidden charges.
            </p>
          </Col>

          {/* Right Image */}
         
        </Row>
      </Container>
    </section>
  );
};

export default DepositWithdrawalSection;
