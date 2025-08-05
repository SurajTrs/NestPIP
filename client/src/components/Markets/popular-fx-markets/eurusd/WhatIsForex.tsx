import React from 'react';
import Image from 'next/image';

const WhatIsForex: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#fff7f0' }}>
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left Text Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              What is Forex and Why EUR/USD?
            </h2>
            <p style={{ fontSize: '1rem' }}>
              Forex (Foreign Exchange) is the biggest financial market in the world, with over <strong>$6 trillion</strong> traded every day.
              One of the most popular currency pairs in this market is <strong>EUR/USD</strong>.
            </p>
            <ul className="list-unstyled" style={{ fontSize: '1rem', lineHeight: '2' }}>
              <li>✅ High liquidity</li>
              <li>✅ Tight spreads</li>
              <li>✅ Predictable price movement</li>
            </ul>
            <p style={{ fontSize: '1rem' }}>
              <strong>EUR</strong> = Euro (Europe)<br />
              <strong>USD</strong> = US Dollar (United States)
            </p>
            <p style={{ fontSize: '1rem' }}>
              Understanding this pair gives you an edge in global economic trends and trade flows.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/eurusd.png" // Replace with your actual image path
              alt="EUR/USD Forex Trading"
              width={500}
              height={300}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsForex;
