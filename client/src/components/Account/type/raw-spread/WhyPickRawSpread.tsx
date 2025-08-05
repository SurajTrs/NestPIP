import React from 'react';

const WhyPickRawSpread = () => {
  return (
    <section style={{ backgroundColor: '#FFF7F0', padding: '4rem 0' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          {/* Left Side Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Why Pick Nestpip Raw Spread Account?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#000' }}>
              We designed our raw account forex solution to meet the needs of top traders. It gives you institutional-grade trading with the ease of a retail platform.
            </p>

            <h5 style={{ color: '#f24521', marginTop: '1.5rem' }}>Very Low Spreads</h5>
            <ul style={{ color: '#000', fontSize: '1.1rem' }}>
              <li>Spreads that start at 0.0 pips</li>
              <li>No extra charge on price feeds</li>
              <li>Best price for execution</li>
            </ul>

            <h5 style={{ color: '#f24521', marginTop: '1.5rem' }}>Clear Commissions</h5>
            <ul style={{ color: '#000', fontSize: '1.1rem' }}>
              <li>Low fixed fee for each trade</li>
              <li>No extra fees or charges that come out of nowhere</li>
            </ul>

            <h5 style={{ color: '#f24521', marginTop: '1.5rem' }}>Quick and Dependable Execution</h5>
            <ul style={{ color: '#000', fontSize: '1.1rem' }}>
              <li>Tier-1 liquidity and no dealing desk (NDD)</li>
              <li>Advanced order routing to minimise slippage</li>
            </ul>

            <h5 style={{ color: '#f24521', marginTop: '1.5rem' }}>Tools for Professional Trading</h5>
            <ul style={{ color: '#000', fontSize: '1.1rem' }}>
              <li>Full support for cTrader, MetaTrader 4, and MetaTrader 5</li>
              <li>Automation, access to APIs, and EAs are all supported</li>
            </ul>
          </div>

          {/* Right Side Image */}
          <div className="col-md-6">
            <img
              src="/images/raw-spread-tools.png"
              alt="Nestpip Raw Spread Account Tools"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPickRawSpread;
