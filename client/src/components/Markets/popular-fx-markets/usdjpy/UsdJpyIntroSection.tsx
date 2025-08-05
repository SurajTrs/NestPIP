import React from 'react';
import Image from 'next/image';

const UsdJpyIntroSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – TEXT */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              What is the USD/JPY?
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              USD/JPY shows how many Japanese Yen (JPY) are needed to buy one U.S. Dollar (USD). 
              If the rate is <strong>140.00</strong>, that means 1 USD is worth 140 Yen.
            </p>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              This pair is one of the most traded in the world due to its stability, high liquidity, and 
              strong correlation with economic events in both the U.S. and Japan.
            </p>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              Traders prefer USD/JPY because it reacts clearly to news, interest rate changes, and 
              monetary policy, offering many opportunities for both short-term and long-term strategies.
            </p>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              That's why USD/JPY is a favorite among traders on platforms like <strong>Nestpip</strong>, 
              known for offering the best forex trading experience.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/usd-jpy-graphic.png" // 🔁 Replace with actual USD/JPY image path
              alt="USD to JPY Forex Trading"
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

export default UsdJpyIntroSection;
