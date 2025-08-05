import React from 'react';
import Image from 'next/image';

const UsdJpyMobileTradingSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold" style={{ color: '#f24521', fontSize: '1.8rem' }}>
              Nestpip Lets You Trade on the Go
            </h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>
              You don’t have to be stuck at a desk. With the Nestpip app, you can trade freely — from anywhere, anytime.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#f24521' }}>1-Tap Trading</h5>
                <p className="card-text" style={{ color: '#333' }}>
                  Place buy or sell orders instantly — with just one tap.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#f24521' }}>Live Price Tracking</h5>
                <p className="card-text" style={{ color: '#333' }}>
                  Monitor real-time prices for all major pairs on the go.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#f24521' }}>News & Alerts</h5>
                <p className="card-text" style={{ color: '#333' }}>
                  Get instant push notifications and breaking market news.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#f24521' }}>Full Account Control</h5>
                <p className="card-text" style={{ color: '#333' }}>
                  Easily deposit, withdraw, or manage your portfolio from your phone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-6 text-center">
            <Image
              src="/images/nestpip-mobile-app.png" // Replace with your actual path
              alt="Nestpip App Preview"
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

export default UsdJpyMobileTradingSection;
