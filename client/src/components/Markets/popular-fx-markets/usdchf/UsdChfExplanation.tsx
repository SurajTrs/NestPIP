import React from 'react';

const UsdChfExplanation = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Text */}
          <div className="col-md-6 order-2 order-md-1">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              What Does USD/CHF Mean?
            </h2>
            <p style={{ color: '#333', fontSize: '1rem' }}>
              The exchange rate between the US Dollar (USD) and the Swiss Franc (CHF) is shown as USD/CHF. In basic words, it tells you how many Swiss Francs you need to buy one U.S. Dollar.
            </p>
            <p style={{ color: '#333', fontSize: '1rem' }}>
              For example, if USD/CHF = 0.9200, it implies 1 USD is worth 0.92 CHF.
            </p>
            <p style={{ color: '#333', fontSize: '1rem' }}>
              Because both currencies are regarded as solid reserves, this pair is called a safe-haven pair. The Swiss Franc is stronger when there is uncertainty throughout the world, which is why USD/CHF is a popular hedging instrument.
            </p>
            <p style={{ color: '#333', fontSize: '1rem' }}>
              We provide you access to real-time market data, low spreads, and fast execution at Nestpip. These three things make up the Best Forex Trading Platform experience.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0 text-center">
            <img
              src="/images/usd-chf-illustration.svg" // Replace with your actual image path
              alt="USD/CHF Forex Pair"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsdChfExplanation;
