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
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Typical Spreads by Instrument
        </h2>

        <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 font-semibold">Instrument</th>
                <th className="px-6 py-4 font-semibold">Average Spread</th>
                <th className="px-6 py-4 font-semibold">Minimum Spread</th>
                <th className="px-6 py-4 font-semibold">Execution Type</th>
              </tr>
            </thead>
            <tbody>
              {spreads.map((row, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-3 font-medium">{row.instrument}</td>
                  <td className="px-6 py-3">{row.averageSpread}</td>
                  <td className="px-6 py-3">{row.minSpread}</td>
                  <td className="px-6 py-3">{row.execution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          * Spreads may vary depending on market conditions and account type.
        </p>
      </div>
    </section>
  );
};

export default SpreadsTable;
