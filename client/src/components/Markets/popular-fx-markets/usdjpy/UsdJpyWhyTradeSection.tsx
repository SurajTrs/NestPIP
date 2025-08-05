import React from 'react';
import Image from 'next/image';

const UsdJpyWhyTradeSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – TEXT */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Why Trading USD/JPY Is a Good Idea
            </h2>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              <li>It's one of the most actively traded currency pairs in the world.</li>
              <li>Technical indicators work well — trends are easier to spot.</li>
              <li>You can trade during both Asian and U.S. market hours.</li>
              <li>It responds strongly to economic news — ideal for fast trades.</li>
              <li>And best of all, it runs smoothly on the <strong>Best Forex Trading Platform</strong> — Nestpip.</li>
            </ul>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/usd-jpy-good-idea.png" // 🔁 Replace with your actual image path
              alt="Why Trade USD/JPY"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsdJpyWhyTradeSection;
