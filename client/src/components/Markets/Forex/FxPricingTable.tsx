import React from 'react';

const FxPricingTable = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#333' }}>
      <div className="container">
        <h2
          className="fw-bold mb-2 text-center"
          style={{ color: '#FF7A00', fontSize: '1.8rem' }}
        >
          Market-leading FX pricing
        </h2>
        <p className="text-muted text-center mb-4" style={{ fontSize: '1rem' }}>
          Standard spread pricing, no commissions
        </p>

        {/* Search Filter Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          {/* Empty placeholder for filter tabs */}
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table
            className="table table-borderless text-center align-middle"
            style={{ minWidth: '350px' }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid #FF7A00' }}>
                <th style={{ color: '#FF7A00' }}>Name</th>
                <th style={{ color: '#FF7A00' }}>Sell</th>
                <th style={{ color: '#FF7A00' }}>Buy</th>
                <th style={{ color: '#FF7A00' }}>Spread</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">EUR/USD</td>
                <td>1.17461</td>
                <td>1.17473</td>
                <td className="fw-bold" style={{ color: '#FF7A00' }}>
                  1.2
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">USD/CHF</td>
                <td>0.7957</td>
                <td>0.7959</td>
                <td className="fw-bold" style={{ color: '#FF7A00' }}>
                  2.0
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">USD/JPY</td>
                <td>144.263</td>
                <td>144.279</td>
                <td className="fw-bold" style={{ color: '#FF7A00' }}>
                  1.6
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">GBP/USD</td>
                <td>1.37074</td>
                <td>1.3709</td>
                <td className="fw-bold" style={{ color: '#FF7A00' }}>
                  1.6
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">AUD/USD</td>
                <td>0.65538</td>
                <td>0.65551</td>
                <td className="fw-bold" style={{ color: '#FF7A00' }}>
                  1.3
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Show More + Timestamp */}
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-warning fw-semibold rounded-pill px-4 py-2"
            style={{ fontSize: '0.95rem' }}
          >
            Show more
          </button>
          <p className="text-muted mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
            Indicative Pricing updated 20:14:02
          </p>
        </div>
      </div>
    </section>
  );
};

export default FxPricingTable;
