'use client';

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const ForexFAQAccordion: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#f24521' }}>
          Forex Market FAQ
        </h2>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span className="fw-semibold" style={{ color: '#f24521' }}>
                📅 When is the forex market open for trading?
              </span>
            </Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#fff', color: '#333' }}>
              The forex market is open 24 hours a day, five days a week — from <strong>Sunday 5 PM</strong> to <strong>Friday 5 PM</strong> (ET), allowing traders worldwide to access opportunities at any time.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className="fw-semibold" style={{ color: '#f24521' }}>
                🌍 Where is forex traded?
              </span>
            </Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#fff', color: '#333' }}>
              Forex is traded globally across major financial centers including <strong>London, New York, Tokyo, and Sydney</strong>, through a decentralized network of banks, brokers, and institutions.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <span className="fw-semibold" style={{ color: '#f24521' }}>
                💹 Why do people trade currencies?
              </span>
            </Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#fff', color: '#333' }}>
              People trade currencies to <strong>speculate</strong> on price movements, <strong>hedge against risks</strong>, or for <strong>international business purposes</strong>. Forex offers high liquidity and leverage potential.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default ForexFAQAccordion;
