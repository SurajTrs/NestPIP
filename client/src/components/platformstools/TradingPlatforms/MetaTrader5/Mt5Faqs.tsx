'use client';

import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const Mt5Faqs: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <Container>
        <h2
          className="fw-bold mb-4 text-center"
          style={{ color: '#f24521', fontSize: '1.8rem' }}
        >
          Frequently Asked Questions
        </h2>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How Much Do You Need to Put Down to Open an MT5 Account?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#333' }}>
              Only $100. You can start small and grow as you get more comfortable.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Is It Possible to Use Leverage on My MetaTrader Account?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#333' }}>
              Yes. Depending on where you live and what kind of asset you have, we can give you MetaTrader account leverage of up to 1:500.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Is It Possible to Trade Crypto on MT5?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#333' }}>
              Of course. Quick execution and tight spreads make it easy to trade BTC, ETH, LTC, and more.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Do You Also Have MetaTrader 4?
            </Accordion.Header>
            <Accordion.Body style={{ color: '#333' }}>
              Yes! People say we're one of the best brokers for MetaTrader 4. You can pick either MT4 or MT5 based on how you like to trade.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default Mt5Faqs;
