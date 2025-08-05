import React from 'react';
import Image from 'next/image';

const UsdJpySafetySection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* RIGHT – TEXT */}
          <div className="col-lg-6 order-lg-2">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Stay Safe While You Trade
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              Forex trading involves risk. But Nestpip helps protect you with smart tools and top-tier security:
            </p>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              <li><strong>Stop-loss orders:</strong> Automatically limit your losses before it’s too late.</li>
              <li><strong>Take-profit orders:</strong> Lock in profits when your target is reached.</li>
              <li><strong>Margin alerts:</strong> Get notified early so you can act before a margin call hits.</li>
              <li><strong>Encrypted servers:</strong> Your data and transactions stay secure and private.</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              We want you to trade with confidence. That’s why thousands trust <strong>Nestpip</strong> — 
              the Best Forex Trading Platform.
            </p>
          </div>

          {/* LEFT – IMAGE */}
          <div className="col-lg-6 order-lg-1 text-center">
            <Image
              src="/images/usd-jpy-safety.png" // 🔁 Replace with your actual image path
              alt="Forex Trading Safety on Nestpip"
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

export default UsdJpySafetySection;
