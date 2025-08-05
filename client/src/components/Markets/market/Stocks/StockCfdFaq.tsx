'use client';

import React from 'react';

const stockFaqs = [
  {
    question: 'Can I go short on stocks/equities CFDs?',
    answer:
      'Yes, you can go either long or short on top companies from around the world.',
  },
  {
    question: 'Where can I find the contract details for CFD markets?',
    answer:
      'On FOREX.com platforms, CFD contract sizes, values, and expiry dates are available in the Market Information Sheets for each market. On MetaTrader, these details can be found in the Product Details page under Trader Toolkit.',
  },
  {
    question: 'Which platforms can I trade stocks/equities via CFDs on?',
    answer:
      'Stock CFD trading is available on both the proprietary FOREX.com platforms and MetaTrader 5.',
  },
];

const StockCfdFaq: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
          Stock CFDs FAQ
        </h2>

        {stockFaqs.map((faq, idx) => (
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
            href="/faq/stocks"
            className="btn btn-outline-dark"
            style={{
              borderRadius: '10px',
              fontWeight: 600,
              padding: '0.6rem 1.8rem',
            }}
          >
            Visit the Stocks FAQ Section
          </a>
          <p className="text-muted mb-0">
            Or start a chat with our{' '}
            <a
              href="/support/chat"
              className="text-decoration-underline"
              style={{ color: '#FF7A00' }}
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

export default StockCfdFaq;
