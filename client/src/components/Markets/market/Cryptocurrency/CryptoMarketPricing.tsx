import React, { useState, ChangeEvent } from 'react';

interface Instrument {
  name: string;
  sell: number;
  buy: number;
  change: number;
}

const instrumentData: Instrument[] = [
  { name: 'Bitcoin (€)', sell: 92564.1, buy: 92619.1, change: 0.04 },
  { name: 'Bitcoin ($)', sell: 109128.4, buy: 109188.4, change: -0.05 },
  { name: 'Bitcoin (£)', sell: 80072.9, buy: 80132.9, change: 0.02 },
  { name: 'Bitcoin AUD', sell: 166189.5, buy: 166314.5, change: 0.23 },
  { name: 'Bitcoin Cash ($)', sell: 502.5, buy: 504.3, change: -0.46 },
  { name: 'Ethereum ($)', sell: 2575.5, buy: 2579.5, change: -0.53 },
  { name: 'Litecoin ($)', sell: 88.74, buy: 89.24, change: 1.25 },
  { name: 'Ripple ($)', sell: 226.105, buy: 226.805, change: 0.46 },
];

const categories: string[] = ['Forex', 'Indices', 'Shares', 'Commodities', 'Metals', 'Cryptos'];

const CryptoMarketPricing: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const filtered = instrumentData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#FFF7F0' }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-4" style={{ color: '#FF7A00' }}>
          Market-Leading Pricing
        </h2>

        {/* Categories */}
        <div className="text-center mb-4">
          {categories.map((cat, index) => (
            <span key={index} className="badge bg-dark text-white mx-1 px-3 py-2" style={{ cursor: 'default' }}>
              {cat}
            </span>
          ))}
        </div>

        {/* Search */}
        <div className="text-end mb-3">
          <input
            type="text"
            placeholder="Search the instruments"
            className="form-control form-control-sm w-auto d-inline-block"
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover bg-white">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Sell</th>
                <th>Buy</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.sell.toLocaleString()}</td>
                    <td>{item.buy.toLocaleString()}</td>
                    <td
                      style={{
                        color:
                          item.change > 0 ? 'green' : item.change < 0 ? 'red' : 'gray',
                      }}
                    >
                      {item.change > 0 ? '+' : ''}
                      {item.change.toFixed(2)}%
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center text-muted">
                    No instruments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Update Time */}
        <p className="text-muted text-end small mt-2">
          Indicative Pricing updated 10:46:21
        </p>
      </div>
    </section>
  );
};

export default CryptoMarketPricing;
