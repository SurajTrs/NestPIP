import React from 'react';

const cryptoData = [
  { name: 'Bitcoin (€)', sell: 92564.1, buy: 92619.1, spread: 55.0 },
  { name: 'Bitcoin ($)', sell: 109128.4, buy: 109188.4, spread: 60.0 },
  { name: 'Bitcoin (£)', sell: 80072.9, buy: 80132.9, spread: 60.0 },
  { name: 'Bitcoin AUD', sell: 166189.5, buy: 166314.5, spread: 125.0 },
  { name: 'Bitcoin Cash ($)', sell: 502.5, buy: 504.3, spread: 1.8 },
  { name: 'Ethereum ($)', sell: 2575.5, buy: 2579.5, spread: 4.0 },
  { name: 'Litecoin ($)', sell: 88.74, buy: 89.24, spread: 0.5 },
  { name: 'Ripple ($)', sell: 226.105, buy: 226.805, spread: 0.7 },
];

const CryptoPricingTable = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#333' }}>
      <div className="container">
        <h2 className="fw-bold mb-2 text-center" style={{ color: '#FF7A00', fontSize: '1.8rem' }}>
          Cryptocurrency Market Pricing
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
                <th style={{ color: '#FF7A00' }}>Spread</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #FFB76B' }}>
                  <td className="fw-semibold">{crypto.name}</td>
                  <td>{crypto.sell.toLocaleString()}</td>
                  <td>{crypto.buy.toLocaleString()}</td>
                  <td className="fw-bold" style={{ color: '#FF7A00' }}>
                    {crypto.spread}
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
            Indicative Pricing updated 10:46:21
          </p>
        </div>
      </div>
    </section>
  );
};

export default CryptoPricingTable;
