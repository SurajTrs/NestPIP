'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WhatAreCryptoCurrency: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src="/images/what-are-cryptos.png"
              alt="Cryptocurrency Illustration"
              className="img-fluid"
              style={{
                maxHeight: '360px',
                borderRadius: '16px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              }}
            />
          </Col>

          {/* Right Text */}
          <Col md={6}>
            <h2
              style={{
                color: '#f24521',
                fontWeight: 700,
                fontSize: '2.4rem',
                marginBottom: '1.2rem',
              }}
            >
              What Are Cryptocurrencies?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7 }}>
              Cryptocurrencies are digital or virtual assets designed to function as a medium of
              exchange. They use advanced cryptographic techniques to secure transactions and are
              decentralized, meaning they operate independently of any central bank or authority.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7 }}>
              Popular cryptocurrencies include <strong>Bitcoin (BTC)</strong>,{' '}
              <strong>Ethereum (ETH)</strong>, <strong>Ripple (XRP)</strong>, and many others.
              These assets are stored on a blockchain — a transparent and immutable digital ledger.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7 }}>
              With Nestpip, you can access the crypto markets through powerful trading tools,
              without the complexity of managing wallets or owning the underlying asset directly.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatAreCryptoCurrency;
