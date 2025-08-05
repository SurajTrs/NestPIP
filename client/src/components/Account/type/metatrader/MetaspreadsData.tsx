import React from 'react';

const spreadsData = [
  { name: 'USD/CAD', sell: '1.36964', buy: '1.36989', spread: '2.5' },
  { name: 'USD/JPY', sell: '147.411', buy: '147.426', spread: '1.5' },
  { name: 'EUR/USD', sell: '1.16648', buy: '1.16661', spread: '1.3' },
  { name: 'GBP/USD', sell: '1.34771', buy: '1.34788', spread: '1.7' },
  { name: 'AUD/USD', sell: '0.65241', buy: '0.65256', spread: '1.5' },
];

const MetaSpreadsData = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#333' }}>
      <div className="container">
        <h2 className="fw-bold mb-2 text-center" style={{ color: '#f24521', fontSize: '1.8rem' }}>
          Trade on ultra-competitive,<br />transparent, and reliable spreads
        </h2>

        <ul className="nav nav-pills justify-content-center mb-4 gap-2 flex-wrap" style={{ fontSize: '0.95rem' }}>
          {['All', 'Forex', 'Metals', 'Indices', 'Commodities', 'Stocks', 'Cryptos'].map((item, i) => (
            <li key={i} className="nav-item">
              <button
                className="nav-link px-3 py-1 rounded-pill"
                style={{
                  backgroundColor: item === 'All' ? '#f24521' : '#fff',
                  color: item === 'All' ? '#fff' : '#f24521',
                  border: '1px solid #f24521',
                  textDecoration: item === 'All' ? 'underline' : 'none',
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

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
              {spreadsData.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #FFB76B' }}>
                  <td className="fw-semibold">{item.name}</td>
                  <td>{item.sell}</td>
                  <td>{item.buy}</td>
                  <td className="fw-bold text-dark">{item.spread}</td>
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

export default MetaSpreadsData;
