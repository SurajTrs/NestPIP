import React from 'react';
import Image from 'next/image';

const WhyTradeUsdChf: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – IMAGE */}
          <div className="col-lg-6 text-center order-lg-1 mb-4 mb-lg-0">
            <Image
              src="/images/usd-chf-trade-benefits.png" // Replace with your actual image path
              alt="Why Trade USD/CHF"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>

          {/* RIGHT – TEXT */}
          <div className="col-lg-6 order-lg-2">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Why Trade USD/CHF?
            </h2>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              <li><strong>Safe Haven:</strong> The Swiss Franc tends to become stronger during global crises, making USD/CHF excellent for risk protection strategies.</li>
              <li><strong>Technical Behaviour:</strong> Chart-based traders favor USD/CHF because it respects key levels and indicators.</li>
              <li><strong>Moderate Volatility:</strong> Moves steadily compared to exotic pairs, ideal for trend-following and breakout strategies.</li>
              <li><strong>Macro Sensitivity:</strong> Interest rates, inflation, and economic outlooks for the U.S. and Switzerland impact this pair.</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              Nestpip lets you see, analyse, and act on these price movements in real time — the hallmark of the Best Forex Trading Platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTradeUsdChf;
