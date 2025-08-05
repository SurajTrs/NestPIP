import React from 'react';

const IndicesFAQ = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6" style={{ textAlign: 'left' }}>
            <h2 className="fw-bold mb-4" style={{ color: '#FF7A00' }}>
              Indices FAQ
            </h2>
            <ul className="list-unstyled" style={{ fontSize: '1.05rem', color: '#333' }}>
              <li className="mb-3">
                <strong>What is the index CFD nightly finance charge and how is it calculated?</strong>
              </li>
              <li className="mb-3">
                <strong>What moves prices of indices?</strong>
              </li>
              <li className="mb-3">
                <strong>What are the major indices?</strong>
              </li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#666' }}>
              If you have more questions, visit the{' '}
              <a href="/indices-faq" style={{ color: '#006400', fontWeight: '600' }}>
                indices FAQ section
              </a>{' '}
              or{' '}
              <a href="/chat-support" style={{ color: '#006400', fontWeight: '600' }}>
                start a chat with our support team
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndicesFAQ;
