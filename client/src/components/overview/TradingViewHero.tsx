'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TradingViewHero: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0 text-center">
            <img
              src="/assets/tradingview-logo.jpg"
              alt="TradingView Logo"
              className="img-fluid"
              style={{ maxWidth: 'auto' }}
            />
          </div>

          {/* Text Content */}
          <div className="col-md-7">
            <h2 className="fw-bold mb-3" style={{ color: '#f24521', fontSize: '2rem' }}>
              See Your TradingView Through Our Lens
            </h2>
            <p className="text-muted mb-3" style={{ fontSize: '1.05rem' }}>
              Access your <strong>NestPip.com</strong>  account on TradingView to unlock a more complete trading experience.
            </p>
            <p className="text-muted mb-4">
              Utilize TradingView’s popular charts, dynamic trade management, and trade ideas from its active user community to inspire your own strategy.
            </p>

            <a
              href="explore-tradingview"
              className="btn btn-lg"
              style={{
                backgroundColor: '#f24521',
                borderColor: '#FF7A00',
                color: '#fff',
                borderRadius: '12px',
                padding: '0.75rem 2rem',
                fontWeight: 500,
              }}
            >
              Explore TradingView
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingViewHero;
