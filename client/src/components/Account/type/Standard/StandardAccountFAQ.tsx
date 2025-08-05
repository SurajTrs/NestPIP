import React from 'react';

const StandardAccountFAQ: React.FC = () => {
  const faqs = [
    {
      question: '1. What is a normal forex trading account?',
      answer: 'It has no commissions, variable spreads, and standard lot sizes, so it\'s good for most retail traders.',
    },
    {
      question: '2. What is the least amount you can deposit?',
      answer: 'You can start with as little as $100.',
    },
    {
      question: '3. Does the regular account work with MT4 and MT5?',
      answer: 'Yes, both platforms are fully supported.',
    },
    {
      question: '4. Is this a good account for people who are new to it?',
      answer: 'Yes, for sure. It\'s an account that is easy for beginners to use, has low trading costs, and gives you access to all of its features.',
    },
    {
      question: '5. Do you have to pay any fees?',
      answer: 'No. There are no commissions on a standard forex trading account.',
    },
    {
      question: '6. Is it okay to use a demo account first?',
      answer: 'Yes. You can practice without any risk before going live.',
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <h2 className="text-center mb-4 fw-bold" style={{ color: '#f24521' }}>
          FAQs — Questions and Answers
        </h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item mb-3 border rounded" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardAccountFAQ;
