'use client';

import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const faqs = [
  {
    question: 'Can I export the performance data from Performance Analytics?',
    answer: 'Yes, you can export performance data in various formats directly from the Performance Analytics dashboard.',
  },
  {
    question: 'How much does Performance Analytics cost?',
    answer: 'Performance Analytics is free for all FOREX.com account holders.',
  },
  {
    question: 'How can I access Performance Analytics?',
    answer: 'Simply log into your FOREX.com account and select the Performance Analytics tab.',
  },
];

const PerformanceAnalyticsFAQ: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-4" style={{ color: '#f24521' }}>
          Performance Analytics FAQs
        </h2>
        <Accordion flush>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <p className="text-center mt-4">
          If you have more questions, visit the{' '}
          <a href="/faq/performance-analytics" style={{ color: '#f24521' }}>
            Performance Analytics FAQ
          </a>{' '}
          section or{' '}
          <a href="/support" style={{ color: '#f24521' }}>
            start a chat
          </a>{' '}
          with our support team.
        </p>
      </Container>
    </section>
  );
};

export default PerformanceAnalyticsFAQ;
