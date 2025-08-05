import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: 'How are metals traded?',
    answer:
      'Metals like gold and silver are traded as spot contracts, futures, and CFDs, allowing traders to speculate on price movements or hedge portfolios.',
  },
  {
    question: 'What are the markets for spot gold and silver?',
    answer:
      'The spot markets for gold and silver are traded globally, including exchanges like the London Bullion Market and through brokers offering real-time pricing.',
  },
  {
    question: 'What are the trading hours for metals?',
    answer:
      'Metals markets are typically open 23 hours a day, five days a week, from Sunday evening to Friday evening, aligning with global financial markets.',
  },
];

const MetalsFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="fw-bold mb-4 text-center" style={{ color: '#FF7A00' }}>
          Metals Trading FAQ
        </h2>
        <div className="accordion">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="mb-3 border rounded"
              style={{ backgroundColor: '#fff', borderColor: '#FFB76B' }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-100 text-start px-4 py-3 d-flex justify-content-between align-items-center"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#333',
                }}
              >
                {item.question}
                {openIndex === index ? (
                  <FaChevronUp color="#FF7A00" />
                ) : (
                  <FaChevronDown color="#FF7A00" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-3 text-muted" style={{ fontSize: '1rem' }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center mt-4 text-muted" style={{ fontSize: '0.95rem' }}>
          Need more help?{' '}
          <a href="/metals-faq" style={{ color: '#006400', fontWeight: 600 }}>
            Visit our full Metals FAQ section
          </a>{' '}
          or{' '}
          <a href="/chat-support" style={{ color: '#006400', fontWeight: 600 }}>
            contact our support team.
          </a>
        </p>
      </div>
    </section>
  );
};

export default MetalsFAQ;
