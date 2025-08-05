import React from 'react';

const EURUSDCTA: React.FC = () => {
  return (
    <section className="py-5 text-center" style={{ backgroundColor: '#f24521', color: '#fff' }}>
      <div className="container">
        <h2 className="fw-bold mb-3">
          Ready to trade EUR/USD on the best Forex trading platform?
        </h2>
        <p style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto' }}>
          Join Nestpip today and start trading EUR/USD, one of the most popular FX pairs in the world.
          You will enjoy tight spreads and real-time tools.
        </p>
        <button
          className="btn btn-light mt-4 px-4 py-2 fw-semibold"
          style={{ borderRadius: '30px', color: '#f24521' }}
        >
          Start Trading Now
        </button>
      </div>
    </section>
  );
};

export default EURUSDCTA;
