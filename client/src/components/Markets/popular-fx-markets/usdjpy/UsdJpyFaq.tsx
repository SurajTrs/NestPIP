'use client';

import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const UsdJpyFaqAccordion: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '3rem 0' }}>
      <Container style={{ maxWidth: 'auto' }}>
        <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '1.8rem', textAlign: 'center' }}>
          FAQs – USD/JPY and the Best Forex Trading Platform
        </h2>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Is USD/JPY a good pair for new traders?</Accordion.Header>
            <Accordion.Body>
              Yes! It&apos;s easy, fun, and predictable, which makes it great for learning.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Is it safe to use Nestpip?</Accordion.Header>
            <Accordion.Body>
              Of course. We protect your money and data and follow the rules set by other countries.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I trade on my phone?</Accordion.Header>
            <Accordion.Body>
              Yes! You can trade with the Nestpip app whenever and wherever you want.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>How much is the least amount you can deposit?</Accordion.Header>
            <Accordion.Body>
              You only need $10 to start.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Is Nestpip the Best Place to Trade Forex?</Accordion.Header>
            <Accordion.Body>
              Yes. Our users love us because we execute quickly, have no spreads, are safe, and have tools that are easy to use.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default UsdJpyFaqAccordion;
