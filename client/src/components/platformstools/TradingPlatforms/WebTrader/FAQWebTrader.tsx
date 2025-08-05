import React from 'react';
import { Container, Accordion, } from 'react-bootstrap';

const FAQWebTrader = () => {
  return (
    <section style={{ backgroundColor: '#fff4e5', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-4" style={{ color: '#f24521' }}>
          Frequently Asked Questions
        </h2>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How current is the information on Web Trader?</Accordion.Header>
            <Accordion.Body>
              Web Trader displays real-time market data and pricing, ensuring you are always up to date while trading.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>What browsers are supported?</Accordion.Header>
            <Accordion.Body>
              Web Trader is supported on the latest versions of Chrome, Firefox, Safari, and Edge for the best experience.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>What can I trade on Web Trader?</Accordion.Header>
            <Accordion.Body>
              You can trade forex pairs, indices, commodities, and cryptocurrencies using the Web Trader platform.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="text-center mt-5">
          <p className="mb-3 fw-semibold">
            If you have more questions, visit the{' '}
            <a href="#" style={{ color: '#f24521', textDecoration: 'underline' }}>
              Web Trading Platform FAQ
            </a>{' '}
            section or{' '}
            <a href="#" style={{ color: '#f24521', textDecoration: 'underline' }}>
              start a chat with our support team
            </a>.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default FAQWebTrader;
