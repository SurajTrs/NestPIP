import React from 'react';
import { Container, Accordion, Button } from 'react-bootstrap';

const faqs = [
  {
    question: 'What are charting tools and how do I use them?',
    answer:
      'Charting tools help you analyze a market using the charts within a trading platform. Tools range from simple trend lines to Fibonacci retracements and beyond, and can help traders make sense of price action and inform future decisions.',
    linkText: 'MetaTrader - charting and drawing tutorial',
  },
  {
    question: 'What are technical indicators and how do I use them?',
    answer:
      'Indicators are metrics used to help identify trends or support/resistance levels within a market.',
    linkText: 'MetaTrader indicators video tutorial and key guidance',
  },
  {
    question: 'What is backtesting?',
    answer:
      'Backtesting is applying a trading strategy to historical market data in order to help determine how valid your trading strategy might be.',
    linkText: 'FOREX.com desktop platform using its Development Studio',
  },
];

const FAQsDesktopPlatformAccordion = () => {
  return (
    <section style={{ backgroundColor: '#fff3e6', padding: '4rem 0' }}>
      <Container>
        <h2 className="mb-5 text-center" style={{ color: '#f24521' }}>
          Frequently Asked Questions
        </h2>
        <Accordion defaultActiveKey="0">
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index} className="mb-3 shadow-sm">
              <Accordion.Header>
                <span style={{ color: '#f24521', fontWeight: 600 }}>{faq.question}</span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-secondary">{faq.answer}</p>
                {faq.linkText && (
                  <p>
                    <a href="#" style={{ color: '#f24521', textDecoration: 'underline' }}>
                      {faq.linkText}
                    </a>
                  </p>
                )}
                <div className="d-flex align-items-center gap-3 mt-3">
                  <span className="text-muted">Was this answer helpful?</span>
                  <Button size="sm" variant="outline-success">
                    Yes
                  </Button>
                  <Button size="sm" variant="outline-danger">
                    No
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQsDesktopPlatformAccordion;
