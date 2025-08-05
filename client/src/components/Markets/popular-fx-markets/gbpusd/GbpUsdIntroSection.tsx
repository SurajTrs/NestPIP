import React from 'react';
import Image from 'next/image';

const GbpUsdIntroSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – TEXT */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
What is the GBP/USD?
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              GBP/USD is the amount of US dollars (USD) that the British pound sterling (GBP) is worth. 
              People often call this pair <strong>Cable</strong>, and it is one of the three most traded 
              foreign exchange pairs in the world. It tells you how many dollars you need to buy one pound.
            </p>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              The GBP/USD currency pair can be affected by a number of economic factors, including interest 
              rates, employment data, inflation, GDP reports, and political events in the UK and the US.
            </p>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              Traders like this pair because it has a lot of liquidity, the patterns are easy to see, and 
              you can make money with both short- and long-term plans.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/gbp-usd-graphic.png" // 🔁 Replace with your actual image path
              alt="GBP to USD Forex Trading"
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

export default GbpUsdIntroSection;
