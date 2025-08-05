'use client';

import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const RawFaqSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'rgba(255, 233, 220, 1)', color: 'white', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{ color: '#f24521' }}>
          Frequently Asked Questions
        </h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What is the smallest amount of money you can put in the Raw Spread Account?
            </Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#f24521', color: 'white' }}>
              The minimum deposit is $200, but we suggest $500 or more for the best results.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Is it okay to use Expert Advisors (EAs)?</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#f24521', color: 'white' }}>
              Yes! Nestpip fully supports EAs and automated trading on all platforms with raw spreads.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Is this account good for people who are new to it?</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#f24521', color: 'white' }}>
              The Raw Spread Account is a good choice for traders who are at least intermediate level. Our Standard Account might be better for beginners.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Do you have swap-free (Islamic) Raw Accounts?</Accordion.Header>
            <Accordion.Body style={{ backgroundColor: '#f24521', color: 'white' }}>
              Yes, you can get swap-free raw accounts if you ask for them. After you sign up, get in touch with support.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default RawFaqSection;
