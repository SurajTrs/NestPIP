import React from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const faqData = [
  {
    question: 'What is an overnight funding rollover?',
    answer:
      'Overnight funding, also known as rollovers, are charges that you pay or earn when holding a position open overnight. This daily overnight funding fee is automatically applied to your trading account each day that you hold an open position (including weekends). Learn more about our rollover rates.',
  },
  {
    question: 'Are there any data exchange fees associated with forex trading?',
    answer:
      'FOREX.com does not charge data exchange fees. However, you may incur an overnight funding/rollover charge if you hold your positions overnight. More about trade prices and execution.',
  },
  {
    question: 'How is my spread cost calculated?',
    answer:
      'In typical market conditions, this is the difference between the rate at which your order was executed, and the mid-point of the bid/offer spread at the time your market order was received. During extreme market conditions, various factors like volatility and liquidity can cause wider spreads or delays. Learn more about trade prices.',
  },
  {
    question: 'Is there a currency conversion charge?',
    answer:
      'Yes. If your trading account base currency is different from the settlement currency of your trade, a +/-0.5% conversion fee from the market rate will apply. This is automatic and happens during P&L conversion. You won’t incur this charge if you trade only products in your account base currency.',
  },
];

const FAQAccordion = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#f24521' }}>
          Frequently Asked Questions
        </h2>
        <Accordion defaultActiveKey="0">
          {faqData.map((item, idx) => (
            <Accordion.Item eventKey={String(idx)} key={idx}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body style={{ backgroundColor: '#fff', color: '#333' }}>
                {item.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <div className="text-center mt-4">
          <p className="mb-1">Still have questions?</p>
          <a href="/support" className="btn" style={{ backgroundColor: '#f24521', color: '#fff' }}>
            Visit Pricing and Fees FAQ
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
