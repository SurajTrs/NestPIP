import React from 'react';

const benefits = [
  {
    aspect: 'A lot of liquidity',
    benefit: 'Quick execution, little slippage',
  },
  {
    aspect: 'Narrow Spreads',
    benefit: 'Lower costs for each trade',
  },
  {
    aspect: 'Changes in the market often',
    benefit: 'Daily chances',
  },
  {
    aspect: 'Pair for Safe Hedging',
    benefit: 'Managing risk in a global portfolio',
  },
  {
    aspect: 'Support for Leverage',
    benefit: 'Increased profits with little capital',
  },
];

const EURUSDBenefits: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f24521', color: '#fff' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Benefits of Trading EUR/USD on Nestpip Forex Trading Platform
        </h2>

        <div className="d-flex flex-row overflow-auto gap-4 pb-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="card flex-shrink-0 shadow"
              style={{
                minWidth: '280px',
                backgroundColor: '#fff',
                color: '#333',
                borderRadius: '1rem',
                border: 'none',
              }}
            >
              <div className="card-body text-center px-4 py-4">
                <h5 className="card-title fw-semibold">{item.aspect}</h5>
                <p className="card-text">{item.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-4" style={{ fontSize: '1rem' }}>
          Nestpip platform gives you an edge when trading EUR/USD on the Best Forex Trading Platform for all types of traders.
        </p>
      </div>
    </section>
  );
};

export default EURUSDBenefits;
