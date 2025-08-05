import React from 'react';

const IndicesPricingTable = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#333' }}>
      <div className="container">
        <h2
          className="fw-bold mb-2 text-center"
          style={{ color: '#FF7A00', fontSize: '1.8rem' }}
        >
          Market-leading Pricing
        </h2>
        <p className="text-muted text-center mb-4" style={{ fontSize: '1rem' }}>
          Search the instruments
        </p>

      
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
                <td className="fw-semibold">Wall Street</td>
                <td>44563.5</td>
                <td>44567</td>
                <td className="fw-bold" style={{ color: '#FF7A00' }}>
                  3.5
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">US SP 500</td>
                <td>6205.6</td>
                <td>6206.2</td>
                <td className="fw-bold" style={{ color: '#FF7A00' }}>
                  0.6
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">US Tech 100</td>
                <td>22495.4</td>
                <td>22498.4</td>
                <td className="fw-bold" style={{ color: '#FF7A00' }}>
                  3.0
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">UK 100</td>
                <td>8812.7</td>
                <td>8813.7</td>
                <td className="fw-bold" style={{ color: '#FF7A00' }}>
                  1.0
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">Germany 40</td>
                <td>23772.4</td>
                <td>23773.6</td>
                <td className="fw-bold" style={{ color: '#FF7A00' }}>
                  1.2
                </td>
              </tr>
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
            Indicative Pricing updated 15:43:11
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndicesPricingTable;