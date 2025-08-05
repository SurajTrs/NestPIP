import React from 'react';

const commodities = [
  { name: 'US Crude Oil', sell: '6723.9', buy: '6727.4', change: '-0.68%' },
  { name: 'Coffee C', sell: '34942.6', buy: '34852.6', change: '-1.46%' },
  { name: 'Cotton No 2', sell: '6829.4', buy: '6839.4', change: '-0.38%' },
  { name: 'Lean Hogs', sell: '8615.3', buy: '8629.3', change: '0.38%' },
  { name: 'Live Cattle', sell: '19946.0', buy: '19960.0', change: '0.40%' },
  { name: 'Natural Gas', sell: '3588.6', buy: '3591.6', change: '1.21%' },
  { name: 'Orange Juice', sell: '47618.6', buy: '47843.6', change: '-0.28%' },
  { name: 'Soybean Oil', sell: '4566.4', buy: '4571.4', change: '-0.71%' },
  { name: 'Wheat', sell: '545.0', buy: '546.3', change: '0.17%' },
];

const CommoditiesPricingTable = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#333' }}>
      <div className="container">
        <h2 className="fw-bold mb-2 text-center" style={{ color: '#FF7A00', fontSize: '1.8rem' }}>
          Market-leading Pricing
        </h2>
        <p className="text-muted text-center mb-4" style={{ fontSize: '1rem' }}>
          Search the instruments
        </p>

        <div className="table-responsive">
          <table className="table table-borderless text-center align-middle" style={{ minWidth: '350px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #FF7A00' }}>
                <th style={{ color: '#FF7A00' }}>Name</th>
                <th style={{ color: '#FF7A00' }}>Sell</th>
                <th style={{ color: '#FF7A00' }}>Buy</th>
                <th style={{ color: '#FF7A00' }}>Change</th>
              </tr>
            </thead>
            <tbody>
              {commodities.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #FFB76B' }}>
                  <td className="fw-semibold">{item.name}</td>
                  <td>{item.sell}</td>
                  <td>{item.buy}</td>
                  <td
                    className="fw-bold"
                    style={{
                      color: item.change.startsWith('-') ? 'red' : 'green',
                    }}
                  >
                    {item.change}
                  </td>
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
            Indicative Pricing updated 11:20:29
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommoditiesPricingTable;
