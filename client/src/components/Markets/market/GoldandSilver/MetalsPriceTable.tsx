import React from 'react';

const metals = [
  { name: 'XAU/USD', sell: '3375.16', buy: '3376.04', spread: '88.0' },
  { name: 'XAG/USD', sell: '36.752', buy: '36.802', spread: '5.0' },
  { name: 'XAU/JPY', sell: '482823', buy: '482955', spread: '132.0' },
  { name: 'XAU/EUR', sell: '2845.74', buy: '2846.72', spread: '98.0' },
  { name: 'Gold Mini', sell: '3360.3', buy: '3360.8', spread: '0.5' },
];

const MetalsPricingTable: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#333' }}>
      <div className="container">
        <h2 className="fw-bold mb-2 text-center" style={{ color: '#f24521', fontSize: '1.8rem' }}>
          Discover our market-leading metals spreads
        </h2>
        <p className="text-muted text-center mb-4" style={{ fontSize: '1rem' }}>
          Spot precious metals available to trade 24/5
        </p>

        <div className="table-responsive">
          <table className="table table-borderless text-center align-middle" style={{ minWidth: '350px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f24521' }}>
                <th style={{ color: '#f24521' }}>Name</th>
                <th style={{ color: '#f24521' }}>Sell</th>
                <th style={{ color: '#f24521' }}>Buy</th>
                <th style={{ color: '#f24521' }}>Spread</th>
              </tr>
            </thead>
            <tbody>
              {metals.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #FFB76B' }}>
                  <td className="fw-semibold">{item.name}</td>
                  <td>{item.sell}</td>
                  <td>{item.buy}</td>
                  <td className="fw-bold">{item.spread}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-4">
          <button
            className="btn btn-outline-warning fw-semibold rounded-pill px-4 py-2"
            style={{ fontSize: '0.95rem' }}
          >
            Show more
          </button>
          <p className="text-muted mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
            Indicative Pricing updated 12:42:30 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetalsPricingTable;
