import React from 'react';
import Image from 'next/image';

const UsdJpyWhyChooseSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – IMAGE */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/why-nestpip-usdjpy.png" // 🔁 Replace with actual image path
              alt="Why Trade USD/JPY with Nestpip"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>

          {/* RIGHT – TEXT */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Why Choose Nestpip for USD/JPY Trading?
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              We understand there are many platforms out there. But here’s why thousands of traders say 
              <strong> Nestpip is the Best Forex Trading Platform</strong> for USD/JPY:
            </p>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              <li><strong>No Pip Spreads:</strong> Keep more profits — no hidden spreads when you trade.</li>
              <li><strong>Very Quick Execution:</strong> Instant order placement with no slippage or delays.</li>
              <li><strong>User-Friendly Tools:</strong> Get real-time charts, indicators, and price alerts effortlessly.</li>
              <li><strong>Trade on Any Device:</strong> Seamlessly trade on mobile, tablet, or desktop.</li>
              <li><strong>Safe & Secure:</strong> Top-tier security and global regulation for your funds and data.</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              All of this makes Nestpip a complete trading experience — just what you’d expect from the 
              <strong> Best Forex Trading Platform</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsdJpyWhyChooseSection;
