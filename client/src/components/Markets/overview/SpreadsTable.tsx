import React from 'react';

interface SpreadRow {
  instrument: string;
  averageSpread: string;
  minSpread: string;
  execution: string;
}

const spreads: SpreadRow[] = [
  { instrument: 'EUR/USD', averageSpread: '0.6 pips', minSpread: '0.1 pips', execution: 'Market' },
  { instrument: 'GBP/USD', averageSpread: '0.9 pips', minSpread: '0.3 pips', execution: 'Market' },
  { instrument: 'USD/JPY', averageSpread: '0.7 pips', minSpread: '0.2 pips', execution: 'Market' },
  { instrument: 'XAU/USD', averageSpread: '1.8 pips', minSpread: '0.8 pips', execution: 'Market' },
  { instrument: 'NASDAQ', averageSpread: '1.2 points', minSpread: '0.5 points', execution: 'STP' },
  { instrument: 'BTC/USD', averageSpread: '25.0 pips', minSpread: '15.0 pips', execution: 'ECN' },
];

const SpreadsTable: React.FC = () => {
  return (
    <section
      style={{ backgroundColor: '#FFF7F0', minHeight: '100vh' }}
      className="d-flex justify-content-center align-items-center py-5"
    >
      <div className="container max-w-75">
        <h2
          className="text-center fw-bold mb-4"
          style={{ color: '#f24521', fontSize: '2rem' }}
        >
          Typical Spreads by Instrument
        </h2>

        <div className="table-responsive rounded shadow border border-gray-300">
          <table className="table table-striped table-hover text-center mb-0">
            <thead style={{ backgroundColor: '#f5a623' }} className="text-white text-uppercase">
              <tr>
                <th scope="col" className="px-4 py-3">Instrument</th>
                <th scope="col" className="px-4 py-3">Average Spread</th>
                <th scope="col" className="px-4 py-3">Minimum Spread</th>
                <th scope="col" className="px-4 py-3">Execution Type</th>
              </tr>
            </thead>
            <tbody>
              {spreads.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-4 py-3 fw-semibold">{row.instrument}</td>
                  <td className="px-4 py-3">{row.averageSpread}</td>
                  <td className="px-4 py-3">{row.minSpread}</td>
                  <td className="px-4 py-3">{row.execution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          className="text-center mt-3 text-muted fst-italic"
          style={{ maxWidth: '600px', margin: '1.5rem auto 0 auto' }}
        >
          * Spreads may vary depending on market conditions and account type.
        </p>
      </div>
    </section>
  );
};

export default SpreadsTable;
