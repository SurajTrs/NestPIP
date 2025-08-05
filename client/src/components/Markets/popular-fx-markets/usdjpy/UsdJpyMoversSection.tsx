import React from 'react';
import Image from 'next/image';

const UsdJpyMoversSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – TEXT */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              What Makes the USD/JPY Price Go Up and Down?
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              It's helpful to know what moves the USD/JPY price when you're trading. Here are the most important things to keep an eye on:
            </p>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              <li>
                <strong>Interest Rates:</strong> The Dollar often strengthens when U.S. interest rates rise. 
                The Yen stays weak if Japan keeps rates low.
              </li>
              <li>
                <strong>Economic News:</strong> Reports on inflation, jobs, or GDP from the U.S. or Japan 
                can move the market fast.
              </li>
              <li>
                <strong>Global Events:</strong> Wars, natural disasters, or trade talks can cause sudden 
                buying or selling of USD/JPY.
              </li>
              <li>
                <strong>Investor Sentiment:</strong> Fear leads traders to buy the Yen. Confidence often 
                boosts the Dollar.
              </li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              All of this data is updated in real time on <strong>Nestpip</strong>, 
              the Best Forex Trading Platform — so you always stay informed.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/usd-jpy-price-factors.png" // 🔁 Replace with actual image path
              alt="USD/JPY Price Drivers"
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

export default UsdJpyMoversSection;
