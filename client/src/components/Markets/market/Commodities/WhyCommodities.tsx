import React from 'react';

const WhyCommodities = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/commodities-illustration.svg" // Replace with your image path
              alt="Why Commodities"
              className="img-fluid"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4" style={{ color: '#f24521' }}>
              Why Commodities?
            </h2>
            <p className="mb-3">
              Commodities are a great way to diversify your portfolio beyond stocks and currencies. They help you hedge against inflation, benefit from global macro trends, and reduce overall investment risk.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong style={{ color: '#f24521' }}>📊 Diversification:</strong> Add balance to your investment strategy with non-correlated assets.
              </li>
              <li className="mb-2">
                <strong style={{ color: '#f24521' }}>🔥 Hedge Against Inflation:</strong> Commodity prices often rise with inflation, preserving your purchasing power.
              </li>
              <li className="mb-2">
                <strong style={{ color: '#f24521' }}>💧 High Liquidity:</strong> Major commodities are traded in large volumes, allowing easy entry and exit.
              </li>
              <li className="mb-2">
                <strong style={{ color: '#f24521' }}>⚡ Volatility Opportunities:</strong> Capitalize on price fluctuations to make short-term or long-term gains.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCommodities;
