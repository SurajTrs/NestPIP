import React from 'react';

const StockCFDPricingTable = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#333' }}>
      <div className="container">
        <h2
          className="fw-bold mb-2 text-center"
          style={{ color: '#f24521', fontSize: '1.8rem' }}
        >
          Market-leading Pricing
        </h2>
        <p className="text-muted text-center mb-4" style={{ fontSize: '1rem' }}>
          Explore our top stock CFDs
        </p>

    
        <div className="table-responsive">
          <table
            className="table table-borderless text-center align-middle"
            style={{ minWidth: '350px' }}
          >
            <thead>
              <tr style={{ borderBottom: '2px solid #f24521' }}>
                <th style={{ color: '#f24521' }}>Name</th>
                <th style={{ color: '#f24521' }}>Sell</th>
                <th style={{ color: '#f24521' }}>Buy</th>
                <th style={{ color: '#f24521' }}>Spread</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">Tesla Motors</td>
                <td>287.08</td>
                <td>287.37</td>
                <td className="fw-bold" style={{ color: '#f24521' }}>
                  29.0
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #f24521' }}>
                <td className="fw-semibold">Nvidia Corp</td>
                <td>144.98</td>
                <td>144.99</td>
                <td className="fw-bold" style={{ color: '#f24521' }}>
                  1.0
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">Amazon.com</td>
                <td>189.91</td>
                <td>189.93</td>
                <td className="fw-bold" style={{ color: '#f24521' }}>
                  2.0
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">Microsoft Corp</td>
                <td>479.03</td>
                <td>479.03</td>
                <td className="fw-bold" style={{ color: '#f24521' }}>
                  0.0
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #FFB76B' }}>
                <td className="fw-semibold">Apple Inc</td>
                <td>199.09</td>
                <td>199.10</td>
                <td className="fw-bold" style={{ color: '#FF7A00' }}>
                  1.f24521
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
            Indicative Pricing updated 6:48:04 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default StockCFDPricingTable;
