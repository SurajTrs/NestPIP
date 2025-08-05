import React from 'react';
import Image from 'next/image';

const IntermediateUsdChfStrategies: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT – IMAGE */}
          <div className="col-lg-6 text-center order-lg-1 mb-4 mb-lg-0">
            <Image
              src="/images/usd-chf-strategies.png" // Replace with your actual image path
              alt="USD/CHF Trading Strategies"
              width={500}
              height={350}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>

          {/* RIGHT – TEXT */}
          <div className="col-lg-6 order-lg-2">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Trading Strategies for USD/CHF Traders Who Are Intermediate
            </h2>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              <li><strong>Trading in a Range:</strong> Find price swings between support and resistance zones during low volatility. Use Bollinger Bands and RSI to assist.</li>
              <li><strong>Basic Trading:</strong> Trade around economic news like U.S. NFP, SNB policy comments, or CPI releases affecting the overall economy.</li>
              <li><strong>Trading Breakouts:</strong> Watch for breakout patterns such as triangles or channels. Confirm with volume and use stop-loss orders.</li>
              <li><strong>Trading Based on Correlation:</strong> USD/CHF often moves inversely to EUR/USD. Use this to hedge or diversify your positions.</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              Nestpip supports all these strategies with customizable workspaces, professional-level indicators, and real-time market feeds — just what you expect from the Best Forex Trading Platform for intermediate traders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntermediateUsdChfStrategies;
