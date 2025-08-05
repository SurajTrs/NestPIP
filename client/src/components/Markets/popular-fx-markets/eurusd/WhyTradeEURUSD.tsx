import React from 'react';
import Image from 'next/image';

const WhyTradeEURUSD: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#fff7f0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image Column */}
          <div className="col-lg-6 text-center">
            <Image
              src="/images/eurusd-trading.png" // Replace with your image path
              alt="Trade EUR/USD on Nestpip"
              width={500}
              height={300}
              className="img-fluid rounded"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
          </div>

          {/* Right Text Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Why Trade EUR/USD on Nestpip, the Best Forex Trading Platform?
            </h2>
            <ul className="list-unstyled" style={{ fontSize: '1rem', lineHeight: '2' }}>
              <li>✅ Very low trading costs and very tight spreads, starting at 0.0 pips</li>
              <li>✅ Market coverage 24/5, from Monday to Friday at almost all hours</li>
              <li>✅ New to trading? No problem—easy-to-use interface and expert help</li>
              <li>✅ Advanced charting and indicators like MACD, RSI, and Bollinger Bands</li>
              <li>✅ One account gives you full access to Forex, crypto, indices, stocks, and commodities</li>
            </ul>
            <p style={{ fontSize: '1rem' }}>
              <strong>Nestpip</strong> is the best place to trade the EUR/USD currency pair with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTradeEURUSD;
