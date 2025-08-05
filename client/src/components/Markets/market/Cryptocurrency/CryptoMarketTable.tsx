import React from 'react';

interface CryptoData {
  name: string;
  sell: string;
  buy: string;
  spread: string;
}

const cryptoData: CryptoData[] = [
  { name: 'Bitcoin ($)', sell: '109648.1', buy: '109708.1', spread: '60.0' },
  { name: 'Ethereum ($)', sell: '2559.3', buy: '2563.3', spread: '4.0' },
  { name: 'Ripple ($)', sell: '227.088', buy: '227.788', spread: '70.0' },
  { name: 'Litecoin ($)', sell: '87.71', buy: '88.21', spread: '50.0' },
  { name: 'Bitcoin Cash ($)', sell: '510.1', buy: '511.9', spread: '1.8' },
];

const CryptoMarketTable: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0', color: '#333' }}>
      <div className="container">
        <h2
          className="fw-bold mb-3 text-center"
          style={{ color: '#FF7A00', fontSize: '1.8rem' }}
        >
          Cryptocurrency Market Information
        </h2>
        <p className="text-muted text-center mb-5" style={{ fontSize: '1rem' }}>
          Live pricing for top cryptocurrencies updated in real-time.
        </p>

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
              {cryptoData.map((crypto, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #FFB76B' }}>
                  <td className="fw-semibold">{crypto.name}</td>
                  <td>{Number(crypto.sell).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td>{Number(crypto.buy).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td className="fw-bold" style={{ color: '#FF7A00' }}>
                    {crypto.spread}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-5">
          <button
            type="button"
            className="btn btn-outline-warning fw-semibold rounded-pill px-4 py-2"
            style={{ fontSize: '0.95rem' }}
          >
            Show More
          </button>
          <p className="text-muted mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
            Indicative Pricing updated 15:43:11
          </p>
        </div>
      </div>
    </section>
  );
};

export default CryptoMarketTable;
