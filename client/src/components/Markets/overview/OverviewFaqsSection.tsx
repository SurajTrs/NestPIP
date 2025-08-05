import React from 'react';

const faqs = [
  {
    question: 'What can I buy and sell on Nestpip?',
    answer: 'You can trade Forex, Crypto, Indices, Commodities, and Global Stocks all from one account.',
  },
  {
    question: 'Is it possible to trade crypto all the time?',
    answer: 'Yes! You can trade crypto CFDs on Nestpip 24 hours a day.',
  },
  {
    question: 'Is the demo account free?',
    answer: 'Of course. Use a free demo account with no risk to practice.',
  },
  {
    question: 'Is Nestpip safe and under control?',
    answer: 'Yes. Nestpip is a secure, encrypted, and regulated online trading platform that works all over the world.',
  },
  {
    question: 'Is there an app for mobile devices?',
    answer: 'Yes! You can get the Nestpip app for both Android and iOS.',
  },
  {
    question: 'Is it possible to trade more than one asset from one account?',
    answer: 'Yes. Nestpip is a complete trading solution that makes it easy to trade many assets online.',
  },
];

const OverviewFaqsSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#f24521', fontWeight: 700 }}>
          Frequently Asked Questions
        </h2>

        <div className="accordion" id="nestpipFaqs">
          {faqs.map((faq, index) => (
            <div className="accordion-item mb-3 border-0 rounded shadow-sm" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                  style={{ backgroundColor: '#ffffff', color: '#333' }}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#nestpipFaqs"
              >
                <div
                  className="accordion-body"
                  style={{ backgroundColor: '#fff', color: '#555' }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewFaqsSection;


