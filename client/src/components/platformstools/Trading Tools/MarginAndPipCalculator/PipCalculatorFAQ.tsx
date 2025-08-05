import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const PipCalculatorFAQ = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
          Frequently Asked Questions – Pip Calculator
        </h2>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is margin?</Accordion.Header>
            <Accordion.Body style={{ color: '#555' }}>
              Margin is the amount of money you need to open a leveraged position. It acts as a deposit, allowing you to trade with larger exposure than your account balance would normally permit.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How is required margin calculated?</Accordion.Header>
            <Accordion.Body style={{ color: '#555' }}>
              Required margin is calculated by dividing the total value of your trade by the leverage ratio. For example, if your trade value is $100,000 and your leverage is 50:1, your margin requirement would be $2,000.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Where can I get more help?</Accordion.Header>
            <Accordion.Body style={{ color: '#555' }}>
              Visit our{' '}
              <a href="/faq/margin-leverage" style={{ color: '#f24521', fontWeight: '500' }}>
                Margin & Leverage FAQ section
              </a>{' '}
              or{' '}
              <a href="/support/chat" style={{ color: '#f24521', fontWeight: '500' }}>
                start a chat
              </a>{' '}
              with our support team.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default PipCalculatorFAQ;
