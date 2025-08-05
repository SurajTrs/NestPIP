import React from 'react';
import Image from 'next/image';

const TradeAnytimeAnywhere: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – TEXT */}
          <div className="col-lg-6 order-lg-1">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Trade Anytime, Anywhere with Nestpip
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              You may trade USD/CHF on any device we support:
            </p>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1.5rem' }}>
              <li>On applications for iOS and Android</li>
              <li>On a desktop terminal</li>
              <li>On web-based systems that don&apos;t need to be installed</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              Some of the features include:
            </p>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1.5rem' }}>
              <li>Execution of orders with one click</li>
              <li>Charting in real time</li>
              <li>Notifications right away</li>
              <li>Login that is safe and data that is encrypted</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#333', marginTop: '1rem' }}>
              Nestpip is still dubbed the Best Forex Trading Platform in 2025 because it lets you do things your way.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="col-lg-6 order-lg-2 text-center">
            <Image
              src="/images/trade-anytime-anywhere.png" // Replace with your actual image path
              alt="Trade Anytime Anywhere with Nestpip"
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

export default TradeAnytimeAnywhere;
