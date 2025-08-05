'use client';

import React from 'react';

const faqs = [
  {
    question: 'When is the forex market open for trading?',
    answer:
      'The forex market is open 24 hours a day, five days a week — from Sunday 5 PM to Friday 5 PM (ET), allowing traders worldwide to access opportunities at any time.',
  },
  {
    question: 'Where is forex traded?',
    answer:
      'Forex is traded globally across major financial centers including London, New York, Tokyo, and Sydney, through a decentralized network of banks, brokers, and institutions.',
  },
  {
    question: 'Why do people trade currencies?',
    answer:
      'People trade currencies to speculate on price movements, hedge against risks, or for international business purposes. Forex offers high liquidity and leverage potential.',
  },
];

const FaqSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-3">
            <h5 className="fw-semibold" style={{ color: '#333' }}>
              {faq.question}
            </h5>
            <p className="text-muted">{faq.answer}</p>
          </div>
        ))}

        {/* Call to Action */}
        <div className="mt-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
          <a
            href="/faq"
            className="btn btn-outline-dark"
            style={{
              borderRadius: '10px',
              fontWeight: 600,
              padding: '0.6rem 1.8rem',
            }}
          >
            Visit the Forex Trading FAQ
          </a>
          <p className="text-muted mb-0">
            Or start a chat with our{' '}
            <a
              href="/support"
              className="text-decoration-underline"
              style={{ color: '#f24521' }}
            >
              support team
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
