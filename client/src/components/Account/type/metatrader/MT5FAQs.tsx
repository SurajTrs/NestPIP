import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const MT5FAQs = () => {
  return (
    <section style={{ backgroundColor: '#FFF5F0', padding: '4rem 0' }}>
      <Container>
        <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
          Frequently Asked Questions
        </h2>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Can I trade MT5 with a demo account?
            </Accordion.Header>
            <Accordion.Body>
              Yes, you can trade on MT5 using a demo account to practice strategies and explore the platform before committing real capital.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Is there a minimum deposit to trade on MetaTrader 5?
            </Accordion.Header>
            <Accordion.Body>
              Minimum deposit requirements vary by region and funding method, but typically start around $100. Check your account settings for local requirements.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Do I need a separate account to trade on MT5?
            </Accordion.Header>
            <Accordion.Body>
              Yes, MT5 accounts are separate from MT4. You’ll need to open a dedicated MT5 account to access the platform and its exclusive features.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Still have questions?
            </Accordion.Header>
            <Accordion.Body>
              If you need more help, visit the <strong>MetaTrader FAQ</strong> section or <strong>start a live chat</strong> with our support team we are here to help!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default MT5FAQs;
