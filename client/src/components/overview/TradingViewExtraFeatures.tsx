
'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TradingViewExtraFeatures: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="/assets/fx-tradingview-screener.png" // or any relevant image representing both features
              alt="TradingView Screener & Alerts"
              className="img-fluid"
              style={{ maxWidth: 'auto', borderRadius: '16px' }}
            />
          </div>

          {/* Right Side Text */}
          <div className="col-md-7">
            {/* Screener */}
            <div className="mb-4">
              <h4 className="fw-bold" style={{ color: '#f24521' }}>
                Screener
              </h4>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                Scan all markets quickly and easily to identify opportunities based on technical oscillators,
                performance, volatility, trend ratings, price changes, and more.
              </p>
            </div>

            {/* Dynamic Alerts */}
            <div>
              <h4 className="fw-bold" style={{ color: '#f24521' }}>
                Dynamic Alerts
              </h4>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                If you can think of a situation, you can set an alert on it. Is a market reaching a support or
                resistance? MACD crossing a key level? Ensure that you never miss out. You can also choose how
                you want them to be sent to you - text, email, and push notifications are all available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingViewExtraFeatures;
