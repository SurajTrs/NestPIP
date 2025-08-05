'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCoins, FaCheckCircle, FaClock, FaBolt, FaGlobe } from 'react-icons/fa';

const CryptoExplained: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', color: '#333', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6}>
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Why Trade Cryptocurrencies on Nestpip?
            </h2>

            {[
              {
                icon: <FaCoins />,
                title: 'Wide Range of Digital Assets',
                desc: 'Access 30+ popular cryptocurrencies including BTC, ETH, XRP, LTC, DOGE, SOL, ADA, and more. Diversify your crypto exposure easily.',
              },
              {
                icon: <FaCheckCircle />,
                title: 'Trusted and Regulated Broker',
                desc: 'Nestpip is part of StoneX Group Inc. (NASDAQ: SNEX) and regulated by CFTC, FCA, and IIROC—ensuring security and compliance.',
              },
              {
                icon: <FaClock />,
                title: '24/7 Market Access',
                desc: 'Trade crypto around the clock. Nestpip enables 24/7 trading with real-time access anytime, anywhere.',
              },
              {
                icon: <FaBolt />,
                title: 'Leverage Trading Options',
                desc: 'Trade with up to 1:2 leverage for retail users (higher for pros). Amplify gains responsibly with controlled risk.',
              },
              {
                icon: <FaBolt />,
                title: 'Low Spreads & Fast Execution',
                desc: 'Tight spreads from 0.0 pips and lightning-fast execution ensure your strategy performs with precision.',
              },
              {
                icon: <FaGlobe />,
                title: 'All-in-One Platform',
                desc: 'Trade crypto, forex, stocks, indices, and commodities—all on one unified Nestpip platform.',
              },
            ].map(({ icon, title, desc }, idx) => (
              <div className="d-flex align-items-start mb-4" key={idx}>
                <div
                  className="me-3 p-2 rounded-circle"
                  style={{
                    backgroundColor: '#f24521',
                    color: '#fff',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}
                >
                  {icon}
                </div>
                <div>
                  <strong>{title}</strong>
                  <p className="mb-1 small" style={{ color: '#444' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <Button
              href="/compare-accounts"
              className="mt-2"
              style={{
                backgroundColor: '#076e16ff',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '12px',
                fontWeight: 600,
              }}
            >
              Compare Accounts
            </Button>
          </Col>

          {/* Right Banner Image */}
          <Col md={6} className="text-center mt-5 mt-md-0">
            <img
              src="/assets/crypto-explained-banner.png"
              alt="Why Trade Crypto on Nestpip"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: '90%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CryptoExplained;
