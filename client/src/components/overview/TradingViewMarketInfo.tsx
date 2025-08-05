'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TradingViewMarketInfo: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-7">

            <div className="mb-4">
              <h4 className="fw-bold" style={{ color: '#f24521' }}>
                Market Data
              </h4>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                Easily spot unique opportunities by overlaying equities and commodity markets over your FX charts with access to several exchanges and thousands of markets. Compare the pricing of markets you are trading against other markets, like oil and EUR/USD to track all the movement easily.
              </p>
            </div>

 
            <div>
              <h4 className="fw-bold" style={{ color: '#f24521' }}>
                Mobile App
              </h4>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                Access TradingView from their iPhone or Android mobile app so you never miss an opportunity.
              </p>
            </div>
          </div>
          


          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="/assets/fx-market-info.png" // replace with your actual icon/image path
              alt="FX Market Info"
              className="img-fluid"
              style={{ maxWidth: 'auto', borderRadius: '16px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingViewMarketInfo;
