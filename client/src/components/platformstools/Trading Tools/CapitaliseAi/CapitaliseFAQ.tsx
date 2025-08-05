'use client';

import React from 'react';
import { Container, Accordion, Alert, Card } from 'react-bootstrap';

const themeColor = '#f24521';
const lightOrange = '#ffffffff';

const CapitaliseFAQ = () => {
  return (
    <section style={{ backgroundColor: lightOrange, padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: themeColor }}>
          Capitalise.ai FAQs
        </h2>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How does Capitalise.ai work?</Accordion.Header>
            <Accordion.Body>
              Capitalise.ai allows traders to automate strategies using plain English, without coding.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Is Capitalise.ai free?</Accordion.Header>
            <Accordion.Body>
              Yes! You can create a free account and start automating trading strategies at no cost.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Do I need to be logged into Capitalise.ai for my strategies to run?
            </Accordion.Header>
            <Accordion.Body>
              No. Once your strategy is live, it runs on Capitalise.ai’s cloud — no need to stay logged in.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Card className="mt-4 border-0 shadow-sm">
          <Card.Body style={{ backgroundColor: '#fff9f5' }}>
            <p className="mb-2">
              If you have more questions, visit the{' '}
              <a href="https://www.capitalise.ai/faq" target="_blank" rel="noopener noreferrer" style={{ color: themeColor }}>
                Capitalise.ai FAQ section
              </a>{' '}
              or start a chat with our support team.
            </p>
            <p>
              <a href="https://www.capitalise.ai/hypothetical-disclaimer" target="_blank" rel="noopener noreferrer" style={{ color: themeColor }}>
                Click here
              </a>{' '}
              for more information about the limitations of relying on hypothetical results.
            </p>
          </Card.Body>
        </Card>

        <Alert variant="light" className="mt-4" style={{ backgroundColor: '#fff3e0', borderLeft: `4px solid ${themeColor}` }}>
          <strong>Disclaimer:</strong> Although appealing for a variety of reasons, automated trading systems should not be considered a substitute for carefully executed trading. Technology failures can happen, and these systems require monitoring. You should have trading experience and understand the risks involved.
        </Alert>

        <Alert variant="light" className="mt-3" style={{ backgroundColor: '#fff3e0', borderLeft: `4px solid ${themeColor}` }}>
          <strong>Third-Party Notice:</strong> Third-party software/apps are from companies not affiliated with FOREX.com and are for informational purposes only. FOREX.com does not guarantee their accuracy or outcomes. Usage is at your own risk, and FOREX.com is not liable for any resulting losses.
        </Alert>
      </Container>
    </section>
  );
};

export default CapitaliseFAQ;
