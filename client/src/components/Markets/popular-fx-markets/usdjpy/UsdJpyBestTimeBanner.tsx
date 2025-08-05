import React from 'react';

const UsdJpyBestTimeBanner: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#f24521',
        color: '#fff',
        padding: '3rem 1rem',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3" style={{ fontSize: '2rem' }}>
          When is the Best Time to Trade USD/JPY?
        </h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
          From Monday to Friday, you can trade USD/JPY 24 hours a day. But the best times are:
        </p>
        <p style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0.25rem 0' }}>
          Tokyo Session: 7 AM to 4 PM Japan time
        </p>
        <p style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0.25rem 0 1.5rem' }}>
          New York Session: 8 AM to 5 PM US time
        </p>
        <p style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto' }}>
          These are the busiest times with the most activity, meaning more chances to make money.
          Don’t worry; the Best Forex Trading Platform, like <strong>Nestpip</strong>, will send you alerts and updates so you can plan your trades at the right time.
        </p>
      </div>
    </section>
  );
};

export default UsdJpyBestTimeBanner;
