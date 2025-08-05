import React from 'react';
import Image from 'next/image';

const UsdJpyStrategiesSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* RIGHT – TEXT */}
          <div className="col-lg-6 order-lg-2">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Easy Trading Strategies
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              Here are some simple ways to trade USD/JPY on <strong>Nestpip</strong>, even if you're new to forex:
            </p>
            <ul style={{ fontSize: '1rem', color: '#333', paddingLeft: '1rem' }}>
              <li>
                <strong>Trading on Trends:</strong> Follow the trend if the price is clearly moving up or down. 
                Use moving averages and RSI to confirm.
              </li>
              <li>
                <strong>Trading in a Range:</strong> Buy low and sell high when the price is bouncing between 
                two levels.
              </li>
              <li>
                <strong>Trading News:</strong> Watch for major U.S. or Japan news events. Be prepared — prices 
                can move fast.
              </li>
              <li>
                <strong>Trading on Breakouts:</strong> If the price breaks a strong level, it may continue in 
                that direction.
              </li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              The <strong>Best Forex Trading Platform</strong>, like Nestpip, makes these strategies easier 
              with simple built-in tools and real-time charts.
            </p>
          </div>

          {/* LEFT – IMAGE */}
          <div className="col-lg-6 order-lg-1 text-center">
            <Image
              src="/images/usd-jpy-strategies.png" // 🔁 Replace with your actual image path
              alt="USD/JPY Trading Strategies"
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

export default UsdJpyStrategiesSection;
