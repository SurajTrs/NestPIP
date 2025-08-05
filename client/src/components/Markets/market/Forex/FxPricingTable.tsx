'use client';

import React from 'react';

const FxPricingTable: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#333' }}>
      <div className="container">
        {/* Heading */}
        <h2 className="fw-bold text-center mb-2" style={{ color: '#f24521', fontSize: '1.8rem' }}>
          Market-leading FX Pricing
        </h2>
        <p className="text-center text-muted mb-4" style={{ fontSize: '1rem' }}>
          Standard spread pricing, no commissions
        </p>

        {/* Table */}
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
              {[
                { pair: 'EUR/USD', sell: '1.17461', buy: '1.17473', spread: '1.2' },
                { pair: 'USD/CHF', sell: '0.7957', buy: '0.7959', spread: '2.0' },
                { pair: 'USD/JPY', sell: '144.263', buy: '144.279', spread: '1.6' },
                { pair: 'GBP/USD', sell: '1.37074', buy: '1.3709', spread: '1.6' },
                { pair: 'AUD/USD', sell: '0.65538', buy: '0.65551', spread: '1.3' },
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f9c6ae' }}>
                  <td className="fw-semibold">{row.pair}</td>
                  <td>{row.sell}</td>
                  <td>{row.buy}</td>
                  <td className="fw-bold" style={{ color: '#f24521' }}>
                    {row.spread}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show More + Timestamp */}
        <div className="text-center mt-4">
          <button
            className="btn fw-semibold rounded-pill px-4 py-2"
            style={{
              backgroundColor: 'transparent',
              color: '#f24521',
              border: '2px solid #f24521',
              fontSize: '0.95rem',
            }}
          >
            Show More
          </button>
          <p className="text-muted mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
            Indicative pricing updated 20:14:02
          </p>
        </div>
      </div>
    </section>
  );
};

export default FxPricingTable;
