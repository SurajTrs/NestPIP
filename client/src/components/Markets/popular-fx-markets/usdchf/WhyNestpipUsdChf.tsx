import React from 'react';
import Image from 'next/image';

const WhyNestpipUsdChf: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – IMAGE */}
          <div className="col-lg-6 text-center order-lg-1 mb-4 mb-lg-0">
            <Image
              src="/images/nestpip-best-usd-chf.png" // Replace with your actual image path
              alt="Why Nestpip is Best for USD/CHF Trading"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>

          {/* RIGHT – TEXT */}
          <div className="col-lg-6 order-lg-2">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Why Nestpip is the Best Place to Trade USD/CHF Forex
            </h2>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              <li><strong>Execution that is very fast</strong>—no pauses or requotes</li>
              <li><strong>No pip spreads</strong>—save money on every transaction</li>
              <li><strong>Safe and regulated</strong>—safety and openness</li>
              <li><strong>24/5 help</strong>—talk to genuine pros</li>
              <li><strong>Advanced tools</strong> that work with all tactics</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#333', marginTop: '1rem' }}>
              We have made the perfect setting for intermediate forex traders to do well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNestpipUsdChf;
