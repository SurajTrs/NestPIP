import React from 'react';

const WhenToTradeUsdChfBanner: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#f24521',
        color: '#fff',
        padding: '3rem 1rem',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '700px' }}>
        <h2 className="fw-bold mb-3" style={{ fontSize: '2rem' }}>
          When to Trade USD/CHF
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          The biggest trading happens in USD/CHF when the London and New York sessions overlap, usually between 1:00 PM and 5:00 PM GMT.
        </p>
        <ul style={{ fontSize: '1.1rem', listStyleType: 'disc', paddingLeft: '1.5rem', maxWidth: '400px', margin: '0 auto' }}>
          <li>There is more volatility.</li>
          <li>The best liquidity is available.</li>
          <li>There are often important news releases.</li>
        </ul>
      </div>
    </section>
  );
};

export default WhenToTradeUsdChfBanner;
