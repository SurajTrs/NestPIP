import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: 'What are commodities?',
    answer:
      'Commodities are raw materials or primary agricultural products like gold, oil, or coffee that can be bought and sold.',
  },
  {
    question: 'Why trade commodity CFDs?',
    answer:
      'Trading commodity CFDs allows you to speculate on commodity price movements without owning the underlying asset.',
  },
  {
    question: 'How to trade commodity CFDs?',
    answer:
      'You can trade commodity CFDs by choosing your market (like oil or gold), selecting a position (long or short), and managing your risk with tools like stop-loss orders.',
  },
];

const CommoditiesFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="fw-bold mb-4 text-center" style={{ color: '#FF7A00' }}>
          Commodities FAQ
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
                  <FaChevronUp color="#f24521" />
                ) : (
                  <FaChevronDown color="#f24521" />
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
          <a href="/commodities-faq" style={{ color: '#006400', fontWeight: 600 }}>
            Visit our full FAQ section
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

export default CommoditiesFAQ;
